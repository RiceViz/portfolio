/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { tagCategoryMap, tagColors, tagIcons } from "@/components/interfaces/tags_interface";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Meteors } from "@/components/magicui/meteors";
import { Particles } from "@/components/magicui/particles";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const allTags = Object.keys(tagCategoryMap);

export const AboutMeModal = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[9999] bg-black bg-opacity-90 text-white p-6 overflow-y-auto overflow-x-hidden lg:overflow-hidden"
  >
    <div className="absolute lg:overflow-hidden h-screen w-full -z-1">
      <Meteors />
      <Particles />
    </div>

    <button
      onClick={onClose}
      className="absolute rounded-md top-6 right-6 text-lg font-bold p-3 text-white drop-shadow-[2px_2px_8px_rgba(255,255,255,0.4)] hover:drop-shadow-[2px_2px_8px_rgba(255,255,255,1)] transition hover:scale-125 cursor-none"
    >
      Back
    </button>

    <motion.h1
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="font-bold mb-6 text-center"
    >
      <AuroraText className="text-xl md:text-2xl lg:text-4xl font-black drop-shadow-[2px_2px_8px_rgba(255,255,255,0.4)]">
        About Me
      </AuroraText>
    </motion.h1>

    <div className="max-w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 z-10 relative mt-8 text-center">


      {/* Left: Bio and Resume */}
      <div className="flex flex-col justify-center space-y-6 text-sm items-center order-2 lg:order-1 mx-2 lg:text-start lg:items-start lg:col-span-3 lg:-mx-12">
        <p>
          I’m <strong>Tyran Rice Jr.</strong>, a software engineer and game developer with a passion for 
          artificial intelligence, gamification, and anything related to space!
        </p>
        <p>
            I graduated from the University of Delaware with a major in Computer Science and a minor in Mathematics, 
            earning a cumulative GPA of 3.5. Throughout college, I held several leadership roles, including Resident Assistant, 
            co-founder and president of the campus Game Development Club, team leader in the Esports program, and participant in a 
            freshman leadership program. I also competed in multiple hackathons and game jams, earning over $2,000 in awards for my 
            contributions and innovation.
        </p>
        <p className="italic">
          Let’s build something meaningful and make an impact on the world!
        </p>

        <a
          href="/files/TyranRice_Resume.pdf"
          download
          className="inline-flex items-center gap-2 -mt-2 bg-white text-sm text-black px-4 py-1.5 rounded-md hover:bg-gray-200 transition font-semibold w-fit hover:scale-110 cursor-none"
        >
          <Download className="w-4 h-4" /> Download Resume
        </a>
      </div>

      {/* Right: Profile Info */}
      <div className="flex flex-col items-center space-y-6 order-1 lg:order-2 lg:col-span-2">
        <img
          src="/portfoliopicture.jpeg"
          alt="Tyran Rice Jr."
          className="w-48 h-48 rounded-full border-4 border-white object-cover shadow-lg"
        />
        <div>
            <h2 className="text-2xl font-semibold -mt-4">Tyran Rice Jr.</h2>
            <h3 className="text-base">Delaware, United States</h3>
        </div>
      </div>
    </div>
    <div className="mt-4 lg:overflow-hidden">
          <h3 className="text-lg font-bold mb-2 text-center">Skills & Tools</h3>
          <ul className="grid grid-flow-dense grid-cols-6 gap-2 text-xs">
            {allTags.filter((tag: string) => {
                if(tagCategoryMap[tag] === "role") return false;
                else return true;
                }).map((tag: string) => {
                    const category = tagCategoryMap[tag] || "default";
                    const colorClass = tagColors[category] || tagColors.default;
                    const icon = tagIcons[category] || null;
                    return (
                        <span
                        key={tag}
                        className={`inline-flex items-center ${colorClass} px-2.5 py-1 text-xs lg:text-sm rounded-full`}
                        >
                        {icon} {tag}
                        </span>
                    );
                    })}
          </ul>
        </div>
  </motion.div>
);