"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface state {
  count: number;
  name: string;
  gender: string;
  probability: number;
}
const dataFetchServer = () => {
  const Router = useRouter();
  const params = useSearchParams();
  const [name, setName] = useState("");
  const [data, setData] = useState<state>({
    count: 0,
    name: "",
    gender: "",
    probability: 0,
  });

  useEffect(() => {
    (async () => {
      const name = params.get("name");
      const res = await fetch(`https://api.genderize.io/?name=${name}`);
      setData(await res.json());
    })();
  }, [params]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClick = async () => {
    if (!name.trim()) return;
    Router.push(`/datafetch?name=${name}`);
  };

  return (
    <div className="w-full h-[50vh]  flex flex-col gap-5 justify-center items-center">
      {/* search */}
      <div className="flex gap-2 ">
        <input
          className="bg-white text-black outline-none px-4 py-1 rounded-4xl"
          type="text"
          placeholder="Enter the name"
          value={name}
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="border-2 border-[#ffffff4f] px-6 py-2 rounded-full hover:bg-blue-500"
        >
          {" "}
          Enter{" "}
        </button>
      </div>

      {/* card */}
      <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-6 flex flex-col justify-center items-center gap-4">
        <h1 className="text-xl font-bold text-white">
          Server fetching probability for:{" "}
          <span className="text-blue-400">{data.name}</span>
        </h1>
        <p className="text-gray-300">
          People having this name:{" "}
          <span className="font-semibold">{data.count}</span>
        </p>
        <p className="text-gray-300">
          Name probability:{" "}
          <span className="font-semibold">{data.probability}</span> | Gender:{" "}
          <span className="font-semibold">{data.gender}</span>
        </p>
      </div>
    </div>
  );
};

export default dataFetchServer;
