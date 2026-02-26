import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[var(--main-green)] hover:bg-[var(--dark-green)] 
            text-white rounded-sm flex items-center justify-center cursor-pointer
            shadow-lg shadow-[var(--main-green)]/20 border border-[var(--main-green)]/30"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.span
            className="text-lg font-bold"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ↑
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};