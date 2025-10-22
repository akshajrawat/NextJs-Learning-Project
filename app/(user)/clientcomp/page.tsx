"use client"

export default function clientComponent() {

  const handleClick = () => {
    alert("Something has been clicked");
  };

  return (
    <div className=" flex flex-col justify-center items-center gap-4 pt-3">
      <h1> This is a client component because onclick and event handlers can only be used in client component</h1>
      <button className="border-2 border-[#ffffff42] px-3 py-1 rounded-full" onClick={handleClick}> Click me for alert</button>
    </div>
  );
}
