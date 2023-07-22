/* eslint-disable react/no-unknown-property */
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Earth } from '../components/EarthOrbit/Earth';
import { SceneRotation } from '../components/EarthOrbit/SceneRotation';

const EarthOrbit = () =>
{
    return <Suspense fallback={null}>
        <Canvas style={{ backgroundColor: '#555' }}>
            <PerspectiveCamera makeDefault far={200000} fov={75} near={0.1} position={[0, 0, 20000]} />
            <ambientLight color={0xffffff} />
            <Earth />
            <SceneRotation />
            <OrbitControls />
        </Canvas>
    </Suspense>;
};

export default EarthOrbit;