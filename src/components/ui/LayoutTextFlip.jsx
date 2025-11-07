import React from "react";

export default function LayoutTextFlip({ children }) {
  return (
    <span className="inline-block [transform-style:preserve-3d] [perspective:800px] transition-transform duration-500 hover:[transform:rotateX(12deg)]">
      <span className="block [backface-visibility:hidden]">{children}</span>
    </span>
  );
}
