import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,PerspectiveCamera
} from "@react-three/drei";

import CanvasLoader from "../Loader";
const rand = () => {
  const x=Math.random() * 5 + 1.75;
  return x;
}
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={rand()} rotationIntensity={2} floatIntensity={2}>
      
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading

          side={2}
        />
        <Decal
          position={[0, 1, 0]}
          rotation={[0, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
          side={2}
        />
        <Decal
          position={[0, -1, 0]}
          rotation={[0, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
          side={2}
        />
        <Decal
          position={[0, 0, -1]}
          rotation={[0, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
          side={2}
        />
        <Decal
          position={[1, 0, -1]}
          rotation={[0, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
          side={2}
        />
        <Decal
          position={[-1, 0, -1]}
          rotation={[0, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
          side={2}
        />
        <Decal
          position={[1, 0, 1]}
          rotation={[0, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
          side={2}
        />
        <Decal
          position={[-1, 0, 1]}
          rotation={[0, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
          side={2}
        />
        <Decal
          position={[-1, 1, 1]}
          rotation={[0, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
          side={2}
        />
         
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          side={2}

        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}

    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} 
          autoRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
