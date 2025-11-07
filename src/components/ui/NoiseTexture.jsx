import React from "react";

export default function NoiseTexture() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 mix-blend-overlay opacity-[0.04] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'140\' height=\'140\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.35\'/></svg>')] motion-reduce:opacity-0" />
  );
}
