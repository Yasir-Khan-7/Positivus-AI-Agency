import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-dark">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[100px] py-[50px] lg:py-[55px]">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-[40px] lg:gap-[60px] mb-[50px]">
          {/* Left Side - Logo and Navigation */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[40px] lg:gap-[60px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/positivuswhitelogo.svg"
                alt="Positivus Logo"
                width={30}
                height={29}
                className="w-[30px] h-[29px]"
              />
              <span className="text-[30px] font-bold text-white leading-none">
                Positivus
              </span>
            </Link>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center gap-x-[40px] gap-y-[20px]">
              <Link
                href="#about"
                className="text-[18px] font-normal text-white hover:opacity-70 transition-opacity underline"
              >
                About us
              </Link>
              <Link
                href="#services"
                className="text-[18px] font-normal text-white hover:opacity-70 transition-opacity underline"
              >
                Services
              </Link>
              <Link
                href="#use-cases"
                className="text-[18px] font-normal text-white hover:opacity-70 transition-opacity underline"
              >
                Use Cases
              </Link>
              <Link
                href="#pricing"
                className="text-[18px] font-normal text-white hover:opacity-70 transition-opacity underline"
              >
                Pricing
              </Link>
              <Link
                href="#blog"
                className="text-[18px] font-normal text-white hover:opacity-70 transition-opacity underline"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex items-center gap-[20px]">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <Image
                src="/assets/linkedinwhitelogo.svg"
                alt="LinkedIn"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Facebook"
            >
              <Image
                src="/assets/facebookwhitelogo.svg"
                alt="Facebook"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Twitter"
            >
              <Image
                src="/assets/twitterwhitelogo.svg"
                alt="Twitter"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
            </Link>
          </div>
        </div>

        {/* Middle Section - Contact Info and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between gap-[40px] lg:gap-[60px] mb-[50px]">
          {/* Left Side - Contact Info */}
          <div className="flex-1">
            <div className="inline-block mb-[27px]">
              <h3 className="text-[18px] font-medium leading-[23px] bg-primary text-dark px-[7px] rounded-[7px]">
                Contact us:
              </h3>
            </div>
            <div className="space-y-[20px]">
              <p className="text-[18px] font-normal leading-[23px] text-white">
                Email: info@positivus.com
              </p>
              <p className="text-[18px] font-normal leading-[23px] text-white">
                Phone: 555-567-8901
              </p>
              <p className="text-[18px] font-normal leading-[23px] text-white">
                Address: 1234 Main St
                <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          {/* Right Side - Newsletter */}
          <div className="flex-1 max-w-[634px] bg-[#292A32] rounded-[14px] p-[40px] lg:p-[58px]">
            <form className="flex flex-col sm:flex-row gap-[20px]">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-[25px] py-[18px] border border-white rounded-[14px] text-[18px] font-normal leading-[23px] text-white placeholder:text-white bg-transparent focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-[35px] py-[20px] bg-primary rounded-[14px] text-[18px] font-normal text-dark hover:opacity-90 transition-all whitespace-nowrap"
              >
                Subscribe to news
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section - Divider and Copyright */}
        <div>
          <hr className="border-white mb-[50px]" />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[20px]">
            <p className="text-[18px] font-normal leading-[23px] text-white">
              © 2023 Positivus. All Rights Reserved.
            </p>
            <Link
              href="/privacy"
              className="text-[18px] font-normal leading-[23px] text-white hover:opacity-70 transition-opacity underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

