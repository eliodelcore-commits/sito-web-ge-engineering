import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
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
  projectTo: string;
  projectLabel: string;
  rot: { x?: number; y?: number };
};

const faces: Face[] = [
  { img: hardwareImg, title: "Automazione Hardware", to: "/servizi/automazione-hardware", projectTo: "/progetti/revamping-confezionamento", projectLabel: "Revamping Confezionamento", rot: { y: 0 } },
  { img: softwareImg, title: "Automazione Software", to: "/servizi/automazione-software", projectTo: "/progetti/scada-chimico", projectLabel: "SCADA Chimico", rot: { y: 90 } },
  { img: wirelessImg, title: "Wireless Planning", to: "/servizi/wireless-planning", projectTo: "/progetti/wireless-survey", projectLabel: "Wireless Survey", rot: { y: 180 } },
  { img: assistenzaImg, title: "Assistenza Tecnica", to: "/servizi/assistenza-tecnica", projectTo: "/progetti/troubleshooting-wireless", projectLabel: "Troubleshooting Wireless", rot: { y: -90 } },
  { img: iotImg, title: "IoT Industriale", to: "/progetti/iot-industriale", projectTo: "/progetti", projectLabel: "Tutti i progetti", rot: { x: 90 } },
  { img: lineaImg, title: "Linea Automatizzata", to: "/progetti/linea-automatizzata", projectTo: "/progetti", projectLabel: "Tutti i progetti", rot: { x: -90 } },
];

const CubeShowcase = () => {
  const isMobile = useIsMobile();
  const SIZE = isMobile ? 220 : 320;
  const HALF = SIZE / 2;
  const navigate = useNavigate();
  const [dragging, setDragging] = useState(false);
  const [fading, setFading] = useState(false);
  const [expandingFace, setExpandingFace] = useState<string | null>(null);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const cubeRef = useRef<HTMLDivElement | null>(null);
  const rotXRef = useRef(-15);
  const rotYRef = useRef(20);
  const hoveringLinkRef = useRef(false);

  const applyTransform = () => {
    if (cubeRef.current) {
      cubeRef.current.style.transform = `translateZ(0) rotateX(${rotXRef.current}deg) rotateY(${rotYRef.current}deg)`;
    }
  };

  useEffect(() => {
    let last = performance.now();
    const loop = (t: number) => {
      const dt = Math.min((t - last) / 1000, 0.05);
      last = t;
      if (!draggingRef.current && !hoveringLinkRef.current) {
        rotYRef.current += dt * 18;
        applyTransform();
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    applyTransform();
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
    rotYRef.current += dx * 0.4;
    rotXRef.current = Math.max(-80, Math.min(80, rotXRef.current - dy * 0.4));
    applyTransform();
    lastPos.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = () => {
    setDragging(false);
    draggingRef.current = false;
    lastPos.current = null;
  };

  const handleNavigate = (e: React.MouseEvent, to: string, withEffect: boolean) => {
    e.preventDefault();
    if (movedRef.current || fading) return;
    if (!withEffect) {
      navigate(to);
      return;
    }
    const faceEl = (e.currentTarget as HTMLElement).closest("[data-face]") as HTMLElement | null;
    const faceImg = faceEl?.getAttribute("data-face") || null;
    setExpandingFace(faceImg);
    setFading(true);
    setTimeout(() => navigate(to), 800);
  };

  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      {expandingFace && (
        <div
          className="fixed inset-0 z-[100] bg-cover bg-center animate-cube-expand pointer-events-none"
          style={{ backgroundImage: `url(${expandingFace})`, willChange: "clip-path, transform, opacity", transform: "translateZ(0)" }}
        >
          <div className="absolute inset-0 bg-background/40" />
        </div>
      )}
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Esplora le nostre <span className="text-primary">soluzioni</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base px-4">
            Trascina il cubo per ruotarlo, clicca una faccia per scoprire il servizio o progetto collegato.
          </p>
        </div>

        <div
          className="mx-auto flex items-center justify-center select-none"
          style={{ perspective: "1200px", height: SIZE * 1.8 }}
        >
          <div
            ref={cubeRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className={`relative ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{
              width: SIZE,
              height: SIZE,
              transformStyle: "preserve-3d",
              touchAction: "none",
              willChange: "transform",
            }}
          >
            {faces.map((face) => (
              <div
                key={face.to}
                data-face={face.img}
                className="absolute inset-0 group"
                style={{
                  transform: `rotateX(${face.rot.x ?? 0}deg) rotateY(${face.rot.y ?? 0}deg) translateZ(${HALF}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <div
                  className="w-full h-full bg-cover bg-center relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${face.img})`,
                    border: "2px solid hsl(0 0% 5%)",
                    boxShadow:
                      "inset 0 0 0 1px hsl(0 0% 0% / 0.6), inset 0 0 24px hsl(0 0% 0% / 0.55), 0 0 18px hsl(0 0% 0% / 0.45)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/20 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-2">
                    <h3 className="font-display text-base font-bold text-white drop-shadow-lg leading-tight">
                      {face.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      <Link
                        to={face.to}
                        onClick={(e) => handleNavigate(e, face.to, true)}
                        className="text-primary text-[11px] uppercase tracking-wider font-semibold hover:underline pointer-events-auto"
                      >
                        Servizio →
                      </Link>
                      <Link
                        to={face.projectTo}
                        onClick={(e) => handleNavigate(e, face.projectTo, true)}
                        className="text-white/90 text-[11px] uppercase tracking-wider hover:text-primary pointer-events-auto"
                      >
                        Progetto: {face.projectLabel} →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CubeShowcase;