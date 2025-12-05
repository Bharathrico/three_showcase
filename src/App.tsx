import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { div } from 'three/tsl';
// import './styles.css'
//newcommit

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function App()
{
return (
  <div style={{width:"100vw",height:"100vh"}}>
  <Canvas camera={{ position: [0, 0, 40], fov: 120 }}>
    <ambientLight intensity={2*Math.PI} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    {/* <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} /> */}
     <Suspense fallback={null}>
          <Model />
          {/* <OrbitControls /> */}
          {/* <Environment preset="sunset" background /> */}
    </Suspense>
  </Canvas>
  </div>
)
}


export default App
