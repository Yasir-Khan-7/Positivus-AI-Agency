import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="about" className="w-full bg-white scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[100px] pb-[40px] sm:pb-[50px] lg:pb-[70px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px] sm:gap-[50px] lg:gap-[60px]">
          {/* Left Content */}
          <div className="flex-1 max-w-full lg:max-w-[531px] text-center lg:text-left">
            <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-medium leading-[42px] sm:leading-[54px] lg:leading-[67px] text-dark mb-[20px] sm:mb-[28px] lg:mb-[35px]">
              Navigating the digital landscape for success
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-dark mb-[20px] sm:mb-[28px] lg:mb-[35px]">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <button className="px-[28px] sm:px-[32px] lg:px-[35px] py-[16px] sm:py-[18px] lg:py-[20px] bg-dark rounded-[14px] text-[16px] sm:text-[17px] lg:text-[18px] font-normal text-white hover:bg-opacity-90 transition-all">
              Book a consultation
            </button>
          </div>

          {/* Right Illustration */}
          <div className="flex-1 flex items-center justify-center max-w-full lg:max-w-[600px] w-full">
            <Image 
              src="/assets/heropageilllustration.svg" 
              alt="Digital Marketing Illustration" 
              width={600}
              height={515}
              className="w-full h-auto max-w-[400px] sm:max-w-[500px] lg:max-w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}



