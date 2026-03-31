import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2, ArrowLeft, MessageCircle, ExternalLink,
  MessageCircleOff, TrendingDown, Calculator, AlertTriangle,
  Sparkles, Shield, Clock, Headphones, CheckCircle,
  CalendarX, DollarSign,
} from "lucide-react";
import mojibLogo from "@/assets/mojib-logo.png";

declare global { interface Window { fbq?: (...args: unknown[]) => void; } }

/* ── Loss Calculator ─────────────────────────────────────────────── */
const ThankYouCalculator = () => {
  const [missed, setMissed] = useState(10);
  const [avgVal, setAvgVal] = useState(500);
  const [conv, setConv] = useState(30);

  const { daily, monthly, yearly, lostCust } = useMemo(() => {
    const d = Math.round(missed * (conv / 100) * avgVal);
    return { daily: d, monthly: d * 30, yearly: d * 365, lostCust: Math.round(missed * (conv / 100) * 30) };
  }, [missed, avgVal, conv]);

  const fmt = (n: number) => {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}م`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(n >= 10_000 ? 0 : 1)}ك`;
    return n.toLocaleString("ar-SA");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-center mb-10">
        <p className="section-label mb-3">حاسبة الخسائر</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
          قديش يكلّفك الرسائل اللي <span style={{ color: "#E53E3E" }}>ما رديت عليها</span>؟
        </h2>
        <p className="text-base text-slate-500 max-w-xl mx-auto">مجيب يساعدك ما تخسر ولا عميل واحد. شوف الفرق.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Inputs */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center"><Calculator size={18} className="text-red-500"/></div>
            <div><h3 className="text-base font-bold text-slate-900">وضعك الحالي</h3><p className="text-[11px] text-slate-500">عدّل حسب أعمالك</p></div>
          </div>

          {[
            { label: "رسائل ما رُدّ عليها يومياً", val: missed, set: setMissed, min: 1, max: 50, step: 1, display: `${missed}`, color: "#E53E3E", Icon: MessageCircleOff },
            { label: "متوسط قيمة العميل (ريال)", val: avgVal, set: setAvgVal, min: 100, max: 5000, step: 50, display: `${avgVal.toLocaleString("ar-SA")} ر.س`, color: "#DD6B20", Icon: TrendingDown },
            { label: "نسبة التحويل المتوقعة", val: conv, set: setConv, min: 5, max: 80, step: 1, display: `${conv}%`, color: "#7C3AED", Icon: AlertTriangle },
          ].map(({ label, val, set, min, max, step, display, color, Icon }, idx) => (
            <div key={idx} className="mb-6 last:mb-0">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2"><Icon size={13} style={{ color }}/>{label}</label>
                <span className="text-base font-bold" style={{ color }}>{display}</span>
              </div>
              <input type="range" min={min} max={max} step={step} value={val} onChange={e => set(Number(e.target.value))} className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ background: `linear-gradient(to right, ${color} 0%, ${color} ${((val - min) / (max - min)) * 100}%, #e2e8f0 ${((val - min) / (max - min)) * 100}%, #e2e8f0 100%)` }}/>
              <div className="flex justify-between mt-1"><span className="text-[10px] text-slate-400">{min}</span><span className="text-[10px] text-slate-400">{max}</span></div>
            </div>
          ))}
        </motion.div>

        {/* Results */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="space-y-3">
          <div className="bg-white rounded-2xl p-5 border border-red-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div><p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">الخسارة اليومية</p><p className="text-2xl font-extrabold text-red-500">-{fmt(daily)} <span className="text-base">ر.س</span></p></div>
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center"><TrendingDown size={24} className="text-red-400"/></div>
            </div>
          </div>
          <div className="rounded-2xl p-5 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)", boxShadow: "0 12px 40px rgba(220,38,38,0.25)" }}>
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-[11px] font-semibold text-white/70 uppercase tracking-wider mb-1">الخسارة الشهرية</p>
                <p className="text-3xl font-extrabold text-white">-{fmt(monthly)} <span className="text-lg">ر.س</span></p>
                <p className="text-xs text-white/70 mt-1">~{lostCust} عميل ضايع شهرياً</p>
              </div>
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center"><MessageCircleOff size={28} className="text-white/80"/></div>
            </div>
            <div className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full opacity-10 bg-white"/>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div><p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">الخسارة السنوية</p><p className="text-2xl font-extrabold text-slate-900">-{fmt(yearly)} <span className="text-base">ر.س</span></p></div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center"><AlertTriangle size={24} className="text-slate-400"/></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ── Trust Guarantees ────────────────────────────────────────────── */
const TrustGuaranteesAr = () => (
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
);

