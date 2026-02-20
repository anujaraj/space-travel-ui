import { useEffect, useRef, useState } from "react";
import "./AstronautCursor.css";

export default function AstronautCursor() {
  const cursorRef = useRef();
  const [gesture, setGesture] = useState("idle");


  useEffect(() => {
    if (window.__cursorMounted) return;
  window.__cursorMounted = true;
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", move);
    
    const down = () => setGesture("click");
    const up = () => setGesture("idle");

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.__cursorMounted = false;
    }

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
        
        zIndex: 999999,
      }}
    />
  );
}

