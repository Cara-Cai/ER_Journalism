

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { SoftShadows } from "@react-three/drei";
import * as THREE from "three";
import Test from "./test";
import ScrollTiledAnimatedModel from "./ScrollTiledAnimatedModel";


function Scene() {
  return (
    <div id="canvas_wrapper">
      <Canvas
        shadows
        gl={{
          antialias: true,
          // shadowMap: true,
          shadowMapType: THREE.PCFSoftShadowMap, 
        }}
      >
        {/* Enable soft shadows */}
        <SoftShadows size={60} samples={40} />

{/* Lights 💡 */}
<ambientLight intensity={5} color= {"#7824f6"} />
<directionalLight
position={[10, 15, 5]}
intensity={10}
castShadow
shadow-mapSize-width={2048}
shadow-mapSize-height={2048}
shadow-bias={-0.01}
>
<orthographicCamera attach="shadow-camera" args={[-15, 15, 15, -15, 1, 40]} />
</directionalLight>

        
        {/* Background */}
        <color args={["lightgrey"]} attach="background" />
    
      <Suspense fallback={"model loading"}>
          <ScrollTiledAnimatedModel
            position={[0, 0, 5]}
            modelUrl="./models/12.10final.glb"
            speedScale={0.25} 
          /></Suspense>

        
      </Canvas>
    </div>
  );
}

export default Scene;
