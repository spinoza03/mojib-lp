import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "بنت البلاد فـ WhatsApp",
    description: "المساعد ديالنا كيفهم وكيهضر بالدارجة المغربية بطلاقة، باش المريض يحس بلي كيهضر مع إنسان حقيقي ومهني.",
  },
  {
    icon: CalendarCheck,
    title: "سد البيبان وخلي الخدمة خدامة",
    description: "سوا فليل، نهار الأحد، ولا فالعطلة.. المواعيد كيتسجلو أوتوماتيكياً فـ Calendar ديالك بلا ما تفيق من النعاس.",
  },
  {
    icon: ShieldCheck,
    title: "تصفية السبام",
    description: "غادي يوصلوك غير الناس لي مهتمين بصح وباغين يحجزو، هكا ما تضيعش وقتك مع كثرة الكليكات الخاوية.",
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
        >
          المميزات 🔥
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
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
