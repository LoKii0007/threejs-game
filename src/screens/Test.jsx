import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import { useRef, useState } from 'react'
import { BirtdayModel } from '../components/Model'
import { Model } from '../components/Ribbon'
import { DirectionalLight } from 'three'

const store = createXRStore()

export default function Test() {
  const [red, setRed] = useState(false)
  const ref = useRef()

  return (
    <>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas>
        <XR store={store}>
          <Environment files={'./nebula-7.hdr'} background />
          <OrbitControls />
          <BirtdayModel position-z={-15} position-y={-3} />
          <directionalLight
            // ref={lightRef}
            position={[10, 10, 10]}
            intensity={5}
            castShadow
          />
          <Model />
        </XR>
      </Canvas>
    </>
  )
}