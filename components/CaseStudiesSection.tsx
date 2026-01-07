"use client";

import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    description: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    id: 2,
    description: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    id: 3,
    description: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="use-cases" className="w-full bg-white scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[100px] py-[40px] sm:py-[55px] lg:py-[70px]">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[20px] sm:gap-[30px] lg:gap-[40px] mb-[40px] sm:mb-[60px] lg:mb-[80px]">
          <div className="inline-block flex-shrink-0">
            <h2 className="text-[32px] sm:text-[38px] lg:text-[45px] font-medium leading-[40px] sm:leading-[48px] lg:leading-[57px] bg-primary px-[7px] rounded-[7px] whitespace-nowrap">
              Case Studies
            </h2>
          </div>
          <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[20px] sm:leading-[21px] lg:leading-[23px] text-dark max-w-full sm:max-w-[580px]">
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
          </p>
        </div>

        {/* Case Studies Container */}
        <div className="bg-dark rounded-[30px] sm:rounded-[38px] lg:rounded-[45px] p-[30px] sm:p-[45px] lg:p-[70px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] sm:gap-[35px] lg:gap-[50px] divide-y lg:divide-y-0 lg:divide-x divide-white/20">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`${index > 0 ? 'pt-[30px] sm:pt-[35px] lg:pt-0 lg:pl-[40px] xl:pl-[50px]' : ''}`}
              >
                <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[20px] sm:leading-[21px] lg:leading-[23px] text-white mb-[20px]">
                  {study.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-[12px] sm:gap-[15px] text-primary hover:opacity-70 transition-opacity"
                >
                  <span className="text-[18px] sm:text-[19px] lg:text-[20px] font-normal leading-[23px] sm:leading-[24px] lg:leading-[28px]">Learn more</span>
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[17px] sm:w-[20px] sm:h-[19px] lg:w-[21px] lg:h-[20px]"
                  >
                    <path
                      d="M1.25 13.701C0.532561 14.1152 0.286773 15.0326 0.700962 15.75C1.11515 16.4674 2.03257 16.7133 2.75 16.299L2 15L1.25 13.701ZM20.7694 5.38823C20.9839 4.58799 20.509 3.76555 19.7088 3.55111L6.66878 0.0570541C5.86854 -0.157384 5.04609 0.317515 4.83165 1.11775C4.61721 1.91799 5.09211 2.74044 5.89235 2.95488L17.4834 6.06068L14.3776 17.6518C14.1632 18.452 14.6381 19.2745 15.4383 19.4889C16.2385 19.7033 17.061 19.2284 17.2754 18.4282L20.7694 5.38823ZM2 15L2.75 16.299L20.0706 6.299L19.3206 5L18.5706 3.70096L1.25 13.701L2 15Z"
                      fill="#B9FF66"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



