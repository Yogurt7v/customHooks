import { useRef, useEffect, useState } from "react";

export function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef();

  useEffect(() => {
    ref.current.addEventListener("mouseover", () => setHovered(!hovered));
  }, [hovered]);

  return { hovered, ref };
}
