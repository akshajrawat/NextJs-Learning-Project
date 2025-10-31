import { resolve } from "path";

interface propType {
  searchParams: {
    name: string;
  };
}

const dataFetchServer = async ({ searchParams }: propType) => {
  const name = searchParams.name;
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  const data = await res.json();

  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  return (
    <div className="w-full h-[50vh]  flex justify-center items-center">
      <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-6 flex flex-col justify-center items-center gap-4">
        <h1 className="text-xl font-bold text-white">
          Server fetching probability for:{" "}
          <span className="text-blue-400">{name}</span>
        </h1>
        <p className="text-gray-300">
          People having this name:{" "}
          <span className="font-semibold">{data.count}</span>
        </p>
        <p className="text-gray-300">
          Name probability:{" "}
          <span className="font-semibold">{data.probability * 100}</span> |
          Gender: <span className="font-semibold">{data.gender}</span>
        </p>
      </div>
    </div>
  );
};

export default dataFetchServer;
