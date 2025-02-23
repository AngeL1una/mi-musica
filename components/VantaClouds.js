"use client";
import { useEffect } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min.js";

export default function VantaClouds() {
  useEffect(() => {
    const effect = CLOUDS({
      el: document.documentElement, // Aplica el efecto al <html> en lugar del <body>
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: window.innerHeight,
      minWidth: window.innerWidth,
      skyColor: 0x0,
      cloudColor: 0x6a7593,
      cloudShadowColor: 0x20205,
      sunColor: 0x0,
      sunGlareColor: 0x0,
      sunlightColor: 0x0,
    });

    // Ajusta el tamaño al cambiar la ventana
    const handleResize = () => {
      effect.setOptions({
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (effect) effect.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null; 
}
