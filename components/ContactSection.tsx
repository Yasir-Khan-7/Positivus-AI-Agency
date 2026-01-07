"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [formType, setFormType] = useState<"sayHi" | "getQuote">("sayHi");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="w-full bg-white scroll-mt-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[100px] py-[40px] sm:py-[55px] lg:py-[70px]">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[20px] sm:gap-[30px] lg:gap-[40px] mb-[40px] sm:mb-[60px] lg:mb-[80px]">
          <div className="inline-block flex-shrink-0">
            <h2 className="text-[32px] sm:text-[38px] lg:text-[45px] font-medium leading-[40px] sm:leading-[48px] lg:leading-[57px] bg-primary px-[7px] rounded-[7px]">
              Contact Us
            </h2>
          </div>
          <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[20px] sm:leading-[21px] lg:leading-[23px] text-dark max-w-full sm:max-w-[580px]">
            Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="bg-gray rounded-[30px] sm:rounded-[38px] lg:rounded-[45px] p-[30px] sm:p-[40px] lg:p-[60px] relative overflow-visible">
          <div className="flex flex-col lg:flex-row gap-[30px] sm:gap-[40px] lg:gap-[60px] items-center lg:items-start">
            {/* Left Side - Form */}
            <div className="flex-1 w-full max-w-full lg:max-w-[556px] z-10">
              {/* Radio Buttons */}
              <div className="flex items-center gap-[25px] sm:gap-[30px] lg:gap-[35px] mb-[30px] sm:mb-[35px] lg:mb-[40px]">
                <label className="flex items-center gap-[10px] sm:gap-[12px] lg:gap-[14px] cursor-pointer">
                  <input
                    type="radio"
                    name="formType"
                    value="sayHi"
                    checked={formType === "sayHi"}
                    onChange={() => setFormType("sayHi")}
                    className="appearance-none w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] lg:w-[28px] lg:h-[28px] border-2 border-dark rounded-full checked:border-[7px] lg:checked:border-[8px] checked:border-primary cursor-pointer"
                  />
                  <span className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[20px] sm:leading-[21px] lg:leading-[23px] text-dark">
                    Say Hi
                  </span>
                </label>
                <label className="flex items-center gap-[10px] sm:gap-[12px] lg:gap-[14px] cursor-pointer">
                  <input
                    type="radio"
                    name="formType"
                    value="getQuote"
                    checked={formType === "getQuote"}
                    onChange={() => setFormType("getQuote")}
                    className="appearance-none w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] lg:w-[28px] lg:h-[28px] border-2 border-dark rounded-full checked:border-[7px] lg:checked:border-[8px] checked:border-primary cursor-pointer"
                  />
                  <span className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[20px] sm:leading-[21px] lg:leading-[23px] text-dark">
                    Get a Quote
                  </span>
                </label>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-[20px] sm:space-y-[22px] lg:space-y-[25px]">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[18px] sm:leading-[19px] lg:leading-[20px] text-dark mb-[5px]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-[20px] sm:px-[25px] lg:px-[30px] py-[14px] sm:py-[16px] lg:py-[18px] border border-dark rounded-[14px] text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[20px] sm:leading-[21px] lg:leading-[23px] text-dark placeholder:text-dark/50 focus:outline-none focus:border-primary transition-colors bg-white"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[18px] sm:leading-[19px] lg:leading-[20px] text-dark mb-[5px]"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-[20px] sm:px-[25px] lg:px-[30px] py-[14px] sm:px-[16px] lg:py-[18px] border border-dark rounded-[14px] text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[20px] sm:leading-[21px] lg:leading-[23px] text-dark placeholder:text-dark/50 focus:outline-none focus:border-primary transition-colors bg-white"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[18px] sm:leading-[19px] lg:leading-[20px] text-dark mb-[5px]"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows={6}
                    className="w-full px-[20px] sm:px-[25px] lg:px-[30px] py-[14px] sm:py-[16px] lg:py-[18px] border border-dark rounded-[14px] text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[20px] sm:leading-[21px] lg:leading-[23px] text-dark placeholder:text-dark/50 focus:outline-none focus:border-primary transition-colors resize-none bg-white"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-[28px] sm:px-[32px] lg:px-[35px] py-[16px] sm:py-[18px] lg:py-[20px] bg-dark rounded-[14px] text-[16px] sm:text-[17px] lg:text-[18px] font-normal text-white hover:bg-opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden lg:block absolute right-[-280px] top-1/2 -translate-y-1/2 w-[550px] xl:w-[650px] pointer-events-none">
              <Image
                src="/assets/contactrightimage.svg"
                alt="Contact illustration"
                width={692}
                height={649}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

