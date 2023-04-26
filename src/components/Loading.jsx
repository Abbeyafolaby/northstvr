import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-red-900"></div>
    </div>
  );
};

export default Loading;
