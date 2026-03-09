import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:py-20">
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            About Chair Location
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
            “Chair location” is a website where you can search, find and reserve
            co-working space, including co-working offices, private offices,
            meeting rooms, and virtual offices near you. It shows the features
            and amenities this space can provide. Professionals and businesses
            can then compare all available co-working spaces to find one with
            the services and facilities that best suit their requirements.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
            Why Chair Location
          </h3>

          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <li className="flex items-start gap-2 sm:gap-3">
              <div className="flex-none bg-[#F1F6EF] rounded-full p-2 sm:p-3 mt-0.5">
                <Image
                  src="/about/fi_535239.svg"
                  alt="locations"
                  width={20}
                  height={20}
                  className="sm:w-7 sm:h-7"
                />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-700">
                  More Than (4652) Location
                </p>
              </div>
            </li>

            <li className="flex items-start gap-2 sm:gap-3">
              <div className="flex-none bg-[#F1F6EF] rounded-full p-2 sm:p-3 mt-0.5">
                <Image
                  src="/about/fi_3022243.svg"
                  alt="amenities"
                  width={20}
                  height={20}
                  className="sm:w-7 sm:h-7"
                />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-700">
                  We Offer All Amenities in Our All Location
                </p>
              </div>
            </li>

            <li className="flex items-start gap-2 sm:gap-3">
              <div className="flex-none bg-[#F1F6EF] rounded-full p-2 sm:p-3 mt-0.5">
                <Image
                  src="/about/fi_3468825.svg"
                  alt="support"
                  width={20}
                  height={20}
                  className="sm:w-7 sm:h-7"
                />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-700">
                  All Kinda Of Supports 24/7
                </p>
              </div>
            </li>
          </ul>

          <div className="flex gap-2 sm:gap-4 flex-col sm:flex-row">
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[#365327] text-white rounded-md text-sm sm:text-base shadow-sm hover:shadow-md">
              View Products
            </button>
            <button className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-md text-sm sm:text-base text-gray-700 hover:bg-gray-50">
              Book Now
            </button>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-6">
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
