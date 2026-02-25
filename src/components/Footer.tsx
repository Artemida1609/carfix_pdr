import { motion } from "motion/react";
import { TelegramIcon } from "../features/TelegramIcon";

const contacts = [
  { icon: "📞", label: "Телефон", values: ["+380 68 884 58 58", "+380 99 566 93 77"], href: ["tel:+380688845858", "tel:+380995669377"] },
  { icon: "📧", label: "Email", values: ["info@carfix-pdr.com"], href: ["mailto:info@carfix-pdr.com"] },
];

const navItems = ["Головна", "Про нас", "Послуги", "Галерея", "Замовлення"];

// ← Змінити на реальну адресу
const ADDRESS = "Київ, вул. Хрещатик, 1";
const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.6!2d30.5!3d50.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI3JzAwLjAiTiAzMMKwMzAnMDAuMCJF!5e0!3m2!1suk!2sua!4v1234567890";
const MAPS_LINK = "https://maps.google.com/?q=50.45,30.5";

export const Footer = () => {
  return (
    <footer className="bg-[#050708] relative overflow-hidden" id="contacts">

      {/* Ambient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f98f0a]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-8">

        {/* Верхня частина */}
        <div className="flex flex-col lg:flex-row gap-16 mb-16">

          {/* Ліва — інфо */}
          <div className="w-full lg:w-2/5">
            <motion.span
              className="text-[#f98f0a] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
            >
              Контакти
            </motion.span>

            <div className="flex flex-row items-start gap-3 mb-6">
              <motion.div
                className="w-1 bg-[#f98f0a] rounded-full self-stretch"
                initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}
                style={{ originY: 0 }}
              />
              <motion.h2
                className="text-4xl sm:text-5xl font-black text-white leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }}
              >
                Зв'яжіться <span className="text-[#f98f0a]">з нами</span>
              </motion.h2>
            </div>

            <motion.p
              className="text-white/50 leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}
            >
              Готові відповісти на ваші запитання та записати на ремонт у зручний для вас час.
            </motion.p>

            {/* Контакти */}
            <div className="flex flex-col gap-5 mb-8">
              {contacts.map((c, i) => (
                <motion.div key={i} className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }} viewport={{ once: true }}
                >
                  <span className="text-xl mt-0.5">{c.icon}</span>
                  <div>
                    <p className="text-white/30 text-xs tracking-widest uppercase mb-1">{c.label}</p>
                    {c.values.map((v, j) => (
                      <a key={j} href={c.href[j]}
                        className="block text-white font-semibold hover:text-[#f98f0a] transition-colors duration-300">
                        {v}
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Telegram */}
              <motion.div className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }} viewport={{ once: true }}
              >
                <TelegramIcon width={24} height={24} />
                <div>
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-1">Telegram</p>
                  <a href="https://t.me/carfix_pdr" target="_blank" rel="noreferrer"
                    className="text-white font-semibold hover:text-[#f98f0a] transition-colors duration-300">
                    @carfix_pdr
                  </a>
                </div>
              </motion.div>

              {/* Адреса */}
              <motion.div className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }} viewport={{ once: true }}
              >
                <span className="text-xl mt-0.5">📍</span>
                <div>
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-1">Адреса</p>
                  <a href={MAPS_LINK} target="_blank" rel="noreferrer"
                    className="text-white font-semibold hover:text-[#f98f0a] transition-colors duration-300">
                    {ADDRESS}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Права — карта */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}
          >
            <div className="relative group">
              {/* Кутові акценти */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#f98f0a] z-10" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#f98f0a] z-10" />

              <div className="overflow-hidden rounded-sm border border-white/10 group-hover:border-[#f98f0a]/30 transition-colors duration-500">
                <iframe
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="380"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CarFix PDR на карті"
                />
              </div>

              {/* Кнопка відкрити в Google Maps */}
              <motion.a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 bg-[#f98f0a] text-white text-xs font-semibold tracking-widest uppercase
                  px-4 py-2 rounded-sm flex items-center gap-2 shadow-lg hover:bg-[#e07c00] transition-colors duration-300 z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>📍</span>
                Відкрити в Maps
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Розділювач */}
        <motion.div
          className="h-px bg-white/10 mb-8"
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }}
        />

        {/* Нижня частина */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-white/30 text-sm"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            © {new Date().getFullYear()} CarFix PDR. Всі права захищені.
          </motion.p>

          <motion.ul
            className="flex flex-row flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
          >
            {navItems.map((item, i) => (
              <li key={i}>
                <a href={`#${item.toLowerCase()}`}
                  className="text-white/30 text-sm hover:text-[#f98f0a] transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </footer>
  );
};