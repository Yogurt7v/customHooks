import { useState, useEffect } from "react";

export function useViewportSize() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  function changeSize() {
    setInterval(() => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 500);
  }

  useEffect(() => {
    window.addEventListener("resize", changeSize());
    return () => window.removeEventListener("resize", changeSize());
  }, []);

  return { height: size.height, width: size.width };
}
