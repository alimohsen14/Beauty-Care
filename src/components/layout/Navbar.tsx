import { useState } from "react";
import { FaBars } from "react-icons/fa";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "الرئيسية", href: "/" },
  { label: "منتجاتنا", href: "/#categories" },
  { label: "خدماتنا", href: "/#services" },
];

export function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="flex justify-center items-center p-4 shadow-md relative">
      {/* Hamburger Button (Mobile) */}
      <button
        className="md:hidden flex justify-center items-center w-8 h-8"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open menu"
      >
        <FaBars size={24} className="text-pink-500" />
      </button>

      {/* Navbar Links (Desktop) */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-pink-500 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Navbar Links (Mobile) */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-pink-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
