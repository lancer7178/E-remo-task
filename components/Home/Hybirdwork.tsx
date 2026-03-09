import Image from "next/image";

const Hybirdwork = () => {
  const images = [
    {
      id: 1,
      src: "/hybirdwork/office1.jpg",
      alt: "Hybrid Office 1",
    },
    {
      id: 2,
      src: "/hybirdwork/office2.jpg",
      alt: "Hybrid Office 2",
    },
    {
      id: 3,
      src: "/hybirdwork/office3.jpg",
      alt: "Hybrid Office 3",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0F3B2D] mb-3 sm:mb-6">
          Hybrid working can work for you
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-6xl mx-auto px-4">
          Hybrid working offers you the freedom to work closer to clients,
          colleagues or home. It&apos;s also greener and more cost-effective.
          With over 4,000 locations globally, nobody is better placed than Regus
          to help you make the best of it.
        </p>
      </div>

      {/* Images Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative h-40 sm:h-56 md:h-72 rounded-3xl overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Decorative bar at bottom */}
      <div className="flex justify-center mt-8 sm:mt-12">
        <div className="w-48 sm:w-72 md:w-96 h-3 sm:h-4 bg-[#365327] rounded-full"></div>
      </div>
    </section>
  );
};

export default Hybirdwork;
