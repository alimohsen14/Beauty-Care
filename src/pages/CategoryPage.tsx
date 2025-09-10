import { useParams } from "react-router-dom";
import { allProductsData } from "../data/mockData";
import { ProductCard } from "../components/products/ProductCard";

export function CategoryPage() {
  const { categoryName } = useParams<{ categoryName?: string }>();
  const productToShow = allProductsData.filter(
    (product) => product.category === categoryName
  );
  const pageTitle = `منتجات ${categoryName}`;

  return (
    <div className="bg-[#FFF7F3] min-h-screen py-8 px-2">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 mt-4">
          {pageTitle}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productToShow.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
