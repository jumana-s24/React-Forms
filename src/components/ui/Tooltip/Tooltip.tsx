import React from "react";

interface TooltipProps {
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-[200px] bottom-full mb-1 bg-gray-700 text-white text-xs rounded p-2 shadow-md z-10">
      {text}
    </div>
  );
};

export default Tooltip;
