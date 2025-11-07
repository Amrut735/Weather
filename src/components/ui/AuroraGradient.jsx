import React from "react";

export default function AuroraGradient() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent)]">
        <div className="absolute -top-1/2 left-1/2 h-[120vmax] w-[120vmax] -translate-x-1/2 rounded-full bg-[conic-gradient(at_70%_30%,theme(colors.sky.300/.4),theme(colors.violet.300/.35),theme(colors.fuchsia.300/.25),theme(colors.sky.300/.4))] blur-3xl animate-[spin_60s_linear_infinite]" />
      </div>
      <div className="absolute inset-0 [mask-image:radial-gradient(50%_40%_at_50%_60%,black,transparent)]">
        <div className="absolute -bottom-1/2 left-1/3 h-[100vmax] w-[100vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,theme(colors.fuchsia.300/.25),transparent)] blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}
