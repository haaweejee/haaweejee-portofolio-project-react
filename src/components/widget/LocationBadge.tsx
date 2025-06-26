import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

interface LocationBadgeProps {
  location: string;
}

const LocationBadge: React.FC<LocationBadgeProps> = ({ location }) => (
  <div className="py-2 px-4 rounded-full border-2 border-[#999] flex flex-row items-center justify-center mb-4">
    <FontAwesomeIcon icon={faLocationDot} className="text-[#3498db] mr-2" />
    <h1 className="font-sans font-white text-xs">{location}</h1>
  </div>
);

export default LocationBadge;
