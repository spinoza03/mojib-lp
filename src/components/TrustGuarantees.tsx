import { motion } from "framer-motion";
import { CheckCircle, CalendarX, DollarSign } from "lucide-react";

const guarantees = [
  {
    icon: CheckCircle,
    color: "#22c55e",
    bg: "#ECFDF5",
    title: "Garantie de remboursement de 7 jours",
    description:
      "Pas satisfait ? Obtenez un remboursement intégral dans les 7 jours suivant l'achat. Aucune question ne sera posée.",
  },
  {
    icon: CalendarX,
    color: "#2589D0",
    bg: "#EBF5FF",
    title: "Annuler à tout moment",
    description:
      "Aucun contrat, aucun engagement. Annulez votre abonnement à tout moment.",
  },
  {
    icon: DollarSign,
    color: "#7C3AED",
    bg: "#F5F3FF",
    title: "Aucuns Frais Cachés",
    description:
      "Tarification transparente. Ce que vous voyez est ce que vous payez.",
  },
];

const TrustGuarantees = () => (
  <section className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {guarantees.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div
              className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-5"
              style={{ backgroundColor: g.bg }}
            >
              <g.icon size={26} style={{ color: g.color }} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">{g.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{g.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustGuarantees;
