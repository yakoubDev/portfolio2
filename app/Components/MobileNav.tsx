// MobileNav.tsx
import { NavLinks } from "@/types";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

interface MobileNavProps {
  links: NavLinks;
  pathname: string;
  setToggleMenu: (value: boolean) => void;
}

const MobileNav = ({ links, pathname, setToggleMenu }: MobileNavProps) => {
  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={() => setToggleMenu(false)}
      />

      {/* Mobile Menu */}
      <div className="w-64 h-screen fixed top-0 right-0 bg-black/95 backdrop-blur-md border-l border-white/10 flex lg:hidden flex-col items-center gap-8 py-8 px-8 z-50">
        {/* Close Button */}
        <div className="flex justify-end w-full">
          <button
            onClick={() => setToggleMenu(false)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <CgClose className="text-2xl text-white" />
          </button>
        </div>

        {/* Logo */}
        <Link
          href={"/"}
          className="flex items-center justify-center w-full mb-8"
          onClick={handleLinkClick}
        >
          <h1 className="text-4xl text-accent font-semibold">
            Yakoub<span className="text-white">.</span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-col items-center gap-6 w-full">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={handleLinkClick}
              className={`text-xl font-semibold px-4 py-3 rounded-lg w-full text-center transition-all duration-300 ${
                pathname === link.path
                  ? "bg-gradient"
                  : "text-white hover:bg-white/10 hover:text-accent"
              }`}
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
      </div>
    </>
  );
};

export default MobileNav;
