import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { GROUND_LENGTH, SCROLL_SPEED } from '../App'

export function GroundModel(props) {
  const { nodes, materials } = useGLTF('/ground-transformed.glb')

  const ref = useRef()

  useFrame((_, delta)=>{
      ref.current.position.z -= SCROLL_SPEED * delta
      if(ref.current.position.z < -1.5 * GROUND_LENGTH ){
        ref.current.position.z =  8+GROUND_LENGTH
      }
  })

  return (
    <group {...props} dispose={null} ref={ref} rotation={[Math.PI/180 * 0 , 0, 0]}  >
      <mesh geometry={nodes.Floor_Material001_0.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={4} />
      <mesh geometry={nodes.Wireframe_Material_0.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} scale={4} />
    </group>
  )
}

useGLTF.preload('/ground-transformed.glb')
