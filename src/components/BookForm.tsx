import { motion } from "motion/react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const services = [
  "Видалення вм'ятин PDR",
  "Ремонт після граду",
  "Ремонт після паркування",
  "Оцінка пошкоджень онлайн",
  "Рихтування кузова",
  "Полірування та захист",
];

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00",
];

type FormData = {
  name: string;
  phone: string;
  email: string;
  car: string;
  service: string;
  date: string;
  time: string;
  description: string;
  photo: File | null;
};

// Відправка в Telegram
const sendToTelegram = async (form: FormData, photoBase64?: string) => {
  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  const text = `
🔧 *Новий запис на ремонт!*

👤 *Ім'я:* ${form.name}
📞 *Телефон:* ${form.phone}
${form.email ? `📧 *Email:* ${form.email}` : ""}
🚗 *Авто:* ${form.car}
🛠 *Послуга:* ${form.service}
📅 *Дата:* ${form.date} о ${form.time}
${form.description ? `📝 *Опис:* ${form.description}` : ""}
  `.trim();

  // Якщо є фото — відправляємо з фото
  if (form.photo && photoBase64) {
    const formData = new FormData();
    formData.append("chat_id", CHAT_ID);
    formData.append("caption", text);
    formData.append("parse_mode", "Markdown");
    formData.append("photo", form.photo);

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
      method: "POST",
      body: formData,
    });
  } else {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" }),
    });
  }
};

// Відправка підтвердження клієнту на email
const sendEmailConfirmation = async (form: FormData) => {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      to_name: form.name,
      to_email: form.email,
      car: form.car,
      service: form.service,
      date: form.date,
      time: form.time,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};

