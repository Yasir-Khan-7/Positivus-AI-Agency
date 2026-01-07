import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO and Founder",
    image: "/assets/teamp1.svg",
    experience: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Director of Operations",
    image: "/assets/teamp2.svg",
    experience: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    image: "/assets/teamp3.svg",
    experience: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "PPC Manager",
    image: "/assets/teamp4.svg",
    experience: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    id: 5,
    name: "Brian Williams",
    role: "Social Media Specialist",
    image: "/assets/teamp5.svg",
    experience: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    id: 6,
    name: "Sarah Kim",
    role: "Content Creator",
    image: "/assets/teamp6.svg",
    experience: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="w-full bg-white scroll-mt-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[100px] py-[40px] sm:py-[55px] lg:py-[70px]">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[20px] sm:gap-[30px] lg:gap-[40px] mb-[40px] sm:mb-[60px] lg:mb-[80px]">
          <div className="inline-block flex-shrink-0">
            <h2 className="text-[32px] sm:text-[38px] lg:text-[45px] font-medium leading-[40px] sm:leading-[48px] lg:leading-[57px] bg-primary px-[7px] rounded-[7px] whitespace-nowrap">
              Team
            </h2>
          </div>
          <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[20px] sm:leading-[21px] lg:leading-[23px] text-dark max-w-full sm:max-w-[580px]">
            Meet the skilled and experienced team behind our successful digital marketing strategies
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] sm:gap-[32px] lg:gap-[40px] mb-[30px] sm:mb-[35px] lg:mb-[40px]">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-[30px] sm:rounded-[38px] lg:rounded-[45px] border border-dark shadow-[0px_5px_0px_0px_#191A23] p-[25px] sm:p-[32px] lg:p-[40px] flex flex-col"
            >
              {/* Header with Image, Name/Role, and LinkedIn */}
              <div className="flex items-start justify-between mb-[20px] sm:mb-[24px] lg:mb-[28px]">
                <div className="flex items-start gap-[12px] sm:gap-[16px] lg:gap-[20px] flex-1 min-w-0">
                  <div className="relative flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={106}
                      height={106}
                      className="w-[80px] h-[80px] sm:w-[93px] sm:h-[93px] lg:w-[106px] lg:h-[106px]"
                    />
                  </div>
                  <div className="flex flex-col justify-center pt-[6px] sm:pt-[8px] lg:pt-[10px] min-w-0 flex-1">
                    <h3 className="text-[17px] sm:text-[19px] lg:text-[20px] font-medium leading-[21px] sm:leading-[23px] lg:leading-[25px] text-dark mb-[2px] sm:mb-[3px] lg:mb-[4px] truncate">
                      {member.name}
                    </h3>
                    <p className="text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-[19px] sm:leading-[20px] lg:leading-[23px] text-dark">
                      {member.role}
                    </p>
                  </div>
                </div>
                <Link
                  href="#"
                  className="flex-shrink-0 ml-2 sm:ml-3"
                  aria-label={`${member.name} LinkedIn profile`}
                >
                  <Image
                    src="/assets/linkedinicon.svg"
                    alt="LinkedIn"
                    width={34}
                    height={34}
                    className="w-[28px] h-[28px] sm:w-[31px] sm:h-[31px] lg:w-[34px] lg:h-[34px] hover:opacity-70 transition-opacity"
                  />
                </Link>
              </div>

              {/* Divider */}
              <hr className="border-dark mb-[20px] sm:mb-[24px] lg:mb-[28px]" />

              {/* Experience */}
              <p className="text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-[19px] sm:leading-[20px] lg:leading-[23px] text-dark">
                {member.experience}
              </p>
            </div>
          ))}
        </div>

        {/* See All Team Button */}
        <div className="flex justify-end">
          <button className="px-[28px] sm:px-[32px] lg:px-[35px] py-[16px] sm:py-[18px] lg:py-[20px] bg-dark rounded-[12px] sm:rounded-[13px] lg:rounded-[14px] text-[17px] sm:text-[18px] lg:text-[20px] font-normal text-white hover:bg-opacity-90 transition-all border border-dark shadow-[0px_5px_0px_0px_#191A23]">
            See all team
          </button>
        </div>
      </div>
    </section>
  );
}

