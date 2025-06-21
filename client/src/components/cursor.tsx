"use client";

import React, { useEffect, useRef } from "react";

const CIRCLE_SIZE = 24;
const NUM_CIRCLES = 20;

type CircleType = {
  x: number;
  y: number;
  ref: React.RefObject<HTMLDivElement>;
};

export default function Cursor() {
  const circles = useRef<CircleType[]>(
    Array(NUM_CIRCLES)
      .fill(0)
      .map(() => ({
        x: 0,
        y: 0,
        ref: React.createRef<HTMLDivElement>(),
      }))
  );

  const coords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    }
    window.addEventListener("mousemove", onMouseMove);

    const rootStyle = getComputedStyle(document.documentElement);
    const cssColors = [
      rootStyle.getPropertyValue("--foreground").trim(),
      rootStyle.getPropertyValue("--muted-cyan").trim(),
      rootStyle.getPropertyValue("--muted-blue").trim(),
    ];

    circles.current.forEach((circle, i) => {
      const el = circle.ref.current;
      if (el) {
        el.style.position = "fixed";
        el.style.width = `${CIRCLE_SIZE}px`;
        el.style.height = `${CIRCLE_SIZE}px`;
        el.style.borderRadius = "50%";
        el.style.pointerEvents = "none";
        el.style.zIndex = "99999999";
        el.style.top = "0px";
        el.style.left = "0px";
        el.style.transformOrigin = "center center";
        el.style.transition = "background-color 0.3s";
        el.style.backgroundColor = cssColors[i % cssColors.length];
      }
    });

    let animationFrameId: number;

    function animateCircles() {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.current.forEach((circle, i) => {
        const el = circle.ref.current;
        if (!el) return;

        el.style.left = `${x - CIRCLE_SIZE / 2}px`;
        el.style.top = `${y - CIRCLE_SIZE / 2}px`;

        const scale = (NUM_CIRCLES - i) / NUM_CIRCLES;
        el.style.transform = `scale(${scale})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles.current[i + 1] || circles.current[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      animationFrameId = requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {circles.current.map((circle, i) => (
        <div key={i} ref={circle.ref} />
      ))}
    </>
  );
}
