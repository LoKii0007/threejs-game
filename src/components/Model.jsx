import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function BirtdayModel(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/model-transformed.glb')
  const { actions } = useAnimations(animations, group)

  // useEffect(() => {
  //   Object.keys(actions).forEach(action => {
  //     actions[action].play();
  //   });

  // }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Base" geometry={nodes.Base.geometry} material={materials['Wooden Floor']} position={[-0.098, 2.563, 0.161]} scale={[9.8, 0.181, 9.8]} />
        <group name="Cake" position={[0, -1.352, 0]} scale={0.506}>
          <mesh name="Mesh179" geometry={nodes.Mesh179.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh179_1" geometry={nodes.Mesh179_1.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh179_2" geometry={nodes.Mesh179_2.geometry} material={materials.PaletteMaterial002} />
          <mesh name="Mesh179_3" geometry={nodes.Mesh179_3.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh179_4" geometry={nodes.Mesh179_4.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh179_5" geometry={nodes.Mesh179_5.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh179_6" geometry={nodes.Mesh179_6.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh179_7" geometry={nodes.Mesh179_7.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh179_8" geometry={nodes.Mesh179_8.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh179_9" geometry={nodes.Mesh179_9.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh179_10" geometry={nodes.Mesh179_10.geometry} material={materials.PaletteMaterial003} />
          <mesh name="Mesh179_11" geometry={nodes.Mesh179_11.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh179_12" geometry={nodes.Mesh179_12.geometry} material={materials.PaletteMaterial001} />
        </group>
        <mesh name="Pillar_1002" geometry={nodes.Pillar_1002.geometry} material={materials['Wood.001']} position={[8.534, 4.759, 9.348]} />
        
        <mesh name="Sides_Ribbon" geometry={nodes.Sides_Ribbon.geometry} material={materials.PaletteMaterial004} >
          <meshStandardMaterial color="red" emissive={"white"} emissiveIntensity={1} toneMapped={false} />
          </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/model-transformed.glb')
