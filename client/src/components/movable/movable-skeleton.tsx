"use client";

import React from "react";

const MovableSkeleton = () => {
  return (
    <div className="flex items-center space-x-3 p-3 bg-gray-200 rounded animate-pulse">
      <div className="w-5 h-5 bg-gray-400 rounded"></div>
      <div className="flex-1 h-5 bg-gray-400 rounded"></div>
    </div>
  );
};

export default MovableSkeleton;
