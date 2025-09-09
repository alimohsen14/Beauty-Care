import { CategoryCard } from "./CategoryCard";

const categoriesData = [
  {
    imageSrc: "/images/hand.png",
    title: "يدين",
    description: "عناية فائقة ليديك لتبقى ناعمة وشابة.",
    link: "#",
  },
  {
    imageSrc: "/images/face.png",
    title: "وجه",
    description: "حلول متطورة لبشرة مشرقة وصحية.",
    link: "#",
  },
  {
    imageSrc: "/images/body.png",
    title: "جسم",
    description: "دللي بشرتك بمنتجاتنا التي تغذي وترطب بعمق.",
    link: "#",
  },
  {
    imageSrc: "/images/hair.png",
    title: "شعر",
    description: "مجموعة متكاملة للعناية بالشعر، تمنحه قوة ولمعانًا.",
    link: "#",
  },
];

export function CategoriesSection() {
  return (
    <section id="categories" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-12">
          فئات منتجاتنا المميزة
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categoriesData.map((category) => (
            <CategoryCard
              key={category.title}
              imageSrc={category.imageSrc}
              title={category.title}
              description={category.description}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
