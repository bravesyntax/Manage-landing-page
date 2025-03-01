import React from "react";
import assets from "../assets/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-VeryDarkBlue">
      {/* Desktop Footer */}
      <div className="py-16 w-[100%] max-w-[85%] mx-auto">
        <div className="wrapper block lg:flex items-center justify-between">
          <div className="flex items-center justify-center gap-4 mb-8 sm:hidden">
            <input
              type="email"
              name="email"
              id="email"
              className="px-4 py-3 rounded-3xl text-sm w-60 focus:outline-slate-400"
              placeholder="Updates in your inbox..."
            />
            <button className="bg-BrightRed text-VeryLightGray font-semibold px-6 py-3 rounded-3xl ">
              Go
            </button>
          </div>
          <div className="hidden flex-col gap-10 sm:gap-16 mb-10 lg:mb-0 sm:flex">
            <Link href="/">
              <Image src={assets.logoWhite} alt="logo" />
            </Link>
            <div className="flex  gap-4">
              {[
                { src: assets.iconFacebook, alt: "Facebook", href: "#" },
                { src: assets.iconYoutube, alt: "YouTube", href: "#" },
                { src: assets.iconTwitter, alt: "Twitter", href: "#" },
                { src: assets.iconPinterest, alt: "Pinterest", href: "#" },
                { src: assets.iconInstagram, alt: "Instagram", href: "#" },
              ].map((social, index) => (
                <Link key={index} href={social.href} aria-label={social.alt}>
                  <Image src={social.src} alt={social.alt} className="" />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-32">
            <div className="flex flex-col gap-3 mb-8 lg:mb-0">
              <Link
                href="/#"
                className="text-VeryLightGray hover:text-BrightRed w-max text-sm transition-all duration-200">
                Home
              </Link>
              <Link
                href="/#"
                className="text-VeryLightGray hover:text-BrightRed w-max text-sm transition-all duration-200">
                Pricing
              </Link>
              <Link
                href="/#"
                className="text-VeryLightGray hover:text-BrightRed w-max text-sm transition-all duration-200">
                Products
              </Link>
              <Link
                href="/#"
                className="text-VeryLightGray hover:text-BrightRed w-max text-sm transition-all duration-200">
                ABout Us
              </Link>
            </div>
            <div className="flex flex-col gap-3 mb-8 sm:mb-0">
              <Link
                href="/#"
                className="text-VeryLightGray hover:text-BrightRed w-max text-sm transition-all duration-200">
                Career
              </Link>
              <Link
                href="/#"
                className="text-VeryLightGray hover:text-BrightRed w-max text-sm transition-all duration-200">
                Community
              </Link>
              <Link
                href="/#"
                className="text-VeryLightGray hover:text-BrightRed w-max text-sm transition-all duration-200">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-16">
            <div className="hidden sm:flex items-center gap-4">
              <input
                type="email"
                name="email"
                id="email"
                className="px-4 py-3 rounded-3xl text-sm w-60 focus:outline-slate-400"
                placeholder="Updates in your inbox..."
              />
              <button className="bg-BrightRed text-VeryLightGray font-semibold px-6 py-3 rounded-3xl ">
                Go
              </button>
            </div>
            <div className="flex flex-col gap-10 sm:gap-16 sm:hidden">
              <div className="flex justify-between">
                {[
                  { src: assets.iconFacebook, alt: "Facebook", href: "#" },
                  { src: assets.iconYoutube, alt: "YouTube", href: "#" },
                  { src: assets.iconTwitter, alt: "Twitter", href: "#" },
                  { src: assets.iconPinterest, alt: "Pinterest", href: "#" },
                  { src: assets.iconInstagram, alt: "Instagram", href: "#" },
                ].map((social, index) => (
                  <Link key={index} href={social.href} aria-label={social.alt}>
                    <Image src={social.src} alt={social.alt} className="" />
                  </Link>
                ))}
              </div>
              <Link
                href="/"
                className="w-full justify-center items-center flex">
                <Image src={assets.logoWhite} alt="logo" />
              </Link>
            </div>
            <div className="flex justify-center sm:justify-end text-gray-400 text-sm">
              Copyright {year}. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
