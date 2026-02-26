import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const awards = [
  {
    title: "Нагорода 1",
    description: "Опис нагороди 1",
    image: "images/certificate.jpg",
    year: "2024",
    category: "Якість",
  },
  {
    title: "Нагорода 2",
    description: "Опис нагороди 2",
    image: "images/certificate.jpg",
    year: "2023",
    category: "Сервіс",
  },
];

export const Awards = () => {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <section className="bg-[var(--main-black)] py-24 relative overflow-hidden" id="awards">

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--main-green)]/6 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Заголовок */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            className="text-[var(--main-green-light)] text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            Визнання
          </motion.span>

          <div className="flex flex-row items-center gap-4 mb-4">
            <motion.div className="h-px w-12 bg-[var(--main-green-muted)]"
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} />
            <motion.h2
              className="text-4xl sm:text-5xl font-black text-white"
              style={{ fontFamily: "var(--font-display)" }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
            >
              Наші <span className="text-[var(--main-green-light)]">нагороди</span>
            </motion.h2>
            <motion.div className="h-px w-12 bg-[var(--main-green-muted)]"
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} />
          </div>

          <motion.p className="text-white/50 text-base max-w-xl"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
          >
            Підтвердження нашої якості та професіоналізму
          </motion.p>
        </div>

        {/* Картки */}
        <div className="flex flex-col gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              className="group relative border border-white/8 rounded-sm overflow-hidden
                hover:border-[var(--main-green-muted)]/60 hover:bg-[var(--main-green)]/[0.03]
                transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              onClick={() => setSelected(i)}
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-[var(--main-green)] group-hover:w-full transition-all duration-500 z-10" />

              <div className="flex flex-col md:flex-row items-stretch">

                {/* Фото */}
                <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--main-black)] hidden md:block" />
                  <div className="absolute top-3 left-3 bg-[var(--main-green)] text-white text-xs font-bold px-3 py-1 tracking-widest">
                    {award.year}
                  </div>
                </div>

                {/* Контент */}
                <div className="flex flex-col justify-center px-8 py-6 flex-1 bg-white/[0.01] group-hover:bg-white/[0.03] transition-colors duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[var(--main-green-light)] text-xs font-semibold tracking-[0.2em] uppercase border border-[var(--main-green-muted)]/50 px-2 py-0.5 rounded-sm">
                      {award.category}
                    </span>
                  </div>

                  <h3
                    className="text-2xl font-black text-white mb-3 group-hover:text-[var(--main-green-light)] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {award.title}
                  </h3>

                  <p className="text-white/50 leading-relaxed text-sm max-w-xl group-hover:text-white/70 transition-colors duration-300">
                    {award.description}
                  </p>

                  <div className="mt-4">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-[var(--main-green-light)] text-xs font-semibold tracking-widest uppercase">
                      Переглянути сертифікат →
                    </span>
                  </div>
                </div>

                {/* Номер */}
                <div className="hidden lg:flex items-center justify-center w-24 border-l border-white/5">
                  <span
                    className="text-6xl font-black text-white/5 group-hover:text-[var(--main-green)]/10 transition-colors duration-500 rotate-90"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md overflow-y-auto"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="fixed top-4 right-4 z-[60] text-white/60 hover:text-white text-sm tracking-widest uppercase
                cursor-pointer transition-colors border border-white/20 px-4 py-2 rounded-sm
                hover:border-[var(--main-green-muted)] bg-black/60 backdrop-blur-sm"
              onClick={() => setSelected(null)}
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
                  src={awards[selected].image}
                  alt={awards[selected].title}
                  className="w-full object-contain rounded-sm"
                />

                <div className="flex justify-between items-center mt-6 border border-white/10 rounded-sm">
                  <button
                    className="flex-1 text-white/60 hover:text-[var(--main-green-light)] hover:bg-white/5 transition-all text-sm tracking-widest uppercase cursor-pointer py-4 px-6 text-left border-r border-white/10"
                    onClick={() => setSelected(s => s! > 0 ? s! - 1 : awards.length - 1)}
                  >
                    ← Попередній
                  </button>
                  <span className="text-white/30 text-sm px-6 whitespace-nowrap" style={{ fontFamily: "var(--font-display)" }}>
                    {String(selected + 1).padStart(2, "0")} / {String(awards.length).padStart(2, "0")}
                  </span>
                  <button
                    className="flex-1 text-white/60 hover:text-[var(--main-green-light)] hover:bg-white/5 transition-all text-sm tracking-widest uppercase cursor-pointer py-4 px-6 text-right border-l border-white/10"
                    onClick={() => setSelected(s => s! < awards.length - 1 ? s! + 1 : 0)}
                  >
                    Наступний →
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between px-1">
                  <div>
                    <p className="text-[var(--main-green-light)] text-xs tracking-widest uppercase mb-1">
                      {awards[selected].category} · {awards[selected].year}
                    </p>
                    <p className="text-white font-bold" style={{ fontFamily: "var(--font-display)" }}>
                      {awards[selected].title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};