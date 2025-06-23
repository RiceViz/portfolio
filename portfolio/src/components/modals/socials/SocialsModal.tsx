import { motion } from "framer-motion";
import { Meteors } from "@/components/magicui/meteors";
import { Particles } from "@/components/magicui/particles";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Mail, Github, Linkedin } from "lucide-react";

export const SocialsModal = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[9999] bg-black bg-opacity-90 text-white p-6 overflow-hidden"
  >
    <div className="absolute overflow-hidden h-screen w-full -z-1">
      <Meteors />
      <Particles />
    </div>

    <button
      onClick={onClose}
      className="rounded-md absolute top-6 right-6 text-lg font-bold p-3 text-white drop-shadow-[2px_2px_8px_rgba(255,255,255,0.4)] hover:drop-shadow-[2px_2px_8px_rgba(255,255,255,1)] transition hover:scale-125 cursor-none"
    >
      Back
    </button>

    <motion.h1
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="text-2xl font-bold mb-6 text-center"
    >
      <AuroraText className="text-xl md:text-2xl lg:text-4xl font-black drop-shadow-[2px_2px_8px_rgba(255,255,255,0.4)]">
        Connect With Me
      </AuroraText>
    </motion.h1>

    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 z-10 relative mt-8">
      {/* Left: Icons */}
      <div className="flex flex-col items-center justify-center space-y-6 text-xl">
        <a href="mailto:tyranricejr@gmail.com" className="flex items-center space-x-4 drop-shadow-[2px_2px_8px_rgba(255,255,255,0.4)] hover:drop-shadow-[2px_2px_8px_rgba(255,255,255,1)] transition hover:scale-125 cursor-none">
          <Mail className="w-6 h-6" />
          <span>Email</span>
        </a>
        <a href="https://github.com/RiceViz" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 drop-shadow-[2px_2px_8px_rgba(255,255,255,0.4)] hover:drop-shadow-[2px_2px_8px_rgba(255,255,255,1)] transition hover:scale-125 cursor-none">
          <Github className="w-6 h-6" />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/tyran-rice-jr/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 drop-shadow-[2px_2px_8px_rgba(255,255,255,0.4)] hover:drop-shadow-[2px_2px_8px_rgba(255,255,255,1)] transition hover:scale-125 cursor-none">
          <Linkedin className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>
      </div>

      {/* Right: Message */}
      <div className="flex flex-col justify-center space-y-6 text-md">
        <p>
          I’m always open to new opportunities, collaborations, or just connecting with fellow developers and creatives.
        </p>
        <p>
          Whether you want to talk tech, work on a project together, or just say hello — feel free to reach out!
        </p>
        <p className="italic">Let’s build something amazing.</p>
      </div>
    </div>
  </motion.div>
);