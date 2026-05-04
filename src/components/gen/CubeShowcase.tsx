import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import hardwareImg from "@/assets/automazione-hardware-hero.jpg";
import softwareImg from "@/assets/automazione-software-hero.jpg";
import wirelessImg from "@/assets/wireless-hero.jpg";
import assistenzaImg from "@/assets/assistenza-remota.jpg";
import iotImg from "@/assets/iot-bg.jpg";
import lineaImg from "@/assets/linea-bg.jpg";

type Face = {
  img: string;
  title: string;
  to: string;
  transform: string;
};

const SIZE = 320;
const HALF = SIZE / 2;

const faces: Face[] = [
  { img: hardwareImg, title: "Automazione Hardware", to: "/servizi/automazione-hardware", transform: `rotateY(0deg) translateZ(${HALF}px)` },
  { img: softwareImg, title: "Automazione Software", to: "/servizi/automazione-software", transform: `rotateY(90deg) translateZ(${HALF}px)` },
  { img: wirelessImg, title: "Wireless Planning", to: "/servizi/wireless-planning", transform: `rotateY(180deg) translateZ(${HALF}px)` },
  { img: assistenzaImg, title: "Assistenza Tecnica", to: "/servizi/assistenza-tecnica", transform: `rotateY(-90deg) translateZ(${HALF}px)` },
  { img: iotImg, title: "IoT Industriale", to: "/progetti/iot-industriale", transform: `rotateX(90deg) translateZ(${HALF}px)` },
  { img: lineaImg, title: "Linea Automatizzata", to: "/progetti/linea-automatizzata", transform: `rotateX(-90deg) translateZ(${HALF}px)` },
];

const CubeShowcase = () => {
  const [rotX, setRotX] = useState(-15);
  const [rotY, setRotY] = useState(20);
  const [dragging, setDragging] = useState(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);
  const draggingRef = useRef(false);
  const movedRef = useRef(false);

  useEffect(() => {
    let last = performance.now();
    const loop = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;
      if (!draggingRef.current) {
        setRotY((y) => y + dt * 18);
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setDragging(true);
    draggingRef.current = true;
    movedRef.current = false;
    lastPos.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current || !lastPos.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    if (Math.abs(dx) + Math.abs(dy) > 4) movedRef.current = true;
    setRotY((y) => y + dx * 0.4);
    setRotX((x) => Math.max(-80, Math.min(80, x - dy * 0.4)));
    lastPos.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = () => {
    setDragging(false);
    draggingRef.current = false;
    lastPos.current = null;
  };

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Esplora le nostre <span className="text-primary">soluzioni</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trascina il cubo per ruotarlo, clicca una faccia per scoprire il servizio o progetto collegato.
          </p>
        </div>

        <div
          className="mx-auto flex items-center justify-center select-none"
          style={{ perspective: "1200px", height: SIZE * 2 }}
        >
          <div
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className={`relative ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{
              width: SIZE,
              height: SIZE,
              transformStyle: "preserve-3d",
              transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
              transition: dragging ? "none" : "transform 0.1s linear",
              touchAction: "none",
            }}
          >
            {faces.map((face) => (
              <Link
                key={face.to}
                to={face.to}
                onClick={(e) => {
                  if (movedRef.current) e.preventDefault();
                }}
                className="absolute inset-0 block group"
                style={{
                  transform: face.transform,
                  backfaceVisibility: "hidden",
                }}
              >
                <div
                  className="w-full h-full bg-cover bg-center border-2 border-primary/40 shadow-[0_0_40px_rgba(191,255,0,0.15)] relative overflow-hidden"
                  style={{ backgroundImage: `url(${face.img})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/20 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-lg font-bold text-white drop-shadow-lg">
                      {face.title}
                    </h3>
                    <span className="text-primary text-xs uppercase tracking-wider">
                      Scopri →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CubeShowcase;