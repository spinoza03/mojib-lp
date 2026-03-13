import { motion } from "framer-motion";
import { MessageSquare, Bot, CalendarCheck2 } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "1",
    title: "المريض كيصيفط ميساج",
    description: '"بغيت نحجز موعد عند الدكتور"',
  },
  {
    icon: Bot,
    step: "2",
    title: "Mojib كيجاوب فالحين",
    description:
      "كيآخد السمية، كيشرح الخدمات المتاحة، وكيقترح الأوقات الخاوية.",
  },
  {
    icon: CalendarCheck2,
    step: "3",
    title: "الموعد كيتسجل أوتوماتيك",
    description:
      "كتوصلك إشعار فالداشبورد ديالك، وكولشي منظم بلا ما تحرك صبعك.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 relative" dir="rtl">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[150px]" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="section-title mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          كيفاش كيخدم؟ ⚙️
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute -top-4 right-8 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {item.step}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
