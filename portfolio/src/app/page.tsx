import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

import { Meteors } from "@/components/magicui/meteors";
import { Particles } from "@/components/magicui/particles";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { LoadingBar } from "@/components/loadingbar";

export default function Home() {
  return (
      <div className="flex h-screen w-screen justify-center items-center bg-black"> 
      <SmoothCursor />
        <div className="relative overflow-hidden h-screen w-full">
          <Meteors />
          <Particles />
        </div>
        <div className="absolute z-10">
            <Terminal className="bg-gray-700 opacity-70 shadow-lg shadow-gray-300/40 text-white">
              <TypingAnimation>&gt; cd DreamChaser</TypingAnimation>
              <TypingAnimation delay={1000}>&gt; init launch.exe</TypingAnimation>
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
                <LoadingBar delay={5500}></LoadingBar>
              </AnimatedSpan>
              <AnimatedSpan delay={8000} className="text-green-400">
                <span>✔ Launching.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={8500}>
                <span>Blasting Off! 🚀 </span>
              </AnimatedSpan>
            </Terminal>
          </div>
      </div>
  );
}
