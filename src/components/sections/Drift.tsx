"use client";

import { useEffect, useRef, type RefObject } from "react";

import gsap from "gsap";
import { CINEMATIC_QUERY } from "@/lib/scroll";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  sway: number;
  phase: number;
  alpha: number;
}

interface DriftProps {
  /** 0..1 crossing progress — the field accelerates mid-journey */
  progressRef: RefObject<number>;
  activeRef: RefObject<boolean>;
}

/**
 * The dust of the other world: slow-rising motes of ivory light.
 * Pure canvas, capped particle count, sleeps when the gate is closed.
 */
export default function Drift({ progressRef, activeRef }: DriftProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add(CINEMATIC_QUERY, () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let w = 0;
      let h = 0;
      let raf = 0;
      const dpr = Math.min(devicePixelRatio || 1, 2);

      const particles: Particle[] = Array.from({ length: 110 }, () => ({
        x: Math.random(),
        y: Math.random(),
        size: 0.6 + Math.random() * 2,
        speed: 0.12 + Math.random() * 0.35,
        sway: 8 + Math.random() * 26,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.25 + Math.random() * 0.55,
      }));

      const resize = () => {
        w = canvas.clientWidth;
        h = canvas.clientHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(canvas);

      let t = 0;
      const loop = () => {
        raf = requestAnimationFrame(loop);
        if (!activeRef.current || w === 0) return;
        t += 1;

        const p = progressRef.current ?? 0;
        // gentle at the mouth of the gate, rushing mid-crossing, calm on arrival
        const rush = 1 + Math.sin(Math.min(Math.max((p - 0.25) / 0.55, 0), 1) * Math.PI) * 7;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);

        for (const m of particles) {
          m.y -= (m.speed * rush) / 900;
          if (m.y < -0.05) {
            m.y = 1.05;
            m.x = Math.random();
          }
          const x = m.x * w + Math.sin(t / 90 + m.phase) * m.sway;
          const y = m.y * h;
          ctx.beginPath();
          ctx.arc(x, y, m.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(246, 240, 227, ${m.alpha})`;
          ctx.fill();
        }
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
      };
    });
    return () => media.revert();
  }, [progressRef, activeRef]);

  return <canvas ref={canvasRef} className="absolute inset-0 size-full" aria-hidden />;
}
