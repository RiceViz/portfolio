"use client";

import React from "react";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { LoadingBar } from "@/components/loadingbar";

export const TerminalPage = ({ onFinish }: { onFinish: () => void }) => {
    return(
            <Terminal className="bg-gray-600 opacity-70 shadow-lg shadow-gray-300/40 h-auto text-white justify-self-center">
              <TypingAnimation>&gt; cd DreamChaser</TypingAnimation>
              <TypingAnimation delay={1000}>
                &gt; init launch.exe
              </TypingAnimation>
              <AnimatedSpan delay={2000} className="text-green-400">
                <span>✔ No updates found.</span>
              </AnimatedSpan>
              <AnimatedSpan delay={4000} className="text-green-400">
                <span>✔ Connected to servers.</span>
              </AnimatedSpan>
              <AnimatedSpan delay={5000} className="text-green-400">
                <span>✔ Logged Into Account.</span>
              </AnimatedSpan>
              <AnimatedSpan delay={5500} className="text-gray-400">
                <LoadingBar
                  delay={5500}
                  onComplete={onFinish}
                ></LoadingBar>
              </AnimatedSpan>
              <AnimatedSpan delay={8000} className="text-green-400">
                <span>✔ Launching.</span>
              </AnimatedSpan>
              <AnimatedSpan delay={8500}>
                <span>Blasting Off! 🚀 </span>
              </AnimatedSpan>
            </Terminal>
    );
}