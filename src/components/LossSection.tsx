import { motion } from "framer-motion";
import { TrendingDown, TrendingUp } from "lucide-react";

const LossSection = () => {
  return (
    <section className="py-6 md:py-12 px-4 relative" dir="rtl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="container max-w-6xl mx-auto z-10 relative">
        <motion.h2
          className="section-title mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          شحال ديال الفلوس كتخسر كل شهر؟ 💸
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          الحساب بسيط وصادم
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Without Mojib */}
          <motion.div
            className="glass-card p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ borderColor: "hsla(0, 72%, 51%, 0.2)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-destructive">
                بلا Mojib ❌
              </h3>
            </div>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-destructive text-xl mt-1">✗</span>
                <span className="text-lg">
                  3 ديال الميساجات ضايعين كل يوم (بسبب الضغط ولا الليل)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive text-xl mt-1">✗</span>
                <span className="text-lg">90 موعد ضايع فالشهر</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive text-xl mt-1">✗</span>
                <span className="text-lg font-bold">
                  تقريباً 20,000 درهم ديال المداخيل مشات غير هكاك
                </span>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-destructive/10 text-center">
              <p className="text-xl md:text-2xl font-bold text-destructive">
                -20,000 MAD/شهر
              </p>
              <p className="text-muted-foreground text-sm">مداخيل ضايعة</p>
            </div>
          </motion.div>

          {/* With Mojib */}
          <motion.div
            className="glass-card p-6 md:p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ borderColor: "hsla(142, 71%, 45%, 0.2)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-secondary">
                مع Mojib.AI ✅
              </h3>
            </div>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl mt-1">✓</span>
                <span className="text-lg">
                  كل ميساج كيتجاوب عليه فالحين — 100%
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl mt-1">✓</span>
                <span className="text-lg">
                  السبام كيتصفى والناس الجادين كيوصلو ليك
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl mt-1">✓</span>
                <span className="text-lg font-bold">
                  زيادة 35% فالمداخيل + ربح 15 ساعة ديال الصداع كل سيمانة
                </span>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-secondary/10 text-center">
              <p className="text-xl md:text-2xl font-bold text-secondary">+35% مداخيل</p>
              <p className="text-muted-foreground text-sm">
                + 15 ساعة مربوحة كل سيمانة
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LossSection;
