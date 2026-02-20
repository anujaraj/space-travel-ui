import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";


function RotatingStars() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.0005;
  });

  return <Stars ref={ref} radius={100} depth={50} count={4000} factor={4} />;
}

export default function StarBackground() {
  return (
    <Canvas className="starCanvas" camera={{ position: [0, 0, 8] }}>

      <RotatingStars />
     
    </Canvas>
  );
}