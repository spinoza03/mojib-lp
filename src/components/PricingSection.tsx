import { motion } from "framer-motion";
import { CheckCircle2, XCircle, TrendingUp } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-8 md:py-12 px-4 relative" dir="rtl">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="container max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            تخيل شحال كتضيع ديال الفلوس بلا بيك؟ 💰
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            مجيب ماشي مصاريف، إستثمار! موعد واحد ضايع كيرجع ليك ثمن الاشتراك 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Traditional Secretary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 md:p-8 border-red-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[50px] -z-10" />
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-foreground/80 flex items-center gap-2">
              <span className="p-2 bg-red-500/10 rounded-lg text-red-500">
                <XCircle size={20} className="md:w-6 md:h-6" />
              </span>
              سيكريتير عادية
            </h3>
            <ul className="space-y-4">
              {[
                "صالير كل شهر (الحد الأدنى للأجور)",
                "مصاريف CNSS وتأمين",
                "العطل و المرض 🤒",
                "وقت محدود (من 9 لـ 6)",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <XCircle size={20} className="text-red-500/50 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mojib.AI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 md:p-8 border-primary/40 relative overflow-hidden transform md:-translate-y-4 shadow-[0_0_40px_rgba(var(--primary),0.15)] ring-1 ring-primary/20"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] -z-10" />
            <div className="absolute -right-12 top-6 bg-primary text-primary-foreground text-sm font-bold py-1 px-12 rotate-45 shadow-lg">
              الأفضل بزااف
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground flex items-center gap-2">
              <span className="p-2 bg-primary/20 rounded-lg text-primary">
                <CheckCircle2 size={20} className="md:w-6 md:h-6" />
              </span>
              Mojib.AI
            </h3>
            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-4xl font-black text-primary">499</span>
              <span className="text-lg font-bold text-muted-foreground">درهم / الشهر</span>
            </div>

            <ul className="space-y-4">
              {[
                "غير 499 درهم/الشهر",
                "بلا مصاريف ولا ضرائب زايدة",
                "خدام 24/7 بلا عطل 🚀",
                "مكيزكل تا ميساج أو مكالمة",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/90 font-medium">
                  <CheckCircle2 size={20} className="text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Value Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 md:p-8 border-primary/20 bg-primary/5 text-center flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <div className="p-4 bg-primary/20 rounded-full text-primary">
            <TrendingUp size={40} />
          </div>
          <div className="text-right">
            <h4 className="text-xl font-bold text-foreground mb-2">
              موعد واحد ضايع كيرجع ليك 499 درهم! 💸
            </h4>
            <p className="text-muted-foreground text-sm max-w-xl">
              تخيل شحال من كليان كيمشي ليك حيت مالقاش لي يجاوبو بالليل أو فالعطلة. Mojib كيجيب ليك كليان جداد لي كيخلصو أضعاف ثمن الاشتراك.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PricingSection;
