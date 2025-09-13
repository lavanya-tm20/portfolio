import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-blue-600 rounded-full animate-pulse"></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-6 animate-pulse">
          Lavanya T M
        </h2>
        <p className="text-gray-600 mt-2 animate-pulse">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
};

export default Loading;
