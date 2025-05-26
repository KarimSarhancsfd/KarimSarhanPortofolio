import React, { useRef, useEffect } from "react";
import styles from "./sunParticles.module.css";

const tau = Math.PI * 2;

function SunParticles() {
  const fgRef = useRef(null);

  useEffect(() => {
    let animationId;
    const container = fgRef.current.parentElement;
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    let rad = Math.min(width * (height / width) * 0.35, 100);
    let midX = (width / 2) | 0;
    let midY = (height / 2) | 0;
    let counter = 0;

    const fg = fgRef.current;
    const engine = fg.getContext("2d");

    fg.width = width;
    fg.height = height;

    function buildFade() {
      const fade = engine.createRadialGradient(
        midX,
        midY,
        rad,
        midX,
        midY,
        rad * 1.2
      );
      fade.addColorStop(0, "#fff");
      fade.addColorStop(1, "rgba(0,0,0,0)");
      return fade;
    }
    const fadeMask = buildFade();

    const elementConfig = [
      {
        opa: 0.5,
        life: 10,
        every: 10,
        count: 1,
        size: 1.5,
        light: false,
        move: 2,
        cut: true,
      },
      {
        opa: 0.3,
        life: 3,
        every: 5,
        count: 3,
        size: 0.3,
        light: true,
        move: 1,
        cut: true,
      },
      {
        opa: 0.15,
        life: 1,
        every: 1,
        count: 50,
        size: 0.1,
        light: true,
        move: 2,
        cut: false,
      },
    ];
    const elements = new Array(3).fill(null).map(() => new Map());

    function randomMid() {
      const dist = Math.random() * rad;
      const deg = Math.random() * tau;
      const x = midX + Math.cos(deg) * dist;
      const y = midY + Math.sin(deg) * dist;
      return { x, y };
    }
    function buildElement(config) {
      const points = [];
      const mid = randomMid();
      let dist;
      let deg = Math.random() * 0.1;
      while (deg < tau) {
        deg += Math.random() + 0.1;
        dist = rad * (config.size * 0.3 + (Math.random() * config.size) / 0.7);
        points.push({
          x: mid.x + Math.cos(deg) * dist,
          y: mid.y + Math.sin(deg) * dist,
        });
      }
      const h = (Math.random() * 60) | 0;
      const s = (90 + Math.random() * 10) | 0;
      const l = (50 + Math.random() * 20) | 0;
      const opaAdd = (1 / config.life) * 0.1;
      const moveDeg = Math.random() * tau;
      const moveDist = 0.01 * (0.01 + Math.random()) * config.move * rad;
      const move = {
        x: Math.cos(moveDeg) * moveDist,
        y: Math.sin(moveDeg) * moveDist,
      };
      return {
        step: 0,
        h,
        s,
        l,
        opacity: 0,
        opaAdd,
        points,
        move,
        mode: Math.random(),
      };
    }
    function buildElements() {
      for (let i = 0; i < elementConfig.length; i++) {
        const config = elementConfig[i];
        if (counter % config.every === 0) {
          for (let c = 0; c < config.count; c++) {
            const element = buildElement(config);
            elements[i].set(element, element);
          }
        }
      }
    }
    function drawElements() {
      elements.forEach((elementMap, index) => {
        const config = elementConfig[index];
        engine.save();
        elementMap.forEach((e) => {
          if (config.light) {
            engine.globalCompositeOperation =
              e.mode < 0.5 ? "lighter" : "multiply";
          }
          engine.beginPath();
          engine.moveTo(
            e.points[0].x + e.move.x * e.step,
            e.points[0].y + e.move.y * e.step
          );
          for (let i = 1; i < e.points.length; i++) {
            engine.lineTo(
              e.points[i].x + e.move.x * e.step,
              e.points[i].y + e.move.y * e.step
            );
          }
          engine.fillStyle = `hsl(${e.h}, ${e.s}%, ${e.l}%)`;
          engine.globalAlpha = Math.sin(e.opacity) * config.opa;
          engine.closePath();
          engine.fill();
        });
        engine.restore();
        if (config.cut) {
          engine.save();
          engine.globalCompositeOperation = "destination-in";
          engine.fillStyle = fadeMask;
          engine.fillRect(0, 0, width, height);
          engine.restore();
        }
      });
    }
    function resolveElements() {
      elements.forEach((elementMap) => {
        elementMap.forEach((e) => {
          e.step++;
          e.opacity += e.opaAdd;
          if (e.opacity > Math.PI) {
            elementMap.delete(e);
          }
        });
      });
    }
    function tick() {
      counter++;
      engine.clearRect(0, 0, width, height);
      buildElements();
      resolveElements();
      drawElements();
      animationId = requestAnimationFrame(tick);
    }

    tick();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className={styles.sunParticles}>
      <canvas ref={fgRef} className={styles.fg} />
    </div>
  );
}

export default SunParticles;
