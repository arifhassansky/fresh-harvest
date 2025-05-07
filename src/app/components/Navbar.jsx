"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaHeart } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import RegisterModal from "./modals/RegisterModal";
import LoginModal from "./modals/LoginModal";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-30 transition-all ${
          scrolling ? "bg-[#739B3E]" : "bg-transparent"
        }`}
      >
        {/* Mobile Navbar */}
        <div className="flex justify-between items-center px-6 py-4 md:hidden bg-[#739B3E]">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Logo" width={150} height={30} />
          </Link>
          <div className="flex items-center gap-4 text-white">
            <button className="relative">
              <IoMdCart size={22} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
                3
              </span>
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <FiMenu size={24} />
            </button>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between px-6 py-[30px] bg-transparent">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Logo" width={224} height={39} />
          </Link>

          <ul className="flex items-center gap-16 text-sm text-[#4A4A52]">
            {["/", "/shop", "/about", "/blog"].map((path, i) => {
              const labels = ["Home", "Shop", "About us", "Blog"];
              const isActive = pathname === path;
              return (
                <li key={labels[i]}>
                  <Link
                    href={path}
                    className={`relative inline-block after:content-[''] after:block after:mt-1 ${
                      isActive
                        ? "after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-[14px] after:h-[3px] after:bg-[#749B3F]"
                        : ""
                    }`}
                  >
                    {labels[i]}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4 text-sm text-white">
            <button className="flex items-center gap-2">
              <FaHeart size={20} />
              Favorites
            </button>
            <button className="relative flex items-center gap-2 ml-4">
              <IoMdCart size={24} />
              Cart
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
                3
              </span>
            </button>
            <button
              className="border hover:border-[#FF6A1A] px-6 py-3 ml-[19px] rounded-md hover:bg-[#FF6A1A] transition"
              onClick={() => setShowLogin(true)}
            >
              Sign in
            </button>
          </div>
        </div>

        {/* Mobile Slide Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
            {["/", "/shop", "/about", "/blog"].map((path, i) => {
              const labels = ["Home", "Shop", "About us", "Blog"];
              return (
                <Link
                  key={labels[i]}
                  href={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#4A4A52]"
                >
                  {labels[i]}
                </Link>
              );
            })}
            <button
              className="text-[#4A4A52] border w-full py-2 rounded hover:bg-[#FF6A1A] hover:text-white transition"
              onClick={() => {
                setShowLogin(true);
                setMobileMenuOpen(false);
              }}
            >
              Sign in
            </button>
          </div>
        )}
      </nav>

      {/* Modals */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSwitch={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}
      {showRegister && (
        <RegisterModal
          onClose={() => setShowRegister(false)}
          onSwitch={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
