import { Canvas, useFrame, useLoader,useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";


function RotatingStars({returnback}) {
  const ref = useRef();
  const {camera} = useThree();
  useFrame((state,delta) => {
    if (!ref.current) return;
    let speed =0.05 ;
    if (returnback) {
      speed = 2;
      camera.position.x += (Math.random() - 0.5) * 0.02;
      camera.position.y += (Math.random() - 0.5) * 0.02;
    }
    ref.current.rotation.y += delta * speed;
  });

  return <Stars ref={ref} radius={100} depth={50} count={4000} factor={4} fade />;
}

export default function StarBackground({returnback}) {
  return (
    <Canvas className="starCanvas" camera={{ position: [0, 0, 8] }}>
      <RotatingStars returnback={returnback}/>    
    </Canvas>
  );
}