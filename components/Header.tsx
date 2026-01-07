"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[100px] py-[30px] sm:py-[40px] lg:py-[60px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image 
              src="/assets/Logo.svg" 
              alt="Positivus Logo" 
              width={36}
              height={36}
              className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px]"
            />
            <span className="text-[24px] sm:text-[30px] font-bold text-dark leading-none">Positivus</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-dark"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <a href="#about" className="text-[18px] font-normal text-dark hover:opacity-70 transition-opacity">
              About us
            </a>
            <a href="#services" className="text-[18px] font-normal text-dark hover:opacity-70 transition-opacity">
              Services
            </a>
            <a href="#use-cases" className="text-[18px] font-normal text-dark hover:opacity-70 transition-opacity">
              Use Cases
            </a>
            <a href="#pricing" className="text-[18px] font-normal text-dark hover:opacity-70 transition-opacity">
              Pricing
            </a>
            <a href="#blog" className="text-[18px] font-normal text-dark hover:opacity-70 transition-opacity">
              Blog
            </a>
            <button className="px-[35px] py-[20px] border border-dark rounded-[14px] text-[18px] font-normal text-dark hover:bg-dark hover:text-white transition-colors">
              Request a quote
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-6 flex flex-col gap-4 pb-4">
            <a href="#about" className="text-[16px] font-normal text-dark hover:opacity-70 transition-opacity py-2">
              About us
            </a>
            <a href="#services" className="text-[16px] font-normal text-dark hover:opacity-70 transition-opacity py-2">
              Services
            </a>
            <a href="#use-cases" className="text-[16px] font-normal text-dark hover:opacity-70 transition-opacity py-2">
              Use Cases
            </a>
            <a href="#pricing" className="text-[16px] font-normal text-dark hover:opacity-70 transition-opacity py-2">
              Pricing
            </a>
            <a href="#blog" className="text-[16px] font-normal text-dark hover:opacity-70 transition-opacity py-2">
              Blog
            </a>
            <button className="px-[25px] py-[16px] border border-dark rounded-[14px] text-[16px] font-normal text-dark hover:bg-dark hover:text-white transition-colors mt-2">
              Request a quote
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}



