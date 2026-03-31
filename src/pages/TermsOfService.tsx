import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import mojibLogo from "@/assets/mojib-logo.png";

const LAST_UPDATED = "31 mars 2026";
const COMPANY = "Mojib";
const EMAIL = "legal@mojib.online";
const WEBSITE = "https://app.mojib.online";

const sections = [
  {
    title: "1. Acceptation des conditions",
    content: `En accédant à la plateforme ${COMPANY} (le « Service »), en créant un compte ou en utilisant l'une de nos fonctionnalités, vous acceptez d'être lié par les présentes Conditions Générales d'Utilisation (« CGU »). Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre Service.

Ces CGU s'appliquent à tous les utilisateurs du Service, incluant les visiteurs, les clients et les contributeurs de contenu.`,
  },
  {
    title: "2. Description du Service",
    content: `${COMPANY} est une plateforme SaaS de gestion d'entreprise tout-en-un qui comprend notamment :

• Un CRM intelligent pour la gestion des clients, patients et biens
• Un module de gestion de stock et d'inventaire
• Des outils de finance et de reporting
• Un système de booking et de calendrier automatique
• Un agent IA WhatsApp disponible 24h/24 et 7j/7

Le Service est destiné aux professionnels et entreprises — cabinets médicaux, agences immobilières, restaurants et autres commerces.`,
  },
  {
    title: "3. Création de compte",
    content: `Pour accéder au Service, vous devez créer un compte en fournissant des informations exactes, complètes et à jour. Vous êtes responsable de :

• La confidentialité de vos identifiants de connexion
• Toutes les activités qui se déroulent sous votre compte
• La notification immédiate à ${COMPANY} en cas d'utilisation non autorisée

${COMPANY} se réserve le droit de suspendre ou de résilier tout compte en cas de violation de ces CGU.`,
  },
  {
    title: "4. Abonnements et paiements",
    content: `Le Service est proposé sous forme d'abonnements mensuels selon les plans tarifaires disponibles sur notre site. En vous abonnant, vous acceptez que :

• Les paiements sont prélevés automatiquement chaque mois à la date d'anniversaire de votre souscription
• Les prix sont affichés hors taxes applicables le cas échéant
• Toute période commencée est due dans son intégralité
• Les tarifs promotionnels (ex. : -50 % les 2 premiers mois) s'appliquent uniquement aux nouvelles souscriptions et selon les conditions annoncées au moment de l'offre

Vous pouvez annuler votre abonnement à tout moment depuis votre espace client. L'annulation prend effet à la fin de la période de facturation en cours.`,
  },
  {
    title: "5. Garantie de remboursement",
    content: `${COMPANY} offre une garantie de remboursement intégral de 7 jours à compter de la date du premier paiement. Pour en bénéficier, contactez notre équipe à ${EMAIL} dans ce délai. Passé ce délai, aucun remboursement ne sera accordé sauf obligation légale contraire.`,
  },
  {
    title: "6. Utilisation acceptable",
    content: `Vous vous engagez à utiliser le Service uniquement à des fins légales et conformément à ces CGU. Il vous est notamment interdit de :

• Utiliser le Service à des fins frauduleuses ou illicites
• Diffuser des contenus illégaux, diffamatoires, obscènes ou portant atteinte aux droits de tiers
• Tenter d'accéder sans autorisation aux systèmes ou données de ${COMPANY} ou de tiers
• Perturber ou dégrader les performances du Service (attaques DDoS, spam, etc.)
• Revendre, sous-licencier ou exploiter commercialement le Service sans autorisation écrite préalable
• Contourner les mesures de sécurité ou de contrôle d'accès du Service`,
  },
  {
    title: "7. Propriété intellectuelle",
    content: `L'ensemble des éléments constitutifs du Service — logiciels, algorithmes, designs, marques, logos, textes, bases de données — sont la propriété exclusive de ${COMPANY} ou de ses partenaires, et sont protégés par les lois applicables en matière de propriété intellectuelle.

Aucune disposition des présentes CGU ne vous confère de droit de propriété sur ces éléments. Toute reproduction, modification, distribution ou exploitation non autorisée est strictement interdite.`,
  },
  {
    title: "8. Données personnelles et confidentialité",
    content: `${COMPANY} collecte et traite vos données personnelles conformément à sa Politique de Confidentialité, disponible sur le Site. En utilisant le Service, vous consentez à ce traitement.

Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou destruction. Vos données ne sont jamais vendues à des tiers.`,
  },
  {
    title: "9. Disponibilité du Service",
    content: `${COMPANY} s'efforce d'assurer la disponibilité du Service 24h/24 et 7j/7, mais ne peut garantir une accessibilité ininterrompue. Des interruptions temporaires peuvent survenir pour maintenance, mises à jour ou raisons techniques.

${COMPANY} ne saurait être tenu responsable des interruptions de service dues à des événements hors de son contrôle (force majeure, panne de l'infrastructure tierce, etc.).`,
  },
  {
    title: "10. Limitation de responsabilité",
    content: `Dans les limites autorisées par la loi applicable, ${COMPANY} ne saurait être tenu responsable des dommages indirects, accessoires, spéciaux ou consécutifs — incluant la perte de profits, de données ou d'opportunités commerciales — résultant de l'utilisation ou de l'impossibilité d'utiliser le Service.

La responsabilité totale de ${COMPANY} envers vous, quelle qu'en soit la cause, ne pourra excéder le montant des sommes effectivement versées au cours des 3 derniers mois précédant l'événement à l'origine du dommage.`,
  },
  {
    title: "11. Résiliation",
    content: `Vous pouvez résilier votre compte à tout moment depuis votre espace client ou en contactant notre équipe.

${COMPANY} se réserve le droit de suspendre ou de résilier votre accès au Service, avec ou sans préavis, en cas de violation des présentes CGU, de non-paiement ou de comportement préjudiciable au Service ou à d'autres utilisateurs. En cas de résiliation par ${COMPANY} sans faute de votre part, les sommes prépayées non consommées vous seront remboursées au prorata.`,
  },
  {
    title: "12. Modifications des CGU",
    content: `${COMPANY} se réserve le droit de modifier ces CGU à tout moment. En cas de modification substantielle, nous vous en informerons par e-mail ou via une notification dans l'application au moins 15 jours avant l'entrée en vigueur des nouvelles conditions.

Votre utilisation continue du Service après la date d'entrée en vigueur constitue votre acceptation des CGU modifiées.`,
  },
  {
    title: "13. Droit applicable et juridiction",
    content: `Les présentes CGU sont régies par le droit applicable dans le territoire où ${COMPANY} est enregistré. En cas de litige relatif à l'interprétation ou à l'exécution des présentes, les parties s'efforceront de trouver une solution amiable. À défaut, le litige sera soumis aux tribunaux compétents.`,
  },
  {
    title: "14. Contact",
    content: `Pour toute question relative aux présentes CGU, vous pouvez nous contacter :

• Par e-mail : ${EMAIL}
• Via notre site web : ${WEBSITE}
• Via WhatsApp : +44 774 934 3372`,
  },
];

