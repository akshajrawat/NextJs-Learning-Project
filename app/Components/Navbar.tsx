import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="w-full flex justify-center items-center h-20 border-b-2 border-[#ffffff1a]">
        <h1 className="w-[30%] text-4xl font-bold"> NextTut </h1>
        <ul className="w-[50%] flex justify-evenly items-center">
          {["Home", "About", "Services", "Clientcomp", "Contacts"].map(
            (item, i): React.ReactElement => (
              <li
                key={i}
                className="hover:text-blue-500 hover:scale-105 transition-all duration-200"
              >
                <Link
                  href={`/${
                    item.toLowerCase() === "home" ? "" : item.toLowerCase()
                  }`}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
