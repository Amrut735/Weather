import React from "react";

export default function BackgroundLines() {
  return (
    <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.18]" aria-hidden>
      <defs>
        <radialGradient id="centerGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300" />
        </pattern>
        <mask id="glowMask">
          <rect width="100%" height="100%" fill="url(#centerGlow)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" className="text-slate-300" />
      <rect width="100%" height="100%" fill="url(#grid)" className="text-sky-200/30" mask="url(#glowMask)" />
    </svg>
  );
}
