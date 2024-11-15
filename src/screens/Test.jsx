import { Environment, OrbitControls, Shadow } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import { useRef, useState } from "react";
import { BirtdayModel } from "../components/Model";
import { Model } from "../components/Ribbon";
import { PinkModel } from "../models/Pink-ballon";
import { TransModel } from "../models/Trans-heart";
import { GoldModel } from "../models/Gold-ballon";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette
} from "@react-three/postprocessing";

const store = createXRStore();

export default function Test() {

  return (
    <>
      <button className="bg-white text-black" onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas>
        <XR store={store}>
          <Environment files={"./nebula-7.hdr"} background />
          <OrbitControls />
          <BirtdayModel position-z={-15} position-y={-3} />
          <Model />
          <PinkModel position-z={-10} />
          <TransModel position-z={-10} />
          <GoldModel position-z={-10} />
          <directionalLight position={[0, 10, -10]} intensity={5} castShadow />
          <Shadow />


          {/* Bloom effect only for layer 1 (Sides_Ribbon) */}
          <EffectComposer>
            <Bloom
              intensity={2}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              mipmapBlur
              layers={[1]} // Apply bloom only to objects in layer 1
            />
          </EffectComposer>
        </XR>
      </Canvas>
    </>
  );
}
