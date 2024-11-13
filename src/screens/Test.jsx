import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import { useRef, useState } from 'react'
import { BirtdayModel } from '../components/Model'

const store = createXRStore()

export default function Test() {
  const [red, setRed] = useState(false)
  const ref = useRef()

  return (
    <>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas>
        <XR store={store}>
          {/* <mesh ref={ref}  pointerEventsType={{ deny: 'grab' }} onClick={() => setRed(!red)} position={[0, 1, -3]}>
            <boxGeometry />
            <meshBasicMaterial color={red ? 'red' : 'blue'} />
          </mesh> */}
          <Environment preset='sunset' />
          <OrbitControls />
          <BirtdayModel position-z={-25} />
        </XR>
      </Canvas>
    </>
  )
}