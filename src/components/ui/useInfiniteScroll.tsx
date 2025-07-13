import { useState, useEffect, useRef } from "react";

interface InfiniteScrollProps {
  speed?: number;
  pauseOnHover?: boolean;
}

interface InfiniteScrollReturn {
  scrollRef: React.MutableRefObject<HTMLDivElement | null>;
  isPaused: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useInfiniteScroll(
  { speed = 1, pauseOnHover = true }: InfiniteScrollProps = {}
): InfiniteScrollReturn {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const singleSetWidthRef = useRef<number>(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const calculateWidth = () => {
      const totalWidth = Array.from(el.children).reduce(
        (acc, child) =>
          acc + (child instanceof HTMLElement ? child.offsetWidth + 16 : 0), // 16 = mx-4
        0
      );
      singleSetWidthRef.current = totalWidth;
    };

    calculateWidth();

    const handleResize = () => {
      calculateWidth();
    };

    window.addEventListener("resize", handleResize);

    let pos = 0;

    const animate = () => {
      if (!scrollRef.current) return;

      if (!isPaused) {
        pos -= speed;
        if (Math.abs(pos) >= singleSetWidthRef.current) {
          pos = 0;
        }
        scrollRef.current.style.transform = `translateX(${pos}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [isPaused, speed]);

  return { scrollRef, isPaused, setIsPaused };
}
