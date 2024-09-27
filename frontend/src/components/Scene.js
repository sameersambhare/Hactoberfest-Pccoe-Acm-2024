import React, { useEffect } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
const Scene = () => {
    let tex = useTexture('./layer.png')
    let cyl = useRef()
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta;
    })
    useEffect(() => {
        cyl.current.resize = window.innerWidth;
    }, [])
    tex.needsUpdate = true;
    return (
        <group ref={cyl}>
            <mesh rotation={[0, 1.5, 0]}>
                <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
                <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}

export default Scene