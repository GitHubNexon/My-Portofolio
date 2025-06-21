"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let width: number;
    let height: number;
    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    let points: any[] = [];
    let target = { x: 0, y: 0 };
    let animateHeader = true;

    function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = { x: width / 2, y: height / 2 };

      if (!canvasRef.current || !headerRef.current) return;

      canvas = canvasRef.current;
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext("2d")!;
      // headerRef.current.style.height = `${height}px`;
      headerRef.current.style.height = "100%";

      points = [];
      for (let x = 0; x < width; x += width / 20) {
        for (let y = 0; y < height; y += height / 20) {
          const px = x + (Math.random() * width) / 20;
          const py = y + (Math.random() * height) / 20;
          const p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      for (let i = 0; i < points.length; i++) {
        const closest: any[] = [];
        const p1 = points[i];
        for (let j = 0; j < points.length; j++) {
          const p2 = points[j];
          if (p1 === p2) continue;
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed && !closest[k]) {
              closest[k] = p2;
              placed = true;
            }
          }
          for (let k = 0; k < 5; k++) {
            if (!placed && getDistance(p1, p2) < getDistance(p1, closest[k])) {
              closest[k] = p2;
              placed = true;
            }
          }
        }
        p1.closest = closest;
      }

      for (let i in points) {
        points[i].circle = new Circle(
          points[i],
          2 + Math.random() * 2,
          "rgba(255,255,255,0.3)"
        );
      }
    }

    function mouseMove(e: MouseEvent) {
      target.x = e.clientX;
      target.y = e.clientY;
    }

    function scrollCheck() {
      animateHeader = window.scrollY <= height;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (headerRef.current) headerRef.current.style.height = `${height}px`;
      canvas.width = width;
      canvas.height = height;
    }

    function animate() {
      if (!ctx || !animateHeader) return requestAnimationFrame(animate);

      ctx.clearRect(0, 0, width, height);
      for (let i in points) {
        const p = points[i];
        const dist = getDistance(target, p);
        p.active =
          dist < 4000 ? 0.3 : dist < 20000 ? 0.1 : dist < 40000 ? 0.02 : 0;
        p.circle.active = p.active * 2;
        drawLines(p);
        p.circle.draw();
      }
      requestAnimationFrame(animate);
    }

    function shiftPoint(p: any) {
      gsap.to(p, {
        duration: 1 + Math.random(),
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: "circ.inOut",
        onComplete: () => shiftPoint(p),
      });
    }

    function drawLines(p: any) {
      if (!p.active || !ctx) return;
      for (let i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
        ctx.stroke();
      }
    }

    class Circle {
      pos: any;
      radius: number;
      color: string;
      active: number = 0;
      constructor(pos: any, rad: number, color: string) {
        this.pos = pos;
        this.radius = rad;
        this.color = color;
      }
      draw() {
        if (!this.active || !ctx) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(156,217,249,${this.active})`;
        ctx.fill();
      }
    }

    function getDistance(p1: any, p2: any) {
      return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
    }

    initHeader();
    animate();
    points.forEach(shiftPoint);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    // <div
    //   ref={headerRef}
    //   id="large-header"
    //   style={{
    //     position: "relative",
    //     width: "100%",
    //     background: "#333446",
    //     overflow: "hidden",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center center",
    //     zIndex: 1,
    //   }}
    // >
    <div
      ref={headerRef}
      id="large-header"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        zIndex: 1,
        pointerEvents: "none", // Optional: ensures it doesn't block clicks
      }}
    >
      <canvas ref={canvasRef} id="demo-canvas" style={{ display: "block" }} />
    </div>
  );
};

export default InteractiveBackground;
