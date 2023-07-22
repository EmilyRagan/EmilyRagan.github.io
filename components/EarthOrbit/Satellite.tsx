/* eslint-disable react/no-unknown-property */
export const Satellite = (props: { color: string }) =>
{
    return <mesh>
        <sphereGeometry args={[2000, 15, 15]} />
        <meshMatcapMaterial color={props.color} />
    </mesh>;
};
