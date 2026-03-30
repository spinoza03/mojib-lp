import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MessageCircleOff, TrendingDown, Calculator, ArrowRight, AlertTriangle } from "lucide-react";

const LossCalculator = () => {
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
    <section id="loss-calculator" className="py-24 surface-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">CALCULATEUR DE PERTES</p>
          <h2 className="section-title mb-4">
            Combien vous coûtent vos{" "}
            <span style={{ color: "#E53E3E" }}>messages ignorés</span> ?
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Chaque message sans réponse est un client potentiel perdu. Calculez l'impact réel sur votre chiffre d'affaires.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          {/* ── Left: Inputs ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                <Calculator size={20} className="text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Votre Situation</h3>
                <p className="text-xs text-slate-500">Ajustez les valeurs selon votre activité</p>
              </div>
            </div>

            {/* Missed messages per day */}
            <div className="mb-7">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <MessageCircleOff size={14} className="text-red-400" />
                  Messages non-répondus / jour
                </label>
                <span className="text-lg font-bold text-red-500">{missedMessages}</span>
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

            {/* Average customer value */}
            <div className="mb-7">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <TrendingDown size={14} className="text-amber-500" />
                  Valeur moyenne client (MAD)
                </label>
                <span className="text-lg font-bold text-amber-600">{avgCustomerValue.toLocaleString("fr-MA")} DH</span>
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
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <AlertTriangle size={14} className="text-purple-500" />
                  Taux de conversion estimé
                </label>
                <span className="text-lg font-bold text-purple-600">{conversionRate}%</span>
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

            <p className="text-[11px] text-slate-400 mt-4">
              * Basé sur {missedMessages} messages manqués/jour avec un taux de conversion de {conversionRate}%
            </p>
          </motion.div>

          {/* ── Right: Results ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Daily loss */}
            <motion.div
              key={`daily-${results.dailyLost}`}
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-2xl p-6 border border-red-100 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Perte par Jour</p>
                  <p className="text-3xl font-extrabold text-red-500">
                    -{formatMAD(results.dailyLost)} <span className="text-lg">DH</span>
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center">
                  <TrendingDown size={28} className="text-red-400" />
                </div>
              </div>
            </motion.div>

            {/* Monthly loss — highlighted */}
            <motion.div
              key={`monthly-${results.monthlyLost}`}
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)",
                boxShadow: "0 12px 40px rgba(220,38,38,0.25)",
              }}
            >
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">Perte par Mois</p>
                  <p className="text-4xl font-extrabold text-white">
                    -{formatMAD(results.monthlyLost)} <span className="text-xl">DH</span>
                  </p>
                  <p className="text-sm text-white/70 mt-1">
                    ~{results.lostCustomers} clients perdus/mois
                  </p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <MessageCircleOff size={32} className="text-white/80" />
                </div>
              </div>
              {/* Decorative */}
              <div
                className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-10"
                style={{ background: "white" }}
              />
            </motion.div>

            {/* Yearly loss */}
            <motion.div
              key={`yearly-${results.yearlyLost}`}
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Perte par An</p>
                  <p className="text-3xl font-extrabold text-slate-900">
                    -{formatMAD(results.yearlyLost)} <span className="text-lg">DH</span>
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center">
                  <AlertTriangle size={28} className="text-slate-400" />
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-2"
            >
              <a
                href="#lead-form"
                className="btn-urgent w-full text-center py-4 text-base"
                style={{ display: "flex" }}
              >
                Arrêtez de perdre {formatMAD(results.monthlyLost)} DH/mois
                <ArrowRight size={18} />
              </a>
              <p className="text-center text-[11px] text-slate-400 mt-3">
                Mojib répond à 100% de vos messages en moins de 3 secondes — 24h/24
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LossCalculator;
