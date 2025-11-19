import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { act, useRef, useState } from 'react'

export default function Model(props) {
  const { nodes, materials } = useLoader(GLTFLoader, 'cubes.glb')
  const [active, setActive] = useState(false)
  console.log(nodes)
  return (
    <group>
      <mesh scale={1.5} rotation={[0,active?180:0,0]} onClick={() => setActive(!active)} position={nodes.Cube.position}  geometry={nodes.Cube.geometry}  material={materials['Material.001']}/>
      <mesh position={nodes.Cube001.position} geometry={nodes.Cube001.geometry}  material={materials['Material.001']}/>
    </group>
  );
}

