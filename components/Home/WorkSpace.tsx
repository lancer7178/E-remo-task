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
        <div key={space.id} className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-7xl font-bold text-[#0F3B2D] mb-2">
              {space.title}
            </h2>
            <p className="text-4xl text-gray-600 mb-6">{space.subtitle}</p>

            <p className="text-xl text-gray-700 mb-6">{space.description}</p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {space.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 shrink-0"></span>
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="flex items-center gap-3 mb-8">
                <Image
                    src="/workspace/fi_11805286.svg"
                    alt="price-tag"
                    width={24}
                    height={24}
                />
                <p className="text-sm text-gray-600">Price Starting From:</p>
                <p className="text-xl font-bold text-gray-800">{space.price}</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-[#365327] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2a4620] transition-colors">
                Book Now
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-96 md:h-full">
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
