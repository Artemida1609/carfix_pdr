import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useScreenSize } from "../hooks/useScreenSize";

const images = Array.from({ length: 9 }, (_, i) => ({
  before: `gallery/img-${i + 1}.jpg`,
  after: `gallery/img-${i + 1}.${i + 1}.jpg`,
  id: i,
}));

export const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [toggledId, setToggledId] = useState<number | null>(null);
  const { screenSize } = useScreenSize();

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  const isMobile = screenSize === "xs" || screenSize === "sm";

  const isAfterVisible = (id: number) =>
    isMobile ? toggledId === id : hoveredId === id;

  const handleCardClick = (id: number) => {
    if (isMobile) {
      // Перший тап — показати "після", другий — відкрити lightbox
      if (toggledId === id) {
        setSelected(id);
      } else {
        setToggledId(id);
      }
    } else {
      setSelected(id);
    }
  };

  return (
    <section
      id="gallery"
      className="w-full min-h-screen bg-[var(--main-bg-2)] relative overflow-hidden py-24"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--main-green-light)]/8 rounded-full blur-[150px] pointer-events-none" />

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
            Наші роботи
          </motion.span>

          <div className="flex flex-row items-center gap-4 mb-4">
            <motion.div
              className="h-px w-12 bg-[var(--main-green-light)]"
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
              Галерея{" "}
              <span className="text-[var(--main-green-light)]">робіт</span>
            </motion.h2>
            <motion.div
              className="h-px w-12 bg-[var(--main-green-light)]"
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
            {isMobile
              ? "Торкніться фото щоб побачити результат, ще раз — для перегляду"
              : "До та після — переконайтесь у якості нашої роботи самі"}
          </motion.p>
        </div>

        {/* Сітка */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              className="relative cursor-pointer overflow-hidden rounded-sm border border-white/10 hover:border-[var(--main-green-light)]/50 transition-colors duration-500"
              style={{ aspectRatio: "4/3" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              onClick={() => handleCardClick(img.id)}
              onHoverStart={() => !isMobile && setHoveredId(img.id)}
              onHoverEnd={() => !isMobile && setHoveredId(null)}
            >
              {/* Before */}
              <img
                src={img.before}
                alt={`До ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isAfterVisible(img.id) ? "scale-105" : "scale-100"}`}
              />

              {/* After */}
              <motion.img
                src={img.after}
                alt={`Після ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ opacity: isAfterVisible(img.id) ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${isAfterVisible(img.id) ? "opacity-100" : "opacity-0"}`}
              />

              {/* До/Після лейбл */}
              <div className="absolute top-3 left-3 flex gap-2">
                <motion.span
                  className="bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded-sm tracking-wider backdrop-blur-sm border border-white/20"
                  animate={{ opacity: isAfterVisible(img.id) ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  ДО
                </motion.span>
                <motion.span
                  className="bg-[var(--main-green-light)] text-white text-xs font-semibold px-2 py-1 rounded-sm tracking-wider"
                  animate={{ opacity: isAfterVisible(img.id) ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ПІСЛЯ
                </motion.span>
              </div>

              {/* Номер */}
              <span
                className="absolute bottom-3 right-3 text-4xl font-black text-white/10 transition-colors duration-500"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Підказка на мобільному */}
              {isMobile && (
                <motion.div
                  className="absolute bottom-3 left-3 text-white text-xs tracking-widest uppercase font-semibold flex items-center gap-1"
                  animate={{
                    opacity: isAfterVisible(img.id) ? 1 : 0.5,
                    y: isAfterVisible(img.id) ? 0 : 4,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {isAfterVisible(img.id) ? (
                    <span>Торкніться ще раз ↗</span>
                  ) : (
                    <span>Торкніться щоб побачити результат</span>
                  )}
                </motion.div>
              )}

              {/* Десктоп підказка */}
              {!isMobile && (
                <motion.div
                  className="absolute bottom-3 left-3 text-white/80 text-xs tracking-widest uppercase font-semibold flex items-center gap-1"
                  animate={{
                    y: isAfterVisible(img.id) ? 0 : 8,
                    opacity: isAfterVisible(img.id) ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Збільшити</span>
                  <span>↗</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelected(null);
              setToggledId(null);
            }}
          >
            {/* Закрити */}
            <button
              className="fixed top-4 right-4 z-[60] font-bold text-white/60 hover:text-white text-sm
          tracking-widest uppercase cursor-pointer transition-colors
          border border-white/20 rounded-sm px-3 py-2 bg-black/60 backdrop-blur-sm"
              onClick={() => {
                setSelected(null);
                setToggledId(null);
              }}
            >
              ✕
            </button>

            {/* Контент */}
            <div
              className="min-h-full flex flex-col justify-center px-4 py-16"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="w-full max-w-5xl mx-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Фото */}
                <div
                  className={`grid gap-2 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}
                >
                  <div className="relative">
                    <img
                      src={images[selected].before}
                      alt="До"
                      className="w-full object-cover rounded-sm"
                    />
                    <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-3 py-1 tracking-widest backdrop-blur-sm">
                      ДО
                    </span>
                  </div>
                  <div className="relative">
                    <img
                      src={images[selected].after}
                      alt="Після"
                      className="w-full object-cover rounded-sm"
                    />
                    <span className="absolute top-3 left-3 bg-[var(--main-green-light)] text-white text-xs font-bold px-3 py-1 tracking-widest">
                      ПІСЛЯ
                    </span>
                  </div>
                </div>

                {/* Навігація — окремий блок з рамкою */}
                <div className="flex justify-between items-center mt-6 border border-white/10 rounded-sm">
                  <button
                    className="flex-1 text-white/70 hover:text-white hover:bg-white/5 transition-all text-sm tracking-widest uppercase cursor-pointer py-4 px-6 text-left border-r border-white/10"
                    onClick={() =>
                      setSelected((prev) =>
                        prev! > 0 ? prev! - 1 : images.length - 1,
                      )
                    }
                  >
                    ← Попередній
                  </button>
                  <span
                    className="text-white/30 text-sm px-6 whitespace-nowrap"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {String(selected + 1).padStart(2, "0")} /{" "}
                    {String(images.length).padStart(2, "0")}
                  </span>
                  <button
                    className="flex-1 text-white/70 hover:text-white hover:bg-white/5 transition-all text-sm tracking-widest uppercase cursor-pointer py-4 px-6 text-right border-l border-white/10"
                    onClick={() =>
                      setSelected((prev) =>
                        prev! < images.length - 1 ? prev! + 1 : 0,
                      )
                    }
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
