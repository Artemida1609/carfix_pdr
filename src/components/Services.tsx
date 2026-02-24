import { motion } from "motion/react";
import services from "../../public/data/services.json";

export const Services = () => {
  return (
    <section
      id="services"
      className="w-full min-h-screen bg-[#050708] relative overflow-hidden py-24"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] 
      bg-[#f98f0a]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Заголовок */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            className="text-[#f98f0a] text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Що ми робимо
          </motion.span>

          <div className="flex flex-row items-center gap-4 mb-4">
            <motion.div
              className="h-px w-12 bg-[#f98f0a]"
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
              Наші <span className="text-[#f98f0a]">послуги</span>
            </motion.h2>
            <motion.div
              className="h-px w-12 bg-[#f98f0a]"
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
            Професійний ремонт кузова з гарантією якості та збереженням заводського покриття
          </motion.p>
        </div>

        {/* Картки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group relative border border-white/10 rounded-sm p-8 bg-white/[0.02] 
                hover:border-[#f98f0a]/50 hover:bg-white/[0.04] transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              {/* Помаранчевий акцент зверху */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#f98f0a] group-hover:w-full transition-all duration-500" />

              {/* Номер картки */}
              <span className="absolute top-4 right-6 text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500"
                style={{ fontFamily: "var(--font-display)" }}>
                0{i + 1}
              </span>

              {/* Іконка */}
              <div className="text-4xl mb-6">{service.icon}</div>

              {/* Заголовок */}
              <h3
                className="text-xl font-bold text-white mb-3 group-hover:text-[#f98f0a] transition-colors duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </h3>

              {/* Опис */}
              <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {service.description}
              </p>

              {/* Стрілка */}
              <motion.div
                className="mt-6 flex items-center gap-2 text-[#f98f0a] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span>Детальніше</span>
                <span>→</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-[#f98f0a] text-white px-10 py-4 rounded-sm tracking-widest font-semibold uppercase text-sm
              hover:bg-[#e07c00] cursor-pointer transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Замовити послугу
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};