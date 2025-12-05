import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import {animated, useSpring} from '@react-spring/three'
import { act, useRef, useState } from 'react'

export default function Model(props) {
  const { nodes, materials } = useLoader(GLTFLoader, 'bat_render.glb')
  // const [active, setActive] = useState(false)
  console.log(nodes)
  // const springs = useSpring({
  //   rotate: active ? [0,180*Math.PI/180,0]:[0,0,0],
  // })
  return (
    <group>
      
      <mesh position={nodes.Bat_export.position} rotation={[0,180*(Math.PI/180),0]} geometry={nodes.Bat_export.geometry}  material={nodes.Bat_export.material}>
        {/* <meshStandardMaterial color={'hotpink'} />   */}
      </mesh>
      {/* <animated.mesh rotation={springs.rotate} onClick={() => setActive(!active)} position={nodes.Cube.position}  geometry={nodes.Cube.geometry}  material={materials['Material.001']}>
        <meshStandardMaterial color={'orange'} />  
      </animated.mesh> */}
    </group>
  );
}

