import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
const Circular = ({ fv }) => {
  return (
    <div className="w-full h-full relative">
      <Canvas flat camera={{ fov: fv }}>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={1.4}
          maxPolarAngle={1.4}
        />
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={2.0} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
          <ToneMapping adaptive  />
        </EffectComposer>
      </Canvas>
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 gap-[1vw] text-[#ffffff7b] z-[2] text-center">
        <h1 className="md:text-[3vw] text-[1.7vh] font-semibold tracking-tighter">
          Join the Open-Source Revolution
        </h1>
        <p className="md:text-[1.3vw] text-[1.4vh]">Open source is changing the world - one pull request at a time.</p>
      </div>
    </div>
  );
};

export default Circular;
