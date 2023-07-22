import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { eciToEcf, gstime, propagate, twoline2satrec } from 'satellite.js';
import { Mesh } from 'three';

/* eslint-disable react/no-unknown-property */
export const Satellite = (props: { color: string, tle: [string, string], initialDate: Date, timescale?: number }) =>
{
    const satRec = useMemo(() => twoline2satrec(...props.tle), [props.tle]);

    const mesh = useRef<Mesh>(null);

    useFrame((state, delta, frame) =>
    {
        if (!mesh.current)
        {
            return;
        }
        const newDate = new Date(props.initialDate.valueOf() + (delta * (props.timescale ?? 1)));
        var positionAndVelocity = propagate(satRec, newDate);
        var positionEci = positionAndVelocity.position;
        if (typeof positionEci !== 'boolean')
        {
            var positionEcf = eciToEcf(positionEci, gstime(newDate));
            mesh.current.position.x = positionEcf.x;
            mesh.current.position.y = positionEcf.y;
            mesh.current.position.z = positionEcf.z;
        }
    });

    return <mesh ref={mesh}>
        <sphereGeometry args={[2000, 15, 15]} />
        <meshMatcapMaterial color={props.color} />
    </mesh>;
};
