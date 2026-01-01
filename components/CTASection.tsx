import Image from "next/image";

export default function CTASection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[100px] py-[70px]">
        <div className="bg-gray rounded-[45px] p-[60px] lg:p-[80px] flex flex-col lg:flex-row items-center justify-between gap-[40px] relative overflow-hidden">
          {/* Left Content */}
          <div className="flex-1 max-w-[500px] z-10">
            <h2 className="text-[30px] font-medium leading-[38px] text-dark mb-[26px]">
              Let&apos;s make things happen
            </h2>
            <p className="text-[18px] font-normal leading-[23px] text-dark mb-[35px]">
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>
            <button className="px-[35px] py-[20px] bg-dark rounded-[14px] text-[18px] font-normal text-white hover:bg-opacity-90 transition-all">
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
              className="w-[280px] lg:w-[359px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

