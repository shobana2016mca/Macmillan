"use client";

import { useEffect, useState } from "react";

export const useScreensize = () => {
  const [width, setWidth] = useState(0);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 600;
  const isTablet = width <= 1024;
  const isDesktop = width > 1024;

  return { isMobile, isTablet, isDesktop };
};
