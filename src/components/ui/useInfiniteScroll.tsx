import { useRef, useEffect } from "react";

interface InfiniteScrollProps {
  speed?: number;
}

export function useInfiniteScroll({ speed = 1 }: InfiniteScrollProps = {}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const widthRef = useRef<number>(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const calculateWidth = () => {
      widthRef.current = Array.from(el.children).reduce(
        (acc, child) =>
          acc + (child instanceof HTMLElement ? child.offsetWidth + 16 : 0),
        0
      );
    };

    calculateWidth();
    let pos = 0;

    const animate = () => {
      if (!scrollRef.current) return;
      pos -= speed;
      if (Math.abs(pos) >= widthRef.current) {
        pos = 0;
      }
      scrollRef.current.style.transform = `translateX(${pos}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const onResize = () => calculateWidth();
    window.addEventListener("resize", onResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [speed]);

  return { scrollRef };
}
