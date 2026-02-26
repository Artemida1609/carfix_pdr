import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const reviewsData = [
  { id: 1, img: "reviews/img-1.jpg" },
  { id: 2, img: "reviews/img-2.jpg" },
  { id: 3, img: "reviews/img-3.jpg" },
  { id: 4, img: "reviews/img-4.jpg" },
];

export const Reviews = () => {
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
    <section className="bg-[var(--main-bg-2)] py-24 relative overflow-hidden" id="reviews">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[var(--main-green)]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Заголовок */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            className="text-[var(--main-green-light)] text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            Відгуки клієнтів
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
              Що кажуть <span className="text-[var(--main-green-light)]">клієнти</span>
            </motion.h2>
            <motion.div className="h-px w-12 bg-[var(--main-green-muted)]"
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} />
          </div>

          <motion.p className="text-white/50 text-base max-w-xl"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
          >
            Реальні відгуки наших клієнтів — натисніть щоб збільшити
          </motion.p>
        </div>

        {/* Сітка */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviewsData.map((r, i) => (
            <motion.div
              key={r.id}
              className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/8
                hover:border-[var(--main-green-muted)]/60 transition-colors duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              onClick={() => setSelected(i)}
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-[var(--main-green)] group-hover:w-full transition-all duration-500 z-10" />

              <img
                src={r.img}
                alt={`Відгук ${r.id}`}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span
                className="absolute top-3 right-3 text-3xl font-black text-white/10 group-hover:text-[var(--main-green)]/15 transition-colors duration-500"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="absolute bottom-3 left-3 text-white/80 text-xs tracking-widest uppercase font-semibold">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Збільшити ↗
                </span>
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
                  src={reviewsData[selected].img}
                  alt={`Відгук ${selected + 1}`}
                  className="w-full object-contain rounded-sm"
                />

                <div className="flex justify-between items-center mt-6 border border-white/10 rounded-sm">
                  <button
                    className="flex-1 text-white/60 hover:text-[var(--main-green-light)] hover:bg-white/5 transition-all text-sm tracking-widest uppercase cursor-pointer py-4 px-6 text-left border-r border-white/10"
                    onClick={() => setSelected(s => s! > 0 ? s! - 1 : reviewsData.length - 1)}
                  >
                    ← Попередній
                  </button>
                  <span className="text-white/30 text-sm px-6 whitespace-nowrap" style={{ fontFamily: "var(--font-display)" }}>
                    {String(selected + 1).padStart(2, "0")} / {String(reviewsData.length).padStart(2, "0")}
                  </span>
                  <button
                    className="flex-1 text-white/60 hover:text-[var(--main-green-light)] hover:bg-white/5 transition-all text-sm tracking-widest uppercase cursor-pointer py-4 px-6 text-right border-l border-white/10"
                    onClick={() => setSelected(s => s! < reviewsData.length - 1 ? s! + 1 : 0)}
                  >
                    Наступний →
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};