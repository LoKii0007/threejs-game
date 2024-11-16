import { Environment, OrbitControls, Shadow } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import { BirtdayModel } from "../components/Model";
import { Model } from "../components/Ribbon";
import { PinkModel } from "../models/Pink-ballon";
import { TransModel } from "../models/Trans-heart";
import { GoldModel } from "../models/Gold-ballon";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const store = createXRStore();

export default function Test() {

  return (
    <>
      <button className="bg-white text-black" onClick={() => store.enterAR()}>Enter AR</button>
      <button className="bg-white text-black" onClick={() => store.enterVR()}>Enter vR</button>
      <Canvas>
        <XR store={store}>
          <Environment files={"./nebula-7.hdr"} background />
          <OrbitControls />
          <BirtdayModel position-z={-15} position-y={-7} />  //* only in this model to a specific mesh

          <Model />
          <PinkModel position-z={-10} />
          <TransModel position-z={-10} />
          <GoldModel position-z={-10} />
          <directionalLight position={[0, 10, 0]} intensity={5} castShadow />
          <Shadow />

           <EffectComposer>
            <Bloom/>
           </EffectComposer>
        </XR>
      </Canvas>
    </>
  );
}
