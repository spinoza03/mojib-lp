import { motion } from "framer-motion";
import { UserCircle, HeartPulse, Stethoscope } from "lucide-react";

const testimonials = [
  {
    name: "د. نجاة",
    specialty: "مركز تجميل",
    quote: "L'assistant répond parfaitement en Darija et en Français. Cela a réduit la charge de travail de ma secrétaire de 70%, lui permettant de mieux se concentrer sur l'accueil physique.",
    icon: HeartPulse,
  },
  {
    name: "د. سارة",
    specialty: "مركز تجميل",
    quote: "كنت كنضيع بزاف ديال الوقت فالتجاوب مع الناس. Mojib نقص عليا 80% ديال الصداع وركزت غير على الكليان ديالي.",
    icon: UserCircle,
  },
  {
    name: "د. يونس",
    specialty: "طبيب عام",
    quote: "السيكريتيرة ديالي دابا ولات مرتاحة وكتعامل مع المرضى فالمحل أحسن، حيت Mojib هو لي كيتكلف بالواتساب.",
    icon: Stethoscope,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-8 md:py-12 px-4" dir="rtl">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-2xl md:text-4xl mb-4">
            Doctors in Morocco are already transforming their clinics with Mojib.AI
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 md:p-8 flex flex-col items-center text-center overflow-visible"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <testimonial.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{testimonial.name}</h3>
              <p className="text-sm text-primary mb-4 font-medium">{testimonial.specialty}</p>
              <p className="text-muted-foreground italic leading-relaxed text-sm md:text-base">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
