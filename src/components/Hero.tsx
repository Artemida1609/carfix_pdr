// Hero.tsx
import { motion } from "motion/react";
import { TelegramIcon } from "../features/TelegramIcon";
import { Header } from "./Header";
import { useScreenSize } from "../hooks/useScreenSize";

export const Hero = () => {
  const { screenSize } = useScreenSize();
  const isMobile = screenSize === "xs" || screenSize === "sm";

  return (
    <section
      id="hero"
      className="text-center w-full h-screen flex flex-col items-center justify-start overflow-hidden relative"
      style={{
        backgroundImage: isMobile
          ? `linear-gradient(to bottom, rgba(6,10,14,0.85) 0%, rgba(6,10,14,0.6) 100%), url('images/hero-bg.png')`
          : `linear-gradient(to right, rgba(6,10,14,0.9) 40%, rgba(6,10,14,0.35) 100%), url('images/hero-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />

      {/* Декоративні частинки — бірюзові */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-40"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              backgroundColor: "var(--main-green)",
            }}
            animate={{ y: [-10, 10, -10], opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Subtle glow зліва */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 
        bg-[var(--main-green)]/6 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="flex flex-col items-start justify-center h-full w-full px-6 sm:px-10 lg:px-16">
        {/* Accent bar + заголовок */}
        <div className="flex flex-row items-start gap-3 lg:gap-4 mb-4 lg:mb-6">
          <motion.div
            className="w-1 lg:w-1.5 bg-[var(--main-green)] rounded-full self-stretch"
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
            <span className="text-[var(--main-green-light)]">AUTO PDR MASTER</span>
          </motion.h1>
        </div>

        {/* Підзаголовок */}
        <motion.p
          className="text-base sm:text-lg lg:text-xl text-white/60 mb-6 lg:mb-10 max-w-xs sm:max-w-sm lg:max-w-lg leading-relaxed"
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
            <span
              className="text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide 
              group-hover:text-[var(--main-green-light)] transition-colors duration-300"
            >
              +380 68 884 58 58
            </span>
          </a>

          <span className="hidden sm:block w-px h-8 bg-white/20" />

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
            <span
              className="text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide 
              group-hover:text-[var(--main-green-light)] transition-colors duration-300"
            >
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
          <a href="https://t.me/+380688845858" target="_blank">
            <motion.button
              className="bg-[var(--main-green)] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-sm 
                tracking-widest font-semibold uppercase text-xs sm:text-sm cursor-pointer 
                relative overflow-hidden hover:bg-[var(--main-green-hover)] transition-colors duration-300
                shadow-lg shadow-[var(--main-green)]/15"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Оцінити пошкодження</span>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
