import { motion } from "framer-motion";
import { MessageSquare, Zap, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Le client envoie un message",
    description:
      "Votre client écrit sur votre WhatsApp professionnel — à n'importe quelle heure du jour ou de la nuit.",
    color: "#2589D0",
    bg: "#EBF5FF",
  },
  {
    icon: Zap,
    number: "02",
    title: "Mojib IA répond en 3 secondes",
    description:
      "L'agent comprend la demande, vérifie vos disponibilités et engage la conversation — en Darija, Français ou Arabe.",
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Le RDV est confirmé & enregistré",
    description:
      "Le rendez-vous apparaît dans votre dashboard, un rappel automatique est programmé et vous recevez une notification.",
    color: "#059669",
    bg: "#ECFDF5",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 surface-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">COMMENT ÇA MARCHE</p>
        <h2 className="section-title mb-4">Opérationnel en 30 minutes</h2>
        <p className="section-subtitle mx-auto text-center">
          Pas besoin de compétences techniques. Connectez votre WhatsApp et laissez Mojib faire le reste.
        </p>
      </motion.div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {/* Connector line (desktop) */}
        <div className="hidden md:block absolute top-[3.25rem] left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-gradient-to-r from-[#BFDBFE] via-[#7C3AED]/20 to-[#A7F3D0]" />

        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative"
          >
            {/* Step number badge */}
            <div
              className="absolute -top-3.5 -left-3.5 w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold text-white z-10 shadow-md"
              style={{ background: "#0F172A" }}
            >
              {step.number}
            </div>

            <div className="feature-card">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: step.bg }}
              >
                <step.icon size={26} style={{ color: step.color }} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 text-center">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed text-center">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-14"
      >
        <a href="#lead-form" className="btn-primary text-base py-3.5 px-8">
          Je veux essayer Mojib →
        </a>
      </motion.div>
    </div>
  </section>
);

export default HowItWorksSection;
