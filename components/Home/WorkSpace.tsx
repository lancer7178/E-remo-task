import Image from "next/image";

const WorkSpace = () => {
  const spaces = [
    {
      id: 1,
      title: "Shared Space",
      subtitle: "(CO Work Space)",
      description:
        "Rent as many desks as you need in a dynamic, shared office space. Business Address and storage options included.",
      features: [
        "Reserved permanent workspace as long as you need",
        "Book a desk by the hour or day in anyplace",
        "A well-prepared place for your service and comfort",
        "Hot desk as often as you need in any place",
      ],
      price: "1250 EGP",
      image: "/workspace/shared-space.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {spaces.map((space) => (
        <div
          key={space.id}
          className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center"
        >
          {/* Left Column */}
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-[#0F3B2D] mb-2 sm:mb-3">
              {space.title}
            </h2>
            <p className="text-lg sm:text-2xl md:text-4xl text-gray-600 mb-4 sm:mb-6">
              {space.subtitle}
            </p>

            <p className="text-sm sm:text-base md:text-xl text-gray-700 mb-4 sm:mb-6">
              {space.description}
            </p>

            {/* Features List */}
            <ul className="space-y-2 sm:space-y-4 mb-4 sm:mb-8">
              {space.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-1 sm:mt-2 shrink-0"></span>
                  <span className="text-xs sm:text-sm text-gray-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-8 flex-wrap">
              <Image
                src="/workspace/fi_11805286.svg"
                alt="price-tag"
                width={20}
                height={20}
                className="sm:w-6 sm:h-6"
              />
              <p className="text-xs sm:text-sm text-gray-600">
                Price Starting From:
              </p>
              <p className="text-lg sm:text-xl font-bold text-gray-800">
                {space.price}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 sm:gap-4 flex-col sm:flex-row">
              <button className="bg-[#365327] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#2a4620] transition-colors">
                Book Now
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:border-gray-400 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-48 sm:h-80 md:h-full">
            <Image
              src={space.image}
              alt={space.title}
              width={654}
              height={545}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default WorkSpace;
