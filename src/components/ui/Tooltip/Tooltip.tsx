import React from "react";

interface Props {
  text: string;
}

const Tooltip: React.FC<Props> = ({ text }) => {
  return (
    <div className="absolute bottom-full mb-1 max-w-4xl bg-gray-700 text-white text-xs rounded px-2 py-1 shadow-md z-10">
      {text}
    </div>
  );
};

export default Tooltip;
