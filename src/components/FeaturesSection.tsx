import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "كيهضر بالدارجة فـ WhatsApp",
    description:
      "المساعد ديالنا كيفهم الدارجة المغربية وكيجاوب بطلاقة، المريض كيحس بلي كيهضر مع شي حد حقيقي ومهني.",
  },
  {
    icon: CalendarCheck,
    title: "المواعيد كتسجل بوحدها",
    description:
      "سوا فالليل، نهار الأحد، ولا فالعطلة — المواعيد كيتسجلو أوتوماتيك فالكالوندري ديالك بلا ما تحرك صبعك.",
  },
  {
    icon: ShieldCheck,
    title: "تصفية السبام أوتوماتيك",
    description:
      "كيوصلوك غير الناس لي بصح باغين يحجزو، ما تضيعش وقتك مع الميساجات الخاوية.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4" dir="rtl">
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          className="section-title mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => {
            if (typeof window !== "undefined" && (window as any).fbq) {
              (window as any).fbq("track", "ViewContent");
            }
          }}
        >
          علاش Mojib.AI؟ 🔥
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 text-center group hover:scale-[1.02] transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/25 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
