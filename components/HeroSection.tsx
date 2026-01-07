import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[100px] pb-[70px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px]">
          {/* Left Content */}
          <div className="flex-1 max-w-[531px]">
            <h1 className="text-[60px] font-medium leading-[67px] text-dark mb-[35px]">
              Navigating the digital landscape for success
            </h1>
            <p className="text-[20px] font-normal leading-[28px] text-dark mb-[35px]">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <button className="px-[35px] py-[20px] bg-dark rounded-[14px] text-[18px] font-normal text-white hover:bg-opacity-90 transition-all">
              Book a consultation
            </button>
          </div>

          {/* Right Illustration */}
          <div className="flex-1 flex items-center justify-center max-w-[600px]">
            <Image 
              src="/assets/heropageilllustration.svg" 
              alt="Digital Marketing Illustration" 
              width={600}
              height={515}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}



