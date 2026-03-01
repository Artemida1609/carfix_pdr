import { motion } from "motion/react";
import { Link } from "react-scroll";
import { useScreenSize } from "../hooks/useScreenSize";

export const About = () => {
  const { screenSize } = useScreenSize();
  const isMobile = screenSize === "xs" || screenSize === "sm";

  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center bg-[var(--main-bg-2)] relative overflow-hidden"
    >
      {/* Glow — менший blur на мобільному */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--main-green)]/8 rounded-full blur-[60px] lg:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--main-green)]/4 rounded-full blur-[50px] lg:blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Фото */}
        <motion.div
          className="relative w-full lg:w-1/2 flex-shrink-0 transform-gpu"
          // На мобільному — тільки opacity, без x-зміщення
          initial={{ opacity: 0, x:-60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: isMobile ? 0.5 : 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0 }}
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[var(--main-green-muted)] rounded-sm" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[var(--main-green-muted)] rounded-sm" />
          <div className="absolute inset-0 z-10 rounded-sm ring-1 ring-[var(--main-green-muted)]/30 pointer-events-none" />

          <img
            src="images/about-img.jpg"
            alt="PDR майстер Auto PDR Master виконує видалення вм'ятин без фарбування у Білогородці"
            className="w-full h-[400px] lg:h-[520px] object-cover rounded-sm relative z-[5]"
            loading="lazy"
            width={600}
            height={520}
          />

          {/* Бейдж */}
          <motion.div
            className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 z-20 
              bg-[var(--main-green)] text-white px-6 py-4 rounded-sm shadow-2xl
              shadow-[var(--main-green)]/20 transform-gpu"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: isMobile ? 0.2 : 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0 }}
          >
            <p className="text-3xl font-black leading-none" style={{ fontFamily: "var(--font-display)" }}>
              5+
            </p>
            <p className="text-xs font-semibold tracking-widest uppercase mt-1 text-white/80">
              років досвіду
            </p>
          </motion.div>
        </motion.div>

        {/* Текст */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">

          <motion.span
            className="text-[var(--main-green-light)] text-sm font-semibold tracking-[0.3em] uppercase mb-4 transform-gpu"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0 }}
          >
            Хто ми
          </motion.span>

          <div className="flex flex-row items-start gap-3 mb-6">
            <motion.div
              className="w-1 bg-[var(--main-green)] rounded-full self-stretch transform-gpu"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0 }}
              style={{ originY: 0 }}
            />
            <motion.h2
              className="text-4xl sm:text-5xl font-black text-white leading-tight transform-gpu"
              style={{ fontFamily: "var(--font-display)" }}
              initial={{ opacity: 0, x:-30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: isMobile ? 0.5 : 0.7, delay: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              PDR майстер у{" "}
              <span className="text-[var(--main-green-light)]">Київській області</span>
            </motion.h2>
          </div>

          <motion.p
            className="text-base lg:text-lg text-white/60 leading-relaxed mb-8 transform-gpu"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0 }}
          >
            Auto PDR Master — сертифікований PDR майстер у Білогородці, Київська
            область. Понад 5 років виконуємо безфарбове видалення вм'ятин:
            ремонт після граду, паркування та механічних пошкоджень кузова.
            Відновлюємо геометрію металу без фарбування та шпаклівки,
            зберігаючи заводське покриття. Обслуговуємо клієнтів з Києва та
            передмість.
          </motion.p>

          {/* Статистика — на мобільному без затримок між картками */}
          <motion.div
            className="grid grid-cols-3 gap-4 mb-8 w-full transform-gpu"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: isMobile ? 0.3 : 0.5 }}
            viewport={{ once: true, amount: 0 }}
          >
            {[
              { value: "500+", label: "Клієнтів" },
              { value: "5+", label: "Років досвіду" },
              { value: "100%", label: "Гарантія" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center border border-white/8 rounded-sm py-4 px-2 
                  bg-white/[0.02] hover:border-[var(--main-green-muted)]/60 
                  hover:bg-[var(--main-green)]/5 transition-all duration-300"
              >
                <span
                  className="text-2xl sm:text-3xl font-black text-[var(--main-green-light)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-white/40 tracking-wide uppercase mt-1 text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Кнопка — animate замінено на whileInView */}
          <Link to="services" smooth={true} duration={1000} aria-label="Перейти до послуг PDR ремонту">
            <motion.button
              className="bg-[var(--main-green)] text-white px-8 py-4 rounded-sm tracking-widest 
                font-semibold uppercase text-sm cursor-pointer transform-gpu
                hover:bg-[var(--main-green-hover)] transition-colors duration-300
                shadow-lg shadow-[var(--main-green)]/15"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: isMobile ? 0.3 : 0.6 }}
              viewport={{ once: true, amount: 0 }}
              whileHover={isMobile ? undefined : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Дізнатись більше
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};