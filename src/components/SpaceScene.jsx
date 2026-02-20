import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function SceneContent({ hyperdrive }) {
    const texture = useLoader(TextureLoader, "/textures/mars4k.jpg");
    const marsRef = useRef();
    const starRef = useRef();
    const {camera} = useThree();

    useFrame((state,delta) => {
        if (marsRef.current) {
            marsRef.current.rotation.y += delta*0.5; // Slow rotation
           
        }

        if(starRef.current) {
            starRef.current.rotation.y += delta*0.02; // Stars rotate slower
        }

        if (hyperdrive) {
            camera.position.z -= delta*3; // Speed up during hyperdrive
            if (starRef.current) {
            starRef.current.rotation.y += delta * 2;

            camera.position.x += (Math.random() - 0.5) * 0.02;
            camera.position.y += (Math.random() - 0.5) * 0.02;
            }
        }
    });
      return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            <group ref={starRef}>
                <Stars radius={100} depth={50} count={5000} factor={4} fade />
            </group>

            <mesh ref={marsRef} position={[0, 0, -2]}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial
                    map={texture}
                    roughness={1}
                    metalness={0}
                />
            </mesh>
        </>
  );
}

export default function SpaceScene({hyperdrive  }) {
    return (
        <Canvas camera={{ position: [0, 0, 5]}}>
            <SceneContent hyperdrive={hyperdrive}/>
        </Canvas>
    )
}