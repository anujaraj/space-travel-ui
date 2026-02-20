import { useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function MarsSphere() {
  const marsRef = useRef();
  const texture = useLoader(TextureLoader, "/textures/mars4k.jpg");
  const { size } = useThree(); // gives canvas width

  // Responsive radius logic
  let radius = 4; // default desktop

  if (size.width < 1024) radius = 4;
  if (size.width < 768) radius = 3.5;
  if (size.width < 480) radius = 1.7;

  useFrame((state, delta) => {
    if (marsRef.current) {
      marsRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <mesh ref={marsRef} position={[radius*0.1, 0, 0]}>
      <sphereGeometry args={[radius, 64, 64]} />
      <meshStandardMaterial map={texture} roughness={1} metalness={0} />
    </mesh>
  );
}