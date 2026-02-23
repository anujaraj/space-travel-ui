import { useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";


export default function MarsSphere({returnback}) {
  const marsRef = useRef();
  const texture = useLoader(TextureLoader, "/textures/mars4k.jpg");
  const { size } = useThree(); // gives canvas width

  let radius = 4;

  if (size.width < 1024) radius = 4;
  if (size.width < 768) radius = 3;
  if (size.width < 480) radius = 1.2;
  if (size.width < 300) radius = 1;

  useFrame((state, delta) => {
    if (!marsRef.current) return;
    let speed =  0.05; 
    marsRef.current.rotation.y += delta * speed;
  });

  return (
    <mesh ref={marsRef} position={[radius*0.1, 0, 0]} >
      <sphereGeometry args={[radius, 64, 64]} />
      <meshStandardMaterial map={texture} roughness={1} metalness={0} />
    </mesh>
  );
}