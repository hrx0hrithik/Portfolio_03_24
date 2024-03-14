import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, Html, OrbitControls, Preload, useTexture } from '@react-three/drei'


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed={1.25} rotationIntensity={1} floatIntensity={2} >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop='always' gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Html>
        <span className='canvas-load'></span>
        <p 
          className='text-black dark:text-white'
          style={{
            fontSize: 14,
            fontWeight: 800,
            marginTop: 40
          }}
        >Loading ... %</p>
      </Html>}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas