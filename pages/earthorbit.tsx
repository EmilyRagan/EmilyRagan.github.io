/* eslint-disable react/no-unknown-property */
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { Earth } from '../components/EarthOrbit/Earth';
import { SceneRotation } from '../components/EarthOrbit/SceneRotation';
import { Satellite } from '../components/EarthOrbit/Satellite';

const EarthOrbit = () =>
{
    const [date] = useState(new Date());

    return <Suspense fallback={null}>
        <Canvas style={{ backgroundColor: '#555' }}>
            <PerspectiveCamera makeDefault far={200000} fov={75} near={0.1} position={[0, 0, 20000]} />
            <ambientLight color={0xffffff} />
            <Earth timescale={1000000}>
                {/* TDRS 3 */}
                <Satellite
                    color='#ff0000'
                    initialDate={date}
                    timescale={1000000}
                    tle={['1 19548U 88091B   23196.38702455 -.00000303  00000+0  00000+0 0  9993', '2 19548  13.4217 348.3378 0033854 335.2752  59.7805  1.00274469114668']}
                />
                {/* TDRS 12 */}
                <Satellite
                    color='#ffff00'
                    initialDate={date}
                    timescale={1000000}
                    tle={['1 39504U 14004A   23196.73683509 -.00000267  00000+0  00000+0 0  9996', '2 39504   3.6069 355.3092 0006546 153.7628   8.4511  1.00265112 34742']}
                />
            </Earth>
            <SceneRotation />
            <OrbitControls />
        </Canvas>
    </Suspense>;
};

export default EarthOrbit;