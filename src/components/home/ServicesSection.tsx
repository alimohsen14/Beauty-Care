export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-right">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-700 mb-4">
            خدماتنا المميزة
          </h2>
          <p className="text-gray-700 mb-8 max-w-md">
            دعي خبراء التجميل لدينا يعتنون بكِ ويقدمون لكِ تجربة فريدة من نوعها.
          </p>
          <button className="border border-pink-400 text-pink-700 px-8 py-3 rounded transition hover:bg-pink-50 font-medium">
            شاهدي جميع الخدمات
          </button>
        </div>
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/service.png"
            alt="Service"
            className="rounded-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
