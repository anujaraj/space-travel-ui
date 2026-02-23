import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./AstronautCursor.css";

export default function AstronautCursor() {
  const cursorRef = useRef();
  const location = useLocation();
  const [gesture, setGesture] = useState("idle");
   const pageImages = {
    home: {
        idle: "/textures/astronaut.png",
        click: "/textures/astronaut.png",
      },
      destination: {
        idle: "/textures/rocket.png",
        click: "/textures/rocket.png",
      },
    };
    const currentSet =
      location.pathname.includes("destination")
        ? pageImages.destination
        : pageImages.home;



  useEffect(() => {
    if (window.__cursorMounted) return;
  window.__cursorMounted = true;
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    
    const down = () => setGesture("click");
    const up = () => setGesture("idle");

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.__cursorMounted = false;
    }

  }, []);

  return (
    <img
      ref={cursorRef}
      src={currentSet[gesture]}
      alt="cursor"
      className="astronaut-cursor"
      style={{
        position: "fixed",
        left: "0px",
        top: "0px",
        width: "40px",
        pointerEvents: "none",     
        zIndex: 99999999,
      }}
    />
  );
}

