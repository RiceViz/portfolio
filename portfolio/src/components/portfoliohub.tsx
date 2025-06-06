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
          <h1 className="text-4xl font-bold underline mb-2">Tyran Rice Jr.</h1>
          <h2 className="text-xl font bold">Software Engineer & Game Developer</h2>
          <h2 className="text-xl font bold">Newark, Delaware, United States</h2>
      </div>
      <div className="-translate-y-32 z-20">
        <img className="absolute scale-25 -translate-x-3/8 -translate-y-3/8 animate-spin-slowest" 
        src="./planets/planet1.png" alt="Planet 1" onClick={() => handleOpen("modal1")}></img>
        <img className="absolute scale-30 translate-x-1/3 -translate-y-1/4 animate-spin-slower" 
        src="./planets/planet2.png" alt="Planet 2" onClick={() => handleOpen("modal2")}></img>
        <img className="absolute scale-25 -translate-x-1/8 -translate-y-1/8 animate-spin-slow" 
        src="./planets/planet3.png" alt="Planet 3" onClick={() => handleOpen("modal3")}></img>
      </div>

      {openModal === "modal1" && <Planet1Modal onClose={handleClose} />}
      {openModal === "modal2" && <Planet2Modal onClose={handleClose} />}
      {openModal === "modal3" && <Planet3Modal onClose={handleClose} />}

  </div>
  );
};