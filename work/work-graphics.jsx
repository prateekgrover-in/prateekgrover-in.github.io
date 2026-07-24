import { useState, useEffect, useRef } from "react";

// ─── KU Leuven: Master's CS ─── Abstract data flow / algorithm visualization
function KULeuvenGraphic() {
  const nodes = [];
  const links = [];
  // Create a layered neural-network-like graph
  const layers = [3, 5, 7, 5, 3];
  let id = 0;
  const layerNodes = [];
  layers.forEach((count, li) => {
    const row = [];
    for (let i = 0; i < count; i++) {
      const x = 40 + (li * 80);
      const y = 200 - ((count - 1) * 30) / 2 + i * 30;
      row.push({ id: id++, x, y, layer: li });
      nodes.push({ id: id - 1, x, y, layer: li });
    }
    layerNodes.push(row);
  });
  for (let l = 0; l < layerNodes.length - 1; l++) {
    layerNodes[l].forEach(a => {
      layerNodes[l + 1].forEach(b => {
        if (Math.random() > 0.3) links.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, id: `${a.id}-${b.id}` });
      });
    });
  }

  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <radialGradient id="ku-bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="100%" stopColor="#020810" />
        </radialGradient>
        <linearGradient id="ku-link" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e40af" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0.15" />
        </linearGradient>
        <filter id="ku-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="ku-glow-lg">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="400" height="400" fill="url(#ku-bg)" />
      {/* Grid pattern */}
      {Array.from({ length: 20 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 20} x2="400" y2={i * 20} stroke="#1e3a5f" strokeWidth="0.3" opacity="0.3" />
      ))}
      {Array.from({ length: 20 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="400" stroke="#1e3a5f" strokeWidth="0.3" opacity="0.3" />
      ))}
      {/* Floating binary streams */}
      {[60, 140, 260, 340].map((x, i) => (
        <g key={`stream${i}`} opacity="0.12">
          {Array.from({ length: 12 }).map((_, j) => (
            <circle key={j} cx={x + Math.sin(j * 0.8 + i) * 8} cy={30 + j * 30} r={1.5} fill="#60a5fa">
              <animate attributeName="opacity" values="0.2;1;0.2" dur={`${2 + i * 0.5}s`} begin={`${j * 0.15}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
      ))}
      <g transform="translate(0, 0)">
        {links.map(l => (
          <line key={l.id} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="url(#ku-link)" strokeWidth="1.2">
            <animate attributeName="strokeOpacity" values="0.1;0.5;0.1" dur={`${2 + Math.random() * 2}s`} repeatCount="indefinite" />
          </line>
        ))}
        {nodes.map(n => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r="6" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" filter="url(#ku-glow)">
              <animate attributeName="r" values="5;7;5" dur={`${2.5 + n.layer * 0.3}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={n.x} cy={n.y} r="2.5" fill="#60a5fa" opacity="0.9">
              <animate attributeName="opacity" values="0.5;1;0.5" dur={`${1.5 + Math.random()}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </g>
      {/* Central pulsing orb */}
      <circle cx="200" cy="200" r="25" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" filter="url(#ku-glow-lg)">
        <animate attributeName="r" values="20;50;20" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.05;0.3" dur="4s" repeatCount="indefinite" />
      </circle>
      {/* Hexagonal frame */}
      <polygon points="200,30 350,115 350,285 200,370 50,285 50,115" fill="none" stroke="#1e40af" strokeWidth="1" opacity="0.25" />
      <polygon points="200,50 330,125 330,275 200,350 70,275 70,125" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.15" />
    </svg>
  );
}

// ─── BITS Pilani: Bachelor's EEE ─── Circuit board / electronics
function BITSPilaniGraphic() {
  const traces = [
    "M40,200 H120 V140 H200 V200 H280",
    "M40,160 H80 V100 H160 V160 H240 V100 H320",
    "M40,240 H100 V300 H180 V240 H260 V300 H340",
    "M40,280 H140 V340 H220 V280 H300 V340 H380",
    "M120,40 V120 H200 V60 H280 V140",
    "M280,200 H360",
    "M160,160 V220 H240 V160",
    "M60,320 H120 V360 H200",
  ];
  const chips = [
    { x: 180, y: 175, w: 50, h: 30 },
    { x: 80, y: 255, w: 40, h: 25 },
    { x: 270, y: 120, w: 45, h: 28 },
    { x: 300, y: 280, w: 35, h: 22 },
  ];
  const vias = [
    [120, 140], [200, 200], [280, 200], [100, 300], [180, 240], [260, 300],
    [160, 160], [240, 160], [80, 100], [320, 100], [140, 340], [220, 280], [360, 200],
  ];
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <radialGradient id="bits-bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#1a0f0a" />
          <stop offset="100%" stopColor="#0d0705" />
        </radialGradient>
        <filter id="bits-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="bits-glow-wide">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="400" height="400" fill="url(#bits-bg)" />
      {/* Substrate texture */}
      {Array.from({ length: 800 }).map((_, i) => (
        <circle key={i} cx={Math.random() * 400} cy={Math.random() * 400} r={0.4} fill="#2d1f14" opacity={Math.random() * 0.5} />
      ))}
      {/* PCB Traces */}
      {traces.map((d, i) => (
        <g key={i}>
          <path d={d} fill="none" stroke="#b45309" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" />
          <path d={d} fill="none" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
          <path d={d} fill="none" stroke="#fbbf24" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" filter="url(#bits-glow)">
            <animate attributeName="strokeOpacity" values="0.2;0.6;0.2" dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
          </path>
        </g>
      ))}
      {/* IC Chips */}
      {chips.map((c, i) => (
        <g key={`chip${i}`}>
          <rect x={c.x} y={c.y} width={c.w} height={c.h} rx="2" fill="#1a1a1a" stroke="#555" strokeWidth="0.8" />
          <rect x={c.x + 4} y={c.y + 4} width={c.w - 8} height={c.h - 8} rx="1" fill="none" stroke="#444" strokeWidth="0.5" />
          <circle cx={c.x + 6} cy={c.y + 6} r="1.5" fill="#333" />
          {/* Pins */}
          {Array.from({ length: Math.floor(c.w / 8) }).map((_, p) => (
            <g key={`p${p}`}>
              <rect x={c.x + 6 + p * 8} y={c.y - 5} width="2" height="5" fill="#d97706" opacity="0.6" />
              <rect x={c.x + 6 + p * 8} y={c.y + c.h} width="2" height="5" fill="#d97706" opacity="0.6" />
            </g>
          ))}
        </g>
      ))}
      {/* Vias */}
      {vias.map(([x, y], i) => (
        <g key={`via${i}`}>
          <circle cx={x} cy={y} r="5" fill="#1a0f0a" stroke="#d97706" strokeWidth="1.5" opacity="0.8" />
          <circle cx={x} cy={y} r="2" fill="#fbbf24" opacity="0.6">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
      {/* Capacitors & resistors */}
      {[[60, 200], [340, 200], [200, 340], [160, 80]].map(([x, y], i) => (
        <g key={`cap${i}`} transform={`translate(${x},${y}) rotate(${i % 2 === 0 ? 0 : 90})`}>
          <rect x="-6" y="-3" width="12" height="6" rx="1" fill="#2a1a0e" stroke="#92400e" strokeWidth="0.8" />
          <rect x="-4" y="-3" width="2" height="6" fill="#d97706" opacity="0.4" />
        </g>
      ))}
      {/* Energy pulse */}
      <circle cx="200" cy="200" r="4" fill="#fbbf24" opacity="0.5" filter="url(#bits-glow-wide)">
        <animate attributeName="r" values="4;80;4" dur="5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0;0.4" dur="5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

// ─── Atlas Copco: DevOps / K8s / Observability ───
function AtlasCopcoGraphic() {
  const hexPoints = (cx, cy, r) => {
    return Array.from({ length: 6 }).map((_, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    }).join(" ");
  };
  const pods = [
    { cx: 130, cy: 140 }, { cx: 200, cy: 140 }, { cx: 270, cy: 140 },
    { cx: 130, cy: 220 }, { cx: 200, cy: 220 }, { cx: 270, cy: 220 },
    { cx: 165, cy: 300 }, { cx: 235, cy: 300 },
  ];
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <radialGradient id="ac-bg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#0f1729" />
          <stop offset="100%" stopColor="#050a14" />
        </radialGradient>
        <linearGradient id="ac-pod" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
        <filter id="ac-glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="ac-clip">
          <rect width="400" height="400" rx="0" />
        </clipPath>
      </defs>
      <rect width="400" height="400" fill="url(#ac-bg)" />
      {/* Monitoring grid lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`mg${i}`} x1="0" y1={40 + i * 36} x2="400" y2={40 + i * 36} stroke="#1e293b" strokeWidth="0.5" opacity="0.5" />
      ))}
      {/* Live metrics wave */}
      {[0, 1, 2].map(wave => (
        <path key={`wave${wave}`}
          d={`M0,${60 + wave * 40} ${Array.from({ length: 20 }).map((_, i) =>
            `L${i * 22},${60 + wave * 40 + Math.sin(i * 0.6 + wave * 2) * 12}`
          ).join(" ")}`}
          fill="none" stroke={["#22d3ee", "#a78bfa", "#34d399"][wave]} strokeWidth="1.2" opacity="0.25">
          <animate attributeName="d"
            values={`M0,${60 + wave * 40} ${Array.from({ length: 20 }).map((_, i) =>
              `L${i * 22},${60 + wave * 40 + Math.sin(i * 0.6 + wave * 2) * 12}`).join(" ")};M0,${60 + wave * 40} ${Array.from({ length: 20 }).map((_, i) =>
              `L${i * 22},${60 + wave * 40 + Math.sin(i * 0.6 + wave * 2 + 2) * 12}`).join(" ")};M0,${60 + wave * 40} ${Array.from({ length: 20 }).map((_, i) =>
              `L${i * 22},${60 + wave * 40 + Math.sin(i * 0.6 + wave * 2) * 12}`).join(" ")}`
            dur={`${4 + wave}s`} repeatCount="indefinite" />
        </path>
      ))}
      {/* Kubernetes pods as hexagons */}
      {pods.map((p, i) => (
        <g key={`pod${i}`}>
          <polygon points={hexPoints(p.cx, p.cy, 28)} fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" opacity="0.85">
            <animate attributeName="strokeOpacity" values="0.5;1;0.5" dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
          </polygon>
          <polygon points={hexPoints(p.cx, p.cy, 18)} fill="none" stroke="#818cf8" strokeWidth="0.5" opacity="0.4" />
          {/* Inner ship wheel — K8s symbol */}
          <circle cx={p.cx} cy={p.cy} r="8" fill="none" stroke="#a5b4fc" strokeWidth="1" opacity="0.7" />
          {Array.from({ length: 7 }).map((_, s) => {
            const angle = (2 * Math.PI / 7) * s;
            return <line key={s} x1={p.cx} y1={p.cy} x2={p.cx + 8 * Math.cos(angle)} y2={p.cy + 8 * Math.sin(angle)}
              stroke="#a5b4fc" strokeWidth="0.8" opacity="0.5" />;
          })}
          <circle cx={p.cx} cy={p.cy} r="2.5" fill="#818cf8" opacity="0.8">
            <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
      {/* Connections between pods */}
      {[[0,1],[1,2],[0,3],[1,4],[2,5],[3,4],[4,5],[3,6],[4,6],[4,7],[5,7]].map(([a,b], i) => (
        <line key={`conn${i}`} x1={pods[a].cx} y1={pods[a].cy} x2={pods[b].cx} y2={pods[b].cy}
          stroke="#6366f1" strokeWidth="0.8" opacity="0.2" strokeDasharray="4,4">
          <animate attributeName="strokeDashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
        </line>
      ))}
      {/* Alerting pulse rings */}
      {[{ cx: 340, cy: 80, color: "#22d3ee" }, { cx: 60, cy: 350, color: "#f87171" }].map((a, i) => (
        <g key={`alert${i}`}>
          <circle cx={a.cx} cy={a.cy} r="6" fill={a.color} opacity="0.8" filter="url(#ac-glow)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx={a.cx} cy={a.cy} r="6" fill="none" stroke={a.color} strokeWidth="1" opacity="0.5">
            <animate attributeName="r" values="6;30;6" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
}

// ─── imec: ML + Biology ─── Cells with neural network overlay
function ImecGraphic() {
  const cells = [
    { cx: 120, cy: 160, r: 40 }, { cx: 250, cy: 130, r: 35 },
    { cx: 180, cy: 260, r: 45 }, { cx: 310, cy: 240, r: 30 },
    { cx: 80, cy: 300, r: 28 }, { cx: 330, cy: 340, r: 32 },
    { cx: 200, cy: 80, r: 25 }, { cx: 60, cy: 200, r: 20 },
  ];
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <radialGradient id="imec-bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0a1a12" />
          <stop offset="100%" stopColor="#040d08" />
        </radialGradient>
        <radialGradient id="cell-grad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#065f46" stopOpacity="0.3" />
          <stop offset="60%" stopColor="#064e3b" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#022c22" stopOpacity="0.05" />
        </radialGradient>
        <filter id="imec-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="imec-soft">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect width="400" height="400" fill="url(#imec-bg)" />
      {/* Microscopy-style speckle */}
      {Array.from({ length: 500 }).map((_, i) => (
        <circle key={i} cx={Math.random() * 400} cy={Math.random() * 400} r={0.5 + Math.random() * 0.5}
          fill="#10b981" opacity={Math.random() * 0.08} />
      ))}
      {/* Biological cells */}
      {cells.map((c, i) => (
        <g key={`cell${i}`}>
          {/* Cell body glow */}
          <circle cx={c.cx} cy={c.cy} r={c.r + 8} fill="#10b981" opacity="0.04" filter="url(#imec-soft)" />
          {/* Cell membrane */}
          <ellipse cx={c.cx} cy={c.cy} rx={c.r} ry={c.r * 0.85}
            fill="url(#cell-grad)" stroke="#10b981" strokeWidth="1.2" opacity="0.6"
            transform={`rotate(${i * 25}, ${c.cx}, ${c.cy})`}>
            <animate attributeName="rx" values={`${c.r};${c.r + 2};${c.r}`} dur={`${5 + i}s`} repeatCount="indefinite" />
          </ellipse>
          {/* Nucleus */}
          <ellipse cx={c.cx - c.r * 0.1} cy={c.cy - c.r * 0.1} rx={c.r * 0.3} ry={c.r * 0.25}
            fill="#059669" opacity="0.4" transform={`rotate(${i * 15}, ${c.cx}, ${c.cy})`} />
          {/* Organelles */}
          {Array.from({ length: 4 }).map((_, j) => {
            const angle = (j / 4) * Math.PI * 2 + i;
            const dist = c.r * 0.5;
            return <circle key={j} cx={c.cx + Math.cos(angle) * dist} cy={c.cy + Math.sin(angle) * dist}
              r={2} fill="#34d399" opacity="0.3" />;
          })}
        </g>
      ))}
      {/* Neural network overlay connecting cells */}
      {cells.map((c1, i) => cells.slice(i + 1).filter((c2) => {
        const d = Math.hypot(c1.cx - c2.cx, c1.cy - c2.cy);
        return d < 180;
      }).map((c2, j) => (
        <line key={`n${i}-${j}`} x1={c1.cx} y1={c1.cy} x2={c2.cx} y2={c2.cy}
          stroke="#a78bfa" strokeWidth="0.8" opacity="0.2" strokeDasharray="3,6">
          <animate attributeName="strokeDashoffset" values="0;9" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
        </line>
      )))}
      {/* ML activation points */}
      {cells.map((c, i) => (
        <circle key={`ml${i}`} cx={c.cx} cy={c.cy} r="4" fill="#a78bfa" opacity="0.6" filter="url(#imec-glow)">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {/* Floating data particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <circle key={`dp${i}`} cx={50 + i * 22} cy={370} r="1.5" fill="#6ee7b7" opacity="0.4">
          <animate attributeName="cy" values={`${370};${30 + Math.random() * 50};${370}`} dur={`${6 + i * 0.5}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.6;0" dur={`${6 + i * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

// ─── Nokia Bell Labs: Network Topology ───
function NokiaGraphic() {
  const mainNodes = [
    { x: 200, y: 80, size: 14 },
    { x: 100, y: 170, size: 10 }, { x: 300, y: 170, size: 10 },
    { x: 60, y: 270, size: 8 }, { x: 160, y: 260, size: 8 },
    { x: 240, y: 260, size: 8 }, { x: 340, y: 270, size: 8 },
  ];
  const leafNodes = [
    { x: 30, y: 340, p: 3 }, { x: 80, y: 350, p: 3 }, { x: 110, y: 330, p: 4 },
    { x: 150, y: 340, p: 4 }, { x: 190, y: 350, p: 4 }, { x: 220, y: 330, p: 5 },
    { x: 260, y: 345, p: 5 }, { x: 300, y: 335, p: 6 }, { x: 340, y: 350, p: 6 },
    { x: 370, y: 330, p: 6 },
  ];
  const edges = [
    [0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6],
  ];
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <radialGradient id="nk-bg" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#1a0a2e" />
          <stop offset="100%" stopColor="#0a0518" />
        </radialGradient>
        <filter id="nk-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="nk-edge" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#nk-bg)" />
      {/* Signal wave background */}
      {[0, 1, 2, 3].map(w => (
        <path key={`sw${w}`}
          d={`M0,${100 + w * 50} Q100,${80 + w * 50} 200,${100 + w * 50} T400,${100 + w * 50}`}
          fill="none" stroke="#7c3aed" strokeWidth="0.5" opacity="0.1">
          <animate attributeName="d"
            values={`M0,${100 + w * 50} Q100,${80 + w * 50} 200,${100 + w * 50} T400,${100 + w * 50};M0,${100 + w * 50} Q100,${120 + w * 50} 200,${100 + w * 50} T400,${100 + w * 50};M0,${100 + w * 50} Q100,${80 + w * 50} 200,${100 + w * 50} T400,${100 + w * 50}`}
            dur={`${5 + w}s`} repeatCount="indefinite" />
        </path>
      ))}
      {/* Tree edges */}
      {edges.map(([a, b], i) => (
        <line key={`e${i}`} x1={mainNodes[a].x} y1={mainNodes[a].y} x2={mainNodes[b].x} y2={mainNodes[b].y}
          stroke="url(#nk-edge)" strokeWidth="2" />
      ))}
      {/* Leaf connections */}
      {leafNodes.map((l, i) => (
        <line key={`le${i}`} x1={mainNodes[l.p].x} y1={mainNodes[l.p].y} x2={l.x} y2={l.y}
          stroke="#7c3aed" strokeWidth="0.8" opacity="0.3" />
      ))}
      {/* Data packets traveling */}
      {edges.map(([a, b], i) => (
        <circle key={`pkt${i}`} r="2.5" fill="#e9d5ff" opacity="0.8" filter="url(#nk-glow)">
          <animateMotion dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite"
            path={`M${mainNodes[a].x},${mainNodes[a].y} L${mainNodes[b].x},${mainNodes[b].y}`} />
        </circle>
      ))}
      {/* Main nodes */}
      {mainNodes.map((n, i) => (
        <g key={`mn${i}`}>
          <circle cx={n.x} cy={n.y} r={n.size + 4} fill="#7c3aed" opacity="0.1" filter="url(#nk-glow)" />
          <circle cx={n.x} cy={n.y} r={n.size} fill="#1e1033" stroke="#a78bfa" strokeWidth="1.5" />
          {/* Router icon */}
          <circle cx={n.x} cy={n.y} r={n.size * 0.4} fill="#c084fc" opacity="0.7">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
          {Array.from({ length: 4 }).map((_, s) => {
            const ang = (s / 4) * Math.PI * 2;
            return <line key={s} x1={n.x} y1={n.y}
              x2={n.x + Math.cos(ang) * n.size * 0.8} y2={n.y + Math.sin(ang) * n.size * 0.8}
              stroke="#c084fc" strokeWidth="1" opacity="0.5" />;
          })}
        </g>
      ))}
      {/* Leaf nodes */}
      {leafNodes.map((l, i) => (
        <g key={`ln${i}`}>
          <rect x={l.x - 5} y={l.y - 4} width="10" height="8" rx="1.5" fill="#1e1033" stroke="#a78bfa" strokeWidth="0.8" opacity="0.6" />
          <circle cx={l.x} cy={l.y} r="1.5" fill="#c084fc" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${1 + i * 0.2}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
      {/* Clustering circles */}
      <circle cx="80" cy="290" r="60" fill="none" stroke="#f472b6" strokeWidth="0.8" opacity="0.15" strokeDasharray="4,4" />
      <circle cx="200" cy="290" r="65" fill="none" stroke="#34d399" strokeWidth="0.8" opacity="0.15" strokeDasharray="4,4" />
      <circle cx="320" cy="290" r="55" fill="none" stroke="#fbbf24" strokeWidth="0.8" opacity="0.15" strokeDasharray="4,4" />
    </svg>
  );
}

// ─── Walmart: Supply Chain ─── Boxes, routes, bin packing
function WalmartGraphic() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <radialGradient id="wm-bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0c1a30" />
          <stop offset="100%" stopColor="#050e1c" />
        </radialGradient>
        <linearGradient id="wm-box" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <filter id="wm-glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="400" height="400" fill="url(#wm-bg)" />
      {/* Global route lines */}
      <path d="M40,200 Q120,120 200,180 T360,160" fill="none" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.3" strokeDasharray="8,4">
        <animate attributeName="strokeDashoffset" values="0;-24" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M30,250 Q150,180 250,230 T380,200" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.2" strokeDasharray="6,4">
        <animate attributeName="strokeDashoffset" values="0;-20" dur="4s" repeatCount="indefinite" />
      </path>
      <path d="M50,300 Q180,220 280,280 T370,250" fill="none" stroke="#22d3ee" strokeWidth="0.8" opacity="0.15" strokeDasharray="4,4">
        <animate attributeName="strokeDashoffset" values="0;-16" dur="3.5s" repeatCount="indefinite" />
      </path>
      {/* Hub nodes */}
      {[[80, 200], [200, 180], [320, 165], [140, 240], [260, 210]].map(([x, y], i) => (
        <g key={`hub${i}`}>
          <circle cx={x} cy={y} r="8" fill="#0c1a30" stroke="#0ea5e9" strokeWidth="1.5">
            <animate attributeName="r" values="7;9;7" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={x} cy={y} r="3" fill="#0ea5e9" opacity="0.7" />
        </g>
      ))}
      {/* 3D Bin Packing visualization */}
      <g transform="translate(110, 50)">
        {/* Container */}
        <path d="M0,120 L60,-10 L240,-10 L180,120 Z" fill="none" stroke="#475569" strokeWidth="1" opacity="0.4" />
        <path d="M240,-10 L240,70 L180,200 L180,120 Z" fill="none" stroke="#475569" strokeWidth="1" opacity="0.3" />
        <path d="M0,120 L0,200 L180,200 L180,120 Z" fill="none" stroke="#475569" strokeWidth="1" opacity="0.4" />
        {/* Packed boxes - isometric */}
        {/* Box 1 - large */}
        <path d="M5,195 L5,135 L50,105 L50,165 Z" fill="#f59e0b" opacity="0.6" stroke="#b45309" strokeWidth="0.5" />
        <path d="M5,135 L45,105 L90,105 L50,105 Z" fill="#fbbf24" opacity="0.5" stroke="#b45309" strokeWidth="0.5" />
        <path d="M50,105 L90,105 L90,165 L50,165 Z" fill="#d97706" opacity="0.5" stroke="#b45309" strokeWidth="0.5" />
        {/* Box 2 */}
        <path d="M55,195 L55,150 L90,130 L90,175 Z" fill="#0ea5e9" opacity="0.5" stroke="#0369a1" strokeWidth="0.5" />
        <path d="M55,150 L90,130 L125,130 L90,130 Z" fill="#22d3ee" opacity="0.4" stroke="#0369a1" strokeWidth="0.5" />
        <path d="M90,130 L130,130 L130,175 L90,175 Z" fill="#06b6d4" opacity="0.45" stroke="#0369a1" strokeWidth="0.5" />
        {/* Box 3 */}
        <path d="M95,195 L95,160 L120,145 L120,180 Z" fill="#a78bfa" opacity="0.5" stroke="#6d28d9" strokeWidth="0.5" />
        <path d="M120,145 L155,145 L155,180 L120,180 Z" fill="#7c3aed" opacity="0.45" stroke="#6d28d9" strokeWidth="0.5" />
        {/* Box 4 - top layer */}
        <path d="M5,130 L5,90 L40,70 L40,110 Z" fill="#34d399" opacity="0.5" stroke="#059669" strokeWidth="0.5" />
        <path d="M40,70 L80,70 L80,110 L40,110 Z" fill="#10b981" opacity="0.45" stroke="#059669" strokeWidth="0.5" />
        {/* Box 5 */}
        <path d="M45,130 L45,100 L75,85 L75,115 Z" fill="#fb7185" opacity="0.5" stroke="#be123c" strokeWidth="0.5" />
        <path d="M75,85 L105,85 L105,115 L75,115 Z" fill="#f43f5e" opacity="0.45" stroke="#be123c" strokeWidth="0.5" />
      </g>
      {/* Data flow particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <circle key={`part${i}`} r="2" fill="#fbbf24" opacity="0.7" filter="url(#wm-glow)">
          <animateMotion dur={`${3 + i * 0.5}s`} repeatCount="indefinite"
            path={`M40,${200 + i * 8} Q${120 + i * 10},${140 - i * 5} ${200 + i * 15},${180 + i * 3} T${360 - i * 5},${160 + i * 4}`} />
        </circle>
      ))}
      {/* Bottom: database rows */}
      <g transform="translate(60, 320)">
        {Array.from({ length: 6 }).map((_, i) => (
          <g key={`row${i}`}>
            <rect x={0} y={i * 11} width={280} height="9" rx="1.5" fill="#0f172a" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.6" />
            {[0, 60, 140, 200, 240].map((col, j) => (
              <rect key={j} x={col + 2} y={i * 11 + 2.5} width={[55, 75, 55, 35, 35][j]} height="4" rx="1"
                fill={j === 0 ? "#0ea5e9" : "#1e3a5f"} opacity={j === 0 ? 0.3 : 0.2}>
                <animate attributeName="opacity" values={`${0.15 + j * 0.05};${0.3 + j * 0.05};${0.15 + j * 0.05}`}
                  dur={`${2 + i * 0.3}s`} begin={`${j * 0.2}s`} repeatCount="indefinite" />
              </rect>
            ))}
          </g>
        ))}
      </g>
    </svg>
  );
}

// ─── Flatiron Institute: Generative Models + Cell Biology ───
function FlatironGraphic() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <radialGradient id="fi-bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#1a0a2e" />
          <stop offset="100%" stopColor="#0d0518" />
        </radialGradient>
        <filter id="fi-glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="fi-soft">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <rect width="400" height="400" fill="url(#fi-bg)" />
      {/* Microscopy background grid */}
      {Array.from({ length: 16 }).map((_, i) => (
        <g key={`grid${i}`}>
          <line x1={i * 25} y1="0" x2={i * 25} y2="400" stroke="#2d1b4e" strokeWidth="0.3" opacity="0.4" />
          <line x1="0" y1={i * 25} x2="400" y2={i * 25} stroke="#2d1b4e" strokeWidth="0.3" opacity="0.4" />
        </g>
      ))}
      {/* Cell lineage tree */}
      <g>
        {/* Generation 0 */}
        <circle cx="200" cy="60" r="18" fill="none" stroke="#f472b6" strokeWidth="1.5" opacity="0.7" />
        <circle cx="200" cy="60" r="7" fill="#f472b6" opacity="0.3" />
        {/* Division lines */}
        <line x1="200" y1="78" x2="130" y2="130" stroke="#f472b6" strokeWidth="1" opacity="0.4" />
        <line x1="200" y1="78" x2="270" y2="130" stroke="#f472b6" strokeWidth="1" opacity="0.4" />
        {/* Generation 1 */}
        <circle cx="130" cy="145" r="14" fill="none" stroke="#a78bfa" strokeWidth="1.5" opacity="0.7" />
        <circle cx="130" cy="145" r="5" fill="#a78bfa" opacity="0.3" />
        <circle cx="270" cy="145" r="14" fill="none" stroke="#a78bfa" strokeWidth="1.5" opacity="0.7" />
        <circle cx="270" cy="145" r="5" fill="#a78bfa" opacity="0.3" />
        {/* More division lines */}
        <line x1="130" y1="159" x2="85" y2="210" stroke="#a78bfa" strokeWidth="0.8" opacity="0.35" />
        <line x1="130" y1="159" x2="170" y2="210" stroke="#a78bfa" strokeWidth="0.8" opacity="0.35" />
        <line x1="270" y1="159" x2="230" y2="210" stroke="#a78bfa" strokeWidth="0.8" opacity="0.35" />
        <line x1="270" y1="159" x2="315" y2="210" stroke="#a78bfa" strokeWidth="0.8" opacity="0.35" />
        {/* Generation 2 */}
        {[85, 170, 230, 315].map((x, i) => (
          <g key={`g2-${i}`}>
            <circle cx={x} cy="225" r="11" fill="none" stroke="#818cf8" strokeWidth="1.2" opacity="0.6" />
            <circle cx={x} cy="225" r="4" fill="#818cf8" opacity="0.25" />
          </g>
        ))}
        {/* Generation 3 */}
        {[55, 110, 145, 195, 210, 255, 295, 340].map((x, i) => (
          <g key={`g3-${i}`}>
            <line x1={[85, 85, 170, 170, 230, 230, 315, 315][i]} y1="236"
              x2={x} y2="280" stroke="#818cf8" strokeWidth="0.6" opacity="0.25" />
            <circle cx={x} cy="290" r="8" fill="none" stroke="#6366f1" strokeWidth="1" opacity="0.5">
              <animate attributeName="r" values="7;9;7" dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={x} cy="290" r="3" fill="#6366f1" opacity="0.2" />
          </g>
        ))}
      </g>
      {/* Generative model: noise → synthetic cell */}
      <g transform="translate(50, 330)">
        {/* Noise field */}
        {Array.from({ length: 30 }).map((_, i) => (
          <circle key={`noise${i}`} cx={10 + Math.random() * 50} cy={10 + Math.random() * 40} r={1 + Math.random() * 2}
            fill="#c084fc" opacity={0.2 + Math.random() * 0.3}>
            <animate attributeName="opacity" values={`${0.1};${0.4};${0.1}`} dur={`${1 + Math.random() * 2}s`} repeatCount="indefinite" />
          </circle>
        ))}
        {/* Arrow */}
        <line x1="70" y1="30" x2="110" y2="30" stroke="#c084fc" strokeWidth="1.5" opacity="0.5" markerEnd="url(#arrow)" />
        <polygon points="110,25 120,30 110,35" fill="#c084fc" opacity="0.5" />
        {/* Synthetic cell output */}
        <circle cx="160" cy="30" r="20" fill="none" stroke="#f472b6" strokeWidth="1.5" opacity="0.6" />
        <circle cx="155" cy="26" r="6" fill="#f472b6" opacity="0.2" />
        {Array.from({ length: 5 }).map((_, i) => {
          const a = (i / 5) * Math.PI * 2;
          return <circle key={i} cx={160 + Math.cos(a) * 12} cy={30 + Math.sin(a) * 12} r="1.5" fill="#f9a8d4" opacity="0.3" />;
        })}
        {/* Another arrow */}
        <polygon points="190,25 200,30 190,35" fill="#c084fc" opacity="0.5" />
        <line x1="200" y1="30" x2="230" y2="30" stroke="#c084fc" strokeWidth="1.5" opacity="0.5" />
        {/* Tracked cell */}
        <circle cx="270" cy="30" r="18" fill="none" stroke="#34d399" strokeWidth="1.5" opacity="0.6" />
        <circle cx="266" cy="27" r="5" fill="#34d399" opacity="0.2" />
        {/* Crosshair */}
        <line x1="258" y1="30" x2="282" y2="30" stroke="#34d399" strokeWidth="0.5" opacity="0.4" />
        <line x1="270" y1="18" x2="270" y2="42" stroke="#34d399" strokeWidth="0.5" opacity="0.4" />
      </g>
      {/* Pulsing focus */}
      <circle cx="200" cy="200" r="50" fill="none" stroke="#c084fc" strokeWidth="0.5" opacity="0.15">
        <animate attributeName="r" values="50;120;50" dur="6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.15;0.02;0.15" dur="6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

// ─── UCF CRCV: Segmentation + Vision Transformers ───
function UCFGraphic() {
  // Segmentation mask grid
  const gridSize = 16;
  const maskData = [];
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const cx = 200, cy = 180;
      const dx = (x - gridSize / 2) * 16 + 8;
      const dy = (y - gridSize / 2) * 16 + 8;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let cls = 0;
      if (dist < 50) cls = 2;
      else if (dist < 90) cls = 1;
      else if (dist < 120 && Math.abs(dx) < 80) cls = 1;
      maskData.push({ x: dx + cx, y: dy + cy, cls });
    }
  }
  const colors = ["transparent", "#f472b640", "#06b6d450"];
  const borders = ["transparent", "#f472b6", "#06b6d4"];

  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <radialGradient id="ucf-bg" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#1c0a0a" />
          <stop offset="100%" stopColor="#0a0505" />
        </radialGradient>
        <filter id="ucf-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="400" height="400" fill="url(#ucf-bg)" />
      {/* Faint embryo-like shape background */}
      <ellipse cx="200" cy="180" rx="100" ry="85" fill="none" stroke="#dc2626" strokeWidth="0.8" opacity="0.1" />
      <ellipse cx="185" cy="170" rx="45" ry="40" fill="#dc2626" opacity="0.03" />
      {/* Segmentation mask grid */}
      {maskData.filter(d => d.cls > 0).map((d, i) => (
        <rect key={`mask${i}`} x={d.x - 7} y={d.y - 7} width="14" height="14"
          fill={colors[d.cls]} stroke={borders[d.cls]} strokeWidth="0.5" opacity="0.6" rx="1">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${3 + (i % 5) * 0.3}s`} repeatCount="indefinite" />
        </rect>
      ))}
      {/* Contour lines */}
      <ellipse cx="200" cy="180" rx="50" ry="42" fill="none" stroke="#f87171" strokeWidth="1.5" opacity="0.5" strokeDasharray="3,3">
        <animate attributeName="rx" values="48;52;48" dur="4s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="200" cy="180" rx="85" ry="70" fill="none" stroke="#fb923c" strokeWidth="1" opacity="0.3" strokeDasharray="3,3" />
      {/* Vision Transformer: patch embedding visualization */}
      <g transform="translate(30, 310)">
        {/* Patches */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={`patch${i}`}>
            <rect x={i * 22} y={0} width="18" height="18" rx="2" fill="#1c0a0a"
              stroke="#f97316" strokeWidth="0.8" opacity="0.5" />
            {/* Self-attention lines */}
            {Array.from({ length: 8 }).map((_, j) => (
              j !== i && Math.abs(j - i) < 4 ?
                <line key={`att${j}`} x1={i * 22 + 9} y1={9} x2={j * 22 + 9} y2={9}
                  stroke="#f97316" strokeWidth="0.3" opacity={0.15 / (1 + Math.abs(j - i))} /> : null
            ))}
          </g>
        ))}
        {/* Arrow to output */}
        <line x1="190" y1="9" x2="220" y2="9" stroke="#f97316" strokeWidth="1" opacity="0.4" />
        <polygon points="220,5 228,9 220,13" fill="#f97316" opacity="0.4" />
        {/* Predicted mask */}
        <ellipse cx="270" cy="9" rx="28" ry="14" fill="#06b6d4" opacity="0.15" stroke="#06b6d4" strokeWidth="1" />
        <ellipse cx="265" cy="7" rx="12" ry="8" fill="#f472b6" opacity="0.15" stroke="#f472b6" strokeWidth="0.8" />
      </g>
      {/* U-Net skip connection arcs */}
      {[0, 1, 2].map(i => (
        <path key={`skip${i}`}
          d={`M${60 + i * 30},${320 + i * 8} Q${60 + i * 30 - 20},${280 - i * 15} ${60 + i * 30},${240 - i * 20}`}
          fill="none" stroke="#fbbf24" strokeWidth="0.6" opacity="0.2" strokeDasharray="2,3">
          <animate attributeName="strokeDashoffset" values="0;5" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
        </path>
      ))}
      {/* Distance map rings */}
      {[20, 40, 60, 80].map((r, i) => (
        <ellipse key={`dist${i}`} cx="200" cy="180" rx={r} ry={r * 0.85}
          fill="none" stroke="#fbbf24" strokeWidth="0.4" opacity={0.12 - i * 0.02} />
      ))}
      {/* Accuracy metric particle burst */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        return (
          <circle key={`acc${i}`} cx={340} cy={60} r="1.5" fill="#34d399" opacity="0.6" filter="url(#ucf-glow)">
            <animate attributeName="cx" values={`340;${340 + Math.cos(angle) * 30};340`} dur="3s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
            <animate attributeName="cy" values={`60;${60 + Math.sin(angle) * 30};60`} dur="3s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.8;0" dur="3s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
          </circle>
        );
      })}
    </svg>
  );
}

// ─── Label component ───
function Label({ title, subtitle, period, location, tags }) {
  return (
    <div className="mt-3 px-1">
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#94a3b8", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "4px" }}>
        {subtitle}
      </div>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", color: "#e2e8f0", fontWeight: 600, lineHeight: 1.3 }}>
        {title}
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#64748b", marginTop: "4px" }}>
        {period} · {location}
      </div>
      {tags && (
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map(t => (
            <span key={t} style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "9px",
              color: "#94a3b8", border: "1px solid #1e293b", borderRadius: "3px",
              padding: "1px 6px", background: "#0f172a"
            }}>{t}</span>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main App ───
export default function ExperienceGraphics() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const items = [
    {
      graphic: <KULeuvenGraphic />,
      title: "KU Leuven",
      subtitle: "Master's · Computer Science",
      period: "Sep 2023 – Jul 2026",
      location: "Leuven, Belgium",
      tags: null,
    },
    {
      graphic: <BITSPilaniGraphic />,
      title: "BITS Pilani",
      subtitle: "Bachelor's · Electrical & Electronics",
      period: "Aug 2018 – May 2022",
      location: "Rajasthan, India",
      tags: null,
    },
    {
      graphic: <AtlasCopcoGraphic />,
      title: "Atlas Copco Group",
      subtitle: "Platform & DevOps Engineer",
      period: "Oct 2025 – Present",
      location: "Antwerp, Belgium",
      tags: ["Kubernetes", "IoT", "Observability"],
    },
    {
      graphic: <ImecGraphic />,
      title: "imec",
      subtitle: "ML Research Intern",
      period: "Oct 2024 – Jun 2025",
      location: "Leuven, Belgium",
      tags: ["Deep Learning", "Biology", "Multimodal"],
    },
    {
      graphic: <NokiaGraphic />,
      title: "Nokia Bell Labs",
      subtitle: "Software Engineering Intern",
      period: "Jul 2024 – Aug 2024",
      location: "Antwerp, Belgium",
      tags: ["Microservices", "Clustering", "Networks"],
    },
    {
      graphic: <WalmartGraphic />,
      title: "Walmart Global Tech",
      subtitle: "Software Engineer",
      period: "Jul 2022 – Aug 2023",
      location: "Bengaluru, India",
      tags: ["Supply Chain", "Bin Packing", "Kafka"],
    },
    {
      graphic: <FlatironGraphic />,
      title: "Flatiron Institute",
      subtitle: "Summer Research Associate",
      period: "May 2022 – Jul 2022",
      location: "New York, USA",
      tags: ["Generative Models", "Cell Tracking"],
    },
    {
      graphic: <UCFGraphic />,
      title: "UCF · CRCV",
      subtitle: "Research Intern",
      period: "Dec 2021 – May 2022",
      location: "Florida, USA",
      tags: ["Segmentation", "U-Net", "ViT"],
    },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #020617 0%, #0a0f1e 50%, #020617 100%)",
      padding: "40px 20px",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
      }}>
        <div style={{
          textAlign: "center", marginBottom: "48px",
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "#475569",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}>Experience & Education</div>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "28px",
            fontWeight: 700,
            color: "#e2e8f0",
            margin: 0,
            letterSpacing: "-0.02em",
          }}>Visual Portfolio</h1>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "24px",
        }}>
          {items.map((item, idx) => (
            <div key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                background: hoveredIdx === idx
                  ? "linear-gradient(145deg, #0f172a, #1e293b)"
                  : "#0a101e",
                border: `1px solid ${hoveredIdx === idx ? "#1e3a5f" : "#111827"}`,
                borderRadius: "12px",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: hoveredIdx === idx ? "translateY(-4px)" : "none",
                boxShadow: hoveredIdx === idx
                  ? "0 20px 40px -12px rgba(0,0,0,0.6), 0 0 20px rgba(59,130,246,0.05)"
                  : "none",
                cursor: "default",
              }}>
              <div style={{
                width: "100%",
                aspectRatio: "1",
                overflow: "hidden",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: hoveredIdx === idx ? "scale(1.05)" : "scale(1)",
                }}>
                  {item.graphic}
                </div>
              </div>
              <div style={{ padding: "8px 12px 16px" }}>
                <Label {...item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
