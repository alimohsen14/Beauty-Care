type CategoryCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
};

export function CategoryCard(props: CategoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col transition-transform hover:scale-105 duration-200 min-w-[240px] max-w-xs mx-auto">
      <img
        src={props.imageSrc}
        alt={props.title}
        className="w-full h-48 object-cover"
      />
      <div className="flex flex-col items-center justify-between p-6 flex-1">
        <h3 className="text-lg font-bold text-yellow-800 mb-2">
          {props.title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 text-center">
          {props.description}
        </p>
        <a
          href={props.link}
          className="border border-gray-400 rounded px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
        >
          اكتشف المزيد
        </a>
      </div>
    </div>
  );
}
