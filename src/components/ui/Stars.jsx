import React from "react";

export default function Stars() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_1px_at_20%_30%,rgba(255,255,255,0.4),transparent),radial-gradient(circle_1px_at_80%_60%,rgba(255,255,255,0.35),transparent),radial-gradient(circle_1px_at_60%_20%,rgba(255,255,255,0.3),transparent),radial-gradient(circle_1px_at_30%_80%,rgba(255,255,255,0.25),transparent)] animate-[pulse_12s_ease-in-out_infinite]" />
    </div>
  );
}
