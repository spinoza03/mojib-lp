import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";

type Feature = { text: string; included: boolean };

type Plan = {
  name: string;
  price: string;
  tagline: string;
  tag: string | null;
  accentColor: string;
  features: Feature[];
  cta: string;
  featured: boolean;
};

const plans: Plan[] = [
  {
    name: "L'Organisé",
    price: "299",
    tagline: "Tout organiser, rien perdre. La fin du papier.",
    tag: null,
    accentColor: "#64748B",
    features: [
      { text: "CRM intelligent (clients, patients, biens)", included: true },
      { text: "Calendrier de réservation", included: true },
      { text: "Suivi financier de base", included: true },
      { text: "Dashboard web complet", included: true },
      { text: "Support WhatsApp", included: true },
      { text: "Agent IA WhatsApp 24/7", included: false },
      { text: "Rappels anti no-show automatiques", included: false },
      { text: "Booking IA automatique", included: false },
      { text: "Site web haute conversion", included: false },
    ],
    cta: "Commencer",
    featured: false,
  },
  {
    name: "L'Automatisé",
    price: "499",
    tagline: "L'IA qui travaille pour vous pendant que vous dormez.",
    tag: "RECOMMANDÉ",
    accentColor: "#2589D0",
    features: [
      { text: "Tout du plan Organisé", included: true },
      { text: "Agent IA WhatsApp 24/7", included: true },
      { text: "Vérification dispo & booking auto", included: true },
      { text: "Rappels anti no-show automatiques", included: true },
      { text: "Matching IA immobilier", included: true },
      { text: "Envoi photos/vidéos via WhatsApp", included: true },
      { text: "Rapports hebdomadaires", included: true },
      { text: "Site web haute conversion", included: false },
      { text: "Support prioritaire", included: false },
    ],
    cta: "Essai Gratuit 7 Jours",
    featured: true,
  },
  {
    name: "L'Elite",
    price: "799",
    tagline: "Le pack complet pour dominer votre marché.",
    tag: null,
    accentColor: "#7C3AED",
    features: [
      { text: "Tout du plan Automatisé", included: true },
      { text: "Site web haute conversion personnalisé", included: true },
      { text: "Dashboard financier avancé", included: true },
      { text: "Suivi commissions / loyers / pub", included: true },
      { text: "Intégrations avancées", included: true },
      { text: "Support prioritaire 7j/7", included: true },
      { text: "Onboarding personnalisé 1h", included: true },
      { text: "Formation équipe incluse", included: true },
      { text: "Mises à jour en avant-première", included: true },
    ],
    cta: "Contacter l'équipe",
    featured: false,
  },
];

const PlanCard = ({ plan, index }: { plan: Plan; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`pricing-card ${plan.featured ? "featured" : ""} flex flex-col`}
    style={plan.featured ? { borderColor: plan.accentColor } : {}}
  >
    {/* Recommended badge */}
    {plan.tag && (
      <div
        className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[11px] font-extrabold text-white flex items-center gap-1.5 shadow-md"
        style={{ backgroundColor: plan.accentColor }}
      >
        <Zap size={11} />
        {plan.tag}
      </div>
    )}

    {/* Header */}
    <div className="mb-6">
      <h3 className="text-xl font-extrabold text-slate-900 mb-1">{plan.name}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-5">{plan.tagline}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-5xl font-black text-slate-900">{plan.price}</span>
        <span className="text-slate-400 text-sm font-medium">DH / mois</span>
      </div>
    </div>

    {/* CTA */}
    <a
      href="#lead-form"
      className="block w-full text-center py-3 rounded-xl font-semibold text-sm mb-6 transition-all duration-200"
      style={
        plan.featured
          ? { backgroundColor: plan.accentColor, color: "white" }
          : {
              border: `2px solid ${plan.accentColor}`,
              color: plan.accentColor,
              backgroundColor: "transparent",
            }
      }
      onMouseEnter={(e) => {
        if (!plan.featured) {
          const el = e.currentTarget;
          el.style.backgroundColor = plan.accentColor;
          el.style.color = "white";
        }
      }}
      onMouseLeave={(e) => {
        if (!plan.featured) {
          const el = e.currentTarget;
          el.style.backgroundColor = "transparent";
          el.style.color = plan.accentColor;
        }
      }}
    >
      {plan.cta}
    </a>

    {/* Features */}
    <ul className="space-y-3 flex-1">
      {plan.features.map((feature) => (
        <li key={feature.text} className="flex items-start gap-3">
          <div
            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
            style={
              feature.included
                ? { backgroundColor: `${plan.accentColor}18` }
                : { backgroundColor: "#F1F5F9" }
            }
          >
            {feature.included ? (
              <Check size={11} style={{ color: plan.accentColor }} />
            ) : (
              <X size={11} className="text-slate-300" />
            )}
          </div>
          <span className={`text-sm ${feature.included ? "text-slate-700" : "text-slate-300"}`}>
            {feature.text}
          </span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const PricingSection = () => (
  <section id="pricing" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">TARIFS</p>
        <h2 className="section-title mb-4">Un investissement, pas une dépense</h2>
        <p className="section-subtitle mx-auto text-center">
          Choisissez le plan qui correspond à votre ambition. Changez ou annulez à tout moment.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-8">
        {plans.map((plan, i) => (
          <PlanCard key={plan.name} plan={plan} index={i} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-slate-400 mt-10 flex items-center justify-center gap-4 flex-wrap"
      >
        <span>✅ Sans engagement</span>
        <span>🔒 Données sécurisées au Maroc</span>
        <span>📞 Support dédié inclus</span>
        <span>🎁 7 jours d'essai gratuit</span>
      </motion.p>
    </div>
  </section>
);

export default PricingSection;
