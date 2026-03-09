"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

const HeroSection = () => {
  const [activeCategory, setActiveCategory] = useState("meeting");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: "shared",
      label: "Shared Space",
      icon: "/co-working.svg",
    },
    {
      id: "private",
      label: "Private Offices",
      icon: "/workplace.svg",
    },
    {
      id: "meeting",
      label: "Meeting Rooms",
      icon: "/conference.svg",
    },
    {
      id: "virtual",
      label: "Virtual Offices",
      icon: "/video-call.svg",
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto mt-12">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="/hero.jpg"
          alt="Office Hero"
          fill
          className="object-cover absolute inset-0 rounded-3xl"
          priority
        />

        <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

        <div className="relative z-10 h-full flex flex-col justify-start items-center px-4 pt-12 sm:pt-16 lg:pt-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold text-[#F8E9D9] mb-2 sm:mb-4 font-sans">
              Office That Fit You
            </h1>
            <p className="text-2xl sm:text-4xl md:text-7xl font-bold text-[#F8E9D9] font-sans">
              Creative Way To Work
            </p>
          </div>
        </div>
      </div>

      <div className="relative -mt-20 sm:-mt-32 mx-auto max-w-4xl px-4 bg-[#FFFAF5] rounded-2xl p-4 sm:p-10 shadow-2xl">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-6 mb-6 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-5 py-2 sm:py-3 rounded-lg transition-all text-xs sm:text-sm ${
                activeCategory === category.id
                  ? "bg-[#FAFFF7] text-gray-800 shadow-lg"
                  : "bg-[#F7F8F9] text-grey-800 hover:bg-white/30"
              }`}
            >
              <Image
                src={category.icon}
                alt={category.label}
                width={16}
                height={16}
                className="sm:w-5 sm:h-5"
              />
              <span className="hidden sm:inline font-medium">
                {category.label}
              </span>
              <span className="sm:hidden font-medium">
                {category.label.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 items-stretch sm:items-center">
          <div className="flex-1 relative w-full">
            <Search
              className="absolute left-3 sm:left-4 top-2.5 sm:top-3 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Image
              src="/search.svg"
              alt="Search"
              width={18}
              height={18}
              className="absolute right-3 sm:right-4 top-2.5 sm:top-3 cursor-pointer"
            />
          </div>

          <button
            className="px-4 sm:px-8 py-2.5 sm:py-3 text-white font-medium rounded-lg whitespace-nowrap text-sm sm:text-base transition-all hover:shadow-lg"
            style={{
              backgroundColor: "var(--primary-dark)",
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
