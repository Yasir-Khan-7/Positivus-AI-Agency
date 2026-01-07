"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Close mobile menu after clicking
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[100px] py-[15px] sm:py-[20px] lg:py-[25px]">
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
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, "about")}
              className="text-[18px] font-normal text-dark hover:opacity-70 transition-opacity cursor-pointer"
            >
              About us
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, "services")}
              className="text-[18px] font-normal text-dark hover:opacity-70 transition-opacity cursor-pointer"
            >
              Services
            </a>
            <a 
              href="#use-cases" 
              onClick={(e) => handleNavClick(e, "use-cases")}
              className="text-[18px] font-normal text-dark hover:opacity-70 transition-opacity cursor-pointer"
            >
              Use Cases
            </a>
            <a 
              href="#team" 
              onClick={(e) => handleNavClick(e, "team")}
              className="text-[18px] font-normal text-dark hover:opacity-70 transition-opacity cursor-pointer"
            >
              Team
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-[18px] font-normal text-dark hover:opacity-70 transition-opacity cursor-pointer"
            >
              Contact
            </a>
            <button className="px-[35px] py-[20px] border border-dark rounded-[14px] text-[18px] font-normal text-dark hover:bg-dark hover:text-white transition-colors">
              Request a quote
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-6 flex flex-col gap-4 pb-4">
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, "about")}
              className="text-[16px] font-normal text-dark hover:opacity-70 transition-opacity py-2 cursor-pointer"
            >
              About us
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, "services")}
              className="text-[16px] font-normal text-dark hover:opacity-70 transition-opacity py-2 cursor-pointer"
            >
              Services
            </a>
            <a 
              href="#use-cases" 
              onClick={(e) => handleNavClick(e, "use-cases")}
              className="text-[16px] font-normal text-dark hover:opacity-70 transition-opacity py-2 cursor-pointer"
            >
              Use Cases
            </a>
            <a 
              href="#team" 
              onClick={(e) => handleNavClick(e, "team")}
              className="text-[16px] font-normal text-dark hover:opacity-70 transition-opacity py-2 cursor-pointer"
            >
              Team
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-[16px] font-normal text-dark hover:opacity-70 transition-opacity py-2 cursor-pointer"
            >
              Contact
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



