import { useState, useEffect } from "react";

export function useWindowScroll() {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  const scrollTo =({ x = 0, y = 0 }) => {
    window.scrollTo({ top: y, left: x});
  }

  useEffect(() => {
    window.scrollTo(scroll.x, scroll.y);
  }, [scroll]);

  useEffect(() => {
    const handleScroll = () => {
      setScroll({ x: window.scrollX, y: window.scrollY });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [scroll, scrollTo];
}
