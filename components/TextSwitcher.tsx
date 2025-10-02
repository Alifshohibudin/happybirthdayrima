"use client";
import { useState, useEffect } from "react";

export default function TextSwitcher() {
  const texts = ["Babby👋", "Honey 🚀", "Sweety Heart <3"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000); // ganti setiap 2 detik
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <>
      {texts[index]}
    </>
  );
}
