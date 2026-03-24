import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Clock, Users } from "lucide-react";
import { supabase } from "@/lib/supabase";

const niches = [
  "Clinique / Cabinet Médical",
  "Immobilier",
  "Centre d'Esthétique / Salon",
  "Centre de Formation / Auto-école",
  "Fitness / Salle de Sport",
  "Restaurant / Café",
  "Autre",
];

const trustPoints = [
  { icon: Shield, text: "Données 100% sécurisées" },
  { icon: Clock, text: "Réponse sous 2 heures" },
  { icon: Users, text: "+200 pros nous font confiance" },
];

const LeadFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    niche: "",
    city: "",
    whatsapp: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (formData.name.trim().length < 2)
      newErrors.name = "Veuillez entrer votre prénom et nom";
    if (formData.businessName.trim().length < 2)
      newErrors.businessName = "Veuillez entrer le nom de votre entreprise";
    if (!formData.niche) newErrors.niche = "Veuillez choisir votre secteur";
    if (formData.city.trim().length < 2) newErrors.city = "Veuillez entrer votre ville";
    if (formData.whatsapp.trim().length < 9)
      newErrors.whatsapp = "Veuillez entrer un numéro WhatsApp valide";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Save to Supabase
    await supabase.from("leads").insert({
      name: formData.name.trim(),
      clinic_name: formData.businessName.trim(),
      industry: formData.niche,
      city: formData.city.trim(),
      whatsapp: formData.whatsapp.trim(),
      status: "new",
    });

    // Meta Pixel Lead event
    window.fbq?.("track", "Lead", {
      content_name: "Mojib Free Trial",
      content_category: formData.niche,
    });

    const message =
      `Bonjour, je souhaite démarrer avec Mojib !\n\n` +
      `👤 Nom : ${formData.name}\n` +
      `🏢 Business : ${formData.businessName}\n` +
      `📍 Secteur : ${formData.niche}\n` +
      `🌆 Ville : ${formData.city}\n` +
      `📱 WhatsApp : ${formData.whatsapp}`;

    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      window.open(
        `https://wa.me/447749343372?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }, 400);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section id="lead-form" className="py-24 surface-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">DÉMARRER MAINTENANT</p>
          <h2 className="section-title mb-4">
            Votre essai gratuit{" "}
            <span className="blue-gradient-text">7 jours</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Remplissez le formulaire et notre équipe vous configure Mojib sous 2h.
            Sans carte bancaire, sans engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: Trust sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* What you get */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 text-xs uppercase tracking-widest text-[#2589D0]">
                Ce que vous obtenez
              </h3>
              <ul className="space-y-3">
                {[
                  "Agent IA WhatsApp opérationnel en 30 min",
                  "Configuration personnalisée à votre secteur",
                  "Formation incluse (30 min)",
                  "Support WhatsApp dédié 7j/7",
                  "Accès complet pendant 7 jours",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="font-bold mt-0.5 flex-shrink-0" style={{ color: "#2589D0" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust points */}
            <div className="space-y-3">
              {trustPoints.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-slate-500">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center shadow-sm flex-shrink-0">
                    <Icon size={14} style={{ color: "#2589D0" }} />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Mini testimonial */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <p className="text-sm text-slate-600 italic leading-relaxed mb-3">
                "En 3 jours j'avais déjà 8 nouveaux rendez-vous confirmés automatiquement. Mojib, c'est incroyable."
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: "#2589D0" }}
                >
                  K
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">Dr. Karima B.</p>
                  <p className="text-xs text-slate-400">Clinique dentaire · Casablanca</p>
                </div>
                <span className="ml-auto text-amber-400 text-xs flex-shrink-0">★★★★★</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Form or success */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-3 bg-white rounded-3xl p-12 text-center shadow-sm border border-slate-100"
            >
              <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#2589D0" }} />
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">C'est parti !</h3>
              <p className="text-slate-500 leading-relaxed">
                Ouverture de WhatsApp en cours…<br />
                Notre équipe vous répondra dans les <strong>2 heures</strong>.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-3 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100"
            >
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name + Business — row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Votre nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Ex: Mohamed Benali"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Nom de votre entreprise <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Ex: Cabinet Dentaire Al Amal"
                      value={formData.businessName}
                      onChange={(e) => handleChange("businessName", e.target.value)}
                    />
                    {errors.businessName && (
                      <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>
                    )}
                  </div>
                </div>

                {/* Niche + City — row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Votre secteur <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="form-input"
                      value={formData.niche}
                      onChange={(e) => handleChange("niche", e.target.value)}
                    >
                      <option value="">Choisissez votre secteur</option>
                      {niches.map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                    {errors.niche && (
                      <p className="text-red-500 text-xs mt-1">{errors.niche}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Ville <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Ex: Casablanca"
                      value={formData.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                    )}
                  </div>
                </div>

                {/* WhatsApp — row 3, full width */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Votre WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+212 6XX XXX XXX"
                    value={formData.whatsapp}
                    onChange={(e) => handleChange("whatsapp", e.target.value)}
                  />
                  {errors.whatsapp && (
                    <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-urgent w-full py-4 text-base"
                  disabled={submitting}
                >
                  {submitting ? "Envoi en cours…" : "Démarrer mon Essai Gratuit"}
                  {!submitting && <ArrowRight size={18} />}
                </button>

                <p className="text-center text-xs text-slate-400">
                  🔒 Données sécurisées · Sans engagement · Sans carte bancaire
                </p>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
