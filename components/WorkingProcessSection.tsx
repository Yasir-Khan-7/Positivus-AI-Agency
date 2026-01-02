"use client";

import { useState } from "react";
import Image from "next/image";

const processes = [
  {
    id: 1,
    number: "01",
    title: "Consultation",
    description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    number: "02",
    title: "Research and Strategy Development",
    description: "During this phase, we conduct thorough research and develop a comprehensive strategy tailored to your business needs and target audience.",
  },
  {
    id: 3,
    number: "03",
    title: "Implementation",
    description: "We execute the strategy with precision, implementing all planned marketing activities across the selected channels.",
  },
  {
    id: 4,
    number: "04",
    title: "Monitoring and Optimization",
    description: "We continuously monitor campaign performance and optimize strategies to ensure maximum effectiveness and ROI.",
  },
  {
    id: 5,
    number: "05",
    title: "Reporting and Communication",
    description: "Regular reports and updates keep you informed about campaign progress, results, and insights.",
  },
  {
    id: 6,
    number: "06",
    title: "Continual Improvement",
    description: "We continuously refine and improve strategies based on data, feedback, and changing market conditions.",
  },
];

export default function WorkingProcessSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[100px] py-[70px]">
        {/* Section Header */}
        <div className="flex items-center gap-[40px] mb-[80px]">
          <div className="inline-block">
            <h2 className="text-[45px] font-medium leading-[57px] bg-primary px-[7px] rounded-[7px]">
              Our Working Process
            </h2>
          </div>
          <p className="text-[18px] font-normal leading-[23px] text-dark max-w-[580px]">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-[30px]">
          {processes.map((process, index) => (
            <div
              key={process.id}
              className={`${
                openIndex === index ? 'bg-primary' : 'bg-gray'
              } rounded-[45px] border border-dark shadow-[0px_5px_0px_0px_#191A23] transition-colors duration-300`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-[50px] lg:px-[60px] py-[35px] lg:py-[41px] flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-[20px] lg:gap-[25px]">
                  <span className="text-[50px] lg:text-[60px] font-medium leading-[60px] lg:leading-[77px] text-dark">
                    {process.number}
                  </span>
                  <h3 className="text-[24px] lg:text-[30px] font-medium leading-[30px] lg:leading-[38px] text-dark">
                    {process.title}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Image
                      src="/assets/minusicon.svg"
                      alt="Collapse"
                      width={58}
                      height={58}
                      className="w-[48px] h-[48px] lg:w-[58px] lg:h-[58px]"
                    />
                  ) : (
                    <Image
                      src="/assets/plusicon.svg"
                      alt="Expand"
                      width={58}
                      height={58}
                      className="w-[48px] h-[48px] lg:w-[58px] lg:h-[58px]"
                    />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-[50px] lg:px-[60px] pb-[35px] lg:pb-[41px]">
                  <hr className="border-dark mb-[30px]" />
                  <p className="text-[18px] font-normal leading-[23px] text-dark max-w-[90%]">
                    {process.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

