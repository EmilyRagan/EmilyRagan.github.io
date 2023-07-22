/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { Earth } from '../components/EarthOrbit/Earth';
import { OrbitControls } from '@react-three/drei';

const EarthOrbit = () =>
{
    return <Canvas>
        <ambientLight color={0xfff} />
        <Earth />
        <OrbitControls />
    </Canvas>;
};

export default EarthOrbit;