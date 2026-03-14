import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  vx: number;
  vy: number;
}

const CursorEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onClick = (e: MouseEvent) => {
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12;
        const speed = 2 + Math.random() * 3;
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          size: 3 + Math.random() * 4,
          alpha: 1,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        });
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth cursor dot
      dot.current.x += (mouse.current.x - dot.current.x) * 0.15;
      dot.current.y += (mouse.current.y - dot.current.y) * 0.15;

      // Trailing dot
      const computedStyle = getComputedStyle(document.documentElement);
      const primaryHsl = computedStyle.getPropertyValue("--primary").trim();

      ctx.beginPath();
      ctx.arc(dot.current.x, dot.current.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${primaryHsl} / 0.35)`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${primaryHsl} / 0.7)`;
      ctx.fill();

      // Click particles
      particles.current = particles.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.02;
        p.size *= 0.97;

        if (p.alpha <= 0) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${primaryHsl} / ${p.alpha * 0.6})`;
        ctx.fill();
        return true;
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    />
  );
};

export default CursorEffect;
