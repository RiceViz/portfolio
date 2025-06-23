/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { AuroraText } from "@/components/magicui/aurora-text";

import { ProjectModal } from "./modals/projects/ProjectModal";
import { AboutMeModal } from "./modals/aboutme/AboutMeModal";
import { SocialsModal } from "./modals/socials/SocialsModal";

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
  <div className="h-screen w-screen overflow-hidden absolute z-10 text-white animate-fade-in p-8 transition duration-150 ease-in-out">
      {/*Title*/}
      <div className="lg:max-w-1/2 relative lg:top-1/5 lg:left-1/2 z-10 lg:-translate-x-1/2 lg:-translate-y-1/5 text-center">
          {/*<img className="fixed rounded-full border-8 scale-25 -translate-y-5/8" src="./portfoliopicture.jpeg" alt="Picture Of Me"></img>*/}
          <AuroraText className="text-5xl lg:text-7xl font-black mb-2 drop-shadow-[2px_2px_8px_rgba(255,255,255,0.4)]">Tyran Rice Jr.</AuroraText>
          <h2 className="text-lg lg:text-xl font-bold drop-shadow-[2px_2px_8px_rgba(255,255,255,0.4)]">Software Engineer & Game Developer</h2>
          <h2 className="text-lg lg:text-xl font-bold drop-shadow-[2px_2px_8px_rgba(255,255,255,0.4)]">Delaware, United States</h2>
      </div>

      {/*Planets*/}
      <div className="grid grid-cols-3 lg:-translate-y-32 lg:z-20 text-center text-5xl lg:text-9xl font-black">
        <div className="lg:absolute scale-50 lg:scale-25 lg:-translate-x-3/8 lg:-translate-y-5/12 transition delay-100 duration-150 ease-in-out  hover:scale-55 lg:hover:scale-30" 
        onClick={() => handleOpen("projects")}>
          <h1 className="lg:absolute h-1/2 w-full lg:translate-y-3/4 z-20 drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]">
            Projects
          </h1>
          <img className="animate-spin-slowest" src="./planets/planet1.png" alt="Planet 1"></img>
        </div>
        <div className="lg:absolute scale-50 lg:scale-30 lg:translate-x-1/3 lg:-translate-y-1/3 transition delay-100 duration-150 ease-in-out hover:scale-55 lg:hover:scale-35" 
        onClick={() => handleOpen("about me")}>
          <div className="lg:absolute h-1/2 w-full lg:translate-y-3/4 z-20 drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]">
            About Me
          </div>
          <img className="animate-spin-slower" src="./planets/planet2.png" alt="Planet 2"></img>
        </div>
        <div className="lg:absolute scale-50 lg:scale-25 lg:-translate-x-1/8 lg:-translate-y-[225px] transition delay-100 duration-150 ease-in-out hover:scale-55 lg:hover:scale-30" 
        onClick={() => handleOpen("socials")}>
          <div className="lg:absolute h-1/2 w-full lg:translate-y-3/4 z-20 drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]">
            Socials
          </div>
          <img className="animate-spin-slow" src="./planets/planet3.png" alt="Planet 3"></img>
        </div>
      </div>

      {openModal === "projects" && <ProjectModal onClose={handleClose} />}
      {openModal === "about me" && <AboutMeModal onClose={handleClose} />}
      {openModal === "socials" && <SocialsModal onClose={handleClose} />}

  </div>
  );
};