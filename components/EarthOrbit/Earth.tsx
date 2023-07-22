/* eslint-disable react/no-unknown-property */
import { useFrame, useLoader } from '@react-three/fiber';
import { PropsWithChildren, useEffect } from 'react';
import { degreesToRadians } from 'satellite.js';
import { Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

/** in radians per millisecond */
export const earthRotation = (2 * Math.PI) / (24 * 60 * 60 * 1000);

export const Earth = (props: PropsWithChildren<{ timescale?: number }>) =>
{
    const earthObj = useLoader(GLTFLoader, './assets/Earth_1_12756.glb');

    useFrame((state, delta, frame) =>
    {
        earthObj.scene.rotateOnAxis(new Vector3(0, 1, 0), earthRotation * delta * (props.timescale ?? 1))
    });

    useEffect(() =>
    {
        earthObj.scene.setRotationFromAxisAngle(new Vector3(1, 0, 0), degreesToRadians(23));
    }, [earthObj]);

    return <primitive object={earthObj.scene}>
        {props.children}
    </primitive>;
};
