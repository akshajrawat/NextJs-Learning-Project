"use client";

const Loader = () => {
  return (
    <div className="w-screen h-[60vh] flex flex-col justify-center items-center bg-black text-white gap-6">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin"></div>

      {/* Loading Text */}
      <p className="text-lg text-gray-400 font-semibold animate-pulse">
        Fetching data, please wait...
      </p>
    </div>
  );
};

export default Loader;
