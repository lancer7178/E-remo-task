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

        <div className="relative z-10 h-full flex flex-col justify-start items-center px-4 lg:pt-24">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-[#F8E9D9] mb-4 font-sans">
              Office That Fit You
            </h1>
            <p className="text-5xl md:text-7xl font-bold text-[#F8E9D9] font-sans">
              Creative Way To Work
            </p>
          </div>
        </div>
      </div>

      <div className="relative -mt-32 mx-auto max-w-4xl px-4 bg-[#FFFAF5] rounded-2xl p-10 shadow-2xl">
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-lg transition-all ${
                activeCategory === category.id
                  ? "bg-[#FAFFF7] text-gray-800 shadow-lg"
                  : "bg-[#F7F8F9] text-grey-800 hover:bg-white/30"
              }`}
            >
              <Image
                src={category.icon}
                alt={category.label}
                width={20}
                height={20}
              />
              <span className="text-sm font-medium ">{category.label}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 relative w-full">
            <Search className="absolute left-4 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search Here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <Image
              src="/search.svg"
              alt="Search"
              width={20}
              height={20}
              className="absolute right-4 top-3 cursor-pointer"
            />

          </div>

  

          <button
            className="px-8 py-3 text-white font-medium rounded-lg whitespace-nowrap transition-all hover:shadow-lg"
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
