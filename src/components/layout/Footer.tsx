import { FaFacebookF, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-pink-100 p-8">
      <h3 className="text-2xl font-bold">اتصل بنا</h3>
      <hr className="my-6 border-gray-400" />
      <div className="flex justify-between items-center">
        <p className="text-sm">
          &copy; 2025 Dandelion Beauty Care. جميع الحقوق محفوظة.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:opacity-75" aria-label="Facebook">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:opacity-75" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
