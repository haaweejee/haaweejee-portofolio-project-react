import React from "react";
import Typewriter from 'typewriter-effect';
import LocationBadge from "../widget/LocationBadge";

interface HeroIntroProps {
  location: string;
  name: string;
  roles: string[];
  greeting?: string;
  highlightColor?: string;
}

const HeroIntro: React.FC<HeroIntroProps> = ({ 
  location, 
  name, 
  roles, 
  greeting = "Hello", 
  highlightColor = "#3498db" 
}) => {
  return (
    <div className="flex flex-col items-center">
      <LocationBadge location={location} />
      <h1 className="font-sans text-white text-4xl font-semibold mb-4">
        {greeting}<span>.</span>
      </h1>
      <h1 className="font-sans text-white text-5xl font-semibold mb-4">
        <span style={{ color: highlightColor }}>I'am</span> {name}
      </h1>
      <h1 className="font-sans text-white text-5xl font-bold">
        <Typewriter
          options={{
            strings: roles,
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
};

export default HeroIntro;
