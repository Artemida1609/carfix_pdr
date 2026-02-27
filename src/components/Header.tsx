// Header.tsx
import { useState, useEffect } from "react";
import { useScreenSize } from "../hooks/useScreenSize";
import { Link } from "react-scroll";
import navItems from "../../public/data/navItems.json";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { screenSize } = useScreenSize();
  const isDesktop = screenSize === "lg" || screenSize === "xl" || screenSize === "2xl";
  const isMenuVisible = menuOpen && !isDesktop;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-screen flex flex-row items-center justify-between px-4 sm:px-8 py-2 transition-all duration-500 z-50 ${
      scrolled ? "bg-[var(--main-black)]/80 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[var(--main-green-muted)]/10" : "bg-transparent"
    }`}>
      <img src="images/main-logo.jpg" alt="logo" className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full" />

      {isDesktop ? (
        <ul className="flex flex-row gap-6 xl:gap-8 justify-center items-center">
          {navItems.map((item, index) => (
            <Link to={item.id} smooth={true} duration={500} offset={-70} key={index}>
              <li className="relative text-white/80 font-semibold tracking-wide cursor-pointer group 
                transition-colors duration-300 hover:text-[var(--main-green-light)] text-sm xl:text-base">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--main-green)] 
                  transition-all duration-300 group-hover:w-full rounded-full" />
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <div className="relative z-50">
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1.5 cursor-pointer p-2">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

          {isMenuVisible && (
            <ul className="absolute right-0 top-12 bg-[var(--main-black)]/95 backdrop-blur-md rounded-sm 
              p-4 flex flex-col gap-3 min-w-[220px] shadow-2xl 
              border border-[var(--main-green-muted)]/20">
              {navItems.map((item, index) => (
                <Link to={item.id} smooth={true} duration={500} offset={-70} key={index}>
                  <li onClick={() => setMenuOpen(false)}
                    className="text-white/80 font-semibold tracking-wide cursor-pointer 
                      hover:text-[var(--main-green-light)] transition-colors duration-300 
                      border-b border-white/5 pb-3 last:border-0 last:pb-0">
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