export const BookForm = () => {
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", email: "", car: "",
    service: "", date: "", time: "", description: "", photo: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, photo: e.target.files?.[0] ?? null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1. Відправляємо майстру в Telegram
      await sendToTelegram(form);

      // 2. Якщо є email — відправляємо підтвердження клієнту
      if (form.email) {
        await sendEmailConfirmation(form);
      }

      setSubmitted(true);
    } catch (err) {
      setError("Щось пішло не так. Спробуйте ще раз або зателефонуйте нам.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (name: string) => `
    w-full bg-white/[0.03] border ${focused === name ? "border-[#f98f0a]" : "border-white/10"}
    text-white placeholder-white/30 rounded-sm px-4 py-3 text-sm tracking-wide
    outline-none transition-all duration-300 hover:border-white/20
  `;

  return (
    <section id="booking" className="w-full min-h-screen bg-[#050708] relative overflow-hidden py-24">

      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#f98f0a]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Ліва частина */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-24">
            <motion.span
              className="text-[#f98f0a] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
            >
              Онлайн запис
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
                Запишіться <span className="text-[#f98f0a]">зараз</span>
              </motion.h2>
            </div>

            <motion.p
              className="text-white/50 leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}
            >
              Заповніть форму — майстер отримає заявку, оцінить пошкодження по фото та зв'яжеться з вами для підтвердження.
            </motion.p>

            {[
              { icon: "📸", text: "Оцінка пошкодження по фото" },
              { icon: "⚡", text: "Підтвердження протягом години" },
              { icon: "💬", text: "Повідомлення на email або Telegram" },
              { icon: "🔒", text: "Безкоштовна консультація" },
            ].map((item, i) => (
              <motion.div
                key={i} className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }} viewport={{ once: true }}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-white/60 text-sm">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Права частина — форма */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                className="border border-[#f98f0a]/30 rounded-sm p-12 text-center bg-[#f98f0a]/5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  Заявку прийнято!
                </h3>
                <p className="text-white/50 mb-2">
                  Майстер отримав вашу заявку та фото пошкодження.
                </p>
                <p className="text-white/50 mb-6">
                  {form.email
                    ? `Підтвердження надіслано на ${form.email}`
                    : "Очікуйте дзвінок для підтвердження запису."}
                </p>
                <motion.button
                  className="text-[#f98f0a] text-sm tracking-widest uppercase border border-[#f98f0a]/30 px-6 py-3 rounded-sm hover:bg-[#f98f0a]/10 transition-colors cursor-pointer"
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", car: "", service: "", date: "", time: "", description: "", photo: null }); }}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                >
                  Новий запис
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-white/10 rounded-sm p-6 sm:p-10 bg-white/[0.01]">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-white/40 text-xs tracking-widest uppercase mb-2 block">Ім'я *</label>
                    <input name="name" type="text" required placeholder="Іван Петренко"
                      value={form.name} onChange={handleChange}
                      onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                      className={inputClass("name")} />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs tracking-widest uppercase mb-2 block">Телефон *</label>
                    <input name="phone" type="tel" required placeholder="+380 XX XXX XX XX"
                      value={form.phone} onChange={handleChange}
                      onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)}
                      className={inputClass("phone")} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-white/40 text-xs tracking-widest uppercase mb-2 block">
                      Email <span className="text-white/20 normal-case tracking-normal">(для підтвердження)</span>
                    </label>
                    <input name="email" type="email" placeholder="ivan@example.com"
                      value={form.email} onChange={handleChange}
                      onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                      className={inputClass("email")} />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs tracking-widest uppercase mb-2 block">Марка та модель авто *</label>
                    <input name="car" type="text" required placeholder="BMW 3 Series 2020"
                      value={form.car} onChange={handleChange}
                      onFocus={() => setFocused("car")} onBlur={() => setFocused(null)}
                      className={inputClass("car")} />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-white/40 text-xs tracking-widest uppercase mb-2 block">Тип послуги *</label>
                  <select name="service" required value={form.service} onChange={handleChange}
                    onFocus={() => setFocused("service")} onBlur={() => setFocused(null)}
                    className={inputClass("service") + " cursor-pointer"} style={{ colorScheme: "dark" }}>
                    <option value="" disabled>Оберіть послугу</option>
                    {services.map((s) => <option key={s} value={s} className="bg-[#050708]">{s}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-white/40 text-xs tracking-widest uppercase mb-2 block">Бажана дата</label>
                    <input name="date" type="date"
                      value={form.date} onChange={handleChange}
                      onFocus={() => setFocused("date")} onBlur={() => setFocused(null)}
                      min={new Date().toISOString().split("T")[0]}
                      className={inputClass("date")} style={{ colorScheme: "dark" }} />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs tracking-widest uppercase mb-2 block">Бажаний час</label>
                    <select name="time" value={form.time} onChange={handleChange}
                      onFocus={() => setFocused("time")} onBlur={() => setFocused(null)}
                      className={inputClass("time") + " cursor-pointer"} style={{ colorScheme: "dark" }}>
                      <option value="" disabled>Оберіть час</option>
                      {timeSlots.map((t) => <option key={t} value={t} className="bg-[#050708]">{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-white/40 text-xs tracking-widest uppercase mb-2 block">Опис пошкодження</label>
                  <textarea name="description" rows={3}
                    placeholder="Опишіть пошкодження: де знаходиться, розмір, обставини..."
                    value={form.description} onChange={handleChange}
                    onFocus={() => setFocused("description")} onBlur={() => setFocused(null)}
                    className={inputClass("description") + " resize-none"} />
                </div>

                <div className="mb-8">
                  <label className="text-white/40 text-xs tracking-widest uppercase mb-2 block">
                    Фото пошкодження <span className="text-[#f98f0a] normal-case tracking-normal text-xs">(рекомендовано)</span>
                  </label>
                  <label className={`flex items-center gap-3 cursor-pointer border rounded-sm px-4 py-3 transition-all duration-300
                    ${form.photo ? "border-[#f98f0a]/50 bg-[#f98f0a]/5" : "border-white/10 hover:border-white/20 bg-white/[0.03]"}`}>
                    <span className="text-xl">{form.photo ? "✅" : "📎"}</span>
                    <span className="text-sm text-white/40 truncate">
                      {form.photo ? form.photo.name : "Прикріпити фото (jpg, png, до 10MB)"}
                    </span>
                    <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
                  </label>
                </div>

                {error && (
                  <motion.p
                    className="text-red-400 text-sm text-center mb-4 border border-red-400/20 rounded-sm py-3 px-4 bg-red-400/5"
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  >
                    {error}
                  </motion.p>
                )}

                <motion.button
                  type="submit" disabled={loading}
                  className="w-full bg-[#f98f0a] text-white py-4 rounded-sm tracking-widest font-semibold uppercase text-sm
                    hover:bg-[#e07c00] transition-colors duration-300 cursor-pointer relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Відправляємо...
                    </span>
                  ) : (
                    "Відправити заявку"
                  )}
                </motion.button>

                <p className="text-white/20 text-xs text-center mt-4 tracking-wide">
                  Майстер оцінить пошкодження та підтвердить дату і вартість
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};