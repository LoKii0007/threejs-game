import React, { useEffect } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { ZombieGirlModel } from './ZombieGirl'
import { SantaModel } from './santa'
import { useGame } from '../hooks/UseGame'
import { GIRL_COLUMN_SPACE, GIRL_COLUMNS, GIRL_ROW_SPACE, GROUND_LENGTH } from '../App'
import { GroundModel } from './Ground'

function Experience() {

  const { snowmen , status} = useGame()
  console.log('status : ', status)

  useEffect(()=>{

  }, [status])

  return (
    <>
      <OrbitControls />
      <Environment preset="sunset" />

      <group visible={status === 'playing'} rotation={[Math.PI/180 *  10, 0, 0]} position={[0, 0.2, 0]} >
        <GroundModel position={[0, -0.5, 8]} />
        <GroundModel position={[0, -0.5, 8 - GROUND_LENGTH]} />
        <GroundModel position={[0, -0.5, 8 + GROUND_LENGTH]} />

        {snowmen.map((model, index) => {

          const columns = index % GIRL_COLUMNS
          const rows = Math.floor(index / GIRL_COLUMNS)
          const xPos = columns * GIRL_COLUMN_SPACE - ((GIRL_COLUMNS - 2.5) * GIRL_COLUMN_SPACE)

          return (
            <group key={index} position-z={5 - rows * GIRL_ROW_SPACE} position-x={xPos} >
              <ZombieGirlModel position-y={-0.4} metadata={model} />
            </group>
          )
        })}
        {/* <ZombieGirlModel position={[0, -0.4, 5]} /> */}
        <SantaModel position={[0, -0.5, 5.5]} />
      </group>
    </>
  )
}

export default Experience