/* ── Thank You Page ──────────────────────────────────────────────── */
const ThankYouAr = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { name?: string; businessName?: string; niche?: string; city?: string; whatsapp?: string } | null;

  useEffect(() => {
    if (!state?.name) navigate("/ar", { replace: true });
  }, [state, navigate]);

  useEffect(() => {
    window.fbq?.("track", "CompleteRegistration", { content_name: "Mojib Thank You AR" });
  }, []);

  const waMessage = state
    ? `هلا، أبي أبدأ مع مجيب!\n\n👤 الاسم: ${state.name}\n🏢 المشروع: ${state.businessName}\n📍 القطاع: ${state.niche}\n🌆 المدينة: ${state.city}\n📱 واتساب: ${state.whatsapp}`
    : "";

  if (!state?.name) return null;

  return (
    <div className="min-h-screen bg-white" dir="rtl" lang="ar" style={{ fontFamily: "'Noto Sans Arabic', 'Inter', 'Segoe UI', system-ui, sans-serif" }}>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="/ar" className="flex items-center gap-2">
            <img src={mojibLogo} alt="مجيب" className="h-8 w-auto"/>
          </a>
          <a href="https://app.mojib.online" className="btn-primary text-sm py-2 px-5">
            الدخول للتطبيق
            <ExternalLink size={14}/>
          </a>
        </div>
      </header>

      {/* Hero: Thank You + CTAs */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ background: "linear-gradient(155deg, #FFFFFF 0%, #F0F7FF 55%, #FAFBFF 100%)" }}>
        <div className="absolute pointer-events-none" style={{ top: "10%", left: "-8%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(37,137,208,0.07) 0%, transparent 70%)" }}/>
        <div className="absolute pointer-events-none" style={{ bottom: "0", right: "-5%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)" }}/>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Icon */}
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }} className="mb-6">
            <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center" style={{ background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)", boxShadow: "0 12px 40px rgba(34,197,94,0.3)" }}>
              <CheckCircle2 size={40} className="text-white"/>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              شكراً، {state.name?.split(" ")[0]}!
            </h1>
            <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed mb-4">
              طلبك للتجربة المجانية تم تسجيله بنجاح. اختار كيف تكمل:
            </p>
          </motion.div>

          {/* Two CTAs */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 max-w-2xl mx-auto">
            {/* App */}
            <a href="https://app.mojib.online" className="group relative bg-white rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 text-right" style={{ textDecoration: "none" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, #2589D0, #1565C0)" }}>
                <Sparkles size={22} className="text-white"/>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">أنشئ حسابي</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">ادخل مباشرة على منصة مجيب وابدأ إعدادك خلال دقائق.</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all">
                الدخول للتطبيق <ArrowLeft size={16}/>
              </span>
              <div className="absolute -top-3 left-4 px-3 py-1 rounded-full text-[10px] font-bold text-white" style={{ background: "linear-gradient(135deg, #2589D0, #1565C0)" }}>
                مُوصى به
              </div>
            </a>

            {/* WhatsApp */}
            <a href={`https://wa.me/447749343372?text=${encodeURIComponent(waMessage)}`} target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 shadow-sm hover:shadow-xl transition-all duration-300 text-right" style={{ textDecoration: "none" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "#25D366" }}>
                <MessageCircle size={22} className="text-white"/>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">تكلّم معنا على واتساب</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">تكلّم مع فريقنا مباشرة على واتساب للمساعدة الشخصية.</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-green-600 group-hover:gap-3 transition-all">
                افتح واتساب <ArrowLeft size={16}/>
              </span>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {[{ Icon: Shield, text: "بيانات مؤمّنة" }, { Icon: Clock, text: "إعداد في 30 دقيقة" }, { Icon: Headphones, text: "دعم 7/7" }].map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-slate-400">
                <Icon size={14} style={{ color: "#2589D0" }}/><span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Next steps */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">شو يصير بعدين؟</h2>
            <p className="text-base text-slate-500">هذي الخطوات التالية:</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { step: "1", title: "أنشئ حسابك", desc: "سجّل على app.mojib.online خلال دقيقتين", color: "#2589D0" },
              { step: "2", title: "إعداد الذكاء الاصطناعي", desc: "فريقنا يهيئ عميل واتساب الذكي خلال ساعتين", color: "#7C3AED" },
              { step: "3", title: "يلا نبدأ!", desc: "عميلك الذكي يرد ويحجز تلقائياً 24/7", color: "#059669" },
            ].map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-50 rounded-2xl p-6 text-center">
                <div className="w-10 h-10 rounded-full mx-auto flex items-center justify-center text-white text-sm font-bold mb-3" style={{ backgroundColor: item.color }}>{item.step}</div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Guarantees */}
      <section className="py-16 bg-white border-y border-slate-100">
        <TrustGuaranteesAr />
      </section>

      {/* Loss Calculator */}
      <section className="py-20 surface-section">
        <ThankYouCalculator />
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">حاضر تحوّل أعمالك؟</h2>
            <p className="text-base text-slate-500 mb-8">وقّف خسارة العملاء وابدأ تشتغل بذكاء من اليوم.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.mojib.online" className="btn-primary text-base py-3.5 px-8">
                أنشئ حسابي المجاني
                <ArrowLeft size={18}/>
              </a>
              <a href={`https://wa.me/447749343372?text=${encodeURIComponent(waMessage)}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base py-3.5 px-8">
                <MessageCircle size={18}/>
                تكلّم معنا على واتساب
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src={mojibLogo} alt="مجيب" className="h-6 w-auto opacity-60"/>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} مجيب. جميع الحقوق محفوظة.</p>
          <a href="/ar" className="text-xs text-slate-400 hover:text-blue-500 transition-colors">العودة للرئيسية</a>
        </div>
      </footer>
    </div>
  );
};

export default ThankYouAr;
