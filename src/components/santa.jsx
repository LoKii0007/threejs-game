/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/santa.glb -o src/components/santa.jsx -r public 
*/

import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function SantaModel(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/santa.glb')

  //? if this doesnt get automaticlly created use three-stdlib
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  
  const { actions } = useAnimations(animations, group)

  useEffect(()=>{
    actions['run'].play() 
    // Change the material color to red
    // materials._100_SaintClaus.color.set('blue')
    nodes.mesh_char_135.material.color.set('yellow')
    console.log(nodes) // or you can use a hex code like '#ff0000'
  }, [actions,nodes, materials._100_SaintClaus])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="mesh_char_135" geometry={nodes.mesh_char_135.geometry} material={materials._100_SaintClaus} skeleton={nodes.mesh_char_135.skeleton} morphTargetDictionary={nodes.mesh_char_135.morphTargetDictionary} morphTargetInfluences={nodes.mesh_char_135.morphTargetInfluences} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/santa.glb')
