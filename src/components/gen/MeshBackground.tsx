import { useMemo } from "react";

interface MeshBackgroundProps {
  /** Tailwind className applied to the wrapper svg */
  className?: string;
  /** Triangulation density */
  cols?: number;
  rows?: number;
  /** 0 = static, otherwise enables a very slow ambient drift */
  animated?: boolean;
  /** Position of the brightest cluster, normalized 0-1 */
  focal?: { x: number; y: number };
}

/**
 * Decorative triangulated mesh background — uniform, integrated, professional.
 * Designed to sit behind page content (place wrapper as relative, mesh absolute, content z-10).
 */
const MeshBackground = ({
  className = "pointer-events-none absolute inset-0 w-full h-full z-0",
  cols = 9,
  rows = 14,
  animated = true,
  focal = { x: 0.25, y: 0.2 },
}: MeshBackgroundProps) => {
  const mesh = useMemo(() => {
    const W = 400;
    const H = 600;
    const dx = W / cols;
    const dy = H / rows;
    const jitter = 4;

    const rand = (i: number, j: number) => {
      const s = Math.sin(i * 928.37 + j * 311.7) * 43758.5453;
      return s - Math.floor(s);
    };

    const pt = (i: number, j: number) => {
      const ox = j % 2 === 0 ? 0 : dx / 2;
      const isBorder = i === 0 || i === cols || j === 0 || j === rows;
      const jx = isBorder ? 0 : (rand(i, j) - 0.5) * jitter * 2;
      const jy = isBorder ? 0 : (rand(j, i) - 0.5) * jitter * 2;
      return [
        Math.round((i * dx + ox + jx) * 10) / 10,
        Math.round((j * dy + jy) * 10) / 10,
      ] as const;
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
  }, [cols, rows]);

  // Stable but unique ids per instance (avoids gradient/mask collisions if multiple mounted)
  const uid = useMemo(() => Math.random().toString(36).slice(2, 8), []);
  const fadeId = `meshFade-${uid}`;
  const vignetteId = `meshVignette-${uid}`;
  const glowId = `nodeGlow-${uid}`;
  const maskId = `meshMask-${uid}`;
  const pulseId = `meshPulse-${uid}`;

  return (
    <svg
      viewBox={`0 0 ${mesh.W} ${mesh.H}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <defs>
        <linearGradient id={fadeId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.22" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
        </linearGradient>
        <radialGradient
          id={vignetteId}
          cx={focal.x}
          cy={focal.y}
          r="0.95"
        >
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="70%" stopColor="white" stopOpacity="0.55" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={glowId} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id={pulseId}
          cx="0.5"
          cy="0.5"
          r="0.5"
        >
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
          <stop offset="60%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <mask id={maskId}>
          <rect width={mesh.W} height={mesh.H} fill={`url(#${vignetteId})`} />
        </mask>
      </defs>

      {/* Slow ambient pulse — keeps the background alive without distracting */}
      {animated && (
        <g mask={`url(#${maskId})`} style={{ mixBlendMode: "screen" }}>
          <circle
            cx={mesh.W * focal.x}
            cy={mesh.H * focal.y}
            r={mesh.W * 0.55}
            fill={`url(#${pulseId})`}
            className="mesh-pulse"
          />
        </g>
      )}

      <g mask={`url(#${maskId})`}>
        <g
          fill="none"
          stroke={`url(#${fadeId})`}
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={animated ? "mesh-drift" : undefined}
          style={animated ? { transformOrigin: "50% 50%" } : undefined}
        >
          {mesh.triangles.map((pts, idx) => (
            <polygon key={idx} points={pts} />
          ))}
        </g>

        <g fill="hsl(var(--primary))">
          {mesh.nodes.map((n, idx) => (
            <circle
              key={idx}
              cx={n.x}
              cy={n.y}
              r={0.9}
              opacity={Math.max(
                0.08,
                0.55 - (n.x / mesh.W) * 0.35 - (n.y / mesh.H) * 0.15
              )}
              className={animated ? "mesh-node-twinkle" : undefined}
              style={
                animated
                  ? {
                      transformBox: "fill-box",
                      transformOrigin: "center",
                    }
                  : undefined
              }
            />
          ))}
        </g>

        <g>
          <circle
            cx={mesh.W * focal.x}
            cy={mesh.H * focal.y}
            r="6"
            fill={`url(#${glowId})`}
            opacity="0.5"
          />
          <circle
            cx={mesh.W * (focal.x + 0.18)}
            cy={mesh.H * (focal.y + 0.06)}
            r="7"
            fill={`url(#${glowId})`}
            opacity="0.4"
          />
          <circle
            cx={mesh.W * (focal.x + 0.05)}
            cy={mesh.H * (focal.y + 0.14)}
            r="5"
            fill={`url(#${glowId})`}
            opacity="0.35"
          />
        </g>
      </g>
    </svg>
  );
};

export default MeshBackground;