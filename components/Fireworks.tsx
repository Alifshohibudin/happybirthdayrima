"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // ⬅️ pakai ini, bukan next/router

export default function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationId: number;
    let particles: any[] = [];

    // set ukuran canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function createFirework(x: number, y: number) {
      for (let i = 0; i < 50; i++) {
        particles.push({
          x,
          y,
          radius: Math.random() * 3,
          color: `hsl(${Math.random() * 360}, 100%, 50%)`,
          vx: (Math.random() - 0.5) * 6,
          vy: (Math.random() - 0.5) * 6,
          life: 100,
        });
      }
    }

    function animate() {
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
      });

      if (Math.random() < 0.05) {
        createFirework(
          Math.random() * canvas.width,
          Math.random() * (canvas.height / 2)
        );
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      particles = [];
    };
  }, []);

  return (
    <>
      {/* Fireworks canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-40"
      />

      {/* Tombol Home */}
      <div className="fixed bottom-10 left-0 right-0 flex justify-center z-50">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition"
        >
          ⬅️ Kembali ke Home
        </button>
      </div>
    </>
  );
}
