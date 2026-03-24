import { motion } from "framer-motion";
import { MessageCircle, Database, CalendarCheck, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: MessageCircle,
    color: "#25D366",
    bg: "#F0FFF4",
    title: "Agent IA WhatsApp",
    description:
      "Votre réceptionniste digitale répond à chaque message instantanément, en Darija ou Français — même à 3h du matin.",
    features: [
      "Réponse en moins de 3 secondes",
      "Darija · Français · Arabe classique",
      "Filtre anti-spam intelligent",
    ],
  },
  {
    icon: Database,
    color: "#2589D0",
    bg: "#EBF5FF",
    title: "CRM Intelligent",
    description:
      "Centralisez toutes les fiches clients, patients ou biens immobiliers. Plus rien ne se perd, tout est accessible en un clic.",
    features: [
      "Fiches clients & patients complètes",
      "Historique des interactions",
      "Double-face Acheteurs / Vendeurs",
    ],
  },
  {
    icon: CalendarCheck,
    color: "#7C3AED",
    bg: "#F5F3FF",
    title: "Booking Automatique",
    description:
      "L'IA vérifie votre agenda, propose des créneaux disponibles et confirme les rendez-vous — sans intervention humaine.",
    features: [
      "Vérification dispo en temps réel",
      "Rappels anti no-show automatiques",
      "Synchronisation dashboard instantanée",
    ],
  },
  {
    icon: TrendingUp,
    color: "#DD6B20",
    bg: "#FFF7ED",
    title: "Finance & Reporting",
    description:
      "Suivez vos marges, commissions, dépenses pub et loyers dans un tableau de bord clair et prêt-à-décider.",
    features: [
      "Marges nettes par traitement",
      "Commissions agents automatiques",
      "Suivi loyers & dépenses pub",
    ],
  },
];

const PillarsSection = () => (
  <section id="pillars" className="py-24 surface-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">LES 4 PILIERS</p>
        <h2 className="section-title mb-4">
          Tout ce dont votre Business a besoin
        </h2>
        <p className="section-subtitle mx-auto text-center">
          4 modules technologiques qui travaillent ensemble 24h/24 pour automatiser votre croissance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="feature-card"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ backgroundColor: pillar.bg }}
            >
              <pillar.icon size={22} style={{ color: pillar.color }} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">{pillar.description}</p>
            <ul className="space-y-2">
              {pillar.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: pillar.color }}
                  />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PillarsSection;
