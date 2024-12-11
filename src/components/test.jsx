/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ./public/models/12.7_one_ER_white_final.glb 
*/

import React from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'

export default function Test(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('./models/12.7_one_ER_white_final.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        {/* <group name="Area" position={[8.432, 7.948, -4.305]} rotation={[-1.976, 0.054, -0.011]} castShadow receiveShadow/>
        <group name="Area001" position={[-0.899, 6.525, 4.884]} rotation={[-1.685, -1.101, -0.251]} castShadow receiveShadow/>
        <group name="Area002" position={[-10.86, 7.67, -8.203]} rotation={[-2.196, -0.455, 0.315]} castShadow receiveShadow/>
        <group name="Area003" position={[-8.865, 7.37, 4.735]} rotation={[-1.455, -0.438, 0.421]} castShadow receiveShadow/>
        <group name="Area004" position={[2.275, 9.937, -3.205]} rotation={[-1.725, 0.05, 0.053]} castShadow receiveShadow/> */}
        {/* <PerspectiveCamera name="Camera" makeDefault={false} far={1000} near={0.1} fov={55.724} position={[-18.239, 21.225, -17.62]} rotation={[-2.371, -0.576, -2.593]} /> */}
        <group name="Cube025" position={[10.028, 2.261, -2.708]} scale={[0.158, 0.914, 0.409]}castShadow receiveShadow>
          <mesh name="Cube026" geometry={nodes.Cube026.geometry} material={materials.glass} castShadow receiveShadow />
          <mesh name="Cube026_1" geometry={nodes.Cube026_1.geometry} material={materials.grey} castShadow receiveShadow/>
          <mesh name="Cube026_2" geometry={nodes.Cube026_2.geometry} material={materials['Black.001']}castShadow receiveShadow />
          <mesh name="Cube026_3" geometry={nodes.Cube026_3.geometry} material={materials['Black.002']} castShadow receiveShadow/>
          <mesh name="Cube026_4" geometry={nodes.Cube026_4.geometry} material={materials.white} castShadow receiveShadow/>
          <mesh name="Cube026_5" geometry={nodes.Cube026_5.geometry} material={materials['grey dark']}castShadow receiveShadow />
          <mesh name="Cube026_6" geometry={nodes.Cube026_6.geometry} material={materials.screen}castShadow receiveShadow />
          <mesh name="Cube026_7" geometry={nodes.Cube026_7.geometry} material={materials.Material}castShadow receiveShadow />
          <mesh name="Cube026_8" geometry={nodes.Cube026_8.geometry} material={materials['default']} castShadow receiveShadow/>
          <mesh name="Cube026_9" geometry={nodes.Cube026_9.geometry} material={materials.RED} castShadow receiveShadow/>
          <mesh name="Cube026_10" geometry={nodes.Cube026_10.geometry} material={materials['white.001']}castShadow receiveShadow />
          <mesh name="Cube026_11" geometry={nodes.Cube026_11.geometry} material={materials['LIGHT GREY']} castShadow receiveShadow/>
          <mesh name="Cube026_12" geometry={nodes.Cube026_12.geometry} material={nodes.Cube026_12.material} castShadow receiveShadow/>
          <mesh name="Cube026_13" geometry={nodes.Cube026_13.geometry} material={materials['default.006']} castShadow receiveShadow/>
          <mesh name="Cube026_14" geometry={nodes.Cube026_14.geometry} material={materials['default.004']} castShadow receiveShadow/>
          <mesh name="Cube026_15" geometry={nodes.Cube026_15.geometry} material={materials['default.003']} castShadow receiveShadow/>
          <mesh name="Cube026_16" geometry={nodes.Cube026_16.geometry} material={materials['default.005']}castShadow receiveShadow />
          <mesh name="Cube026_17" geometry={nodes.Cube026_17.geometry} material={materials.blue} castShadow receiveShadow/>
          <mesh name="Cube026_18" geometry={nodes.Cube026_18.geometry} material={materials['0.627451_0.627451_0.627451_0.000000_0.000000']} castShadow receiveShadow/>
          <mesh name="Cube026_19" geometry={nodes.Cube026_19.geometry} material={materials['0.000000_0.000000_0.000000_0.000000_0.000000']} castShadow receiveShadow/>
          <mesh name="Cube026_20" geometry={nodes.Cube026_20.geometry} material={materials['0.317647_0.247059_0.207843_0.000000_0.000000']} castShadow receiveShadow/>
          <mesh name="Cube026_21" geometry={nodes.Cube026_21.geometry} material={materials['0.505882_0.505882_0.505882_0.000000_0.000000']} castShadow receiveShadow/>
          <mesh name="Cube026_22" geometry={nodes.Cube026_22.geometry} material={materials['0.701961_0.270588_0.082353_0.000000_0.000000']} castShadow receiveShadow/>
          <mesh name="Cube026_23" geometry={nodes.Cube026_23.geometry} material={materials.metal} castShadow receiveShadow/>
          <mesh name="Cube026_24" geometry={nodes.Cube026_24.geometry} material={materials.wood} castShadow receiveShadow/>
          <mesh name="Cube026_25" geometry={nodes.Cube026_25.geometry} material={materials.White} castShadow receiveShadow/>
          <mesh name="Cube026_26" geometry={nodes.Cube026_26.geometry} material={materials.dark}castShadow receiveShadow />
          <mesh name="Cube026_27" geometry={nodes.Cube026_27.geometry} material={materials.AOC_monitor} castShadow receiveShadow/>
        </group>
        <mesh name="Text" geometry={nodes.Text.geometry} material={materials['Black.001']} position={[9.995, 3.198, -3.155]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.412} />
        <mesh name="Text001" geometry={nodes.Text001.geometry} material={materials.white} position={[10.087, 3.27, 6.093]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.412} />
        <mesh name="Text002" geometry={nodes.Text002.geometry} material={materials.RED} position={[-3.212, 3.256, -5.957]} rotation={[Math.PI / 2, 0, 2.775]} scale={0.105} />
        <mesh name="Text004" geometry={nodes.Text004.geometry} material={materials.RED} position={[-3.235, 2.773, -5.954]} rotation={[Math.PI / 2, 0, 2.775]} scale={0.105} />
        <mesh name="Text005" geometry={nodes.Text005.geometry} material={materials['Black.001']} position={[5.704, 2.148, -2.772]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.142} />
        <mesh name="Text006" geometry={nodes.Text006.geometry} material={materials.RED} position={[5.703, 2.428, -2.915]} rotation={[Math.PI / 2, 0, -1.562]} scale={0.099} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/12.7_one_ER_white_final.glb')