"use client";

import { useEffect, useState } from "react";

export type FontSize = "small" | "medium" | "large";

const FONT_SIZE_KEY = "preferred-font-size";

export function useFontSize() {
  const [fontSize, setFontSize] = useState<FontSize>("medium");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved preference from localStorage
    const saved = localStorage.getItem(FONT_SIZE_KEY) as FontSize | null;
    if (saved && ["small", "medium", "large"].includes(saved)) {
      setFontSize(saved);
      applyFontSize(saved);
    }
  }, []);

  const applyFontSize = (size: FontSize) => {
    // Remove all font size classes
    document.documentElement.classList.remove(
      "font-size-small",
      "font-size-medium",
      "font-size-large"
    );
    // Add the selected class
    document.documentElement.classList.add(`font-size-${size}`);
  };

  const changeFontSize = (size: FontSize) => {
    setFontSize(size);
    applyFontSize(size);
    localStorage.setItem(FONT_SIZE_KEY, size);
  };

  const decreaseFontSize = () => {
    const newSize = fontSize === "medium" ? "small" : fontSize === "large" ? "medium" : "small";
    changeFontSize(newSize);
  };

  const resetFontSize = () => {
    changeFontSize("medium");
  };

  const increaseFontSize = () => {
    const newSize = fontSize === "small" ? "medium" : fontSize === "medium" ? "large" : "large";
    changeFontSize(newSize);
  };

  return {
    fontSize,
    decreaseFontSize,
    resetFontSize,
    increaseFontSize,
    mounted,
  };
}
