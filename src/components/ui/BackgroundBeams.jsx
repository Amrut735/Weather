import React from "react";

export default function BackgroundBeams() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-1/3 -left-1/3 h-[60rem] w-[60rem] rounded-full bg-gradient-to-tr from-sky-300/40 via-violet-300/30 to-fuchsia-300/20 blur-3xl" />
      <div className="absolute -bottom-1/3 -right-1/3 h-[60rem] w-[60rem] rounded-full bg-gradient-to-tr from-fuchsia-300/30 via-pink-300/20 to-amber-200/20 blur-3xl" />
      <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-sky-300/40 to-transparent opacity-70 animate-pulse" />
    </div>
  );
}
