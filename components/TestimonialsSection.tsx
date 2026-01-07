"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    id: 2,
    quote: "Positivus has transformed our digital marketing strategy. Their expertise in SEO and content marketing has helped us reach new audiences and achieve our business goals. The team is knowledgeable, dedicated, and always goes above and beyond.",
    name: "Sarah Johnson",
    position: "CEO at ABC Company",
  },
  {
    id: 3,
    quote: "Working with Positivus has been a game-changer for our business. Their innovative approach to social media marketing has significantly increased our engagement and brand awareness. We couldn't be happier with the results.",
    name: "Michael Brown",
    position: "Director of Marketing at DEF Inc",
  },
  {
    id: 4,
    quote: "The team at Positivus is exceptional. They took the time to understand our business and created a customized marketing strategy that delivered outstanding results. Their professionalism and expertise are unmatched.",
    name: "Emily Davis",
    position: "VP of Sales at GHI Solutions",
  },
  {
    id: 5,
    quote: "We've partnered with Positivus for over two years, and they continue to exceed our expectations. Their data-driven approach and creative campaigns have helped us achieve remarkable growth in our online presence.",
    name: "David Wilson",
    position: "Founder at JKL Enterprises",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getPreviousIndex = () => {
    return currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[100px] py-[40px] sm:py-[55px] lg:py-[70px]">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[20px] sm:gap-[30px] lg:gap-[40px] mb-[40px] sm:mb-[60px] lg:mb-[80px]">
          <div className="inline-block flex-shrink-0">
            <h2 className="text-[32px] sm:text-[38px] lg:text-[45px] font-medium leading-[40px] sm:leading-[48px] lg:leading-[57px] bg-primary px-[7px] rounded-[7px] whitespace-nowrap">
              Testimonials
            </h2>
          </div>
          <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[20px] sm:leading-[21px] lg:leading-[23px] text-dark max-w-full sm:max-w-[580px]">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="bg-dark rounded-[30px] sm:rounded-[38px] lg:rounded-[45px] py-[50px] sm:py-[67px] lg:py-[84px] px-[20px] sm:px-[30px] lg:px-[60px] relative">
          {/* Carousel */}
          <div className="relative">
            {/* Testimonials Track */}
            <div className="flex items-stretch justify-center gap-[30px] sm:gap-[40px] lg:gap-[50px] mb-[80px] sm:mb-[100px] lg:mb-[118px] min-h-[380px] sm:min-h-[405px] lg:min-h-[430px]">
              {/* Previous card */}
              <div className="hidden lg:block w-full lg:w-[350px] flex-shrink-0 opacity-50">
                <TestimonialCard
                  testimonial={testimonials[getPreviousIndex()]}
                />
              </div>

              {/* Current center card */}
              <div className="w-full lg:w-[350px] flex-shrink-0">
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </div>

              {/* Next card */}
              <div className="hidden lg:block w-full lg:w-[350px] flex-shrink-0 opacity-50">
                <TestimonialCard
                  testimonial={testimonials[getNextIndex()]}
                />
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-[50px] sm:gap-[100px] lg:gap-[150px]">
              {/* Previous Arrow */}
              <button
                onClick={handlePrevious}
                className="text-white hover:opacity-70 transition-opacity flex-shrink-0"
                aria-label="Previous testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px]"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Star Indicators */}
              <div className="flex items-center gap-[15px] sm:gap-[18px] lg:gap-[20px]">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="transition-opacity hover:opacity-70"
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    <Image
                      src="/assets/starticon.svg"
                      alt={index === currentIndex ? "Current slide" : "Slide indicator"}
                      width={22}
                      height={22}
                      className={`w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[22px] lg:h-[22px] ${
                        index === currentIndex ? 'opacity-100' : 'opacity-30'
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Next Arrow */}
              <button
                onClick={handleNext}
                className="text-white hover:opacity-70 transition-opacity flex-shrink-0"
                aria-label="Next testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px]"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex flex-col h-full">
      {/* Speech Bubble */}
      <div className="relative bg-transparent border-2 border-primary rounded-[30px] sm:rounded-[38px] lg:rounded-[45px] p-[30px] sm:p-[35px] lg:p-[40px] mb-[45px] sm:mb-[52px] lg:mb-[58px] flex-1 flex items-center">
        <p className="text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-[19px] sm:leading-[20px] lg:leading-[23px] text-white">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        {/* Diamond pointer */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[12px] sm:bottom-[13px] lg:-bottom-[14px] w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] lg:w-[28px] lg:h-[28px] bg-dark border-2 border-primary rotate-45" />
      </div>

      {/* Author Info */}
      <div className="text-center px-[15px] sm:px-[18px] lg:px-[20px]">
        <h4 className="text-[17px] sm:text-[19px] lg:text-[20px] font-medium leading-[21px] sm:leading-[23px] lg:leading-[25px] text-primary mb-[4px]">
          {testimonial.name}
        </h4>
        <p className="text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-[19px] sm:leading-[20px] lg:leading-[23px] text-white">
          {testimonial.position}
        </p>
      </div>
    </div>
  );
}

