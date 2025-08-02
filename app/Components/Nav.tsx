// Nav.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { NavLinks } from "@/types";
import { CiMenuFries } from "react-icons/ci";

const links: NavLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/#services",
  },
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Work",
    path: "/work",
  },
];

const Nav = () => {
  const pathname = usePathname();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <>
      <nav className="flex fixed top-0 right-0 w-full items-center justify-between p-4 md:px-6 xl:px-12 backdrop-blur-lg backdrop-saturate-150 z-50">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-4xl text-accent font-semibold">
            Yakoub<span className="text-white">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 text-sm">
          {links.map((link, index) => (
            <Link
              className={`font-semibold px-3 py-2 rounded transition-all duration-300 hover-gradient hover:text-white ${
                pathname === link.path && "bg-gradient text-white"
              }`}
              key={index}
              href={link.path}
            >
              {link.name}
            </Link>
          ))}
          <Link href={"/contact"}>
            <button type="button" className="button inline-flex">
              Get In Touch
            </button>
          </Link>
        </div>

        {/* Burger Menu - Only show on mobile */}
        <div className="lg:hidden">
          <CiMenuFries
            onClick={() => setToggleMenu((prev) => !prev)}
            className="text-3xl font-semibold cursor-pointer hover:text-accent transition-colors text-white"
          />
        </div>
      </nav>

      {/* Mobile Nav */}
      {toggleMenu && (
        <MobileNav
          links={links}
          pathname={pathname}
          setToggleMenu={setToggleMenu}
        />
      )}
    </>
  );
};

export default Nav;
