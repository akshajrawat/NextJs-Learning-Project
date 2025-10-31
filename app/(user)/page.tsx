import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-screen w-screen  flex flex-col justify-center items-center pt-5 gap-8">
      {/* title section */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-5xl font-bold">
          Hello, This is my first NextJS website !!!
        </h1>
        <p className="text-xl w-[70%] text-center font-semibold text-[#ffffffaa]">
          All the things added to this project will be added one by one as I
          learn different properties and function of NextJs
        </p>
      </div>

      {/* intro to RouteGroups */}
      <div className="w-full flex justify-center items-center ">
        <h3 className="flex gap-4 justify-center items-center font-bold border-b-2 border-[#ffffff5e]">
          <span className="text-2xl">
            {" "}
            There are 2 Route groups in this project :-{" "}
          </span>
          <p className="text-lg text-red-600"> 1 :- (user) </p>
          <p className="text-lg text-amber-300"> 2 :- admin </p>
        </h3>
      </div>

      {/* card section */}
      <div className="w-full flex justify-center items-center ">
        <div className="w-60 h-75 border-2 border-[#ffffff39] rounded-2xl flex flex-col items-center justify-between  py-4 ">
          <div className="flex flex-col items-center gap-3">
            <p className="font-bold text-xl"> Access Admin Routes </p>
            <div className="h-30 w-30 rounded-full flex justify-center items-center text-2xl font-bold bg-white text-black">
              ADMIN
            </div>
          </div>
          <button className="border-2 border-[#ffffffa0] py-3 px-6 rounded-2xl hover:bg-blue-800">
            <Link href={"/"}>DASHBOARD</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
