import { motion } from "motion/react";
import { TelegramIcon } from "../features/TelegramIcon";
import { Header } from "./Header";
import { useScreenSize } from "../hooks/useScreenSize";

export const Hero = () => {
  const { screenSize } = useScreenSize();
  return (
    <section
      id="hero"
      className="text-center w-full h-screen flex flex-col items-center justify-start overflow-hidden relative"
      style={{
        backgroundImage:
          screenSize === "xs" || screenSize === "sm"
            ? `linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 100%), url('/images/hero-bg.jpg')`
            : `linear-gradient(to right, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.3) 100%), url('/images/hero-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition:
          screenSize === "xs" || screenSize === "sm" ? "70% center" : "center",
      }}
    >
      <Header />

      {/* Декоративні частинки — тільки на десктопі */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#f98f0a] rounded-full opacity-60"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="flex flex-col items-start justify-center h-full w-full px-6 sm:px-10 lg:px-16">
        {/* Accent bar + заголовок */}
        <div className="flex flex-row items-start gap-3 lg:gap-4 mb-4 lg:mb-6">
          <motion.div
            className="w-1 lg:w-1.5 bg-[#f98f0a] rounded-full self-stretch"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ originY: 0 }}
          />
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
            style={{ fontFamily: "'Oswald', sans-serif" }}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Ласкаво просимо до{" "}
            <span className="text-[#f98f0a]">CarFix PDR</span>
          </motion.h1>
        </div>

        {/* Підзаголовок */}
        <motion.p
          className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 lg:mb-10 max-w-xs sm:max-w-sm lg:max-w-lg leading-relaxed"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          Ваш надійний партнер з послуг з ремонту вм'ятин без фарбування.
        </motion.p>

        {/* Телефони */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 lg:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
        >
          <a
            href="tel:+380688845858"
            className="flex flex-row items-center gap-2 group cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TelegramIcon width={28} height={28} />
            </motion.div>
            <span className="text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide group-hover:text-[#f98f0a] transition-colors duration-300">
              +380 68 884 58 58
            </span>
          </a>

          <span className="hidden sm:block w-px h-8 bg-white/40" />

          <a
            href="tel:+380995669377"
            className="flex flex-row items-center gap-2 group cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TelegramIcon width={28} height={28} />
            </motion.div>
            <span className="text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide group-hover:text-[#f98f0a] transition-colors duration-300">
              +380 99 566 93 77
            </span>
          </a>
        </motion.div>

        {/* Кнопки */}
        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
        >
          <motion.button
            className="bg-[#f98f0a] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-sm tracking-widest font-semibold uppercase text-xs sm:text-sm
              transition-colors duration-300 hover:bg-[#e07c00] cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Зарезервувати місце</span>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>

          <motion.button
            className="border-2 border-white/60 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-sm tracking-widest font-semibold uppercase text-xs sm:text-sm
              transition-all duration-300 hover:border-[#f98f0a] hover:text-[#f98f0a] cursor-pointer backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Оцінити пошкодження
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">
          Гортати
        </span>
        <motion.div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-[#f98f0a] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div> */}
    </section>
  );
};
