import React from "react";

export default function AuroraGradient() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 [mask-image:radial-gradient(65%_55%_at_50%_35%,black,transparent)]">
        <div className="absolute -top-1/2 left-1/2 h-[120vmax] w-[120vmax] -translate-x-1/2 rounded-full bg-[conic-gradient(at_70%_30%,theme(colors.sky.200/.35),theme(colors.indigo.200/.28),theme(colors.fuchsia.200/.22),theme(colors.sky.200/.35))] blur-3xl motion-safe:animate-[spin_90s_linear_infinite] motion-reduce:animate-none" />
      </div>
      <div className="absolute inset-0 [mask-image:radial-gradient(55%_45%_at_50%_65%,black,transparent)]">
        <div className="absolute -bottom-1/2 left-1/3 h-[100vmax] w-[100vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,theme(colors.fuchsia.200/.22),transparent)] blur-3xl motion-safe:animate-[pulse_12s_ease-in-out_infinite] motion-reduce:animate-none" />
      </div>
    </div>
  );
}
