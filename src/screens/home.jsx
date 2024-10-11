import React, { useReducer } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from '../components/Experience'

export default function Home() {

  return (
    <>
      <div className='canvas-container'>
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
          <color attach="background" args={['#333']} />
          <fog attach="fog" color="#333" near={10} far={20} />
          <Experience />
        </Canvas>
      </div>
    </>
  )
}