const TermsOfService = () => (
  <div className="min-h-screen bg-white">
    {/* Header */}
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={mojibLogo} alt="Mojib" className="h-7 w-auto" />
        </a>
        <a href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">
          <ArrowLeft size={15} />
          Retour à l'accueil
        </a>
      </div>
    </header>

    {/* Hero */}
    <div className="surface-section border-b border-slate-100 py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#EBF5FF" }}>
              <FileText size={20} style={{ color: "#2589D0" }} />
            </div>
            <span className="section-label">Légal</span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Conditions Générales d'Utilisation</h1>
          <p className="text-slate-500 text-base">
            Dernière mise à jour : <span className="font-semibold text-slate-700">{LAST_UPDATED}</span>
          </p>
          <p className="text-slate-500 text-sm mt-2 max-w-2xl leading-relaxed">
            Veuillez lire attentivement ces conditions avant d'utiliser la plateforme Mojib. Elles définissent vos droits et obligations en tant qu'utilisateur.
          </p>
        </motion.div>
      </div>
    </div>

    {/* Content */}
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

        {/* Sticky table of contents */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-1">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Sommaire</p>
            {sections.map((s) => (
              <a
                key={s.title}
                href={`#section-${s.title.slice(0, 2).trim()}`}
                className="block text-xs text-slate-500 hover:text-blue-600 py-1 leading-snug transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </aside>

        {/* Sections */}
        <main className="lg:col-span-3 space-y-10">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              id={`section-${s.title.slice(0, 2).trim()}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="scroll-mt-28"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                {s.title}
              </h2>
              <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {s.content}
              </div>
            </motion.div>
          ))}

          {/* Footer note */}
          <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-sm text-slate-500 leading-relaxed">
              En utilisant Mojib, vous confirmez avoir lu, compris et accepté l'intégralité des présentes Conditions Générales d'Utilisation. Pour toute question, contactez-nous à{" "}
              <a href={`mailto:${EMAIL}`} className="text-blue-600 font-semibold hover:underline">{EMAIL}</a>.
            </p>
          </div>
        </main>
      </div>
    </div>

    {/* Mini footer */}
    <footer className="border-t border-slate-100 py-8 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src={mojibLogo} alt="Mojib" className="h-6 w-auto opacity-50" />
        <p className="text-xs text-slate-400">© {new Date().getFullYear()} Mojib. Tous droits réservés.</p>
        <a href="/" className="text-xs text-slate-400 hover:text-blue-500 transition-colors">Retour à l'accueil →</a>
      </div>
    </footer>
  </div>
);

export default TermsOfService;
