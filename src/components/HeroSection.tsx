import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";

/* ── Realistic WhatsApp Phone Mockup ──────────────────────────────────────── */
const PhoneMockup = () => (
  <div className="relative mx-auto w-fit select-none">
    {/* Phone shell */}
    <div
      className="w-[268px] sm:w-[290px]"
      style={{
        background: "linear-gradient(160deg, #1a1a2e 0%, #16213e 100%)",
        borderRadius: "44px",
        padding: "10px",
        boxShadow: "0 40px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.06)",
      }}
    >
      {/* Screen */}
      <div
        className="overflow-hidden flex flex-col"
        style={{
          borderRadius: "36px",
          height: "540px",
          background: "#fff",
        }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1 bg-[#075E54]">
          <span className="text-[10px] text-white/70 font-semibold">9:41</span>
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-white/70">●●●</span>
          </div>
        </div>

        {/* WA Header */}
        <div className="bg-[#075E54] px-4 pb-3 flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
            style={{ background: "linear-gradient(135deg, #2589D0, #1565C0)" }}
          >
            M
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-[13px] font-semibold leading-tight">Mojib IA — Réceptionniste</p>
            <p className="text-emerald-300 text-[11px]">● En ligne</p>
          </div>
        </div>

        {/* Chat body */}
        <div
          className="flex-1 flex flex-col gap-2 p-3 overflow-hidden"
          style={{ background: "#ECE5DD" }}
        >
          {/* Client */}
          <div className="self-start max-w-[78%]">
            <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 shadow-sm">
              <p className="text-[#303030] text-[11px] leading-relaxed">Bonjour, j'ai besoin d'un rendez-vous 🙏</p>
              <p className="text-[#aaa] text-[9px] text-right mt-0.5">09:23</p>
            </div>
          </div>

          {/* AI */}
          <div className="self-end max-w-[82%]">
            <div className="bg-[#D9FDD3] rounded-xl rounded-tr-sm px-3 py-2 shadow-sm">
              <p className="text-[#303030] text-[11px] leading-relaxed">Bonjour ! Je suis l'assistante IA 🤖 Quand souhaitez-vous venir ?</p>
              <p className="text-[#aaa] text-[9px] text-right mt-0.5">09:23 ✓✓</p>
            </div>
          </div>

          {/* Client */}
          <div className="self-start max-w-[72%]">
            <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 shadow-sm">
              <p className="text-[#303030] text-[11px]">Demain matin si possible</p>
              <p className="text-[#aaa] text-[9px] text-right mt-0.5">09:24</p>
            </div>
          </div>

          {/* AI confirms slot */}
          <div className="self-end max-w-[85%]">
            <div className="bg-[#D9FDD3] rounded-xl rounded-tr-sm px-3 py-2 shadow-sm">
              <p className="text-[#303030] text-[11px] leading-relaxed">
                ✅ Parfait ! J'ai une dispo demain à 10h00. Je confirme votre RDV ?
              </p>
              <p className="text-[#aaa] text-[9px] text-right mt-0.5">09:24 ✓✓</p>
            </div>
          </div>

          {/* Client */}
          <div className="self-start max-w-[60%]">
            <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 shadow-sm">
              <p className="text-[#303030] text-[11px]">Oui parfait, merci !</p>
              <p className="text-[#aaa] text-[9px] text-right mt-0.5">09:24</p>
            </div>
          </div>

          {/* Booking confirmation card */}
          <div className="self-end max-w-[88%]">
            <div className="bg-[#D9FDD3] rounded-xl rounded-tr-sm px-3 py-2.5 shadow-sm">
              <div className="flex items-center gap-1.5 mb-1.5 pb-1.5 border-b border-[#25D366]/20">
                <span className="text-base">📅</span>
                <span className="text-[#1a1a1a] text-[11px] font-bold">Réservation confirmée !</span>
              </div>
              <p className="text-slate-600 text-[10px]">Demain · 10:00–11:00</p>
              <p className="text-slate-600 text-[10px]">Clinique Al Amal · Casablanca</p>
              <p className="text-[#25D366] text-[10px] font-semibold mt-1">⏰ Rappel auto programmé</p>
              <p className="text-[#aaa] text-[9px] text-right mt-1">09:25 ✓✓</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Floating stat: bookings */}
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="absolute -right-4 top-10"
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "12px 14px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
        border: "1px solid #f1f5f9",
        minWidth: "120px",
      }}
    >
      <p style={{ fontSize: "9px", color: "#94a3b8", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>CE MOIS</p>
      <p style={{ fontSize: "24px", fontWeight: 800, color: "#2589D0", lineHeight: 1.1, marginTop: "2px" }}>+147%</p>
      <p style={{ fontSize: "10px", color: "#22c55e", fontWeight: 600, marginTop: "2px" }}>↑ Réservations</p>
    </motion.div>

    {/* Floating stat: response time */}
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      className="absolute -left-6 bottom-24"
      style={{
        background: "#2589D0",
        borderRadius: "16px",
        padding: "12px 14px",
        boxShadow: "0 8px 32px rgba(37,137,208,0.35)",
        minWidth: "120px",
      }}
    >
      <p style={{ fontSize: "9px", color: "rgba(255,255,255,0.7)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>RÉPONSE IA</p>
      <p style={{ fontSize: "22px", fontWeight: 800, color: "white", lineHeight: 1.1, marginTop: "2px" }}>3 sec</p>
      <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.75)", marginTop: "2px" }}>⚡ 24h/24 · 7j/7</p>
    </motion.div>

    {/* AI active badge */}
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.4 }}
      className="absolute -top-3 left-1/2 -translate-x-1/2"
      style={{
        background: "white",
        borderRadius: "999px",
        padding: "6px 14px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        border: "1px solid #f1f5f9",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#22c55e",
          display: "inline-block",
          animation: "pulse 2s infinite",
        }}
      />
      <span style={{ fontSize: "11px", fontWeight: 700, color: "#0f172a" }}>IA Active</span>
    </motion.div>
  </div>
);

