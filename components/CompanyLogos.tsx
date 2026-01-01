import Image from "next/image";

const companies = [
  { name: "Amazon", logo: "/assets/amazonlogo.svg", width: 125, height: 38 },
  { name: "Dribbble", logo: "/assets/dribblelogo.svg", width: 127, height: 32 },
  { name: "HubSpot", logo: "/assets/hubspotlogo.svg", width: 130, height: 36 },
  { name: "Notion", logo: "/assets/notionlogo.svg", width: 125, height: 32 },
  { name: "Netflix", logo: "/assets/netflixlogo.svg", width: 115, height: 31 },
  { name: "Zoom", logo: "/assets/zoomlogo.svg", width: 120, height: 34 },
];

export default function CompanyLogos() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[100px] py-[70px]">
        <div className="flex flex-wrap items-center justify-between gap-x-[78px] gap-y-[40px] grayscale opacity-60">
          {companies.map((company) => (
            <div key={company.name} className="flex items-center justify-center">
              <Image 
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

