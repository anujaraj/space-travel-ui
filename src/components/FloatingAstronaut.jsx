import { useRef } from "react";
import "./FloatingAstronaut.css";

export default function FloatingAstronaut() {
  const astronautRef = useRef();

  return (
    <img
      ref={astronautRef}
      src="/textures/astronaut.png" // keep your transparent astronaut PNG
      alt="astronaut"
      className="floating-astronaut"
    />
  );
}