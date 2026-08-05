import { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const ctx = canvas.getContext('2d');

    let mouseMoved = false;
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const params = {
      pointsNumber: 40,
      widthFactor: 10,
      spring: 0.25,
      friction: 0.5,
    };

    const trail = Array.from({ length: params.pointsNumber }, () => ({
      x: pointer.x,
      y: pointer.y,
      dx: 0,
      dy: 0,
    }));

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function updatePointer(x, y) {
      pointer.x = x;
      pointer.y = y;
    }

    const onMouseMove = (e) => {
      mouseMoved = true;
      updatePointer(e.clientX, e.clientY);
    };

    const onTouchMove = (e) => {
      mouseMoved = true;
      updatePointer(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let rafId;
    function animate(t) {
      if (!mouseMoved) {
        pointer.x = (0.5 + 0.3 * Math.cos(t * 0.002)) * window.innerWidth;
        pointer.y = (0.5 + 0.2 * Math.sin(t * 0.003)) * window.innerHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.forEach((p, i) => {
        const prev = i === 0 ? pointer : trail[i - 1];
        const spring = i === 0 ? params.spring * 0.4 : params.spring;

        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;

        p.x += p.dx;
        p.y += p.dy;
      });

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#a05d86');
      gradient.addColorStop(1, '#392273');

      ctx.strokeStyle = gradient;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = (trail[i].x + trail[i + 1].x) / 2;
        const yc = (trail[i].y + trail[i + 1].y) / 2;
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
      }

      ctx.stroke();
      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <canvas id="background-canvas" ref={canvasRef} />
      <div className="glassy-overlay" />
    </>
  );
}
