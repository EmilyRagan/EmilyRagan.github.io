import { PropsWithChildren } from 'react';

export const Earth = (props: PropsWithChildren) =>
{
    return <mesh>
        <sphereGeometry />
        <meshMatcapMaterial />
        {props.children}
    </mesh>;
};