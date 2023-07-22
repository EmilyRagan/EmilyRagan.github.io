/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { Earth } from '../components/EarthOrbit/Earth';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

const EarthOrbit = () =>
{
    return <Canvas style={{ backgroundColor: '#555' }}>
        <PerspectiveCamera makeDefault far={200000} fov={75} near={0.1} position={[0, 0, 20000]} />
        <ambientLight color={0xffffff} />
        <Earth />
        <OrbitControls />
    </Canvas>;
};

export default EarthOrbit;