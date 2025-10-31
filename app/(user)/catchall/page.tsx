"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Catchall = () => {
  const router = useRouter();
  const [slug, setSlug] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlug(e.target.value);
  };

  const handleClick = () => {
    if (!slug.trim()) return;
    router.push(`/catchall/${slug}`);
  };

  return (
    <div className="w-full h-[50vh] flex flex-col gap-5 justify-center items-center">
      <input
        className="bg-white text-black outline-none px-4 py-1 rounded-4xl"
        type="text"
        value={slug}
        onChange={handleChange}
        placeholder="Enter the slug"
      />
      <button
        onClick={handleClick}
        className="border-2 border-[#ffffff4f] px-6 py-2 rounded-full hover:bg-blue-500"
      >
        {" "}
        Enter{" "}
      </button>
    </div>
  );
};

export default Catchall;
