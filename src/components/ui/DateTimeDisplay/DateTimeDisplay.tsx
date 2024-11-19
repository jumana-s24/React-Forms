import React, { useEffect, useState } from "react";

const DateTimeDisplay: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const date = `${now.getDate()}.${
        now.getMonth() + 1
      }.${now.getFullYear()}`; // Format date as DD.MM.YYYY

      const time = now.toLocaleTimeString("en-GB", { hour12: false }); // Format time as HH:MM:SS

      setCurrentDate(date);
      setCurrentTime(time);
    };

    updateDateTime();

    // Update every second to keep the time current
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2 mb-10">
      <div className="flex items-center">
        <span className="font-semibold text-gray-700 mr-2">Date:</span>
        <span className="bg-gray-400 text-white rounded px-2 py-1">
          {currentDate}
        </span>
      </div>
      <div className="flex items-center justify-end md:justify-normal">
        <span className="font-semibold text-gray-700 mr-2">Time:</span>
        <span className="bg-gray-400 text-white rounded px-2 py-1">
          {currentTime}
        </span>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
