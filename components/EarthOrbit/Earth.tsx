/* eslint-disable react/no-unknown-property */
import { useLoader } from '@react-three/fiber';
import { PropsWithChildren } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Earth = (props: PropsWithChildren) =>
{
    const gltf = useLoader(GLTFLoader, './assets/Earth_1_12756.glb');

    return <primitive object={gltf.scene}>
        {props.children}
    </primitive>;
};