"use client";

import Link from "next/link";

interface navLinkType {
  name: string;
  href: string;
}
const Navbar = () => {
  const navLinks: navLinkType[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Client", href: "/clientcomp" },
    { name: "Catchall", href: "/catchall" },
    { name: "Datafetch", href: "/datafetch" },
  ];

  return (
    <header className=" w-screen max-w-screen h-18 min-h-18">
      <nav className="w-full h-full flex justify-between items-center border-b-2 border-[#ffffff41] px-5">
        {/* logo section */}
        <h1 className=" text-4xl font-bold"> NextTutorial </h1>

        <ul className="font-bold text-xl flex justify-between items-center w-[35%]">
          {navLinks.map((item, index): React.ReactElement => {
            return (
              <li key={index} className="hover:text-blue-700">
                <Link href={item.href}> {item.name} </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
