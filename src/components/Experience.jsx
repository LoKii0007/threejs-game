import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { ZombieGirlModel } from './ZombieGirl'
import { SantaModel } from './santa'
import { useGame } from '../hooks/UseGame'
import { GIRL_COLUMN_SPACE, GIRL_COLUMNS, GIRL_ROW_SPACE } from '../App'

function Experience() {

  const { snowmen } = useGame()

  return (
    <>
      <OrbitControls />
      <Environment preset="sunset" />
      {snowmen.map((model, index) => {
 
        const columns = index % GIRL_COLUMNS
        const rows = Math.floor(index/GIRL_COLUMNS)
        const xPos = columns * GIRL_COLUMN_SPACE - ( (GIRL_COLUMNS -2.5) * GIRL_COLUMN_SPACE )

        return (
          <group key={index} position-z={ 5 - rows * GIRL_ROW_SPACE} position-x={xPos} >
            <ZombieGirlModel position-y={-0.4}  />
          </group>
        )
      })}
      {/* <ZombieGirlModel position={[0, -0.4, 5]} /> */}
      <SantaModel position={[0, -0.5, 7]} />
    </>
  )
}

export default Experience