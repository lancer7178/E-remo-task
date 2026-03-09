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
      <div className="text-center mb-16">
        <div className="flex text-center justify-center gap-2 mb-4">
        <h2 className="text-4xl font-bold mb-4">How </h2>
        <h2 className="text-4xl font-bold text-[#0F3B2D] mb-4">it</h2>
        <h2 className="text-4xl font-bold mb-4">  Works</h2>
        </div>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Coworking & Flexible Office Marketplace | Search & Book Today
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-3 gap-12">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col max-w-xs mx-auto w-full">
            {/* Step Number Badge */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#E7CAAA] rounded-full flex items-center justify-center">
                <span className="font-bold text-gray-800">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
            </div>

            {/* Image */}
            <div className="relative h-56 mb-4 rounded-2xl overflow-hidden">
              <Image
                src={step.image}
                alt={step.title}
                width={200}
                height={240}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkFlow;
