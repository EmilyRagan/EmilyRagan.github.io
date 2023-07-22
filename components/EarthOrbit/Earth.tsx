/* eslint-disable react/no-unknown-property */
import { useLoader } from '@react-three/fiber';
import { PropsWithChildren, useEffect } from 'react';
import { degreesToRadians } from 'satellite.js';
import { Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Earth = (props: PropsWithChildren) =>
{
    const earthObj = useLoader(GLTFLoader, './assets/Earth_1_12756.glb');

    useEffect(() =>
    {
        earthObj.scene.setRotationFromAxisAngle(new Vector3(1, 0, 0), degreesToRadians(23));
    }, [earthObj]);

    return <primitive object={earthObj.scene}>
        {props.children}
    </primitive>;
};
