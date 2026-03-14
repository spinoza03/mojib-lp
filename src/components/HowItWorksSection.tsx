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
    <section className="py-6 md:py-12 px-4 relative" dir="rtl">
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

        <div className="grid md:grid-cols-3 gap-8 pt-4">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 md:p-8 text-center relative overflow-visible"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute -top-3 right-4 md:-top-4 md:right-8 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm z-10">
                {item.step}
              </div>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-4 md:mb-5">
                <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
