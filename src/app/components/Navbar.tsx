"use client";
import { useState } from "react";
import assets from "@/app/assets/assets"; // Ensure alias is configured or adjust path
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/community", label: "Community" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-7 md:py-10">
      <div className="items-center justify-between max-w-[85%] mx-auto flex">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <Image src={assets.logo} alt="Brand Logo" width={140} height={40} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu">
            <Image
              src={!menuOpen ? assets.iconHamburger : assets.iconClose}
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm px-2 hover:text-gray-400 transition-all duration-300">
              {label}
            </Link>
          ))}
        </div>

        {/* Get Started Button */}
        <div className="hidden md:block">
          <button className="px-5 py-3 shadow-2xl text-sm shadow-BrightRed text-white bg-BrightRed rounded-3xl hover:opacity-80">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-[50%] w-[100%] -translate-x-[50%] bg-white shadow-lg p-5 max-w-[85%] mx-auto ">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-2 text-center hover:text-gray-400 font-semibold transition-all duration-300"
              onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
