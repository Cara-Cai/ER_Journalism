import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

import useScrollProgress from "./useScrollProgress";

function ScrollTiledAnimatedModel(props) {
  const { modelUrl, position } = props;
  const progress = useScrollProgress();
  const { scene, animations } = useGLTF(modelUrl);
  const { actions } = useAnimations(animations, scene);
  const firstAnimationClip = Object.values(actions)[0];
  const modelRef = useRef();
  const { gl } = useThree();

  useEffect(() => {
    // Enable shadow maps on the renderer
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = THREE.PCFSoftShadowMap; // Optional: for softer shadows

    // Traverse the scene to enable shadows on all meshes
    scene.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, [scene, gl]);

  useEffect(() => {
    firstAnimationClip.time = firstAnimationClip.getClip().duration * progress;
  }, [progress, actions]);

  useEffect(() => {
    firstAnimationClip.reset().play().paused = true;
  }, [actions]);

  return <primitive ref={modelRef} position={position} object={scene} />;
}

export default ScrollTiledAnimatedModel;
