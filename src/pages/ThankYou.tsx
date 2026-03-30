import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  MessageCircleOff,
  TrendingDown,
  Calculator,
  AlertTriangle,
  Sparkles,
  Shield,
  Clock,
  Headphones,
} from "lucide-react";
import mojibLogo from "@/assets/mojib-logo.png";
import TrustGuarantees from "@/components/TrustGuarantees";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/* ── Inline Loss Calculator (same logic, compact layout) ─────────── */
const ThankYouCalculator = () => {
  const [missedMessages, setMissedMessages] = useState(10);
  const [avgCustomerValue, setAvgCustomerValue] = useState(500);
  const [conversionRate, setConversionRate] = useState(30);

  const results = useMemo(() => {
    const dailyLost = Math.round(missedMessages * (conversionRate / 100) * avgCustomerValue);
    const monthlyLost = dailyLost * 30;
    const yearlyLost = dailyLost * 365;
    const lostCustomers = Math.round(missedMessages * (conversionRate / 100) * 30);
    return { dailyLost, monthlyLost, yearlyLost, lostCustomers };
  }, [missedMessages, avgCustomerValue, conversionRate]);

  const formatMAD = (n: number) => {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(n >= 10_000 ? 0 : 1)}K`;
    return n.toLocaleString("fr-MA");
  };

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mb-10"
      >
        <p className="section-label mb-3">CALCULATEUR DE PERTES</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
          Combien vous coûtent vos{" "}
          <span style={{ color: "#E53E3E" }}>messages ignorés</span> ?
        </h2>
        <p className="text-base text-slate-500 max-w-xl mx-auto">
          Mojib vous aide à ne plus perdre un seul client. Voyez l'impact.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Inputs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center">
              <Calculator size={18} className="text-red-500" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Votre Situation</h3>
              <p className="text-[11px] text-slate-500">Ajustez selon votre activité</p>
            </div>
          </div>

          {/* Missed messages */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <MessageCircleOff size={13} className="text-red-400" />
                Messages non-répondus / jour
              </label>
              <span className="text-base font-bold text-red-500">{missedMessages}</span>
            </div>
            <input
              type="range"
              min={1}
              max={50}
              value={missedMessages}
              onChange={(e) => setMissedMessages(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #E53E3E 0%, #E53E3E ${((missedMessages - 1) / 49) * 100}%, #e2e8f0 ${((missedMessages - 1) / 49) * 100}%, #e2e8f0 100%)`,
              }}
            />
            <div className="flex justify-between mt-1">
              <span className="text-[10px] text-slate-400">1</span>
              <span className="text-[10px] text-slate-400">50</span>
            </div>
          </div>

          {/* Customer value */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <TrendingDown size={13} className="text-amber-500" />
                Valeur moyenne client (MAD)
              </label>
              <span className="text-base font-bold text-amber-600">{avgCustomerValue.toLocaleString("fr-MA")} DH</span>
            </div>
            <input
              type="range"
              min={100}
              max={5000}
              step={50}
              value={avgCustomerValue}
              onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #DD6B20 0%, #DD6B20 ${((avgCustomerValue - 100) / 4900) * 100}%, #e2e8f0 ${((avgCustomerValue - 100) / 4900) * 100}%, #e2e8f0 100%)`,
              }}
            />
            <div className="flex justify-between mt-1">
              <span className="text-[10px] text-slate-400">100 DH</span>
              <span className="text-[10px] text-slate-400">5,000 DH</span>
            </div>
          </div>

          {/* Conversion rate */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <AlertTriangle size={13} className="text-purple-500" />
                Taux de conversion estimé
              </label>
              <span className="text-base font-bold text-purple-600">{conversionRate}%</span>
            </div>
            <input
              type="range"
              min={5}
              max={80}
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #7C3AED 0%, #7C3AED ${((conversionRate - 5) / 75) * 100}%, #e2e8f0 ${((conversionRate - 5) / 75) * 100}%, #e2e8f0 100%)`,
              }}
            />
            <div className="flex justify-between mt-1">
              <span className="text-[10px] text-slate-400">5%</span>
              <span className="text-[10px] text-slate-400">80%</span>
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-3"
        >
          {/* Daily */}
          <div className="bg-white rounded-2xl p-5 border border-red-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Perte par Jour</p>
                <p className="text-2xl font-extrabold text-red-500">
                  -{formatMAD(results.dailyLost)} <span className="text-base">DH</span>
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                <TrendingDown size={24} className="text-red-400" />
              </div>
            </div>
          </div>

          {/* Monthly — highlighted */}
          <div
            className="rounded-2xl p-5 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)",
              boxShadow: "0 12px 40px rgba(220,38,38,0.25)",
            }}
          >
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-[11px] font-semibold text-white/70 uppercase tracking-wider mb-1">Perte par Mois</p>
                <p className="text-3xl font-extrabold text-white">
                  -{formatMAD(results.monthlyLost)} <span className="text-lg">DH</span>
                </p>
                <p className="text-xs text-white/70 mt-1">
                  ~{results.lostCustomers} clients perdus/mois
                </p>
              </div>
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                <MessageCircleOff size={28} className="text-white/80" />
              </div>
            </div>
            <div className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full opacity-10 bg-white" />
          </div>

          {/* Yearly */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Perte par An</p>
                <p className="text-2xl font-extrabold text-slate-900">
                  -{formatMAD(results.yearlyLost)} <span className="text-base">DH</span>
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                <AlertTriangle size={24} className="text-slate-400" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ── Thank You Page ──────────────────────────────────────────────── */
const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as {
    name?: string;
    businessName?: string;
    niche?: string;
    city?: string;
    whatsapp?: string;
  } | null;

  // Redirect if accessed directly without form data
  useEffect(() => {
    if (!state?.name) {
      navigate("/", { replace: true });
    }
  }, [state, navigate]);

  useEffect(() => {
    window.fbq?.("track", "CompleteRegistration", {
      content_name: "Mojib Thank You Page",
    });
  }, []);

  const whatsappMessage = state
    ? `Bonjour, je souhaite démarrer avec Mojib !\n\n` +
      `👤 Nom : ${state.name}\n` +
      `🏢 Business : ${state.businessName}\n` +
      `📍 Secteur : ${state.niche}\n` +
      `🌆 Ville : ${state.city}\n` +
      `📱 WhatsApp : ${state.whatsapp}`
    : "";

  if (!state?.name) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* ── Minimal header ─────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src={mojibLogo} alt="Mojib" className="h-8 w-auto" />
          </a>
          <a
            href="https://app.mojib.online"
            className="btn-primary text-sm py-2 px-5"
          >
            Accéder à l'App
            <ExternalLink size={14} />
          </a>
        </div>
      </header>

      {/* ── Hero: Thank You + CTAs ─────────────────── */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(155deg, #FFFFFF 0%, #F0F7FF 55%, #FAFBFF 100%)" }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "10%",
            right: "-8%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,137,208,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "0",
            left: "-5%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Success icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="mb-6"
          >
            <div
              className="w-20 h-20 rounded-full mx-auto flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                boxShadow: "0 12px 40px rgba(34,197,94,0.3)",
              }}
            >
              <CheckCircle2 size={40} className="text-white" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Merci, {state.name?.split(" ")[0]} !
            </h1>
            <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed mb-4">
              Votre demande d'essai gratuit a été enregistrée avec succès.
              Choisissez comment continuer :
            </p>
          </motion.div>

          {/* ── Two CTA cards ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 max-w-2xl mx-auto"
          >
            {/* CTA 1: Go to App */}
            <a
              href="https://app.mojib.online"
              className="group relative bg-white rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 text-left"
              style={{ textDecoration: "none" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg, #2589D0, #1565C0)" }}
              >
                <Sparkles size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Créer mon compte
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Accédez directement à la plateforme Mojib et commencez votre configuration en quelques minutes.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all">
                Accéder à l'App
                <ArrowRight size={16} />
              </span>
              {/* Recommended badge */}
              <div
                className="absolute -top-3 right-4 px-3 py-1 rounded-full text-[10px] font-bold text-white"
                style={{ background: "linear-gradient(135deg, #2589D0, #1565C0)" }}
              >
                RECOMMANDÉ
              </div>
            </a>

            {/* CTA 2: WhatsApp */}
            <a
              href={`https://wa.me/447749343372?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 shadow-sm hover:shadow-xl transition-all duration-300 text-left"
              style={{ textDecoration: "none" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "#25D366" }}
              >
                <MessageCircle size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Discuter sur WhatsApp
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Parlez directement avec notre équipe sur WhatsApp pour une aide personnalisée.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-green-600 group-hover:gap-3 transition-all">
                Ouvrir WhatsApp
                <ArrowRight size={16} />
              </span>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-10"
          >
            {[
              { icon: Shield, text: "Données sécurisées" },
              { icon: Clock, text: "Setup en 30 min" },
              { icon: Headphones, text: "Support 7j/7" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-slate-400">
                <Icon size={14} style={{ color: "#2589D0" }} />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── What happens next ─────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
              Et ensuite ?
            </h2>
            <p className="text-base text-slate-500">Voici les prochaines étapes :</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                step: "1",
                title: "Créez votre compte",
                desc: "Inscrivez-vous sur app.mojib.online en 2 minutes",
                color: "#2589D0",
              },
              {
                step: "2",
                title: "Configuration IA",
                desc: "Notre équipe configure votre agent IA WhatsApp sous 2h",
                color: "#7C3AED",
              },
              {
                step: "3",
                title: "C'est parti !",
                desc: "Votre IA répond et réserve automatiquement 24h/24",
                color: "#059669",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 text-center"
              >
                <div
                  className="w-10 h-10 rounded-full mx-auto flex items-center justify-center text-white text-sm font-bold mb-3"
                  style={{ backgroundColor: item.color }}
                >
                  {item.step}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Guarantees ─────────────────────────── */}
      <TrustGuarantees />

      {/* ── Loss Calculator ───────────────────────────── */}
      <section className="py-20 surface-section">
        <ThankYouCalculator />
      </section>

      {/* ── Bottom CTA ────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              Prêt à transformer votre business ?
            </h2>
            <p className="text-base text-slate-500 mb-8">
              Arrêtez de perdre des clients et commencez à automatiser dès maintenant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.mojib.online"
                className="btn-primary text-base py-3.5 px-8"
              >
                Créer mon Compte Gratuit
                <ArrowRight size={18} />
              </a>
              <a
                href={`https://wa.me/447749343372?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base py-3.5 px-8"
              >
                <MessageCircle size={18} />
                Discuter sur WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
      <footer className="py-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src={mojibLogo} alt="Mojib" className="h-6 w-auto opacity-60" />
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Mojib. Tous droits réservés.
          </p>
          <a href="/" className="text-xs text-slate-400 hover:text-blue-500 transition-colors">
            Retour à l'accueil
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ThankYou;
