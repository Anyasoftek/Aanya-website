"use client"
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>();

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  useEffect(() => {
    const init = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!ctx) return;

      let w = ctx.canvas.width = window.innerWidth;
      let h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
      let nt = 0;

      const drawWave = (n: number) => {
        nt += getSpeed();
        for (let i = 0; i < n; i++) {
          ctx.beginPath();
          ctx.lineWidth = waveWidth || 50;
          ctx.strokeStyle = waveColors[i % waveColors.length];
          for (let x = 0; x < w; x += 5) {
            const y = noise(x / 800, 0.3 * i, nt) * 100;
            ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
          }
          ctx.stroke();
          ctx.closePath();
        }
      };

      const render = () => {
        ctx.fillStyle = backgroundFill || "black";
        ctx.globalAlpha = waveOpacity || 0.5;
        ctx.fillRect(0, 0, w, h);
        drawWave(5);
        animationIdRef.current = requestAnimationFrame(render);
      };

      window.onresize = function () {
        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
      };

      render();
    };

    init();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [blur, speed, waveWidth, waveOpacity, backgroundFill, noise, waveColors]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // Support for Safari browser
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center ${containerClassName}`}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={`relative z-10 ${className}`} {...props}>
        {children}
      </div>
    </div>
  );
};
