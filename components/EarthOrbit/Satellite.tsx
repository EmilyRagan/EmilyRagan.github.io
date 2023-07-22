import { useEffect, useMemo, useRef } from 'react';
import { eciToEcf, gstime, propagate, twoline2satrec } from 'satellite.js';
import { Mesh } from 'three';

/* eslint-disable react/no-unknown-property */
export const Satellite = (props: { color: string, tle: [string, string], date: Date }) =>
{
    const satRec = useMemo(() => twoline2satrec(...props.tle), [props.tle]);

    const mesh = useRef<Mesh>(null);

    useEffect(() =>
    {
        if (!mesh.current)
        {
            return;
        }
        var positionAndVelocity = propagate(satRec, props.date);
        var positionEci = positionAndVelocity.position;
        if (typeof positionEci !== 'boolean')
        {
            var positionEcf = eciToEcf(positionEci, gstime(props.date));
            mesh.current.position.x = positionEcf.x;
            mesh.current.position.y = positionEcf.y;
            mesh.current.position.z = positionEcf.z;
        }
    }, [props.date, satRec]);

    return <mesh ref={mesh}>
        <sphereGeometry args={[2000, 15, 15]} />
        <meshMatcapMaterial color={props.color} />
    </mesh>;
};
