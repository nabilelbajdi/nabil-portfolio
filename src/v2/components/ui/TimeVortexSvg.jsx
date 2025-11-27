import { useMemo } from 'react';

const ROMAN_NUMERALS = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

export function TimeVortexSvg({ className = '', showStars = false }) {
  const vortexArms = useMemo(() => {
    const arms = [];
    const armCount = 12;
    
    for (let a = 0; a < armCount; a++) {
      const baseAngle = (a / armCount) * Math.PI * 2;
      const points = [];
      const segments = 80;
      
      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const spiralAngle = baseAngle + t * Math.PI * 5;
        const radius = 380 - t * 350;
        const wobble = Math.sin(t * Math.PI * 8) * (25 - t * 22);
        const x = 400 + Math.cos(spiralAngle) * (radius + wobble);
        const y = 400 + Math.sin(spiralAngle) * (radius + wobble);
        points.push({ x, y, t });
      }
      
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        d += ` L ${points[i].x} ${points[i].y}`;
      }
      
      arms.push({ d, baseAngle, color: a % 2 === 0 ? 'cyan' : 'purple', width: a % 3 === 0 ? 8 : 5 });
    }
    
    return arms;
  }, []);

  const secondaryArms = useMemo(() => {
    const arms = [];
    const armCount = 16;
    
    for (let a = 0; a < armCount; a++) {
      const baseAngle = (a / armCount) * Math.PI * 2 + Math.PI / 16;
      const points = [];
      const segments = 50;
      
      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const spiralAngle = baseAngle + t * Math.PI * 4;
        const radius = 320 - t * 280;
        const x = 400 + Math.cos(spiralAngle) * radius;
        const y = 400 + Math.sin(spiralAngle) * radius;
        points.push({ x, y });
      }
      
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        d += ` L ${points[i].x} ${points[i].y}`;
      }
      
      arms.push({ d, color: a % 2 === 0 ? 'purple' : 'cyan' });
    }
    
    return arms;
  }, []);

  const innerSwirls = useMemo(() => {
    const swirls = [];
    const swirlCount = 18;
    
    for (let s = 0; s < swirlCount; s++) {
      const baseAngle = (s / swirlCount) * Math.PI * 2;
      const points = [];
      const segments = 35;
      
      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const spiralAngle = baseAngle + t * Math.PI * 2.5;
        const radius = 160 - t * 125;
        const x = 400 + Math.cos(spiralAngle) * radius;
        const y = 400 + Math.sin(spiralAngle) * radius;
        points.push({ x, y });
      }
      
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        d += ` L ${points[i].x} ${points[i].y}`;
      }
      
      swirls.push({ d, color: s % 3 === 0 ? 'purple' : 'cyan' });
    }
    
    return swirls;
  }, []);

  const particles = useMemo(() => {
    const p = [];
    for (let i = 0; i < 150; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 50 + Math.random() * 330;
      const colorRand = Math.random();
      let color;
      if (colorRand < 0.4) color = '#a855f7';
      else if (colorRand < 0.7) color = '#22d3ee';
      else if (colorRand < 0.85) color = '#c084fc';
      else color = '#67e8f9';
      
      p.push({
        x: 400 + Math.cos(angle) * dist,
        y: 400 + Math.sin(angle) * dist,
        r: 0.8 + Math.random() * 3.5,
        color,
        opacity: 0.5 + Math.random() * 0.5,
      });
    }
    return p;
  }, []);

  const stars = useMemo(() => {
    const s = [];
    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 320 + Math.random() * 80;
      s.push({
        x: 400 + Math.cos(angle) * dist,
        y: 400 + Math.sin(angle) * dist,
        r: 0.5 + Math.random() * 1.5,
        opacity: 0.3 + Math.random() * 0.5,
      });
    }
    return s;
  }, []);

  const nebulaClouds = useMemo(() => {
    return [
      { cx: 120, cy: 150, rx: 80, ry: 50, color: '#a855f7', opacity: 0.08 },
      { cx: 680, cy: 200, rx: 100, ry: 60, color: '#22d3ee', opacity: 0.06 },
      { cx: 150, cy: 650, rx: 90, ry: 55, color: '#22d3ee', opacity: 0.07 },
      { cx: 700, cy: 600, rx: 70, ry: 45, color: '#a855f7', opacity: 0.08 },
      { cx: 400, cy: 80, rx: 120, ry: 40, color: '#c084fc', opacity: 0.05 },
      { cx: 400, cy: 720, rx: 100, ry: 35, color: '#67e8f9', opacity: 0.05 },
    ];
  }, []);

  const electricArcs = useMemo(() => {
    const arcs = [];
    for (let i = 0; i < 8; i++) {
      const startAngle = (i / 8) * Math.PI * 2;
      const points = [];
      const segments = 20;
      
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const angle = startAngle + t * 0.8;
        const baseRadius = 200 + t * 150;
        const jitter = (Math.random() - 0.5) * 30;
        points.push({
          x: 400 + Math.cos(angle) * (baseRadius + jitter),
          y: 400 + Math.sin(angle) * (baseRadius + jitter),
        });
      }
      
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let j = 1; j < points.length; j++) {
        d += ` L ${points[j].x} ${points[j].y}`;
      }
      
      arcs.push({ d, color: i % 2 === 0 ? '#67e8f9' : '#c084fc' });
    }
    return arcs;
  }, []);

  const clockNumbers = useMemo(() => {
    return ROMAN_NUMERALS.map((num, i) => {
      const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
      const radius = 95;
      return {
        num,
        x: 400 + Math.cos(angle) * radius,
        y: 400 + Math.sin(angle) * radius,
        rotation: (angle * 180) / Math.PI + 90,
      };
    });
  }, []);

  return (
    <svg
      viewBox="0 0 800 800"
      width="100%"
      height="100%"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="tunnelDepth" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.95" />
          <stop offset="25%" stopColor="#0f172a" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#020617" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
          <stop offset="30%" stopColor="#818cf8" stopOpacity="0.7" />
          <stop offset="60%" stopColor="#a855f7" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="clockFace" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.98" />
          <stop offset="60%" stopColor="#0f172a" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#020617" stopOpacity="0.9" />
        </radialGradient>

        <linearGradient id="cyanEnergy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.7" />
        </linearGradient>

        <linearGradient id="purpleEnergy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="1" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0.7" />
        </linearGradient>

        <filter id="nebulaBlur" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="25" />
        </filter>

        <filter id="starGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="energyGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" result="blur1" />
          <feGaussianBlur stdDeviation="3" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="10" result="blur1" />
          <feGaussianBlur stdDeviation="5" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="intenseGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="20" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="particleGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="electricGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="clockGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feFlood floodColor="#a855f7" floodOpacity="0.7" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <mask id="vortexMask">
          <radialGradient id="maskGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" />
            <stop offset="70%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>
          <rect width="800" height="800" fill="url(#maskGrad)" />
        </mask>
      </defs>

      {showStars && (
        <g>
          {nebulaClouds.map((cloud, i) => (
            <ellipse
              key={i}
              cx={cloud.cx}
              cy={cloud.cy}
              rx={cloud.rx}
              ry={cloud.ry}
              fill={cloud.color}
              opacity={cloud.opacity}
              filter="url(#nebulaBlur)"
            />
          ))}
          
          <g filter="url(#starGlow)">
            {stars.map((star, i) => (
              <circle
                key={i}
                cx={star.x}
                cy={star.y}
                r={star.r}
                fill="#ffffff"
                opacity={star.opacity}
              />
            ))}
          </g>
        </g>
      )}

      <g mask="url(#vortexMask)">
        <circle cx="400" cy="400" r="400" fill="url(#tunnelDepth)" />

        <g filter="url(#particleGlow)">
          {particles.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={p.r} fill={p.color} opacity={p.opacity} />
          ))}
        </g>

        <g filter="url(#electricGlow)" opacity="0.5">
          {electricArcs.map((arc, i) => (
            <path key={i} d={arc.d} fill="none" stroke={arc.color} strokeWidth="1.5" strokeLinecap="round" />
          ))}
        </g>

        <g filter="url(#energyGlow)" opacity="0.5">
          {secondaryArms.map((arm, i) => (
            <path
              key={i}
              d={arm.d}
              fill="none"
              stroke={arm.color === 'cyan' ? '#22d3ee' : '#c084fc'}
              strokeWidth={2}
              strokeLinecap="round"
            />
          ))}
        </g>

        <g filter="url(#strongGlow)">
          {vortexArms.map((arm, i) => (
            <path
              key={i}
              d={arm.d}
              fill="none"
              stroke={arm.color === 'cyan' ? 'url(#cyanEnergy)' : 'url(#purpleEnergy)'}
              strokeWidth={arm.width}
              strokeLinecap="round"
              opacity={0.9}
            />
          ))}
        </g>

        <g filter="url(#energyGlow)" opacity="0.7">
          {innerSwirls.map((swirl, i) => (
            <path
              key={i}
              d={swirl.d}
              fill="none"
              stroke={swirl.color === 'cyan' ? '#22d3ee' : '#c084fc'}
              strokeWidth={1.5}
              strokeLinecap="round"
            />
          ))}
        </g>

        {[180, 200, 220, 250, 280, 320].map((r, i) => (
          <circle
            key={i}
            cx="400"
            cy="400"
            r={r}
            fill="none"
            stroke={i % 2 === 0 ? '#22d3ee' : '#a855f7'}
            strokeWidth="0.5"
            opacity={0.15 + (6 - i) * 0.03}
          />
        ))}

        <circle cx="400" cy="400" r="170" fill="url(#centerGlow)" filter="url(#intenseGlow)" opacity="0.6" />

        <g filter="url(#clockGlow)">
          <circle cx="400" cy="400" r="125" fill="url(#clockFace)" stroke="#a855f7" strokeWidth="4" />
          <circle cx="400" cy="400" r="120" fill="none" stroke="#c084fc" strokeWidth="1" opacity="0.6" />
          <circle cx="400" cy="400" r="118" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.4" />
        </g>

        <g>
          {[...Array(60)].map((_, i) => {
            const angle = (i / 60) * Math.PI * 2 - Math.PI / 2;
            const isHour = i % 5 === 0;
            const innerR = isHour ? 100 : 107;
            const outerR = 115;
            return (
              <line
                key={i}
                x1={400 + Math.cos(angle) * innerR}
                y1={400 + Math.sin(angle) * innerR}
                x2={400 + Math.cos(angle) * outerR}
                y2={400 + Math.sin(angle) * outerR}
                stroke={isHour ? '#c084fc' : '#67e8f9'}
                strokeWidth={isHour ? 2.5 : 1}
                opacity={isHour ? 1 : 0.6}
              />
            );
          })}
        </g>

        <g fontFamily="'Times New Roman', Georgia, serif" fontWeight="700" fill="#e0e7ff" filter="url(#particleGlow)">
          {clockNumbers.map((cn, i) => (
            <text
              key={i}
              x={cn.x}
              y={cn.y}
              fontSize={cn.num === 'XII' || cn.num === 'VI' ? 16 : 14}
              textAnchor="middle"
              dominantBaseline="middle"
              opacity="1"
            >
              {cn.num}
            </text>
          ))}
        </g>

        <g filter="url(#strongGlow)">
          <line x1="400" y1="400" x2="400" y2="320" stroke="#e0e7ff" strokeWidth="4" strokeLinecap="round" />
          <line x1="400" y1="400" x2="460" y2="370" stroke="#e0e7ff" strokeWidth="3" strokeLinecap="round" />
          <circle cx="400" cy="400" r="8" fill="#a855f7" />
          <circle cx="400" cy="400" r="4" fill="#e0e7ff" />
        </g>

        {[50, 65, 80].map((r, i) => (
          <circle
            key={i}
            cx="400"
            cy="400"
            r={r}
            fill="none"
            stroke="#22d3ee"
            strokeWidth="0.8"
            opacity={0.4 - i * 0.1}
            strokeDasharray="3 5"
          />
        ))}
      </g>
    </svg>
  );
}
