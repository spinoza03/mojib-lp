import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  CalendarCheck,
  Clock,
  Phone,
  FileText,
  ChevronRight,
  Bell,
  CheckCircle2,
  UserPlus,
  Activity,
} from "lucide-react";

/* ── Fake data for the mockups ──────────────────────────────────── */
const patients = [
  { name: "Fatima Zahra B.", age: 34, lastVisit: "28 Mars", status: "Confirmé", statusColor: "#22c55e" },
  { name: "Youssef El M.", age: 41, lastVisit: "25 Mars", status: "En attente", statusColor: "#f59e0b" },
  { name: "Amina K.", age: 27, lastVisit: "22 Mars", status: "Confirmé", statusColor: "#22c55e" },
  { name: "Hassan R.", age: 55, lastVisit: "20 Mars", status: "Annulé", statusColor: "#ef4444" },
  { name: "Salma T.", age: 29, lastVisit: "18 Mars", status: "Confirmé", statusColor: "#22c55e" },
];

const appointments = [
  { time: "09:00", patient: "Fatima Zahra B.", type: "Consultation", duration: "30 min", color: "#2589D0" },
  { time: "09:30", patient: "Mohamed A.", type: "Contrôle", duration: "15 min", color: "#7C3AED" },
  { time: "10:00", patient: "Youssef El M.", type: "Traitement", duration: "45 min", color: "#059669" },
  { time: "11:00", patient: "Amina K.", type: "Consultation", duration: "30 min", color: "#2589D0" },
  { time: "11:30", patient: "Libre", type: "", duration: "30 min", color: "#94a3b8" },
  { time: "14:00", patient: "Hassan R.", type: "Suivi", duration: "20 min", color: "#DD6B20" },
];

const weekDays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const todayAppointments = [3, 5, 2, 7, 4, 1];

