import { motion } from "framer-motion";

const stats = [
  { number: "200+", label: "Professionnels actifs", icon: "🏢" },
  { number: "97%", label: "Taux de réponse", icon: "⚡" },
  { number: "-80%", label: "Temps administratif", icon: "⏱️" },
  { number: "+35%", label: "Revenus mensuels", icon: "📈" },
];

const StatsBar = () => (
  <section className="border-y border-slate-100 bg-white py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <p className="text-2xl mb-1">{stat.icon}</p>
            <p className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#2589D0" }}>
              {stat.number}
            </p>
            <p className="text-sm text-slate-500 mt-1 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
