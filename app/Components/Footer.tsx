"use client";

export default function Footer() {
  return (
    <footer className="w-screen bg-black text-white py-4 border-t border-[#ffffff2d] mt-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold">NextTutorial</h2>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
