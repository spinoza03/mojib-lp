import { motion } from "framer-motion";
import { Home, Stethoscope, Scissors, Utensils } from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    title: "Cabinets Dentaires",
    description: "Gestion patients, RDV, stock matériel dentaire",
    color: "#2589D0",
    bg: "#EBF5FF",
    tag: "Populaire",
  },
  {
    icon: Stethoscope,
    title: "Médecins & Spécialistes",
    description: "Généralistes, dermatologues, pédiatres...",
    color: "#0D9488",
    bg: "#F0FDFA",
    tag: "Populaire",
  },
  {
    icon: Scissors,
    title: "Centres d'Esthétique",
    description: "Salons, spas, beauty centers, soins",
    color: "#DB2777",
    bg: "#FDF2F8",
    tag: "Populaire",
  },
  {
    icon: Home,
    title: "Immobilier",
    description: "Agences, promoteurs, gérants de biens",
    color: "#7C3AED",
    bg: "#F5F3FF",
    tag: "Actif",
  },
  {
    icon: Utensils,
    title: "Restaurants & Cafés",
    description: "Réservations, commandes, gestion stock",
    color: "#B45309",
    bg: "#FFFBEB",
    tag: "Actif",
  },
];

const IndustrySection = () => (
  <section id="industries" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">SOLUTIONS PAR SECTEUR</p>
        <h2 className="section-title mb-4">Conçu pour votre métier</h2>
        <p className="section-subtitle mx-auto text-center">
          Chaque secteur a ses spécificités. Mojib s'adapte à votre réalité terrain.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {industries.map((industry, i) => (
          <motion.a
            key={industry.title}
            href="#lead-form"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="industry-card relative"
          >
            {industry.tag && (
              <span
                className="absolute -top-2.5 -right-2.5 text-[9px] font-bold px-2 py-0.5 rounded-full text-white leading-none"
                style={{ backgroundColor: industry.color }}
              >
                {industry.tag}
              </span>
            )}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: industry.bg }}
            >
              <industry.icon size={22} style={{ color: industry.color }} />
            </div>
            <p className="text-sm font-semibold text-slate-800 text-center leading-tight">
              {industry.title}
            </p>
            <p className="text-[10px] text-slate-400 text-center leading-tight">
              {industry.description}
            </p>
          </motion.a>
        ))}
      </div>

      {/* Bottom CTA note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-slate-400 mt-10"
      >
        Votre secteur n'est pas listé ?{" "}
        <a href="#lead-form" className="text-[#2589D0] font-semibold hover:underline">
          Contactez-nous →
        </a>
      </motion.p>
    </div>
  </section>
);

export default IndustrySection;