/* ── Hero Section ──────────────────────────────────────────────────────────── */
const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ background: "linear-gradient(155deg, #FFFFFF 0%, #F0F7FF 55%, #FAFBFF 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "5%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,137,208,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-5%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,137,208,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Copy ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Social proof badge */}
            <div className="badge-blue mb-6">
              <Star size={13} fill="currentColor" />
              <span>+200 Professionnels font confiance à Mojib</span>
            </div>

            {/* Headline */}
            <h1 className="section-title mb-6">
              L'Assistant IA qui gère votre{" "}
              <span className="blue-gradient-text">Business 24h/24</span>
            </h1>

            {/* Sub-headline */}
            <p className="section-subtitle mb-8">
              Automatisez vos réservations, répondez à vos clients sur WhatsApp et ne perdez plus jamais un prospect — même la nuit.
            </p>

            {/* Value props */}
            <ul className="space-y-3 mb-10">
              {[
                "Répond à chaque message en 3 secondes, en Darija ou Français",
                "Gère votre calendrier et confirme les RDV automatiquement",
                "Réduit les no-shows de 80% grâce aux rappels automatiques",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(37,137,208,0.12)" }}
                  >
                    <Check size={11} style={{ color: "#2589D0" }} />
                  </div>
                  <span className="text-sm text-slate-600 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#lead-form" className="btn-urgent text-base py-3.5 px-7">
                Essai Gratuit 7 Jours
                <ArrowRight size={18} />
              </a>
              <a href="#how-it-works" className="btn-outline text-base py-3.5 px-7">
                Voir comment ça marche
              </a>
            </div>

            {/* Stars */}
            <p className="mt-6 text-sm text-slate-400 flex items-center gap-2 flex-wrap">
              <span className="text-amber-400 tracking-tight">★★★★★</span>
              <span>4.9/5 — Noté par 200+ professionnels marocains</span>
            </p>
          </motion.div>

          {/* ── Right: Phone mockup ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex justify-center lg:justify-end lg:pr-4"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
