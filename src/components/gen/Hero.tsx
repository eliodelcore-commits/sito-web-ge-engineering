import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-genginering-hero.png";
import bgDrives from "@/assets/home-bg-drives.jpg";

// Generate a regular triangulated grid (with subtle jitter) for the hero mesh.
// Deterministic — no animation, no re-renders.
const buildMesh = () => {
  const W = 400;
  const H = 600;
  const cols = 9;
  const rows = 14;
  const dx = W / cols;
  const dy = H / rows;
  const jitter = 4; // subtle organic offset

  // Deterministic pseudo-random
  const rand = (i: number, j: number) => {
    const s = Math.sin(i * 928.37 + j * 311.7) * 43758.5453;
    return s - Math.floor(s);
  };

  const pt = (i: number, j: number) => {
    // Offset every other row to create equilateral-ish triangles
    const ox = j % 2 === 0 ? 0 : dx / 2;
    // Pin border vertices so the mesh covers edges cleanly
    const isBorder = i === 0 || i === cols || j === 0 || j === rows;
    const jx = isBorder ? 0 : (rand(i, j) - 0.5) * jitter * 2;
    const jy = isBorder ? 0 : (rand(j, i) - 0.5) * jitter * 2;
    return [Math.round((i * dx + ox + jx) * 10) / 10, Math.round((j * dy + jy) * 10) / 10] as const;
  };

  const triangles: string[] = [];
  const nodes: { x: number; y: number }[] = [];

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const a = pt(i, j);
      const b = pt(i + 1, j);
      const c = pt(i, j + 1);
      const d = pt(i + 1, j + 1);
      triangles.push(`${a[0]},${a[1]} ${b[0]},${b[1]} ${d[0]},${d[1]}`);
      triangles.push(`${a[0]},${a[1]} ${d[0]},${d[1]} ${c[0]},${c[1]}`);
    }
  }

  for (let j = 0; j <= rows; j++) {
    for (let i = 0; i <= cols; i++) {
      const [x, y] = pt(i, j);
      nodes.push({ x, y });
    }
  }

  return { triangles, nodes, W, H };
};

const MESH = buildMesh();

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-16 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_7fr] min-h-[calc(100vh-4rem)]">
        {/* Left column: navbar background, logo + description */}
        <div className="relative bg-background flex flex-col px-6 md:px-10 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-12 overflow-hidden">
          {/* Decorative triangulated mesh — uniform, integrated, professional */}
          <svg
            viewBox={`0 0 ${MESH.W} ${MESH.H}`}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            className="pointer-events-none absolute inset-0 w-full h-full z-0"
          >
            <defs>
              {/* Diagonal fade — top-left bright, bottom-right soft */}
              <linearGradient id="meshFade" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.22" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
              </linearGradient>
              {/* Radial vignette to integrate edges with background */}
              <radialGradient id="meshVignette" cx="0.25" cy="0.2" r="0.95">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="70%" stopColor="white" stopOpacity="0.55" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="nodeGlow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </radialGradient>
              <mask id="meshMask">
                <rect width={MESH.W} height={MESH.H} fill="url(#meshVignette)" />
              </mask>
            </defs>

            <g mask="url(#meshMask)">
              {/* Uniform triangulated mesh */}
              <g
                fill="none"
                stroke="url(#meshFade)"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {MESH.triangles.map((pts, idx) => (
                  <polygon key={idx} points={pts} />
                ))}
              </g>

              {/* Nodes at every vertex — small, uniform */}
              <g fill="hsl(var(--primary))">
                {MESH.nodes.map((n, idx) => (
                  <circle
                    key={idx}
                    cx={n.x}
                    cy={n.y}
                    r={0.9}
                    opacity={0.55 - (n.x / MESH.W) * 0.35 - (n.y / MESH.H) * 0.15}
                  />
                ))}
              </g>

              {/* A few luminous accent nodes in the upper-left cluster */}
              <g>
                <circle cx={MESH.W * 0.18} cy={MESH.H * 0.08} r="6" fill="url(#nodeGlow)" opacity="0.5" />
                <circle cx={MESH.W * 0.42} cy={MESH.H * 0.14} r="7" fill="url(#nodeGlow)" opacity="0.4" />
                <circle cx={MESH.W * 0.28} cy={MESH.H * 0.22} r="5" fill="url(#nodeGlow)" opacity="0.35" />
              </g>
            </g>
          </svg>

          <div className="relative z-10 self-start mb-16 md:mb-24 lg:mb-28">
            <img
              src={logo}
              alt="GEENGINEERING SRL"
              className="h-20 sm:h-24 md:h-28 lg:h-36 xl:h-44 w-auto object-contain"
            />
          </div>

          <div className="relative z-10 inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Automazione Industriale
          </div>

          <h1 className="relative z-10 font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Soluzioni di
            <br />
            <span className="text-gradient-brand">automazione</span>
            <br />
            industriale
          </h1>

          <p className="relative z-10 text-base md:text-lg text-white max-w-xl mb-8 leading-relaxed">
            Hardware, software e wireless planning per l'industria.
            Progettiamo e realizziamo impianti di automazione con strumentazione
            all'avanguardia, inclusa la piattaforma Ekahau AI.
          </p>

          <div className="relative z-10 flex flex-wrap gap-4">
            <Link
              to="/servizi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Scopri i servizi
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
            >
              Contattaci
            </Link>
          </div>
        </div>

        {/* Right column: drives photo */}
        <div
          className="relative bg-cover bg-center min-h-[40vh] md:min-h-0"
          style={{ backgroundImage: `url(${bgDrives})` }}
          aria-hidden="true"
        >
          {/* Chiaroscuro overlay: dark on the left fading to transparent on the right */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, hsl(var(--background) / 0.97) 0%, hsl(var(--background) / 0.9) 35%, hsl(var(--background) / 0.55) 70%, hsl(var(--background) / 0.2) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
