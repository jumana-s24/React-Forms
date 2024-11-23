import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../Tooltip/Tooltip";

interface InfoIconProps {
  tooltipText: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({ tooltipText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block ml-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FontAwesomeIcon
        icon={faInfoCircle}
        className="text-gray-400 cursor-pointer"
      />
      {isHovered && <Tooltip text={tooltipText} />}
    </div>
  );
};

export default InfoIcon;
