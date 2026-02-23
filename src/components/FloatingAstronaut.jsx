import { useRef } from "react";
import "./FloatingAstronaut.css";

export default function FloatingAstronaut({returnback}) {
  const astronautRef = useRef();


  return (
    <img
      ref={astronautRef}
      src="/textures/astronaut.png" 
      alt="astronaut"
      className={`floating-astronaut ${returnback ? "returning" : ""}`}
    />
  );
}