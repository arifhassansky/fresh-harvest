"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaHeart } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About us", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full px-6 top-0 z-[99999] transition-all ${
        scrolling ? "bg-[#739B3E]" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-[30px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Logo" width={224} height={39} />
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-16 text-sm text-[#4A4A52]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative inline-block after:content-[''] after:block after:mt-1 ${
                    isActive
                      ? "after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-[14px] after:h-[3px] after:bg-[#749B3F]"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right buttons */}
        <div className="flex items-center gap-4 text-sm text-white">
          <button className="flex items-center gap-2 font-questrial cursor-pointer">
            <span>
              <FaHeart size={20} />
            </span>
            Favorites
          </button>

          <button className="relative flex items-center gap-2 font-questrial ml-4 cursor-pointer">
            <span>
              <IoMdCart size={24} />
            </span>
            Cart
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
              3
            </span>
          </button>

          <button className="border hover:border-[#FF6A1A] cursor-pointer px-6 py-3 ml-[19px] rounded-md hover:bg-[#FF6A1A] transition">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
