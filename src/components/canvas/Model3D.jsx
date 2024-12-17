import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export const Model3D = ({ path, scale, position, rotation }) => {
  const meshRef = useRef();
  const model = useGLTF(path);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.1 + rotation[1];
  });

  return (
    <mesh ref={meshRef} scale={scale} position={position} rotation={rotation}>
      <primitive object={model.scene} />
    </mesh>
  );
};