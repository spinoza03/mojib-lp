import { motion } from "framer-motion";
import mojibLogo from "@/assets/mojib-logo.png";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden"
      dir="rtl"
    >
      {/* Floating orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-pulse-glow" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={mojibLogo}
            alt="Mojib.AI"
            className="w-28 h-28 mx-auto mb-8 animate-float"
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-foreground">وقف ضياع الفلوس!</span>{" "}
          <span className="text-3xl md:text-5xl">🛑</span>
          <br />
          <span className="gradient-text">
            حوّل كل ميساج واتساب لموعد حقيقي فعيادتك
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          واش عارف بلي 80% ديال الميساجات لي كيوصلوك وقت ما كتكون مشغول
          كيضيعو وكيمشيو عند المنافسين؟{" "}
          <strong className="text-foreground">Mojib.AI</strong> هو السيكريتير
          الذكي لي كيجاوب فبلاصتك، ليل ونهار، بالدارجة — نتا تركز غير على
          خدمتك والأجندة ديالك تعمر بوحدها.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#lead-form" className="btn-primary text-center">
            جرّب 7 أيام بالمجان دابا 🚀
          </a>
          <a
            href="https://wa.me/447749343372"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex items-center gap-2"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).fbq) {
                (window as any).fbq("track", "Contact", {
                  content_name: "WhatsApp Button",
                });
              }
            }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            راسلنا على واتساب
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
