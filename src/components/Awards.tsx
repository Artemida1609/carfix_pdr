import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const award = {
  title: "Диплом",
  description: "Опис диплому",
  image: "images/certificate.jpg",
  year: "2024",
  category: "Якість",
};

export const Awards = () => {
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <section className="bg-[var(--main-black)] py-24 relative overflow-hidden" id="awards">

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--main-green)]/6 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Фото диплому */}
          <motion.div
            className="relative w-full lg:w-2/5 flex-shrink-0 cursor-pointer group"
            onClick={() => setLightbox(true)}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[var(--main-green)] z-10" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[var(--main-green)] z-10" />

            <div className="overflow-hidden rounded-sm border border-white/8 group-hover:border-[var(--main-green-muted)]/60 transition-colors duration-500">
              <img
                src={award.image}
                alt={award.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Збільшити підказка */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-black/70 backdrop-blur-sm text-white text-xs tracking-widest uppercase px-4 py-2 border border-white/20 rounded-sm">
                Переглянути ↗
              </span>
            </div>

            {/* Рік */}
            <div className="absolute top-4 left-4 bg-[var(--main-green)] text-white text-xs font-bold px-3 py-1 tracking-widest z-10">
              {award.year}
            </div>
          </motion.div>

          {/* Текст */}
          <div className="w-full lg:w-3/5">
            <motion.span
              className="text-[var(--main-green-light)] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Визнання
            </motion.span>

            <div className="flex flex-row items-start gap-3 mb-6">
              <motion.div
                className="w-1 bg-[var(--main-green)] rounded-full self-stretch"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                style={{ originY: 0 }}
              />
              <motion.h2
                className="text-4xl sm:text-5xl font-black text-white leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Наші <span className="text-[var(--main-green-light)]">нагороди</span>
              </motion.h2>
            </div>

            <motion.span
              className="inline-flex items-center gap-2 text-[var(--main-green-light)] text-xs font-semibold tracking-[0.2em] uppercase border border-[var(--main-green-muted)]/50 px-3 py-1.5 rounded-sm mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
            >
              {award.category}
            </motion.span>

            <motion.p
              className="text-white/50 leading-relaxed text-base mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {award.description}
            </motion.p>

            <motion.button
              className="text-[var(--main-green-light)] text-sm tracking-widest uppercase border border-[var(--main-green-muted)]/50 px-6 py-3 rounded-sm hover:bg-[var(--main-green)]/10 transition-colors cursor-pointer"
              onClick={() => setLightbox(true)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Переглянути сертифікат →
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md overflow-y-auto"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
          >
            <button
              className="fixed top-4 right-4 z-[60] text-white/60 hover:text-white text-sm tracking-widest uppercase
                cursor-pointer transition-colors border border-white/20 px-4 py-2 rounded-sm
                hover:border-[var(--main-green-muted)] bg-black/60 backdrop-blur-sm"
              onClick={() => setLightbox(false)}
            >
              ✕
            </button>

            <div
              className="min-h-full flex flex-col justify-center px-4 py-16"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="relative max-w-2xl w-full mx-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[var(--main-green)] z-10" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[var(--main-green)] z-10" />

                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full object-contain rounded-sm"
                />

                <div className="mt-4 px-1">
                  <p className="text-[var(--main-green-light)] text-xs tracking-widest uppercase mb-1">
                    {award.category} · {award.year}
                  </p>
                  <p className="text-white font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    {award.title}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};