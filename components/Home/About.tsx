import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Chair Location
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            “Chair location” is a website where you can search, find and reserve
            co-working space, including co-working offices, private offices,
            meeting rooms, and virtual offices near you. It shows the features
            and amenities this space can provide. Professionals and businesses
            can then compare all available co-working spaces to find one with
            the services and facilities that best suit their requirements.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Why Chair Location
          </h3>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="flex-none bg-[#F1F6EF] rounded-full p-3">
                <Image
                  src="/about/fi_535239.svg"
                  alt="locations"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  More Than (4652) Location
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="flex-none bg-[#F1F6EF] rounded-full p-3">
                <Image
                  src="/about/fi_3022243.svg"
                  alt="amenities"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  We Offer All Amenities in Our All Location
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="flex-none bg-[#F1F6EF] rounded-full p-3">
                <Image
                  src="/about/fi_3468825.svg"
                  alt="support"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  All Kinda Of Supports 24/7
                </p>
              </div>
            </li>
          </ul>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-[#365327] text-white rounded-md shadow-sm hover:shadow-md">
              View Products
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              Book Now
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/about/Group 36868.jpg"
              alt="office 1"
              width={900}
              height={180}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/about/Group 36869.jpg"
              alt="office 2"
              width={900}
              height={180}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/about/Group 36870.jpg"
              alt="office 3"
              width={900}
              height={180}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
