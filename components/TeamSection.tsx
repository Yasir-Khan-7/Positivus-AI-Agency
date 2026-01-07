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
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[100px] py-[70px]">
        {/* Section Header */}
        <div className="flex items-center gap-[40px] mb-[80px]">
          <div className="inline-block">
            <h2 className="text-[45px] font-medium leading-[57px] bg-primary px-[7px] rounded-[7px]">
              Team
            </h2>
          </div>
          <p className="text-[18px] font-normal leading-[23px] text-dark max-w-[580px]">
            Meet the skilled and experienced team behind our successful digital marketing strategies
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] mb-[40px]">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-[45px] border border-dark shadow-[0px_5px_0px_0px_#191A23] p-[40px] flex flex-col"
            >
              {/* Header with Image, Name/Role, and LinkedIn */}
              <div className="flex items-start justify-between mb-[28px]">
                <div className="flex items-start gap-[20px] flex-1">
                  <div className="relative flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={106}
                      height={106}
                      className="w-[106px] h-[106px]"
                    />
                  </div>
                  <div className="flex flex-col justify-center pt-[10px]">
                    <h3 className="text-[20px] font-medium leading-[25px] text-dark mb-[4px]">
                      {member.name}
                    </h3>
                    <p className="text-[18px] font-normal leading-[23px] text-dark">
                      {member.role}
                    </p>
                  </div>
                </div>
                <Link
                  href="#"
                  className="flex-shrink-0"
                  aria-label={`${member.name} LinkedIn profile`}
                >
                  <Image
                    src="/assets/linkedinicon.svg"
                    alt="LinkedIn"
                    width={34}
                    height={34}
                    className="w-[34px] h-[34px] hover:opacity-70 transition-opacity"
                  />
                </Link>
              </div>

              {/* Divider */}
              <hr className="border-dark mb-[28px]" />

              {/* Experience */}
              <p className="text-[18px] font-normal leading-[23px] text-dark">
                {member.experience}
              </p>
            </div>
          ))}
        </div>

        {/* See All Team Button */}
        <div className="flex justify-end">
          <button className="px-[35px] py-[20px] bg-dark rounded-[14px] text-[18px] font-normal text-white hover:bg-opacity-90 transition-all">
            See all team
          </button>
        </div>
      </div>
    </section>
  );
}

