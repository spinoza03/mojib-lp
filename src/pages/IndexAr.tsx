import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Check, Star, MessageCircle, Database, CalendarCheck,
  TrendingUp, Package, Home, Stethoscope, Scissors, Utensils,
  MessageSquare, Zap, X, CheckCircle, Shield, Clock, Users,
  Bell, ChevronLeft, UserPlus, Activity, CheckCircle2,
  Phone, FileText, MessageCircleOff, TrendingDown, Calculator,
  AlertTriangle, Menu, ExternalLink, DollarSign, CalendarX,
} from "lucide-react";
import mojibLogo from "@/assets/mojib-logo.png";

declare global { interface Window { fbq?: (...args: unknown[]) => void; } }

/* ─── WhatsApp SVG ─────────────────────────────────────────────── */
const WA_ICON = (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════════════
   NAV BAR
═══════════════════════════════════════════════════════════════════ */
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          <img src={mojibLogo} alt="مجيب" className="h-8 w-auto flex-shrink-0" />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {[
              { label: "المميزات", href: "#pillars" },
              { label: "القطاعات", href: "#industries" },
              { label: "آلية العمل", href: "#how-it-works" },
              { label: "الأسعار", href: "#pricing" },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="nav-link text-sm">
                {label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://app.mojib.online" className="btn-outline text-sm py-2 px-4">
              تسجيل الدخول
            </a>
            <a href="#lead-form" className="btn-primary text-sm py-2 px-4">
              ابدأ مجاناً
            </a>
          </div>

          {/* Mobile */}
          <button className="md:hidden p-2 rounded-lg" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 px-4 pb-4 space-y-3 pt-3"
          >
            {["المميزات", "القطاعات", "آلية العمل", "الأسعار"].map((l, i) => (
              <a
                key={l}
                href={`#${["pillars","industries","how-it-works","pricing"][i]}`}
                onClick={() => setMenuOpen(false)}
                className="block text-sm text-slate-700 font-medium py-2"
              >
                {l}
              </a>
            ))}
            <a href="#lead-form" className="btn-primary w-full text-center text-sm py-3" onClick={() => setMenuOpen(false)}>
              ابدأ مجاناً
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════════════ */
const PhoneMockup = () => (
  <div className="relative mx-auto w-fit select-none">
    <div
      className="w-[268px] sm:w-[290px]"
      style={{
        background: "linear-gradient(160deg, #1a1a2e 0%, #16213e 100%)",
        borderRadius: "44px",
        padding: "10px",
        boxShadow: "0 40px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.06)",
      }}
    >
      <div className="overflow-hidden flex flex-col" style={{ borderRadius: "36px", height: "540px", background: "#fff" }}>
        <div className="flex items-center justify-between px-5 pt-3 pb-1 bg-[#075E54]">
          <span className="text-[10px] text-white/70 font-semibold">9:41</span>
          <div className="flex items-center gap-1"><span className="text-[10px] text-white/70">●●●</span></div>
        </div>
        <div className="bg-[#075E54] px-4 pb-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm" style={{ background: "linear-gradient(135deg, #2589D0, #1565C0)" }}>م</div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-[13px] font-semibold leading-tight">مجيب ذكي — مساعدك الرقمي</p>
            <p className="text-emerald-300 text-[11px]">● متصل</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2 p-3 overflow-hidden" style={{ background: "#ECE5DD" }}>
          <div className="self-start max-w-[78%]">
            <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 shadow-sm">
              <p className="text-[#303030] text-[11px] leading-relaxed">هلا، أبي موعد 🙏</p>
              <p className="text-[#aaa] text-[9px] text-right mt-0.5">09:23</p>
            </div>
          </div>
          <div className="self-end max-w-[82%]">
            <div className="bg-[#D9FDD3] rounded-xl rounded-tr-sm px-3 py-2 shadow-sm">
              <p className="text-[#303030] text-[11px] leading-relaxed">هلا وغلا! أنا المساعدة الذكية 🤖 متى تبي تيجي؟</p>
              <p className="text-[#aaa] text-[9px] text-right mt-0.5">09:23 ✓✓</p>
            </div>
          </div>
          <div className="self-start max-w-[72%]">
            <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 shadow-sm">
              <p className="text-[#303030] text-[11px]">بكره الصبح لو سمحت</p>
              <p className="text-[#aaa] text-[9px] text-right mt-0.5">09:24</p>
            </div>
          </div>
          <div className="self-end max-w-[85%]">
            <div className="bg-[#D9FDD3] rounded-xl rounded-tr-sm px-3 py-2 shadow-sm">
              <p className="text-[#303030] text-[11px] leading-relaxed">✅ ممتاز! عندي دوام بكره الساعة 10. نأكد موعدك؟</p>
              <p className="text-[#aaa] text-[9px] text-right mt-0.5">09:24 ✓✓</p>
            </div>
          </div>
          <div className="self-start max-w-[60%]">
            <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 shadow-sm">
              <p className="text-[#303030] text-[11px]">إيه زين، شكراً!</p>
              <p className="text-[#aaa] text-[9px] text-right mt-0.5">09:24</p>
            </div>
          </div>
          <div className="self-end max-w-[88%]">
            <div className="bg-[#D9FDD3] rounded-xl rounded-tr-sm px-3 py-2.5 shadow-sm">
              <div className="flex items-center gap-1.5 mb-1.5 pb-1.5 border-b border-[#25D366]/20">
                <span className="text-base">📅</span>
                <span className="text-[#1a1a1a] text-[11px] font-bold">تم تأكيد الحجز!</span>
              </div>
              <p className="text-slate-600 text-[10px]">بكره · 10:00–11:00</p>
              <p className="text-slate-600 text-[10px]">عيادة النور · الرياض</p>
              <p className="text-[#25D366] text-[10px] font-semibold mt-1">⏰ تذكير تلقائي مبرمج</p>
              <p className="text-[#aaa] text-[9px] text-right mt-1">09:25 ✓✓</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.5 }}
      className="absolute -right-4 top-10"
      style={{ background: "white", borderRadius: "16px", padding: "12px 14px", boxShadow: "0 8px 32px rgba(0,0,0,0.10)", border: "1px solid #f1f5f9", minWidth: "120px" }}
    >
      <p style={{ fontSize: "9px", color: "#94a3b8", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>هذا الشهر</p>
      <p style={{ fontSize: "24px", fontWeight: 800, color: "#2589D0", lineHeight: 1.1, marginTop: "2px" }}>+147%</p>
      <p style={{ fontSize: "10px", color: "#22c55e", fontWeight: 600, marginTop: "2px" }}>↑ الحجوزات</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.5 }}
      className="absolute -left-6 bottom-24"
      style={{ background: "#2589D0", borderRadius: "16px", padding: "12px 14px", boxShadow: "0 8px 32px rgba(37,137,208,0.35)", minWidth: "120px" }}
    >
      <p style={{ fontSize: "9px", color: "rgba(255,255,255,0.7)", fontWeight: 700, letterSpacing: "0.08em" }}>رد الذكاء الاصطناعي</p>
      <p style={{ fontSize: "22px", fontWeight: 800, color: "white", lineHeight: 1.1, marginTop: "2px" }}>3 ثواني</p>
      <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.75)", marginTop: "2px" }}>⚡ 24/7 · طوال الأسبوع</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.4 }}
      className="absolute -top-3 left-1/2 -translate-x-1/2"
      style={{ background: "white", borderRadius: "999px", padding: "6px 14px", boxShadow: "0 4px 16px rgba(0,0,0,0.1)", border: "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}
    >
      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block", animation: "pulse 2s infinite" }} />
      <span style={{ fontSize: "11px", fontWeight: 700, color: "#0f172a" }}>الذكاء الاصطناعي نشط</span>
    </motion.div>
  </div>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    style={{ background: "linear-gradient(155deg, #FFFFFF 0%, #F0F7FF 55%, #FAFBFF 100%)" }}>
    <div className="absolute pointer-events-none" style={{ top: "5%", right: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(37,137,208,0.07) 0%, transparent 70%)" }} />
    <div className="absolute pointer-events-none" style={{ bottom: "-5%", left: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(37,137,208,0.05) 0%, transparent 70%)" }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Right: phone on mobile appears second; on desktop right col */}
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="badge-blue mb-6">
            <Star size={13} fill="currentColor" />
            <span>أكثر من 200 محترف يثقون في مجيب</span>
          </div>

          <h1 className="section-title mb-6">
            المنصة الشاملة لتدير أعمالك{" "}
            <span className="blue-gradient-text">على مدار الساعة</span>
          </h1>

          <p className="section-subtitle mb-8">
            CRM، إدارة المخزون، المحاسبة، الحجوزات وعميل واتساب الذكي — كل اللي تحتاجه لتنمّي أعمالك في الخليج.
          </p>

          <ul className="space-y-3 mb-10">
            {[
              "أدوات إدارة متكاملة: CRM، مخزون، محاسبة وتقارير",
              "عميل واتساب ذكي يرد ويحجز تلقائياً 24/7",
              "مصمم للقطاع الطبي، العقاري والمطاعم في الخليج",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: "rgba(37,137,208,0.12)" }}>
                  <Check size={11} style={{ color: "#2589D0" }} />
                </div>
                <span className="text-sm text-slate-600 leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <a href="#lead-form" className="btn-urgent text-base py-3.5 px-7">
              جرّب مجاناً 7 أيام
              <ArrowLeft size={18} />
            </a>
            <a href="#how-it-works" className="btn-outline text-base py-3.5 px-7">
              شوف كيف تشتغل
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-400 flex items-center gap-2 flex-wrap">
            <span className="text-amber-400 tracking-tight">★★★★★</span>
            <span>4.9/5 — قيّمه أكثر من 200 محترف خليجي</span>
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="flex justify-center lg:justify-end lg:pr-4">
          <PhoneMockup />
        </motion.div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════════
   STATS BAR
═══════════════════════════════════════════════════════════════════ */
const StatsBar = () => (
  <section className="border-y border-slate-100 bg-white py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {[
          { number: "200+", label: "محترف نشط", icon: "🏢" },
          { number: "97%", label: "نسبة الاستجابة", icon: "⚡" },
          { number: "-80%", label: "وقت الإدارة", icon: "⏱️" },
          { number: "+35%", label: "الإيرادات الشهرية", icon: "📈" },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
            <p className="text-2xl mb-1">{s.icon}</p>
            <p className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#2589D0" }}>{s.number}</p>
            <p className="text-sm text-slate-500 mt-1 font-medium">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════════
   PILLARS
═══════════════════════════════════════════════════════════════════ */
const pillars = [
  { icon: Database, color: "#2589D0", bg: "#EBF5FF", title: "CRM وإدارة العملاء", description: "وحّد كل ملفات عملاءك ومرضاك. ما يضيع شي، كل شي بمتناول إيدك.", features: ["ملفات عملاء ومرضى متكاملة", "سجل كامل للتواصل", "واجهة مزدوجة للمشترين والبائعين"] },
  { icon: Package, color: "#059669", bg: "#ECFDF5", title: "إدارة المخزون", description: "تابع مخزونك لحظة بلحظة — مستلزمات طبية أو مكونات مطعم. تنبيهات تلقائية.", features: ["تتبع المخزون في الوقت الفعلي", "تنبيهات تلقائية للمخزون المنخفض", "سجل تاريخي للحركات"] },
  { icon: TrendingUp, color: "#DD6B20", bg: "#FFF7ED", title: "المحاسبة والتقارير", description: "تابع هوامش ربحك وعمولاتك ومصاريفك في لوحة تحكم واضحة.", features: ["هامش صافي لكل خدمة", "عمولات تلقائية للمبيعات", "تتبع الإيجارات والمصاريف"] },
  { icon: CalendarCheck, color: "#7C3AED", bg: "#F5F3FF", title: "الحجز التلقائي", description: "الذكاء الاصطناعي يراجع جدولك ويؤكد الحجوزات — بدون تدخل بشري.", features: ["فحص المتاحية لحظياً", "تذكيرات تلقائية لمنع الغياب", "مزامنة فورية مع لوحة التحكم"] },
  { icon: MessageCircle, color: "#25D366", bg: "#F0FFF4", title: "عميل واتساب الذكي", description: "مساعدك الرقمي يرد على كل رسالة فوراً بالعربي أو الإنجليزي — حتى الساعة 3 الفجر.", features: ["رد في أقل من 3 ثواني", "عربي · إنجليزي · لهجة خليجية", "فلتر ذكي لمنع السبام"] },
];

const PillarsSection = () => (
  <section id="pillars" className="py-24 surface-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="section-label mb-3">الركائز الخمس</p>
        <h2 className="section-title mb-4">أدوات إدارة متكاملة، مو بس شات بوت</h2>
        <p className="section-subtitle mx-auto text-center">CRM، مخزون، محاسبة، حجوزات وذكاء اصطناعي — 5 وحدات تشتغل مع بعض 24/7.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {pillars.map((p, i) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="feature-card">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: p.bg }}>
              <p.icon size={22} style={{ color: p.color }} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">{p.description}</p>
            <ul className="space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
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

/* ═══════════════════════════════════════════════════════════════════
   PRODUCT SHOWCASE 3D
═══════════════════════════════════════════════════════════════════ */
const arPatients = [
  { name: "فاطمة الصالح", age: 34, lastVisit: "28 مارس", status: "مؤكد", sc: "#22c55e" },
  { name: "محمد القحطاني", age: 41, lastVisit: "25 مارس", status: "بانتظار", sc: "#f59e0b" },
  { name: "نورة الرشيدي", age: 27, lastVisit: "22 مارس", status: "مؤكد", sc: "#22c55e" },
  { name: "عبدالله الكعبي", age: 55, lastVisit: "20 مارس", status: "ملغي", sc: "#ef4444" },
  { name: "سارة الغامدي", age: 29, lastVisit: "18 مارس", status: "مؤكد", sc: "#22c55e" },
];
const arApts = [
  { time: "09:00", patient: "فاطمة الصالح", type: "استشارة", duration: "30 د", color: "#2589D0" },
  { time: "09:30", patient: "محمد الدوسري", type: "فحص", duration: "15 د", color: "#7C3AED" },
  { time: "10:00", patient: "محمد القحطاني", type: "علاج", duration: "45 د", color: "#059669" },
  { time: "11:00", patient: "نورة الرشيدي", type: "استشارة", duration: "30 د", color: "#2589D0" },
  { time: "11:30", patient: "متاح", type: "", duration: "30 د", color: "#94a3b8" },
  { time: "14:00", patient: "عبدالله الكعبي", type: "متابعة", duration: "20 د", color: "#DD6B20" },
];
const arWeekDays = ["أحد", "اثن", "ثلا", "أرب", "خمس", "جمع"];

const PatientMockup = () => (
  <div className="relative w-full">
    <motion.div initial={{ opacity: 0, rotateY: -8, rotateX: 4 }} whileInView={{ opacity: 1, rotateY: 0, rotateX: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      <div className="rounded-2xl overflow-hidden" style={{ background: "#fff", boxShadow: "0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)", transform: "perspective(1200px) rotateY(-3deg) rotateX(2deg)" }}>
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100">
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-400"/><div className="w-3 h-3 rounded-full bg-amber-400"/><div className="w-3 h-3 rounded-full bg-green-400"/></div>
          <span className="text-[11px] text-slate-400 font-medium">مجيب — إدارة المرضى</span>
          <div className="flex items-center gap-2"><Bell size={13} className="text-slate-400"/><div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center"><span className="text-[9px] text-white font-bold">د</span></div></div>
        </div>
        <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50/50">
          {[
            { label: "إجمالي المرضى", value: "1,247", Icon: Users, change: "+12%", color: "#2589D0" },
            { label: "اليوم", value: "18", Icon: Activity, change: "+3", color: "#059669" },
            { label: "جدد", value: "5", Icon: UserPlus, change: "هذا الشهر", color: "#7C3AED" },
          ].map(({ label, value, Icon, change, color }) => (
            <motion.div key={label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white rounded-xl p-3 border border-slate-100">
              <div className="flex items-center gap-1.5 mb-1"><Icon size={12} style={{ color }}/><span className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">{label}</span></div>
              <p className="text-lg font-bold text-slate-900">{value}</p>
              <p className="text-[10px] font-semibold" style={{ color }}>{change}</p>
            </motion.div>
          ))}
        </div>
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-slate-700">المرضى الأخيرة</h4>
            <span className="text-[10px] text-blue-500 font-semibold cursor-pointer flex items-center gap-0.5">عرض الكل <ChevronLeft size={10}/></span>
          </div>
          <div className="space-y-2">
            {arPatients.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.08 }} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/50 transition-colors">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0" style={{ background: `linear-gradient(135deg, ${p.sc}, ${p.sc}cc)` }}>
                  {p.name.slice(0, 1)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-slate-800 truncate">{p.name}</p>
                  <p className="text-[9px] text-slate-400">{p.age} سنة · آخر زيارة: {p.lastVisit}</p>
                </div>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${p.sc}18`, color: p.sc }}>{p.status}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, x: 24, y: -8 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 }} className="absolute -right-3 top-16 sm:-right-6" style={{ background: "white", borderRadius: "14px", padding: "10px 14px", boxShadow: "0 12px 40px rgba(0,0,0,0.12)", border: "1px solid #f1f5f9", maxWidth: "180px" }}>
      <div className="flex items-center gap-2 mb-1"><CheckCircle2 size={14} className="text-green-500"/><span className="text-[10px] font-bold text-slate-800">مريض جديد</span></div>
      <p className="text-[9px] text-slate-500">تمت إضافة سارة تلقائياً عبر واتساب</p>
    </motion.div>
    <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }} className="absolute -left-2 bottom-8 sm:-left-4" style={{ background: "linear-gradient(135deg, #2589D0, #1565C0)", borderRadius: "14px", padding: "10px 14px", boxShadow: "0 12px 40px rgba(37,137,208,0.3)", maxWidth: "160px" }}>
      <p className="text-[10px] font-bold text-white/80">معدل الاحتفاظ</p>
      <p className="text-xl font-extrabold text-white leading-tight">94.2%</p>
      <p className="text-[9px] text-white/70">↑ +8.3% هذا الشهر</p>
    </motion.div>
  </div>
);

const CalendarMockup = () => (
  <div className="relative w-full">
    <motion.div initial={{ opacity: 0, rotateY: 8, rotateX: 4 }} whileInView={{ opacity: 1, rotateY: 0, rotateX: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      <div className="rounded-2xl overflow-hidden" style={{ background: "#fff", boxShadow: "0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)", transform: "perspective(1200px) rotateY(3deg) rotateX(2deg)" }}>
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100">
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-400"/><div className="w-3 h-3 rounded-full bg-amber-400"/><div className="w-3 h-3 rounded-full bg-green-400"/></div>
          <span className="text-[11px] text-slate-400 font-medium">مجيب — التقويم والمواعيد</span>
          <div className="flex items-center gap-2"><Bell size={13} className="text-slate-400"/><div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center"><span className="text-[9px] text-white font-bold">د</span></div></div>
        </div>
        <div className="p-4 bg-slate-50/50">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-slate-700">أسبوع 24 مارس</h4>
            <span className="text-[10px] text-purple-500 font-semibold">عرض الأسبوع</span>
          </div>
          <div className="grid grid-cols-6 gap-2">
            {arWeekDays.map((day, i) => (
              <motion.div key={day} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.05 }} className={`text-center p-2 rounded-xl ${i === 3 ? "bg-blue-500 text-white" : "bg-white"} border border-slate-100`}>
                <p className={`text-[9px] font-semibold ${i === 3 ? "text-blue-100" : "text-slate-400"}`}>{day}</p>
                <p className={`text-sm font-bold ${i === 3 ? "text-white" : "text-slate-800"}`}>{24 + i}</p>
                <div className="flex justify-center gap-0.5 mt-1">
                  {Array.from({ length: Math.min([3,5,2,7,4,1][i], 4) }).map((_,j) => (
                    <div key={j} className="w-1 h-1 rounded-full" style={{ backgroundColor: i === 3 ? "rgba(255,255,255,0.6)" : "#2589D0" }}/>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-slate-700">الأربعاء 27 مارس — 7 مواعيد</h4>
            <span className="text-[10px] text-blue-500 font-semibold cursor-pointer flex items-center gap-0.5">+ إضافة <ChevronLeft size={10}/></span>
          </div>
          <div className="space-y-2">
            {arApts.map((apt, i) => (
              <motion.div key={apt.time} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.08 }} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/50 transition-colors">
                <div className="w-1 h-10 rounded-full flex-shrink-0" style={{ backgroundColor: apt.color }}/>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-[11px] font-bold text-slate-800">{apt.time}</p>
                    {apt.type && <span className="text-[8px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: `${apt.color}15`, color: apt.color }}>{apt.type}</span>}
                  </div>
                  <p className={`text-[10px] ${apt.patient === "متاح" ? "text-slate-400 italic" : "text-slate-600"}`}>{apt.patient} {apt.duration && `· ${apt.duration}`}</p>
                </div>
                {apt.patient !== "متاح" && <div className="flex items-center gap-1.5 flex-shrink-0"><Phone size={10} className="text-slate-300"/><FileText size={10} className="text-slate-300"/></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1 }} className="absolute -left-2 top-12 sm:-left-6" style={{ background: "white", borderRadius: "14px", padding: "10px 14px", boxShadow: "0 12px 40px rgba(0,0,0,0.12)", border: "1px solid #f1f5f9", maxWidth: "170px" }}>
      <div className="flex items-center gap-2 mb-1"><Clock size={12} className="text-amber-500"/><span className="text-[10px] font-bold text-slate-800">الموعد القادم</span></div>
      <p className="text-[11px] font-semibold text-slate-700">فاطمة الصالح</p>
      <p className="text-[9px] text-slate-400">بعد 15 دقيقة · استشارة</p>
    </motion.div>
    <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.3 }} className="absolute -right-2 bottom-12 sm:-right-5" style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)", borderRadius: "14px", padding: "10px 14px", boxShadow: "0 12px 40px rgba(124,58,237,0.3)", maxWidth: "160px" }}>
      <p className="text-[10px] font-bold text-white/80">مواعيد تلقائية</p>
      <p className="text-xl font-extrabold text-white leading-tight">78%</p>
      <p className="text-[9px] text-white/70">عبر واتساب الذكي</p>
    </motion.div>
  </div>
);

type ShowTab = "patients" | "calendar";
const ProductShowcase3D = () => {
  const [tab, setTab] = useState<ShowTab>("patients");
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="section-label mb-3">نظرة على المنصة</p>
          <h2 className="section-title mb-4">واجهة مصممة <span className="blue-gradient-text">للمحترفين</span></h2>
          <p className="section-subtitle mx-auto text-center">أدر مرضاءك ومواعيدك وجدولك من لوحة تحكم واحدة سهلة وقوية.</p>
        </motion.div>
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 p-1.5 bg-slate-100 rounded-2xl">
            {([["patients","إدارة المرضى",Users],["calendar","التقويم والمواعيد",CalendarCheck]] as const).map(([id, label, Icon]) => (
              <button key={id} onClick={() => setTab(id)} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${tab === id ? "bg-white text-slate-900 shadow-md" : "text-slate-500 hover:text-slate-700"}`}>
                <Icon size={16}/>{label}
              </button>
            ))}
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {tab === "patients" ? (
              <motion.div key="p" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} transition={{ duration: 0.4 }}><PatientMockup /></motion.div>
            ) : (
              <motion.div key="c" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}><CalendarMockup /></motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   LOSS CALCULATOR
═══════════════════════════════════════════════════════════════════ */
const LossCalculator = () => {
  const [missed, setMissed] = useState(10);
  const [avgVal, setAvgVal] = useState(500);
  const [conv, setConv] = useState(30);

  const daily = Math.round(missed * (conv / 100) * avgVal);
  const monthly = daily * 30;
  const yearly = daily * 365;
  const lostCust = Math.round(missed * (conv / 100) * 30);

  const fmt = (n: number) => {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}م`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(n >= 10_000 ? 0 : 1)}ك`;
    return n.toLocaleString("ar-SA");
  };

  return (
    <section id="loss-calculator" className="py-24 surface-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="section-label mb-3">حاسبة الخسائر</p>
          <h2 className="section-title mb-4">قديش يكلّفك الرسائل اللي <span style={{ color: "#E53E3E" }}>ما رديت عليها</span>؟</h2>
          <p className="section-subtitle mx-auto text-center">كل رسالة ما ترد عليها = عميل خسرته. احسب الخسارة الحقيقية على أعمالك.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          {/* Inputs */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center"><Calculator size={20} className="text-red-500"/></div>
              <div><h3 className="text-lg font-bold text-slate-900">وضعك الحالي</h3><p className="text-xs text-slate-500">عدّل القيم حسب أعمالك</p></div>
            </div>
            {[
              { label: "رسائل ما رُدّ عليها يومياً", val: missed, set: setMissed, min: 1, max: 50, step: 1, fmt: (v: number) => `${v}`, color: "#E53E3E", Icon: MessageCircleOff },
              { label: "متوسط قيمة العميل (ريال)", val: avgVal, set: setAvgVal, min: 100, max: 5000, step: 50, fmt: (v: number) => `${v.toLocaleString("ar-SA")} ر.س`, color: "#DD6B20", Icon: TrendingDown },
              { label: "نسبة التحويل المتوقعة", val: conv, set: setConv, min: 5, max: 80, step: 1, fmt: (v: number) => `${v}%`, color: "#7C3AED", Icon: AlertTriangle },
            ].map(({ label, val, set, min, max, step, fmt: f, color, Icon }, idx) => (
              <div key={idx} className="mb-7 last:mb-0">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2"><Icon size={14} style={{ color }}/>{label}</label>
                  <span className="text-lg font-bold" style={{ color }}>{f(val)}</span>
                </div>
                <input type="range" min={min} max={max} step={step} value={val} onChange={e => set(Number(e.target.value))} className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ background: `linear-gradient(to right, ${color} 0%, ${color} ${((val - min) / (max - min)) * 100}%, #e2e8f0 ${((val - min) / (max - min)) * 100}%, #e2e8f0 100%)` }}/>
                <div className="flex justify-between mt-1"><span className="text-[10px] text-slate-400">{min}</span><span className="text-[10px] text-slate-400">{max}</span></div>
              </div>
            ))}
          </motion.div>
          {/* Results */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-red-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">الخسارة اليومية</p><p className="text-3xl font-extrabold text-red-500">-{fmt(daily)} <span className="text-lg">ر.س</span></p></div>
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center"><TrendingDown size={28} className="text-red-400"/></div>
              </div>
            </div>
            <div className="rounded-2xl p-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)", boxShadow: "0 12px 40px rgba(220,38,38,0.25)" }}>
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">الخسارة الشهرية</p>
                  <p className="text-4xl font-extrabold text-white">-{fmt(monthly)} <span className="text-xl">ر.س</span></p>
                  <p className="text-sm text-white/70 mt-1">~{lostCust} عميل ضايع شهرياً</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center"><MessageCircleOff size={32} className="text-white/80"/></div>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-10 bg-white"/>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">الخسارة السنوية</p><p className="text-3xl font-extrabold text-slate-900">-{fmt(yearly)} <span className="text-lg">ر.س</span></p></div>
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center"><AlertTriangle size={28} className="text-slate-400"/></div>
              </div>
            </div>
            <div className="pt-2">
              <a href="#lead-form" className="btn-urgent w-full text-center py-4 text-base" style={{ display: "flex" }}>
                وقّف خسارة {fmt(monthly)} ر.س شهرياً
                <ArrowLeft size={18}/>
              </a>
              <p className="text-center text-[11px] text-slate-400 mt-3">مجيب يرد على 100% من رسائلك في أقل من 3 ثواني — 24/7</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   INDUSTRY
═══════════════════════════════════════════════════════════════════ */
const IndustrySection = () => (
  <section id="industries" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="section-label mb-3">حلول لكل قطاع</p>
        <h2 className="section-title mb-4">مصمم لمجالك</h2>
        <p className="section-subtitle mx-auto text-center">كل قطاع عنده خصوصيته. مجيب يتكيّف مع واقع عملك.</p>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {[
          { Icon: Stethoscope, title: "عيادات الأسنان", desc: "مرضى، مواعيد، مخزون طبي", color: "#2589D0", bg: "#EBF5FF", tag: "مميز" },
          { Icon: Stethoscope, title: "الأطباء والمختصون", desc: "عامون، جلديين، أطفال...", color: "#0D9488", bg: "#F0FDFA", tag: "مميز" },
          { Icon: Scissors, title: "مراكز التجميل", desc: "صالونات، سبا، مراكز العناية", color: "#DB2777", bg: "#FDF2F8", tag: "مميز" },
          { Icon: Home, title: "العقارات", desc: "وكالات، مطورين، إدارة عقارات", color: "#7C3AED", bg: "#F5F3FF", tag: "نشط" },
          { Icon: Utensils, title: "المطاعم والمقاهي", desc: "حجوزات، طلبات، مخزون", color: "#B45309", bg: "#FFFBEB", tag: "نشط" },
        ].map((ind, i) => (
          <motion.a key={ind.title} href="#lead-form" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="industry-card relative">
            {ind.tag && <span className="absolute -top-2.5 -right-2.5 text-[9px] font-bold px-2 py-0.5 rounded-full text-white leading-none" style={{ backgroundColor: ind.color }}>{ind.tag}</span>}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: ind.bg }}><ind.Icon size={22} style={{ color: ind.color }}/></div>
            <p className="text-sm font-semibold text-slate-800 text-center leading-tight">{ind.title}</p>
            <p className="text-[10px] text-slate-400 text-center leading-tight">{ind.desc}</p>
          </motion.a>
        ))}
      </div>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-sm text-slate-400 mt-10">
        قطاعك مو موجود؟{" "}<a href="#lead-form" className="text-[#2589D0] font-semibold hover:underline">تواصل معنا ←</a>
      </motion.p>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════════
   HOW IT WORKS
═══════════════════════════════════════════════════════════════════ */
const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 surface-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="section-label mb-3">كيف تشتغل</p>
        <h2 className="section-title mb-4">شغّال خلال 30 دقيقة</h2>
        <p className="section-subtitle mx-auto text-center">ما تحتاج خبرة تقنية. وصّل واتساب الخاص بك واترك مجيب يشتغل.</p>
      </motion.div>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div className="hidden md:block absolute top-[3.25rem] left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-gradient-to-r from-[#BFDBFE] via-[#7C3AED]/20 to-[#A7F3D0]"/>
        {[
          { Icon: MessageSquare, num: "01", title: "العميل يرسل رسالة", desc: "عميلك يكتب على واتساب الخاص بك — في أي وقت من الليل أو النهار.", color: "#2589D0", bg: "#EBF5FF" },
          { Icon: Zap, num: "02", title: "مجيب يرد في 3 ثواني", desc: "يفهم الطلب، يراجع مواعيدك المتاحة ويبدأ المحادثة — بالعربي أو الإنجليزي أو اللهجة الخليجية.", color: "#7C3AED", bg: "#F5F3FF" },
          { Icon: CalendarCheck, num: "03", title: "الموعد مؤكد ومسجل", desc: "يظهر الموعد في لوحة تحكمك، يُبرمج تذكير تلقائي وتصلك إشعار فوري.", color: "#059669", bg: "#ECFDF5" },
        ].map((s, i) => (
          <motion.div key={s.num} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative">
            <div className="absolute -top-3.5 -left-3.5 w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold text-white z-10 shadow-md" style={{ background: "#0F172A" }}>{s.num}</div>
            <div className="feature-card">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: s.bg }}><s.Icon size={26} style={{ color: s.color }}/></div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 text-center">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed text-center">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center mt-14">
        <a href="#lead-form" className="btn-primary text-base py-3.5 px-8">أبي أجرّب مجيب ←</a>
      </motion.div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════════
   PRICING
═══════════════════════════════════════════════════════════════════ */
const arPlans = [
  {
    name: "المنظَّم", price: "299", tagline: "نظّم كل شي وما تضيع ورقة.", tag: null, accentColor: "#64748B", featured: false, cta: "ابدأ الآن",
    features: [
      { text: "CRM ذكي (عملاء، مرضى، عقارات)", included: true },
      { text: "تقويم الحجوزات", included: true },
      { text: "تتبع مالي أساسي", included: true },
      { text: "لوحة تحكم متكاملة", included: true },
      { text: "دعم واتساب", included: true },
      { text: "عميل واتساب الذكي 24/7", included: false },
      { text: "تذكيرات تلقائية لمنع الغياب", included: false },
      { text: "حجز ذكي تلقائي", included: false },
      { text: "موقع ويب احترافي", included: false },
    ],
  },
  {
    name: "الذكي", price: "499", tagline: "الذكاء الاصطناعي يشتغل لك وانت نايم.", tag: "الأكثر طلباً", accentColor: "#2589D0", featured: true, cta: "جرّب مجاناً 7 أيام",
    features: [
      { text: "كل مميزات المنظَّم", included: true },
      { text: "عميل واتساب الذكي 24/7", included: true },
      { text: "فحص المتاحية والحجز التلقائي", included: true },
      { text: "تذكيرات تلقائية لمنع الغياب", included: true },
      { text: "مطابقة ذكية للعقارات", included: true },
      { text: "إرسال صور وفيديوهات عبر واتساب", included: true },
      { text: "تقارير أسبوعية", included: true },
      { text: "موقع ويب احترافي", included: false },
      { text: "دعم ذو أولوية", included: false },
    ],
  },
  {
    name: "الاحترافي", price: "799", tagline: "الباقة الكاملة لتسود في سوقك.", tag: null, accentColor: "#7C3AED", featured: false, cta: "تواصل مع الفريق",
    features: [
      { text: "كل مميزات الذكي", included: true },
      { text: "موقع ويب احترافي مخصص", included: true },
      { text: "لوحة مالية متقدمة", included: true },
      { text: "تتبع العمولات والإيجارات", included: true },
      { text: "تكاملات متقدمة", included: true },
      { text: "دعم ذو أولوية 7/7", included: true },
      { text: "إعداد شخصي مدة ساعة", included: true },
      { text: "تدريب الفريق مشمول", included: true },
      { text: "تحديثات حصرية مبكرة", included: true },
    ],
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="section-label mb-3">الأسعار</p>
        <h2 className="section-title mb-4">استثمار لأعمالك، مو مصروف</h2>
        <p className="section-subtitle mx-auto text-center">اختار الباقة اللي تناسب طموحك. تقدر تغير أو تلغي في أي وقت.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-8">
        {arPlans.map((plan, index) => (
          <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
            className={`pricing-card ${plan.featured ? "featured" : ""} flex flex-col`}
            style={plan.featured ? { borderColor: plan.accentColor } : {}}>
            {plan.tag && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[11px] font-extrabold text-white flex items-center gap-1.5 shadow-md" style={{ backgroundColor: plan.accentColor }}>
                <Zap size={11}/>{plan.tag}
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-xl font-extrabold text-slate-900 mb-1">{plan.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">{plan.tagline}</p>
              <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-bold px-2.5 py-1 rounded-full mb-2">
                <span>🔥</span><span>خصم 50% لأول شهرين</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black" style={{ color: plan.accentColor }}>{Math.round(Number(plan.price) / 2)}</span>
                <span className="text-slate-400 text-sm font-medium">ر.س / شهر</span>
              </div>
              <p className="text-sm text-slate-400 mt-1">ثم <span className="font-semibold text-slate-500">{plan.price} ر.س/شهر</span> من الشهر الثالث</p>
            </div>
            <a href="#lead-form" className="block w-full text-center py-3 rounded-xl font-semibold text-sm mb-6 transition-all duration-200"
              style={plan.featured ? { backgroundColor: plan.accentColor, color: "white" } : { border: `2px solid ${plan.accentColor}`, color: plan.accentColor, backgroundColor: "transparent" }}
              onMouseEnter={e => { if (!plan.featured) { const el = e.currentTarget; el.style.backgroundColor = plan.accentColor; el.style.color = "white"; } }}
              onMouseLeave={e => { if (!plan.featured) { const el = e.currentTarget; el.style.backgroundColor = "transparent"; el.style.color = plan.accentColor; } }}>
              {plan.cta}
            </a>
            <ul className="space-y-3 flex-1">
              {plan.features.map(f => (
                <li key={f.text} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={f.included ? { backgroundColor: `${plan.accentColor}18` } : { backgroundColor: "#F1F5F9" }}>
                    {f.included ? <Check size={11} style={{ color: plan.accentColor }}/> : <X size={11} className="text-slate-300"/>}
                  </div>
                  <span className={`text-sm ${f.included ? "text-slate-700" : "text-slate-300"}`}>{f.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-sm text-slate-400 mt-10 flex items-center justify-center gap-4 flex-wrap">
        <span>✅ بدون التزام</span>
        <span>🔒 بيانات مؤمّنة</span>
        <span>📞 دعم متخصص</span>
        <span>🎁 تجربة مجانية 7 أيام</span>
      </motion.p>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════════
   TRUST GUARANTEES
═══════════════════════════════════════════════════════════════════ */
const TrustGuarantees = () => (
  <section className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { Icon: CheckCircle, color: "#22c55e", bg: "#ECFDF5", title: "ضمان استرداد 7 أيام", desc: "مو راضي؟ نرجعلك الفلوس كاملة خلال 7 أيام من الشراء. بدون أسئلة." },
          { Icon: CalendarX, color: "#2589D0", bg: "#EBF5FF", title: "إلغاء في أي وقت", desc: "ما في عقود ولا التزامات. تقدر تلغي اشتراكك متى ما تبي." },
          { Icon: DollarSign, color: "#7C3AED", bg: "#F5F3FF", title: "بدون رسوم خفية", desc: "أسعار شفافة 100%. اللي تشوفه هو اللي تدفعه." },
        ].map((g, i) => (
          <motion.div key={g.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-5" style={{ backgroundColor: g.bg }}><g.Icon size={26} style={{ color: g.color }}/></div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">{g.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{g.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════════
   LEAD FORM
═══════════════════════════════════════════════════════════════════ */
const niches = ["عيادة أسنان", "طبيب / اختصاصي", "مركز تجميل / صالون", "عقارات", "مطعم / كافيه", "غيره"];

const LeadFormSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", businessName: "", niche: "", city: "", whatsapp: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (formData.name.trim().length < 2) e.name = "يرجى إدخال اسمك الكامل";
    if (formData.businessName.trim().length < 2) e.businessName = "يرجى إدخال اسم مشروعك";
    if (!formData.niche) e.niche = "يرجى اختيار قطاعك";
    if (formData.city.trim().length < 2) e.city = "يرجى إدخال مدينتك";
    if (formData.whatsapp.trim().length < 9) e.whatsapp = "يرجى إدخال رقم واتساب صحيح";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    window.fbq?.("track", "Lead", { content_name: "Mojib Free Trial AR", content_category: formData.niche });
    await new Promise(r => setTimeout(r, 600));
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      navigate("/ar/thank-you", { state: { name: formData.name, businessName: formData.businessName, niche: formData.niche, city: formData.city, whatsapp: formData.whatsapp } });
    }, 400);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(p => ({ ...p, [field]: value }));
    if (errors[field]) setErrors(p => ({ ...p, [field]: "" }));
  };

  return (
    <section id="lead-form" className="py-24 surface-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="section-label mb-3">ابدأ الآن</p>
          <h2 className="section-title mb-4">تجربتك المجانية <span className="blue-gradient-text">7 أيام</span></h2>
          <p className="section-subtitle mx-auto text-center">اكمل النموذج وفريقنا يهيئ لك مجيب خلال ساعتين. بدون بطاقة بنكية.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 text-xs uppercase tracking-widest text-[#2589D0]">وش تحصل عليه</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["عميل واتساب الذكي شغّال خلال 30 دقيقة","إعداد مخصص لقطاعك","تدريب مشمول (30 دقيقة)","دعم واتساب 7 أيام في الأسبوع","وصول كامل لمدة 7 أيام"].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="font-bold mt-0.5 flex-shrink-0" style={{ color: "#2589D0" }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl p-12 text-center shadow-sm border border-slate-100">
                <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#2589D0" }}/><h3 className="text-2xl font-extrabold text-slate-900 mb-2">يلا نبدأ!</h3>
                <p className="text-slate-500 leading-relaxed">جارٍ فتح واتساب…<br/>فريقنا يرد عليك خلال <strong>ساعتين</strong>.</p>
              </motion.div>
            ) : (
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">نامك الكامل <span className="text-red-500">*</span></label>
                      <input type="text" className="form-input" placeholder="مثال: محمد الغامدي" value={formData.name} onChange={e => handleChange("name", e.target.value)}/>
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">اسم مشروعك <span className="text-red-500">*</span></label>
                      <input type="text" className="form-input" placeholder="مثال: عيادة النور" value={formData.businessName} onChange={e => handleChange("businessName", e.target.value)}/>
                      {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">قطاعك <span className="text-red-500">*</span></label>
                      <select className="form-input" value={formData.niche} onChange={e => handleChange("niche", e.target.value)}>
                        <option value="">اختار قطاعك</option>
                        {niches.map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                      {errors.niche && <p className="text-red-500 text-xs mt-1">{errors.niche}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">مدينتك <span className="text-red-500">*</span></label>
                      <input type="text" className="form-input" placeholder="مثال: الرياض" value={formData.city} onChange={e => handleChange("city", e.target.value)}/>
                      {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">رقم واتساب <span className="text-red-500">*</span></label>
                    <input type="tel" className="form-input" placeholder="+966 5X XXX XXXX" value={formData.whatsapp} onChange={e => handleChange("whatsapp", e.target.value)}/>
                    {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
                  </div>
                  <button type="submit" className="btn-urgent w-full py-4 text-base" disabled={submitting}>
                    {submitting ? "جارٍ الإرسال…" : "ابدأ تجربتي المجانية"}
                    {!submitting && <ArrowLeft size={18}/>}
                  </button>
                  <p className="text-center text-xs text-slate-400">🔒 بيانات مؤمّنة · بدون التزام · بدون بطاقة بنكية</p>
                </form>
              </div>
            )}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              {[{ Icon: Shield, text: "بيانات مؤمّنة 100%" }, { Icon: Clock, text: "رد خلال ساعتين" }, { Icon: Users, text: "+200 محترف يثقون فينا" }].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-slate-500">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center shadow-sm flex-shrink-0"><Icon size={14} style={{ color: "#2589D0" }}/></div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <p className="text-sm text-slate-600 italic leading-relaxed mb-3">"في 3 أيام عندي 8 مواعيد جديدة تأكدت تلقائياً. مجيب شي ما يصدق."</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: "#2589D0" }}>خ</div>
                <div><p className="text-xs font-semibold text-slate-800">د. خالد الغامدي</p><p className="text-xs text-slate-400">عيادة أسنان · الرياض</p></div>
                <span className="ml-auto text-amber-400 text-xs flex-shrink-0">★★★★★</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════════════ */
const FooterAr = () => (
  <footer style={{ background: "#0F172A", color: "white" }} className="pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <img src={mojibLogo} alt="مجيب" className="h-8 mb-4" style={{ filter: "brightness(0) invert(1)" }}/>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">المنصة الشاملة للإدارة — CRM، مخزون، محاسبة وذكاء اصطناعي. مصمم للمحترفين في الخليج.</p>
          <a href="https://wa.me/447749343372" target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex text-sm">{WA_ICON}تكلّم معنا على واتساب</a>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#94A3B8" }}>المنتج</h4>
          <ul className="space-y-2.5">
            {[{ label: "المميزات", href: "#pillars" }, { label: "الأسعار", href: "#pricing" }, { label: "الأمان", href: "#" }, { label: "التحديثات", href: "#" }].map(({ label, href }) => (
              <li key={label}><a href={href} className="text-sm text-slate-400 hover:text-white transition-colors">{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#94A3B8" }}>الحلول</h4>
          <ul className="space-y-2.5">
            {["عيادات الأسنان","الأطباء والمختصون","مراكز التجميل","العقارات","المطاعم والمقاهي"].map(label => (
              <li key={label}><a href="#industries" className="text-sm text-slate-400 hover:text-white transition-colors">{label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-px w-full" style={{ background: "#1E293B" }}/>
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} مجيب. جميع الحقوق محفوظة.</p>
        <div className="flex items-center gap-6">
          {["الخصوصية","الشروط القانونية","شروط الاستخدام"].map(item => (
            <a key={item} href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

/* ═══════════════════════════════════════════════════════════════════
   STICKY CTA
═══════════════════════════════════════════════════════════════════ */
const StickyBtn = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  if (!visible) return null;
  return (
    <a href="#lead-form" className="fixed bottom-6 left-6 z-50 btn-urgent py-3 px-6 text-sm shadow-xl" style={{ animation: "slideUp 0.3s ease-out", boxShadow: "0 8px 32px rgba(37,137,208,0.35)" }}>
      ابدأ مجاناً
      <ArrowLeft size={16}/>
    </a>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════ */
const IndexAr = () => {
  useEffect(() => {
    window.fbq?.("track", "ViewContent", { content_name: "Mojib Landing Page AR", content_category: "SaaS / AI Assistant" });
  }, []);

  return (
    <div className="min-h-screen bg-white" dir="rtl" lang="ar" style={{ fontFamily: "'Noto Sans Arabic', 'Inter', 'Segoe UI', system-ui, sans-serif" }}>
      <NavBar />
      <HeroSection />
      <StatsBar />
      <PillarsSection />
      <ProductShowcase3D />
      <LossCalculator />
      <IndustrySection />
      <HowItWorksSection />
      <PricingSection />
      <TrustGuarantees />
      <LeadFormSection />
      <FooterAr />
      <StickyBtn />
    </div>
  );
};

export default IndexAr;
