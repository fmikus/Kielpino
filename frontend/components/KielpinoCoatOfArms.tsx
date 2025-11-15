export default function KielpinoCoatOfArms({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 360"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Modern gradient for shield */}
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>

        {/* Subtle shadow */}
        <filter id="modernShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="0" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glow effect for stars */}
        <filter id="starGlow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Modern shield shape */}
      <path
        d="M 150 20 L 270 70 L 270 240 Q 270 290 150 340 Q 30 290 30 240 L 30 70 Z"
        fill="url(#blueGradient)"
        stroke="#1e3a8a"
        strokeWidth="3"
        filter="url(#modernShadow)"
      />

      {/* Top decorative border */}
      <path
        d="M 150 20 L 270 70 L 265 72 L 150 25 L 35 72 L 30 70 Z"
        fill="#1e3a8a"
        opacity="0.3"
      />

      {/* 7 Stars - Modern, clean design (Left upper section) */}
      <g opacity="0.95" filter="url(#starGlow)">
        {[
          { x: 70, y: 90 },
          { x: 105, y: 90 },
          { x: 87.5, y: 120 },
          { x: 70, y: 150 },
          { x: 105, y: 150 },
          { x: 55, y: 180 },
          { x: 120, y: 180 },
        ].map((pos, i) => (
          <g key={i} transform={`translate(${pos.x}, ${pos.y})`}>
            <path
              d="M 0,-10 L 3,-3 L 10,-3 L 4,2 L 7,10 L 0,5 L -7,10 L -4,2 L -10,-3 L -3,-3 Z"
              fill="#ffffff"
              stroke="#e0e7ff"
              strokeWidth="1"
            />
          </g>
        ))}
      </g>

      {/* Cross - Modern, geometric (Upper right) */}
      <g transform="translate(220, 110)">
        <rect x="-4" y="0" width="8" height="60" fill="#ffffff" rx="2" />
        <rect x="-15" y="15" width="30" height="8" fill="#ffffff" rx="2" />
        {/* Subtle shading */}
        <rect x="0" y="0" width="4" height="60" fill="#f0f0f0" opacity="0.3" rx="2" />
        <rect x="0" y="15" width="15" height="8" fill="#f0f0f0" opacity="0.3" rx="2" />
      </g>

      {/* Swan - Modern, clean design (Center) */}
      <g transform="translate(150, 200)">
        {/* Body - smooth ellipse */}
        <ellipse cx="0" cy="20" rx="38" ry="50" fill="#ffffff" />

        {/* Neck - elegant curve */}
        <path
          d="M -12,-25 Q -20,-45 -25,-65 Q -25,-75 -18,-78 Q -12,-76 -12,-70 Q -10,-50 -8,-30 Z"
          fill="#ffffff"
        />

        {/* Head */}
        <ellipse cx="-20" cy="-72" rx="6" ry="8" fill="#ffffff" />

        {/* Beak - orange accent */}
        <path
          d="M -26,-72 L -35,-73 L -33,-71 Z"
          fill="#fb923c"
        />

        {/* Eye */}
        <circle cx="-18" cy="-72" r="2" fill="#1e40af" />

        {/* Wing - modern, flowing design */}
        <path
          d="M 5,0 Q 25,5 35,0 Q 35,15 28,35 Q 18,45 5,40 Q 0,30 5,15 Z"
          fill="#f8fafc"
          stroke="#e2e8f0"
          strokeWidth="1.5"
        />

        {/* Wing detail lines */}
        <path d="M 10,10 Q 22,12 30,8" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
        <path d="M 12,20 Q 22,22 28,20" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
        <path d="M 10,30 Q 18,32 24,32" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />

        {/* Tail feathers - simple, elegant */}
        <g transform="translate(0, 60)">
          <path d="M -10,0 Q -12,15 -8,25 L -5,23 Q -7,13 -6,5 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <path d="M 0,2 Q -1,17 2,27 L 5,25 Q 3,15 4,7 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <path d="M 10,0 Q 12,15 8,25 L 5,23 Q 7,13 6,5 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        </g>

        {/* Subtle body shading */}
        <ellipse cx="8" cy="25" rx="20" ry="30" fill="#f1f5f9" opacity="0.4" />
      </g>

      {/* Bottom decorative curve */}
      <path
        d="M 30 240 Q 30 285 150 335 Q 270 285 270 240 L 268 240 Q 268 283 150 330 Q 32 283 32 240 Z"
        fill="#1e3a8a"
        opacity="0.2"
      />
    </svg>
  );
}
