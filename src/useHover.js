import { useRef, useEffect, useState } from "react";

export function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef();

  const hoverFunc = () => setHovered(!hovered);
  
  useEffect(() => {
    const item = ref.current;
    item.addEventListener("mouseover", hoverFunc);
    item.addEventListener("mouseout", hoverFunc);

    return () => {
      item.removeEventListener("mouseover",hoverFunc);
      item.removeEventListener("mouseout",hoverFunc);
    }
  }, [hovered]);

  return { hovered, ref };
}
