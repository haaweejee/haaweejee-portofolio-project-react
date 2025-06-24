import React from "react";
import Typewriter from 'typewriter-effect';
import { Link, Button } from "@heroui/react";
import Marquee from "react-fast-marquee";
import Skill from "./Skill"; // Assuming Skill component is in the same directory
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faGoogle, faDocker, faGitAlt, faJs, faSwift, faPython, faGolang } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { SkillProps } from "../models/SkillProps"; // Assuming SkillProps is defined in this path


const skillList: SkillProps[] = [
  { name: "Kotlin", logo: "/public/kotlin-original.svg" },
  { name: "Dart", logo: "/public/dart-original.svg" },
  { name: "Java", logo: "/public/java-original.svg" },
  { name: "Go", icon: <FontAwesomeIcon icon={faGolang} /> },
  { name: "JavaScript", icon: <FontAwesomeIcon icon={faJs} /> },
  { name: "TypeScript", logo: "/public/typescript-plain.svg" },
  { name: "React", icon: <FontAwesomeIcon icon={faReact} /> },
  { name: "Jetpack Compose", logo: "/public/jetpack-compose.webp" },
  { name: "Flutter", logo: "/public/flutter-original.svg" },
  { name: "Node.js", icon: <FontAwesomeIcon icon={faNodeJs} className="text-green-400 text-4xl mr-3" /> },
  { name: "PostgreSQL", icon: <FontAwesomeIcon icon={faDatabase} className="text-blue-400 text-4xl mr-3" /> },
  { name: "Firebase", icon: <FontAwesomeIcon icon={faGoogle} className="text-yellow-400 text-4xl mr-3" /> },
  { name: "REST API" },
  { name: "Docker", icon: <FontAwesomeIcon icon={faDocker} className="text-blue-400 text-4xl mr-3" /> },
  { name: "CI/CD" },
  { name: "Agile" },
  { name: "Android Studio", logo: "/public/androidstudio-original.svg" },
  { name: "Github", logo: "/public/github-original.svg" },
];

const HeroUIHero: React.FC = () => {
  return (
    <div className="flex flex-col h-screen text-white">
      <div className="flex flex-col items-center justify-center text-center mt-24 mx-auto">
        <h1 className="font-sans text-white text-4xl font-semibold mb-4">Hello<span >.</span></h1>
        <h1 className="font-sans text-white text-5xl font-semibold mb-4"><span className="text-[#3498db]">I'am</span> Hendrawan Wibowo</h1>
        <h1 className="font-sans text-white text-5xl font-bold">
          <Typewriter
                options={{
                  strings: [
                    'Software Engineer',
                    'Android Developer',
                    'Mobile Developer',
                    'Full Stack Developer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
          />
        </h1>
        <div className="flex flex-row items-center mt-12 mx-28 gap-4">
        <Button color="primary" variant="solid" className="bg-[#3498db] hover:bg-[#2176bd] transition-colors duration-500 rounded-[4px]">
            <Link color="foreground" href="#contact" className="text-[20px] p-4"> Got Project? </Link>
          </Button>
          <Button color="primary" variant="solid" className="bg-[#333] border-[#fff] border-2 transition-colors duration-500 rounded-[4px]">
            <Link color="foreground" href="#contact" className="text-[20px] p-4"> My Resume </Link>
          </Button>
      </div>
      </div>
      <div className="flex flex-col mt-46 gap-5">
        <div className="w-full h-1 bg-[#666]"></div>
          <Marquee className="h-12" speed={50} direction="right">
            {skillList.map((skill, index) => (
                <Skill key={index} name={skill.name} logo={skill.logo} icon={skill.icon} />
              ))}
          </Marquee>
          
        <div className="w-full h-1 bg-[#666]"></div>
      </div>
    
    </div>
  );
};

export default HeroUIHero;