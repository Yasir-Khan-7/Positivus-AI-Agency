import Image from "next/image";

export default function CTASection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[100px] py-[40px] sm:py-[55px] lg:py-[70px]">
        <div className="bg-gray rounded-[30px] sm:rounded-[38px] lg:rounded-[45px] p-[40px] sm:p-[60px] lg:p-[80px] flex flex-col lg:flex-row items-center justify-between gap-[30px] sm:gap-[35px] lg:gap-[40px] relative overflow-hidden">
          {/* Left Content */}
          <div className="flex-1 max-w-full lg:max-w-[500px] z-10 text-center lg:text-left">
            <h2 className="text-[24px] sm:text-[27px] lg:text-[30px] font-medium leading-[30px] sm:leading-[34px] lg:leading-[38px] text-dark mb-[18px] sm:mb-[22px] lg:mb-[26px]">
              Let&apos;s make things happen
            </h2>
            <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[20px] sm:leading-[21px] lg:leading-[23px] text-dark mb-[24px] sm:mb-[30px] lg:mb-[35px]">
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>
            <button className="px-[28px] sm:px-[32px] lg:px-[35px] py-[16px] sm:py-[18px] lg:py-[20px] bg-dark rounded-[14px] text-[16px] sm:text-[17px] lg:text-[18px] font-normal text-white hover:bg-opacity-90 transition-all">
              Get your free proposal
            </button>
          </div>

          {/* Right Illustration */}
          <div className="flex-shrink-0 z-10">
            <Image
              src="/assets/letmakeithappenimage.svg"
              alt="Let's make things happen illustration"
              width={359}
              height={394}
              className="w-[220px] sm:w-[280px] lg:w-[359px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



