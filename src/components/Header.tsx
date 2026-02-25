import { useState, useEffect } from "react";
import { useScreenSize } from "../hooks/useScreenSize";
import { Link } from "react-scroll";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "Головна", id: "hero" },
    { name: "Про нас", id: "about" },
    { name: "Послуги", id: "services" },
    { name: "Галерея", id: "gallery" },
    {name: "Відгуки", id: "reviews"},
    {name: "Нагороди", id: "awards"},
    { name: "Замовлення", id: "booking" },
    { name: "Контакти", id: "contacts" },
  ];
  const { screenSize } = useScreenSize();

  const isDesktop =
    screenSize === "lg" || screenSize === "xl" || screenSize === "2xl";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Закривай меню при ресайзі до десктопу
  const isMenuVisible = menuOpen && !isDesktop;

  return (
    <header
      className={`w-screen flex flex-row items-center justify-between px-4 sm:px-8 py-2 transition-all duration-500 z-50 ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <img
        src="images/main-logo.png"
        alt="logo"
        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full"
      />

      {isDesktop ? (
        <ul className="flex flex-row gap-6 xl:gap-8 justify-center items-center">
          {navItems.map((item, index) => (
            <Link to={`${item.id}`} smooth={true} duration={500} offset={-70} key={index}>
            <li
              key={index}
              className="relative text-white font-semibold tracking-wide cursor-pointer group transition-colors duration-300 hover:text-[#f98f0a] text-sm xl:text-base"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#f98f0a] transition-all duration-300 group-hover:w-full rounded-full" />
            </li>
            </Link>
          ))}
        </ul>
      ) : (
        <div className="relative z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 cursor-pointer p-2"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>

          {isMenuVisible && (
            <ul className="absolute right-0 top-12 bg-black/90 backdrop-blur-md rounded-lg p-4 flex flex-col gap-4 min-w-[200px] shadow-xl">
              {navItems.map((item, index) => (
                <Link to={`${item.id}`} smooth={true} duration={500} offset={-70} key={index}>
                  <li
                    key={index}
                    onClick={() => setMenuOpen(false)}
                    className="text-white font-semibold tracking-wide cursor-pointer hover:text-[#f98f0a] transition-colors duration-300 border-b border-white/10 pb-2 last:border-0"
                  >
                  {item.name}
                </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      )}
    </header>
  );
};
