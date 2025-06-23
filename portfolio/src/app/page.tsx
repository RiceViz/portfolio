"use client";

import React, { useState } from "react";
import { Meteors } from "@/components/magicui/meteors";
import { Particles } from "@/components/magicui/particles";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

import { TerminalPage } from "@/components/terminalpage";
import { PortfolioHub } from "@/components/portfoliohub";

export default function Home() {
  const [loadingDone, setLoadingDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleLoadingComplete = () => {
    setTimeout(() => setLoadingDone(true), 2500);
    setTimeout(() => setFadeOut(true), 1500);
  };


  return (
    <div className="flex h-screen w-screen justify-center items-center bg-black cursor-none">
      <SmoothCursor />
      <div className="relative overflow-hidden h-screen w-full cursor-none">
        <Meteors />
        <Particles />
      </div>
      {!loadingDone ? (
        <div
          className={`h-1/2 w-2/3 mx-auto absolute z-10 items-center transition-opacity duration-1000  ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <TerminalPage onFinish={handleLoadingComplete} />
        </div>
      ) : (
        <PortfolioHub />
      )}
    </div>
  );
}
