// Services.tsx
import { motion } from "motion/react";
import services from "../../public/data/services.json";
import { Link } from "react-scroll";
import { useScreenSize } from "../hooks/useScreenSize";

export const Services = () => {
  const { screenSize } = useScreenSize();
  const isMobile = screenSize === "xs" || screenSize === "sm";
    
  return (
    <section
      id="services"
      className="w-full min-h-screen bg-[var(--main-bg-2)] relative overflow-hidden py-24"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] 
        bg-[var(--main-green)]/4 rounded-full blur-[180px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Заголовок */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            className="text-[var(--main-green-light)] text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Що ми робимо
          </motion.span>

          <div className="flex flex-row items-center gap-4 mb-4">
            <motion.div
              className="h-px w-12 bg-[var(--main-green-muted)]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.h2
              className="text-4xl sm:text-5xl font-black text-white"
              style={{ fontFamily: "var(--font-display)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Послуги PDR ремонту вм'ятин у{" "}
              <span className="text-[var(--main-green-light)]">Білогородці</span>
            </motion.h2>
            <motion.div
              className="h-px w-12 bg-[var(--main-green-muted)]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>

          <motion.p
            className="text-white/50 text-base max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Професійне видалення вм'ятин без фарбування у Білогородці та
            Київській області із збереженням заводського покриття.
          </motion.p>
        </div>

        {/* Картки послуг */}
        {/*
          SEO: обгорнуто в <ul> — Google краще розуміє список послуг
          як структурований перелік, а не довільні div-и
        */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
          {services.map((service, i) => (
            <li key={i} className="flex">
              <Link
                to={
                  // Виправлено логіку: "Оцінка пошкоджень онлайн" → hero (форма/контакт)
                  // Решта послуг → gallery (приклади робіт)
                  service.title === "Оцінка пошкоджень онлайн"
                    ? "hero"
                    : "gallery"
                }
                smooth={true}
                duration={1000}
                className="flex w-full"
                // SEO: aria-label на посиланні — Google розуміє куди веде кожна картка
                aria-label={`${service.title} — переглянути приклади робіт`}
              >
                <motion.div
                  className="group relative border border-white/8 rounded-sm p-8 bg-white/[0.02] 
                    hover:border-[var(--main-green-muted)]/50 hover:bg-[var(--main-green)]/[0.04] 
                    transition-all duration-500 cursor-pointer overflow-hidden
                    flex flex-col w-full"
                  initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  // whileHover={{ y: -4 }}
                >
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-[var(--main-green)] group-hover:w-full transition-all duration-500" />

                  <span
                    className="absolute top-4 right-6 text-5xl font-black text-white/5 
                      group-hover:text-[var(--main-green)]/10 transition-colors duration-500"
                    style={{ fontFamily: "var(--font-display)" }}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>

                  {/* SEO: aria-hidden на декоративних емодзі */}
                  <div className="text-4xl mb-6" aria-hidden="true">
                    {service.icon}
                  </div>

                  {/*
                    SEO: h3 — Google бачить ієрархію h1 → h2 → h3.
                    Назви послуг з JSON вже містять ключові слова після оновлення services.json.
                  */}
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-[var(--main-green-light)] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300 flex-1">
                    {service.description}
                  </p>

                  <div
                    className={`mt-6 flex items-center gap-2 text-[var(--main-green-light)] text-sm font-semibold 
                      ${isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`}
                    aria-hidden={isMobile ? false : true}
                  >
                    <span>Детальніше</span>
                    <span>→</span>
                  </div>
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="contacts"
            smooth={true}
            duration={1000}
            aria-label="Замовити PDR послугу — перейти до контактів"
          >
            <motion.button
              className="bg-[var(--main-green)] text-white px-10 py-4 rounded-sm tracking-widest 
                font-semibold uppercase text-sm hover:bg-[var(--main-green-hover)] cursor-pointer 
                transition-colors duration-300 shadow-lg shadow-[var(--main-green)]/15 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Замовити послугу</span>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};