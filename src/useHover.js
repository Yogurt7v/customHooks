import { useRef, useEffect, useState } from "react";

export function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef();


  console.log("render");

  useEffect(() => {
    const item = ref.current;
    item.addEventListener("mouseover", () => setHovered(!hovered));
    item.addEventListener("mouseout", () => setHovered(!hovered));

    return () => {
      item.removeEventListener("mouseover",() => setHovered(!hovered));
      item.removeEventListener("mouseout",() => setHovered(!hovered));
    }
  }, [hovered]);

  return { hovered, ref };
}
