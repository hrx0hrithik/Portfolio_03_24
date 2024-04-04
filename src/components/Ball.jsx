import React, { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, Html, OrbitControls, Preload, useTexture } from '@react-three/drei'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed={1.25} rotationIntensity={1} floatIntensity={2} >
      <ambientLight intensity={props.isDarkTheme ? 0.25 : 1.95} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        castShadow
        receiveShadow
        scale={ 2.75 }
      >
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

const BallCanvas = ({ icon, isDarkTheme }) => {

  return (
    <Canvas frameloop='always' gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Html>
        <span className='canvas-load'></span>
        <p 
          className='text-black dark:text-white'
          style={{
            fontSize: 14,
            fontWeight: 800,
            textAlign: 'center'
          }}
        >Loading ... %</p>
      </Html>}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} isDarkTheme={isDarkTheme} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas