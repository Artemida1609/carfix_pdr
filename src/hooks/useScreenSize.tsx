import { useEffect, useState } from "react";

// useScreenSize.tsx
const getSize = (width: number) => {
  if (width < 576) return "xs";
  if (width < 768) return "sm";
  if (width < 992) return "md";
  if (width < 1200) return "lg";
  if (width < 1400) return "xl";
  return "2xl";
};

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<
    "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  >(
    () => getSize(window.innerWidth), // ← одразу правильний розмір при ініціалізації
  );

  useEffect(() => {
    const handleResize = () => setScreenSize(getSize(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { screenSize };
};
