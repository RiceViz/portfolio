/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";

import { Planet1Modal } from "./modals/Modal1";
import { Planet2Modal } from "./modals/Modal2";
import { Planet3Modal } from "./modals/Modal3";

export const PortfolioHub = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleOpen = (modalID: string) => {
    console.log("Opening:", modalID);
    setOpenModal(modalID);
  };

  const handleClose = () => {
    setOpenModal(null);
  };

  return (
  <div className="h-screen w-screen overflow-hidden absolute z-10 text-white animate-fade-in p-8">
      <div className="max-w-1/3 relative top-1/3 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-black underline mb-2">Tyran Rice Jr.</h1>
          <h2 className="text-xl font-bold">Software Engineer & Game Developer</h2>
          <h2 className="text-xl font-bold">Newark, Delaware, United States</h2>
      </div>
      <div className="-translate-y-32 z-20 text-center text-9xl font-black">
        <div className="absolute scale-25 -translate-x-3/8 -translate-y-3/8" onClick={() => handleOpen("modal1")}>
          <h1 className="absolute h-1/2 w-full translate-y-3/4 z-20 drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]">
            Projects
          </h1>
          <img className="animate-spin-slowest" src="./planets/planet1.png" alt="Planet 1"></img>
        </div>
        <div className="absolute scale-30 translate-x-1/3 -translate-y-1/4" onClick={() => handleOpen("modal2")}>
          <div className="absolute h-1/2 w-full translate-y-3/4 z-20 drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]">
            N/A
          </div>
          <img className="animate-spin-slower" src="./planets/planet2.png" alt="Planet 2"></img>
        </div>
        <div className="absolute scale-25 -translate-x-1/8 -translate-y-1/8" onClick={() => handleOpen("modal3")}>
          <div className="absolute h-1/2 w-full translate-y-3/4 z-20 drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]">
            Skills
          </div>
          <img className="animate-spin-slow" src="./planets/planet3.png" alt="Planet 3"></img>
        </div>
      </div>

      {openModal === "modal1" && <Planet1Modal onClose={handleClose} />}
      {openModal === "modal2" && <Planet2Modal onClose={handleClose} />}
      {openModal === "modal3" && <Planet3Modal onClose={handleClose} />}

  </div>
  );
};