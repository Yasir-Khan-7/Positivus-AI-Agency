import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Search engine",
    subtitle: "optimization",
    image: "/assets/serviceimage1.svg",
    bgColor: "bg-gray",
    textColor: "text-dark",
    titleBg: "bg-primary",
    titleTextColor: "text-dark",
    arrowIcon: "/assets/arrowicongreen.svg",
  },
  {
    id: 2,
    title: "Pay-per-click",
    subtitle: "advertising",
    image: "/assets/serviceimage2.svg",
    bgColor: "bg-primary",
    textColor: "text-dark",
    titleBg: "bg-dark",
    titleTextColor: "text-white",
    arrowIcon: "/assets/arrowicongreen.svg",
  },
  {
    id: 3,
    title: "Social Media",
    subtitle: "Marketing",
    image: "/assets/serviceimage3.svg",
    bgColor: "bg-dark",
    textColor: "text-white",
    titleBg: "bg-white",
    titleTextColor: "text-dark",
    arrowIcon: "/assets/arrowiconblack.svg",
  },
  {
    id: 4,
    title: "Email",
    subtitle: "Marketing",
    image: "/assets/serviceimage4.svg",
    bgColor: "bg-gray",
    textColor: "text-dark",
    titleBg: "bg-primary",
    titleTextColor: "text-dark",
    arrowIcon: "/assets/arrowicongreen.svg",
  },
  {
    id: 5,
    title: "Content",
    subtitle: "Creation",
    image: "/assets/serviceimage5.svg",
    bgColor: "bg-primary",
    textColor: "text-dark",
    titleBg: "bg-dark",
    titleTextColor: "text-white",
    arrowIcon: "/assets/arrowicongreen.svg",
  },
  {
    id: 6,
    title: "Analytics and",
    subtitle: "Tracking",
    image: "/assets/serivceimage6.svg",
    bgColor: "bg-dark",
    textColor: "text-white",
    titleBg: "bg-primary",
    titleTextColor: "text-dark",
    arrowIcon: "/assets/arrowiconblack.svg",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[100px] py-[70px]">
        {/* Section Header */}
        <div className="flex items-center gap-[40px] mb-[80px]">
          <div className="inline-block">
            <h2 className="text-[45px] font-medium leading-[57px] bg-primary px-[7px] rounded-[7px]">
              Services
            </h2>
          </div>
          <p className="text-[18px] font-normal leading-[23px] text-dark max-w-[580px]">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.bgColor} rounded-[45px] border border-dark shadow-[0px_5px_0px_0px_#191A23] p-[50px] flex flex-col justify-between min-h-[310px]`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className={`text-[30px] font-medium leading-[38px]`}>
                    <span className={`${service.titleBg} ${service.titleTextColor} px-[7px] rounded-[7px]`}>
                      {service.title}
                    </span>
                  </h3>
                  <h3 className={`text-[30px] font-medium leading-[38px] mt-1`}>
                    <span className={`${service.titleBg} ${service.titleTextColor} px-[7px] rounded-[7px]`}>
                      {service.subtitle}
                    </span>
                  </h3>
                </div>
                <div className="ml-[20px]">
                  <Image
                    src={service.image}
                    alt={`${service.title} ${service.subtitle}`}
                    width={210}
                    height={170}
                    className="w-[165px] lg:w-[210px] h-auto"
                  />
                </div>
              </div>
              <div className="mt-[93px]">
                <Link
                  href="#"
                  className={`flex items-center gap-[15px] ${service.textColor} hover:opacity-70 transition-opacity`}
                >
                  <div className="w-[41px] h-[41px] rounded-full flex items-center justify-center">
                    <Image
                      src={service.arrowIcon}
                      alt="Arrow icon"
                      width={41}
                      height={41}
                      className="w-[41px] h-[41px]"
                    />
                  </div>
                  <span className="text-[20px] font-normal leading-[28px]">Learn more</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

