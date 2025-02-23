"use client";
import { useEffect, useRef } from "react";
import Rellax from "rellax";

export default function ParallaxBG() {
  const rellaxRef = useRef(null);

  useEffect(() => {
    new Rellax(rellaxRef.current, { speed: -5 });
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Fondo principal (Negro) */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Capa de Parallax (Blanca) */}
      <div
        ref={rellaxRef}
        className="absolute inset-0 bg-gradient-to-b from-gray-100 to-transparent opacity-40"
      ></div>

      {/* Contenido en el centro */}
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Bienvenido a mi mundo 🎵🔥
        </h1>
      </div>
    </div>
  );
}
