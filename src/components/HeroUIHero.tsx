import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faGoogle, faDocker, faJs, faGolang } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { SkillProps } from "../models/SkillProps";
import PrimaryButton from "./widget/PrimaryButton";
import SecondaryButton from "./widget/SecondaryButton";
import SkillsMarquee from "./widget/SkillsMarquee";
import SocialLinks from "../components/moleculs/SocialLinks";
import HeroIntro from "../components/moleculs/HeroIntro";


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
      <div className="flex flex-row items-center justify-center mx-auto mt-24 gap-4">
        <SocialLinks />
        <div className="flex flex-col items-center justify-center text-center mx-auto">
          <HeroIntro 
              location="Tangerang, Banten, Indonesia"
              name="Hendrawan Wibowo"
              roles={[
                'Software Engineer',
                'Android Developer',
                'Mobile Developer',
                'Full Stack Developer',
              ]}
              greeting="Hello"
              highlightColor="#3498db"
            />
          <div className="flex flex-row items-center mt-10 mx-28 gap-4">
            <PrimaryButton href="#contact">Got Project?</PrimaryButton>
            <SecondaryButton href="#contact">My Resume</SecondaryButton>
          </div>
        </div>
      </div>
      <SkillsMarquee skills={skillList} />
    </div>
  );
};

export default HeroUIHero;