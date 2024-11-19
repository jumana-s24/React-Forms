import React from "react";

export const InternalNote: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-6xl mx-auto mt-6 border border-gray-100">
      <h2 className="text-3xl font-semibold mb-6 text-left">Internal Note</h2>
      <p className="text-sm text-gray-500 mt-1 text-left">
        If you are not sure about certain data points or you need help, write
        down your questions here. This will help the team to assist you and
        finish the job. This will not be visible to the customer.
      </p>
      <textarea
        className="w-full h-32 mt-4 p-2 border border-gray-300 rounded resize-none focus:outline-none focus:border-blue-500 resize-y"
        placeholder="Type your notes here..."
      ></textarea>
    </div>
  );
};
