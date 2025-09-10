import { ServiceCard } from "../components/services/ServiceCard";
import { servicesData } from "../data/mockData";

export function ServicesPage() {
  return (
    <div className="bg-[#FFF7F3] min-h-screen py-0 px-0">
      {/* Header Section */}
      <div className="bg-[#FBEFF7] py-12 px-2">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">خدماتنا</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نقدم لكم مجموعة واسعة من الخدمات الفاخرة التي تلبي جميع احتياجات
            جمالك، مصممة لتدليلك وتجديد حيويتك.
          </p>
        </div>
      </div>
      {/* Cards Section */}
      <div className="max-w-7xl mx-auto -mt-12 px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
