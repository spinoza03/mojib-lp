import { motion } from "framer-motion";
import { useState } from "react";

const LeadFormSection = () => {
  const [formData, setFormData] = useState({
    clinicName: "",
    city: "",
    messagesPerDay: "",
    whatsapp: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `طلب تجربة مجانية:\nسمية العيادة: ${formData.clinicName}\nالمدينة: ${formData.city}\nعدد الميساجات/يوم: ${formData.messagesPerDay}\nواتساب: ${formData.whatsapp}`;
    window.open(`https://wa.me/447749343372?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="lead-form" className="py-20 px-4 relative" dir="rtl">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/8 blur-[150px]" />

      <div className="container max-w-2xl mx-auto relative z-10">
        <motion.h2
          className="section-title mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          واش مستعد ترد عيادتك Smart Clinic؟ 🏥
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-10 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          وتزيد فالمداخيل ديالك؟
        </motion.p>

        <motion.form
          className="glass-card p-8 space-y-5"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <label className="block text-foreground/80 mb-2 text-sm font-medium">سمية العيادة / المركز</label>
            <input
              type="text"
              className="glass-input"
              placeholder="مثلا: عيادة الأمل"
              value={formData.clinicName}
              onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-foreground/80 mb-2 text-sm font-medium">المدينة</label>
            <input
              type="text"
              className="glass-input"
              placeholder="مثلا: الدار البيضاء"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-foreground/80 mb-2 text-sm font-medium">شحال من ميساج كيوصلك فاليوم تقريباً؟</label>
            <input
              type="text"
              className="glass-input"
              placeholder="مثلا: 15"
              value={formData.messagesPerDay}
              onChange={(e) => setFormData({ ...formData, messagesPerDay: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-foreground/80 mb-2 text-sm font-medium">رقم الواتساب للتواصل</label>
            <input
              type="tel"
              className="glass-input"
              placeholder="+212 6XX XXX XXX"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full text-center">
            فعل حسابي التجريبي دابا 🚀
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default LeadFormSection;
