import { useThree } from '@react-three/fiber';
import { Fragment, useEffect } from 'react';
import { degreesToRadians } from 'satellite.js';
import { Vector3 } from 'three';

export const SceneRotation = () =>
{
    const { scene } = useThree();

    useEffect(() =>
    {
        scene.setRotationFromAxisAngle(new Vector3(1, 0, 0), -1 * degreesToRadians(23));
    }, [scene]);

    return <Fragment />;
};