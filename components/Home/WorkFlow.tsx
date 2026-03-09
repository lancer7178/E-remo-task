import Image from "next/image";

const WorkFlow = () => {
  const steps = [
    {
      id: 1,
      number: "1",
      title: "Book, Reach or Call",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      image: "/workflow/50eb29f55059da732a938ed0dc28ce56b74f8a30.jpg",
    },
    {
      id: 2,
      number: "2",
      title: "View Location Info",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      image: "/workflow/09bc0c1da4817900cd46ba2ff9873b41194f4548.jpg",
    },
    {
      id: 3,
      number: "3",
      title: "Search Locations",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      image: "/workflow/d380ae09f8cbf8a56f9f32397e7076f07112f6e7.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="flex text-center justify-center gap-1 sm:gap-2 mb-2 sm:mb-4 flex-wrap">
          <h2 className="text-2xl sm:text-4xl font-bold">How </h2>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0F3B2D]">it</h2>
          <h2 className="text-2xl sm:text-4xl font-bold">Works</h2>
        </div>
        <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto px-2">
          Coworking & Flexible Office Marketplace | Search & Book Today
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col mx-auto w-full">
            {/* Step Number Badge */}
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E7CAAA] rounded-full flex items-center justify-center shrink-0">
                <span className="font-bold text-sm sm:text-base text-gray-800">
                  {step.number}
                </span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
            </div>

            {/* Image */}
            <div className="relative h-40 sm:h-56 mb-3 sm:mb-4 rounded-2xl overflow-hidden">
              <Image
                src={step.image}
                alt={step.title}
                width={200}
                height={240}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-700">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkFlow;
