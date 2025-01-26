import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const Model = ({ objUrl }) => {
  const obj = useLoader(OBJLoader, objUrl);
  return <primitive object={obj} />;
};

const ObjModel = ({ objUrl }) => {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {objUrl && <Model objUrl={objUrl} />}
      <OrbitControls />
    </Canvas>
  );
};

export default ObjModel;
