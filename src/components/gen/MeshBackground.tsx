import { useMemo } from "react";

interface MeshBackgroundProps {
  className?: string;
  /** Dot grid columns (kept for API compat; controls dot density horizontally) */
  cols?: number;
  /** Dot grid rows (kept for API compat; controls dot density vertically) */
  rows?: number;
  animated?: boolean;
  focal?: { x: number; y: number };
  /** kept for API compat — unused in dot-grid variant */
  strokeWidth?: number;
  /** Radius of the dots */
  nodeRadius?: number;
}

/**
 * Dot-grid background with an animated cyan wave passing across.
 * Dots use the theme's primary (lime-yellow); wave uses a complementary cyan.
 */
const MeshBackground = ({
  className = "pointer-events-none absolute inset-0 w-full h-full z-0",
  cols = 60,
  rows = 90,
  animated = true,
  focal = { x: 0.5, y: 0.5 },
  nodeRadius = 0.6,
}: MeshBackgroundProps) => {
  const { dots, W, H } = useMemo(() => {
    const W = 400;
    const H = 600;
    const dx = W / cols;
    const dy = H / rows;
    const arr: { x: number; y: number }[] = [];
    for (let j = 0; j <= rows; j++) {
      for (let i = 0; i <= cols; i++) {
        arr.push({
          x: Math.round(i * dx * 10) / 10,
          y: Math.round(j * dy * 10) / 10,
        });
      }
    }
    return { dots: arr, W, H };
  }, [cols, rows]);

  const uid = useMemo(() => Math.random().toString(36).slice(2, 8), []);
  const waveId = `wave-${uid}`;
  const waveMaskId = `waveMask-${uid}`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <defs>
        {/* Diagonal cyan wave gradient — soft, with bright crest.
            Oriented top-left → bottom-right (45° diagonal). */}
        <linearGradient id={waveId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(190 95% 55%)" stopOpacity="0" />
          <stop offset="46%" stopColor="hsl(190 95% 55%)" stopOpacity="0" />
          <stop offset="49.5%" stopColor="hsl(185 95% 60%)" stopOpacity="0.55" />
          <stop offset="50%" stopColor="hsl(180 100% 70%)" stopOpacity="0.9" />
          <stop offset="50.5%" stopColor="hsl(190 95% 60%)" stopOpacity="0.55" />
          <stop offset="54%" stopColor="hsl(200 95% 55%)" stopOpacity="0" />
          <stop offset="100%" stopColor="hsl(200 95% 55%)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Uniform dot grid — primary (lime-yellow) */}
      <g fill="hsl(var(--primary))" opacity="0.55">
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={nodeRadius} />
        ))}
      </g>

      {/* Cyan wave sweep — travels diagonally from top-left to bottom-right.
          Oversized rect so the crest can start fully off-screen (top-left)
          and end fully off-screen (bottom-right). */}
      {animated && (
        <g style={{ mixBlendMode: "screen" }}>
          <rect
            x={-W}
            y={-H}
            width={W * 3}
            height={H * 3}
            fill={`url(#${waveId})`}
            className="mesh-wave"
          />
        </g>
      )}
    </svg>
  );
};

export default MeshBackground;