/* ── 3D Patient Management Card ─────────────────────────────────── */
const PatientManagementMockup = () => (
  <div className="relative w-full">
    {/* Main dashboard card */}
    <motion.div
      initial={{ opacity: 0, rotateY: -8, rotateX: 4 }}
      whileInView={{ opacity: 1, rotateY: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "#fff",
          boxShadow: "0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
          transform: "perspective(1200px) rotateY(-3deg) rotateX(2deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="text-[11px] text-slate-400 font-medium">Mojib — Gestion Patients</span>
          <div className="flex items-center gap-2">
            <Bell size={13} className="text-slate-400" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="text-[9px] text-white font-bold">Dr</span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50/50">
          {[
            { label: "Total Patients", value: "1,247", icon: Users, change: "+12%", color: "#2589D0" },
            { label: "Aujourd'hui", value: "18", icon: Activity, change: "+3", color: "#059669" },
            { label: "Nouveaux", value: "5", icon: UserPlus, change: "ce mois", color: "#7C3AED" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-3 border border-slate-100"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <stat.icon size={12} style={{ color: stat.color }} />
                <span className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
              <p className="text-lg font-bold text-slate-900">{stat.value}</p>
              <p className="text-[10px] font-semibold" style={{ color: stat.color }}>{stat.change}</p>
            </motion.div>
          ))}
        </div>

        {/* Patient list */}
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-slate-700">Patients Récents</h4>
            <span className="text-[10px] text-blue-500 font-semibold cursor-pointer flex items-center gap-0.5">
              Voir tout <ChevronRight size={10} />
            </span>
          </div>
          <div className="space-y-2">
            {patients.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/50 transition-colors"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${p.statusColor}, ${p.statusColor}cc)` }}
                >
                  {p.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-slate-800 truncate">{p.name}</p>
                  <p className="text-[9px] text-slate-400">{p.age} ans · Dernière visite: {p.lastVisit}</p>
                </div>
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${p.statusColor}18`, color: p.statusColor }}
                >
                  {p.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>

    {/* Floating notification */}
    <motion.div
      initial={{ opacity: 0, x: 24, y: -8 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1, duration: 0.5 }}
      className="absolute -right-3 top-16 sm:-right-6"
      style={{
        background: "white",
        borderRadius: "14px",
        padding: "10px 14px",
        boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
        border: "1px solid #f1f5f9",
        maxWidth: "180px",
      }}
    >
      <div className="flex items-center gap-2 mb-1">
        <CheckCircle2 size={14} className="text-green-500" />
        <span className="text-[10px] font-bold text-slate-800">Nouveau Patient</span>
      </div>
      <p className="text-[9px] text-slate-500">Salma T. ajoutée automatiquement via WhatsApp</p>
    </motion.div>

    {/* Floating action */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.2, duration: 0.4 }}
      className="absolute -left-2 bottom-8 sm:-left-4"
      style={{
        background: "linear-gradient(135deg, #2589D0, #1565C0)",
        borderRadius: "14px",
        padding: "10px 14px",
        boxShadow: "0 12px 40px rgba(37,137,208,0.3)",
        maxWidth: "160px",
      }}
    >
      <p className="text-[10px] font-bold text-white/80">TAUX RÉTENTION</p>
      <p className="text-xl font-extrabold text-white leading-tight">94.2%</p>
      <p className="text-[9px] text-white/70">↑ +8.3% ce mois</p>
    </motion.div>
  </div>
);

/* ── 3D Calendar / Appointments Mockup ──────────────────────────── */
const CalendarMockup = () => (
  <div className="relative w-full">
    <motion.div
      initial={{ opacity: 0, rotateY: 8, rotateX: 4 }}
      whileInView={{ opacity: 1, rotateY: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "#fff",
          boxShadow: "0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
          transform: "perspective(1200px) rotateY(3deg) rotateX(2deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="text-[11px] text-slate-400 font-medium">Mojib — Calendrier & RDV</span>
          <div className="flex items-center gap-2">
            <Bell size={13} className="text-slate-400" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <span className="text-[9px] text-white font-bold">Dr</span>
            </div>
          </div>
        </div>

        {/* Mini week view */}
        <div className="p-4 bg-slate-50/50">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-slate-700">Semaine du 24 Mars</h4>
            <span className="text-[10px] text-purple-500 font-semibold">Vue Semaine</span>
          </div>
          <div className="grid grid-cols-6 gap-2">
            {weekDays.map((day, i) => (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className={`text-center p-2 rounded-xl ${i === 3 ? "bg-blue-500 text-white" : "bg-white"} border border-slate-100`}
              >
                <p className={`text-[9px] font-semibold ${i === 3 ? "text-blue-100" : "text-slate-400"}`}>{day}</p>
                <p className={`text-sm font-bold ${i === 3 ? "text-white" : "text-slate-800"}`}>{24 + i}</p>
                <div className="flex justify-center gap-0.5 mt-1">
                  {Array.from({ length: Math.min(todayAppointments[i], 4) }).map((_, j) => (
                    <div
                      key={j}
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: i === 3 ? "rgba(255,255,255,0.6)" : "#2589D0" }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Today's appointments */}
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-slate-700">Jeudi 27 Mars — 7 RDV</h4>
            <span className="text-[10px] text-blue-500 font-semibold cursor-pointer flex items-center gap-0.5">
              + Ajouter <ChevronRight size={10} />
            </span>
          </div>
          <div className="space-y-2">
            {appointments.map((apt, i) => (
              <motion.div
                key={apt.time}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/50 transition-colors"
              >
                <div
                  className="w-1 h-10 rounded-full flex-shrink-0"
                  style={{ backgroundColor: apt.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-[11px] font-bold text-slate-800">{apt.time}</p>
                    {apt.type && (
                      <span
                        className="text-[8px] font-bold px-1.5 py-0.5 rounded"
                        style={{ backgroundColor: `${apt.color}15`, color: apt.color }}
                      >
                        {apt.type}
                      </span>
                    )}
                  </div>
                  <p className={`text-[10px] ${apt.patient === "Libre" ? "text-slate-400 italic" : "text-slate-600"}`}>
                    {apt.patient} {apt.duration && `· ${apt.duration}`}
                  </p>
                </div>
                {apt.patient !== "Libre" && (
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <Phone size={10} className="text-slate-300" />
                    <FileText size={10} className="text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>

    {/* Floating: next appointment */}
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1, duration: 0.5 }}
      className="absolute -left-2 top-12 sm:-left-6"
      style={{
        background: "white",
        borderRadius: "14px",
        padding: "10px 14px",
        boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
        border: "1px solid #f1f5f9",
        maxWidth: "170px",
      }}
    >
      <div className="flex items-center gap-2 mb-1">
        <Clock size={12} className="text-amber-500" />
        <span className="text-[10px] font-bold text-slate-800">Prochain RDV</span>
      </div>
      <p className="text-[11px] font-semibold text-slate-700">Fatima Zahra B.</p>
      <p className="text-[9px] text-slate-400">Dans 15 min · Consultation</p>
    </motion.div>

    {/* Floating: auto-booking stat */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.3, duration: 0.4 }}
      className="absolute -right-2 bottom-12 sm:-right-5"
      style={{
        background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
        borderRadius: "14px",
        padding: "10px 14px",
        boxShadow: "0 12px 40px rgba(124,58,237,0.3)",
        maxWidth: "160px",
      }}
    >
      <p className="text-[10px] font-bold text-white/80">RDV AUTO-BOOKÉS</p>
      <p className="text-xl font-extrabold text-white leading-tight">78%</p>
      <p className="text-[9px] text-white/70">Par l'IA WhatsApp</p>
    </motion.div>
  </div>
);

/* ── Tab Switcher ──────────────────────────────────────────────── */
const tabs = [
  { id: "patients", label: "Gestion Patients", icon: Users },
  { id: "calendar", label: "Calendrier & RDV", icon: CalendarCheck },
] as const;

type TabId = (typeof tabs)[number]["id"];

const ProductShowcase3D = () => {
  const [activeTab, setActiveTab] = useState<TabId>("patients");

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">APERÇU PRODUIT</p>
          <h2 className="section-title mb-4">
            Une interface pensée pour les{" "}
            <span className="blue-gradient-text">professionnels</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Gérez vos patients, rendez-vous et planning depuis un tableau de bord intuitif et puissant.
          </p>
        </motion.div>

        {/* Tab selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 p-1.5 bg-slate-100 rounded-2xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-slate-900 shadow-md"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "patients" ? (
              <motion.div
                key="patients"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.4 }}
              >
                <PatientManagementMockup />
              </motion.div>
            ) : (
              <motion.div
                key="calendar"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <CalendarMockup />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase3D;
