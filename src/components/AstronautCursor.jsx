import { useEffect, useRef } from "react";
import "./AstronautCursor.css";

export default function AstronautCursor() {
  const cursorRef = useRef();

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <img
      ref={cursorRef}
      src="/textures/astronaut.png"
      alt="cursor"
      className="astronaut-cursor"
      style={{
        position: "fixed",
        left: "0px",
        top: "0px",
        width: "40px",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 999999,
      }}
    />
  );
}

