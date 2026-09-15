import { useEffect, useRef } from 'react';

interface CherryBlossomCanvasProps {
  enabled: boolean;
  isDark: boolean;
}

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  swayAmplitude: number;
  swayFrequency: number;
  swayOffset: number;
  colorType: number;
}

export function CherryBlossomCanvas({ enabled, isDark }: CherryBlossomCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const petalCount = window.innerWidth < 768 ? 24 : 45;
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedX: Math.random() * 0.8 + 0.3,
        speedY: Math.random() * 1.2 + 0.7,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.45 + 0.45,
        swayAmplitude: Math.random() * 1.5 + 0.8,
        swayFrequency: Math.random() * 0.02 + 0.01,
        swayOffset: Math.random() * Math.PI * 2,
        colorType: Math.floor(Math.random() * 3),
      });
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (enabled) {
        time += 1;

        for (let i = 0; i < petals.length; i++) {
          const p = petals[i];
          p.y += p.speedY;
          p.x += Math.sin(time * p.swayFrequency + p.swayOffset) * p.swayAmplitude + p.speedX;
          p.rotation += p.rotationSpeed;

          // Wrap around screen
          if (p.y > height + 20) {
            p.y = -20;
            p.x = Math.random() * width;
          }
          if (p.x > width + 20) {
            p.x = -20;
          } else if (p.x < -20) {
            p.x = width + 20;
          }

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);

          // Realistic cherry blossom petal shape (heart-like curved petal)
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size, p.size / 3, 0, p.size);
          ctx.bezierCurveTo(p.size, p.size / 3, p.size / 2, -p.size / 2, 0, 0);

          // Color choices: delicate pink, soft peach, gentle white-pink
          if (isDark) {
            if (p.colorType === 0) {
              ctx.fillStyle = `rgba(244, 114, 182, ${p.opacity * 0.85})`;
            } else if (p.colorType === 1) {
              ctx.fillStyle = `rgba(249, 168, 212, ${p.opacity * 0.75})`;
            } else {
              ctx.fillStyle = `rgba(251, 207, 232, ${p.opacity * 0.65})`;
            }
          } else {
            if (p.colorType === 0) {
              ctx.fillStyle = `rgba(244, 114, 182, ${p.opacity})`;
            } else if (p.colorType === 1) {
              ctx.fillStyle = `rgba(251, 146, 60, ${p.opacity * 0.6})`; // summer sunshine peach
            } else {
              ctx.fillStyle = `rgba(253, 230, 138, ${p.opacity * 0.55})`; // summer yellow breeze
            }
          }

          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled, isDark]);

  return (
    <canvas
      ref={canvasRef}
      id="cherry-blossom-canvas"
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-700"
      style={{ opacity: enabled ? 1 : 0 }}
      aria-hidden="true"
    />
  );
}
