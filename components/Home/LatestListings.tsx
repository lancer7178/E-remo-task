"use client";

import Image from "next/image";
import { useState } from "react";

const listings = [
  {
    id: 1,
    tag: "Available",
    title: "Spot Co-Working Space",
    rating: "4.9",
    reviews: 162,
    desc: "Chair location is a website where you can search, find and reserve co-working space, including co-working",
    people: 12,
    status: "Open",
    price: "20SAR /HOUR",
    image: "/about/Group 36868.jpg",
  },
  {
    id: 2,
    tag: "Not Available",
    title: "Spot Co-Working Space",
    rating: "4.9",
    reviews: 162,
    desc: "Chair location is a website where you can search, find and reserve co-working space, including co-working",
    people: 12,
    status: "Closed",
    price: "20SAR /HOUR",
    image: "/about/Group 36869.jpg",
  },
  {
    id: 3,
    tag: "Available",
    title: "Spot Co-Working Space",
    rating: "4.9",
    reviews: 162,
    desc: "Chair location is a website where you can search, find and reserve co-working space, including co-working",
    people: 12,
    status: "Open",
    price: "20SAR /HOUR",
    image: "/about/Group 36870.jpg",
  },
  {
    id: 4,
    tag: "Available",
    title: "Spot Co-Working Space",
    rating: "4.9",
    reviews: 162,
    desc: "Chair location is a website where you can search, find and reserve co-working space, including co-working",
    people: 12,
    status: "Closed",
    price: "20SAR /HOUR",
    image: "/about/Group 36868.jpg",
  },
];

export default function LatestListings() {
  const [activeCategory, setActiveCategory] = useState("meeting");

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
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#0F3B2D]">Latest Listings</h2>
        <p className="text-sm text-gray-600">Check our latest listings</p>
      </div>

     

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {listings.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <div className="relative">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={340}
                className="object-cover w-full h-44 rounded-t-2xl"
              />
              {/* Diagonal tag ribbon */}
              <div className="absolute -left-4 top-3 overflow-visible pointer-events-none">
                <span
                  className={
                    `pointer-events-auto inline-block text-xs font-semibold px-12 py-1 shadow-sm transform -rotate-30 ` +
                    (item.tag.toLowerCase().includes("not")
                      ? "bg-rose-100 text-rose-800"
                      : "bg-emerald-100 text-emerald-800")
                  }
                >
                  {item.tag}
                </span>
              </div>
              <div className="absolute right-3 top-3 flex gap-2">
                <button className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  ❤
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="flex items-center text-sm text-yellow-500">
                  ★ {item.rating}{" "}
                  <span className="text-gray-400 ml-1">({item.reviews})</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>

              <div className="flex items-start justify-between text-sm text-gray-500 mb-2">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/listings/fi_17848968.png"
                      alt="People Icon"
                      width={16}
                      height={16}
                    />
                    <span>{item.people} Per</span>
                  </div>

                  <div
                    className={`mt-2 ${item.status === "Open" ? "text-emerald-600" : "text-rose-600"} flex items-center gap-2`}
                  >
                    <Image
                      src="/listings/fi_16350271.svg"
                      alt="Status Icon"
                      width={16}
                      height={16}
                    />
                    <span className="text-sm font-medium">{item.status}</span>
                  </div>
                </div>
                <div className="hidden md:block" />
              </div>
              <hr className="my-2" />
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div>
                  Starts From :{" "}
                  <span className="font-semibold text-gray-800">
                    {item.price}
                  </span>
                </div>
                <button className="text-emerald-600 bg-emerald-50 rounded-full w-8 h-8 flex items-center justify-center">
                  ➜
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

       {/* Category Tabs */}
      <div className="flex justify-center mt-12">
        <div className="bg-[#365327] rounded-full p-4 py-4 flex gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-4 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-white text-[#365327] shadow-lg "
                  : "bg-transparent text-white hover:bg-white/10"
              }`}
            >
              <Image
                src={category.icon}
                alt={category.label}
                width={18}
                height={18}
                className="text-stone-50"
              />
              <span className="text-sm font-medium">{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
