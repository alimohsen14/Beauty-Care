import type { Product } from "../../data/mockData";

export function ProductCard({ product }: { product: Product }) {
  const { imageSrc, name, description, price } = product;

  return (
    <div className="bg-[#FFF7F3] rounded-xl shadow-sm border border-[#FFF0EA] overflow-hidden flex flex-col transition-transform hover:scale-105 duration-200">
      <div className="w-full h-40 md:h-48 overflow-hidden">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col items-center px-4 py-4 flex-1">
        <h2 className="text-base md:text-lg font-bold text-gray-800 mb-1 text-center">
          {name}
        </h2>
        <p className="text-gray-600 text-xs md:text-sm mb-3 text-center">
          {description}
        </p>
        <p className="text-pink-700 font-bold text-base md:text-lg mb-0 text-center">
          ₪ {price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
