import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations, Text, Billboard } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function ZombieGirlModel({ metadata, ...props }) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/zombieGirl.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['run'].time = Math.random() * actions['run'].getClip().duration
    actions['run'].play()
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>


      //* name
      <Billboard position-y={0.9} >
      <Text fontSize={0.1} >
        {metadata.name}
        <meshStandardMaterial color="red" />
      </Text>
      </Billboard>

      //* model
      <group name="Scene">
        <group name="绝区零妮可" />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
          <primitive object={nodes.mixamorigHips} />
          <group name="绝区零妮可_mesh">
            <skinnedMesh name="绝区零妮可_1" geometry={nodes.绝区零妮可_1.geometry} material={materials['Hair====']} skeleton={nodes.绝区零妮可_1.skeleton} morphTargetDictionary={nodes.绝区零妮可_1.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_1.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_2" geometry={nodes.绝区零妮可_2.geometry} material={materials['Skin====']} skeleton={nodes.绝区零妮可_2.skeleton} morphTargetDictionary={nodes.绝区零妮可_2.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_2.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_3" geometry={nodes.绝区零妮可_3.geometry} material={materials['Top====']} skeleton={nodes.绝区零妮可_3.skeleton} morphTargetDictionary={nodes.绝区零妮可_3.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_3.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_4" geometry={nodes.绝区零妮可_4.geometry} material={materials.Jacket} skeleton={nodes.绝区零妮可_4.skeleton} morphTargetDictionary={nodes.绝区零妮可_4.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_4.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_5" geometry={nodes.绝区零妮可_5.geometry} material={materials.Jacket_White} skeleton={nodes.绝区零妮可_5.skeleton} morphTargetDictionary={nodes.绝区零妮可_5.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_5.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_6" geometry={nodes.绝区零妮可_6.geometry} material={materials.Shorts} skeleton={nodes.绝区零妮可_6.skeleton} morphTargetDictionary={nodes.绝区零妮可_6.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_6.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_7" geometry={nodes.绝区零妮可_7.geometry} material={materials.Shorts_Backbelt} skeleton={nodes.绝区零妮可_7.skeleton} morphTargetDictionary={nodes.绝区零妮可_7.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_7.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_8" geometry={nodes.绝区零妮可_8.geometry} material={materials.Shorts_BowTie} skeleton={nodes.绝区零妮可_8.skeleton} morphTargetDictionary={nodes.绝区零妮可_8.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_8.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_9" geometry={nodes.绝区零妮可_9.geometry} material={materials.Shorts_Fur} skeleton={nodes.绝区零妮可_9.skeleton} morphTargetDictionary={nodes.绝区零妮可_9.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_9.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_10" geometry={nodes.绝区零妮可_10.geometry} material={materials.Shorts_Waistbelt_Metal} skeleton={nodes.绝区零妮可_10.skeleton} morphTargetDictionary={nodes.绝区零妮可_10.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_10.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_11" geometry={nodes.绝区零妮可_11.geometry} material={materials.Shorts_Backbelt_Metal} skeleton={nodes.绝区零妮可_11.skeleton} morphTargetDictionary={nodes.绝区零妮可_11.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_11.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_12" geometry={nodes.绝区零妮可_12.geometry} material={materials.Boots} skeleton={nodes.绝区零妮可_12.skeleton} morphTargetDictionary={nodes.绝区零妮可_12.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_12.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_13" geometry={nodes.绝区零妮可_13.geometry} material={materials.Boots_Metal} skeleton={nodes.绝区零妮可_13.skeleton} morphTargetDictionary={nodes.绝区零妮可_13.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_13.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_14" geometry={nodes.绝区零妮可_14.geometry} material={materials.Stockings} skeleton={nodes.绝区零妮可_14.skeleton} morphTargetDictionary={nodes.绝区零妮可_14.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_14.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_15" geometry={nodes.绝区零妮可_15.geometry} material={materials.HairBowTie} skeleton={nodes.绝区零妮可_15.skeleton} morphTargetDictionary={nodes.绝区零妮可_15.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_15.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_16" geometry={nodes.绝区零妮可_16.geometry} material={materials.Earring} skeleton={nodes.绝区零妮可_16.skeleton} morphTargetDictionary={nodes.绝区零妮可_16.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_16.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_17" geometry={nodes.绝区零妮可_17.geometry} material={materials.Earring_Heart} skeleton={nodes.绝区零妮可_17.skeleton} morphTargetDictionary={nodes.绝区零妮可_17.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_17.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_18" geometry={nodes.绝区零妮可_18.geometry} material={materials.Necklace} skeleton={nodes.绝区零妮可_18.skeleton} morphTargetDictionary={nodes.绝区零妮可_18.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_18.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_19" geometry={nodes.绝区零妮可_19.geometry} material={materials.Necklace_Heart} skeleton={nodes.绝区零妮可_19.skeleton} morphTargetDictionary={nodes.绝区零妮可_19.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_19.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_20" geometry={nodes.绝区零妮可_20.geometry} material={materials['The Bangboo']} skeleton={nodes.绝区零妮可_20.skeleton} morphTargetDictionary={nodes.绝区零妮可_20.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_20.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_21" geometry={nodes.绝区零妮可_21.geometry} material={materials.Belts} skeleton={nodes.绝区零妮可_21.skeleton} morphTargetDictionary={nodes.绝区零妮可_21.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_21.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_22" geometry={nodes.绝区零妮可_22.geometry} material={materials['Face====']} skeleton={nodes.绝区零妮可_22.skeleton} morphTargetDictionary={nodes.绝区零妮可_22.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_22.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_23" geometry={nodes.绝区零妮可_23.geometry} material={materials.Eyebrows} skeleton={nodes.绝区零妮可_23.skeleton} morphTargetDictionary={nodes.绝区零妮可_23.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_23.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_24" geometry={nodes.绝区零妮可_24.geometry} material={materials.Brows} skeleton={nodes.绝区零妮可_24.skeleton} morphTargetDictionary={nodes.绝区零妮可_24.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_24.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_25" geometry={nodes.绝区零妮可_25.geometry} material={materials.Eyelashes} skeleton={nodes.绝区零妮可_25.skeleton} morphTargetDictionary={nodes.绝区零妮可_25.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_25.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_26" geometry={nodes.绝区零妮可_26.geometry} material={materials.Eyes} skeleton={nodes.绝区零妮可_26.skeleton} morphTargetDictionary={nodes.绝区零妮可_26.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_26.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_27" geometry={nodes.绝区零妮可_27.geometry} material={materials.Eyewhite} skeleton={nodes.绝区零妮可_27.skeleton} morphTargetDictionary={nodes.绝区零妮可_27.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_27.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_28" geometry={nodes.绝区零妮可_28.geometry} material={materials.Eye_light} skeleton={nodes.绝区零妮可_28.skeleton} morphTargetDictionary={nodes.绝区零妮可_28.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_28.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_29" geometry={nodes.绝区零妮可_29.geometry} material={materials.Tongue} skeleton={nodes.绝区零妮可_29.skeleton} morphTargetDictionary={nodes.绝区零妮可_29.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_29.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_30" geometry={nodes.绝区零妮可_30.geometry} material={materials.Mouth} skeleton={nodes.绝区零妮可_30.skeleton} morphTargetDictionary={nodes.绝区零妮可_30.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_30.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_31" geometry={nodes.绝区零妮可_31.geometry} material={materials.Mouth_line} skeleton={nodes.绝区零妮可_31.skeleton} morphTargetDictionary={nodes.绝区零妮可_31.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_31.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_32" geometry={nodes.绝区零妮可_32.geometry} material={materials.Teeth} skeleton={nodes.绝区零妮可_32.skeleton} morphTargetDictionary={nodes.绝区零妮可_32.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_32.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_33" geometry={nodes.绝区零妮可_33.geometry} material={materials['HairSphere====']} skeleton={nodes.绝区零妮可_33.skeleton} morphTargetDictionary={nodes.绝区零妮可_33.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_33.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_34" geometry={nodes.绝区零妮可_34.geometry} material={materials['Metal+====']} skeleton={nodes.绝区零妮可_34.skeleton} morphTargetDictionary={nodes.绝区零妮可_34.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_34.morphTargetInfluences} />
            <skinnedMesh name="绝区零妮可_35" geometry={nodes.绝区零妮可_35.geometry} material={materials['Skin+====']} skeleton={nodes.绝区零妮可_35.skeleton} morphTargetDictionary={nodes.绝区零妮可_35.morphTargetDictionary} morphTargetInfluences={nodes.绝区零妮可_35.morphTargetInfluences} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/zombieGirl.glb')
