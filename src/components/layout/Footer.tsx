import { FaFacebookF, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-pink-100 p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-0">اتصل بنا</h3>
      <hr className="my-4 md:my-6 border-gray-400" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs md:text-sm text-center md:text-left">
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
