import React, { useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { ZombieGirlModel } from "./ZombieGirl";
import { SantaModel } from "./santa";
import { useGame } from "../hooks/UseGame";
import {
  BOT_SPEED,
  GIRL_COLUMN_SPACE,
  GIRL_COLUMNS,
  GIRL_ROW_SPACE,
  GROUND_LENGTH,
} from "../App";
import { GroundModel } from "./Ground";
import { useFrame } from "@react-three/fiber";

function Experience() {
  const { snowmen, status , dispatch} = useGame();
  const [chaseSpeed, setChaseSpeed] = useState(0);
  const chaseBotRef = useRef();
  const santaRef = useRef()

  //? -------------------------
  //? updating speed
  //? -------------------------
  useEffect(() => {
    let updateSpeed;

    if (status === "playing") {
      updateSpeed = setInterval(() => {
        setChaseSpeed((prev) =>{
          const newSpeed = Math.round((prev + BOT_SPEED) * 1000 ) / 1000   //include only 1 decimal place
          return newSpeed
        });
      }, 1000);
    }

    if(status !== 'playing'){
      if (updateSpeed) clearInterval(updateSpeed);
    }
    return () => {
      if (updateSpeed) clearInterval(updateSpeed);
    };
  }, [status]);

  useEffect(() => {
    console.info("speed : ", chaseSpeed);
    if(chaseBotRef.current && santaRef.current ){
      console.log('1 : ', chaseBotRef.current.position.z)
      console.log('2 : ', santaRef.current.position.z)
    }
  }, [chaseSpeed]);


  //? -------------------------
  //? updating model speed
  //? -------------------------
  useFrame(() => {
    chaseBotRef.current.position.z += chaseSpeed
    if(chaseBotRef.current.position.z >= santaRef.current.position.z ){
      dispatch({type : 'end'})
      // console.log('game over')
      setChaseSpeed(0)
      chaseBotRef.current.position.z = 0
    }
  })

  return (
    <>
      <OrbitControls />
      <Environment preset="sunset" />

      <group
        visible={status === "playing"}
        rotation={[(Math.PI / 180) * 10, 0, 0]}
        position={[0, 0.2, 0]}
      >
        <GroundModel position={[0, -0.5, 8]} />
        <GroundModel position={[0, -0.5, 8 - GROUND_LENGTH]} />
        <GroundModel position={[0, -0.5, 8 + GROUND_LENGTH]} />

        {snowmen.map((model, index) => {
          const columns = index % GIRL_COLUMNS;
          const rows = Math.floor(index / GIRL_COLUMNS);
          const xPos =
            columns * GIRL_COLUMN_SPACE -
            (GIRL_COLUMNS - 2.5) * GIRL_COLUMN_SPACE;

          return (
            <group
              ref={chaseBotRef}
              key={index}
              position-z={5 - rows * GIRL_ROW_SPACE}
              position-x={xPos}
            >
              <ZombieGirlModel position-y={-0.4} metadata={model} />
            </group>
          );
        })}

        <group ref={santaRef} position={[0, -0.5, 5.5]} >
        <SantaModel />
        </group>
      </group>
    </>
  );
}

export default Experience;
