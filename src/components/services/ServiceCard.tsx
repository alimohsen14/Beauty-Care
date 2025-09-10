import type { Service } from "../../data/mockData";

export function ServiceCard({ service }: { service: Service }) {
  const { name, description, imageSrc, price } = service;
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#EADCF7] overflow-hidden flex flex-col transition-transform hover:scale-105 duration-200">
      <div className="w-full h-48 overflow-hidden relative">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 text-pink-300 text-xl">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="inline"
          >
            <path d="M12 21s-6.5-5.2-9-8.5C.5 9.5 2 6 5 6c1.7 0 3.4 1.2 4 3.1C9.6 7.2 11.3 6 13 6c3 0 4.5 3.5 2 6.5C18.5 15.8 12 21 12 21z" />
          </svg>
        </span>
      </div>
      <div className="flex flex-col items-center px-4 py-4 flex-1">
        <h2 className="text-base md:text-lg font-bold text-pink-700 mb-1 text-center underline decoration-pink-300">
          {name}
        </h2>
        <p className="text-gray-600 text-xs md:text-sm mb-3 text-center">
          {description}
        </p>
        <p className="text-pink-300 font-bold text-base md:text-lg mb-0 text-center">
          {price} شيكل
        </p>
      </div>
    </div>
  );
}
