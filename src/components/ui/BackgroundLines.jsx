import React from "react";

export default function BackgroundLines() {
  return (
    <svg className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.25]" aria-hidden>
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <g className="animate-[pulse_6s_ease-in-out_infinite]">
        <rect width="100%" height="100%" fill="url(#grid)" className="text-sky-200/40" />
      </g>
    </svg>
  );
}
