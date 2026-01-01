import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[100px] py-[60px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image 
              src="/assets/Logo.svg" 
              alt="Positivus Logo" 
              width={36}
              height={36}
              className="w-[36px] h-[36px]"
            />
            <span className="text-[30px] font-bold text-dark leading-none">Positivus</span>
          </div>

          {/* Navigation */}
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
      </div>
    </header>
  );
}

