export function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/home.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-40"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 text-black">
          جمالك يبدأ من هنا
        </h1>
        <h3 className="text-base md:text-xl mb-8 text-black font-medium">
          اكتشفي سر الجمال الطبيعي مع{" "}
          <span className="font-bold">Dandelion Beauty Care</span>، حيث يلتقي
          الفن بالعناية.
        </h3>
        <button className="bg-yellow-700 hover:bg-yellow-800 rounded-full text-white font-bold py-3 px-8 rounded transition-colors duration-200 shadow-lg">
          استكشفي مجموعتنا
        </button>
      </div>
    </section>
  );
}
