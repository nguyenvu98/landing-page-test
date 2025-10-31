import Installapp from "@assets/image/Installapp.png";
import Image from "next/image";

export default function Footer() {
  const column_1 = [
    "Careers",
    "Company Details",
    "Terms & Conditions",
    "Help Center Settings",
    "Pricy Policy",
    "Affiliate",
  ];
  const column_2 = [
    "NFT Marketplace",
    "Singshot",
    "Swaps",
    "NFT Launchpath",
    "Runes Platform",
    "Creator Dashboard",
  ];
  const column_3 = [
    "Support",
    "API",
    "Featrue Request",
    "Trust & Safety",
    "Sitemap",
  ];
  const column_4 = ["support@tech.com", "affiliate@tech.com"];

  return (
    <footer className="w-full bg-[#131415] text-white border-t border-[#383A42]">
      <div className="w-[80%] mx-auto py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="flex flex-col">
            <h3 className="font-bold italic text-white mb-4 text-base md:text-lg">
              Abouts Us
            </h3>
            <ul className="flex flex-col gap-2">
              {column_1.map((value, index) => (
                <li key={index} className="text-white text-sm md:text-base">
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold italic text-white mb-4 text-base md:text-lg">
              Products
            </h3>
            <ul className="flex flex-col gap-2">
              {column_2.map((value, index) => (
                <li key={index} className="text-white text-sm md:text-base">
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold italic text-white mb-4 text-base md:text-lg">
              Resources
            </h3>
            <ul className="flex flex-col gap-2">
              {column_3.map((value, index) => (
                <li key={index} className="text-white text-sm md:text-base">
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold italic text-white mb-4 text-base md:text-lg">
              Column 4 Title
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                {column_4.map((value, index) => (
                  <span key={index} className="text-white text-sm md:text-base">
                    {value}
                  </span>
                ))}
              </div>
            </div>
            <div className="">
              <div className="w-full h-28 rounded-md flex items-center justify-center">
                <Image
                  src={Installapp}
                  alt={`Install`}
                  width={200}
                  height={200}
                  className="object-contain object-center rounded-md w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
