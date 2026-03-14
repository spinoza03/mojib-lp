import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase, Lead } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import mojibLogo from "@/assets/mojib-logo.png";
import {
  Search,
  Trash2,
  ChevronDown,
  X,
  Users,
  Clock,
  CheckCircle2,
  XCircle,
  Phone,
  StickyNote,
  Filter,
  MessageCircle,
} from "lucide-react";

const STATUS_CONFIG: Record<
  Lead["status"],
  { label: string; color: string; bg: string; icon: React.ReactNode }
> = {
  new: {
    label: "جديد",
    color: "text-blue-400",
    bg: "bg-blue-500/15 border-blue-500/30",
    icon: <Clock className="w-3.5 h-3.5" />,
  },
  contacted: {
    label: "تم التواصل",
    color: "text-amber-400",
    bg: "bg-amber-500/15 border-amber-500/30",
    icon: <Phone className="w-3.5 h-3.5" />,
  },
  qualified: {
    label: "مؤهل",
    color: "text-purple-400",
    bg: "bg-purple-500/15 border-purple-500/30",
    icon: <Users className="w-3.5 h-3.5" />,
  },
  converted: {
    label: "تم التحويل",
    color: "text-emerald-400",
    bg: "bg-emerald-500/15 border-emerald-500/30",
    icon: <CheckCircle2 className="w-3.5 h-3.5" />,
  },
  lost: {
    label: "ضايع",
    color: "text-red-400",
    bg: "bg-red-500/15 border-red-500/30",
    icon: <XCircle className="w-3.5 h-3.5" />,
  },
};

const ALL_STATUSES: Lead["status"][] = [
  "new",
  "contacted",
  "qualified",
  "converted",
  "lost",
];

const formatWhatsAppNumber = (phone: string) => {
  let clean = phone.replace(/[^0-9]/g, "");
  // If it starts with 0 (like 06...), remove it and add 212
  if (clean.startsWith("0")) {
    clean = "212" + clean.slice(1);
  } 
  // If it doesn't start with 212 already, append it
  else if (!clean.startsWith("212")) {
    clean = "212" + clean;
  }
  return `+${clean}`;
};

const LeadsPage = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<Lead["status"] | "all">(
    "all"
  );
  const [editingNotes, setEditingNotes] = useState<string | null>(null);
  const [notesValue, setNotesValue] = useState("");
  const [openStatusDropdown, setOpenStatusDropdown] = useState<string | null>(
    null
  );
  const { toast } = useToast();

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "خطأ",
        description: "ما قدرناش نجيبو الليدات",
        variant: "destructive",
      });
    } else {
      setLeads(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const updateStatus = async (id: string, status: Lead["status"]) => {
    const { error } = await supabase
      .from("leads")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", id);

    if (error) {
      toast({
        title: "خطأ",
        description: "ما قدرناش نبدلو الحالة",
        variant: "destructive",
      });
    } else {
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, status } : l))
      );
      setOpenStatusDropdown(null);
    }
  };

  const updateNotes = async (id: string) => {
    const { error } = await supabase
      .from("leads")
      .update({ notes: notesValue, updated_at: new Date().toISOString() })
      .eq("id", id);

    if (error) {
      toast({
        title: "خطأ",
        description: "ما قدرناش نحفظو الملاحظات",
        variant: "destructive",
      });
    } else {
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, notes: notesValue } : l))
      );
      setEditingNotes(null);
    }
  };

  const deleteLead = async (id: string) => {
    const { error } = await supabase.from("leads").delete().eq("id", id);

    if (error) {
      toast({
        title: "خطأ",
        description: "ما قدرناش نحيدو هاد الليد",
        variant: "destructive",
      });
    } else {
      setLeads((prev) => prev.filter((l) => l.id !== id));
      toast({ title: "تمسح بنجاح ✓" });
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      !searchQuery ||
      lead.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.clinic_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.whatsapp?.includes(searchQuery);
    const matchesStatus =
      statusFilter === "all" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    converted: leads.filter((l) => l.status === "converted").length,
  };

  return (
    <div className="min-h-screen mesh-gradient" dir="rtl">
      {/* Header */}
      <header className="border-b border-border/30 backdrop-blur-xl sticky top-0 z-50">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={mojibLogo} alt="Mojib.AI" className="w-10 h-10" />
            <span className="text-foreground font-bold text-xl font-display">
              Mojib.AI
            </span>
          </a>
          <h1 className="text-lg font-semibold text-foreground/80">
            إدارة الليدات
          </h1>
        </div>
      </header>

      <main className="container max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "المجموع",
              value: stats.total,
              color: "text-foreground",
              bg: "bg-primary/10",
            },
            {
              label: "جداد",
              value: stats.new,
              color: "text-blue-400",
              bg: "bg-blue-500/10",
            },
            {
              label: "تم التواصل",
              value: stats.contacted,
              color: "text-amber-400",
              bg: "bg-amber-500/10",
            },
            {
              label: "تحولو",
              value: stats.converted,
              color: "text-emerald-400",
              bg: "bg-emerald-500/10",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="glass-card p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <p className={`text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <motion.div
          className="glass-card p-4 mb-6 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              className="glass-input pr-10"
              placeholder="قلّب بالسمية، المدينة، ولا الواتساب..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <button
              onClick={() => setStatusFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                statusFilter === "all"
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              الكل
            </button>
            {ALL_STATUSES.map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                  statusFilter === status
                    ? `${STATUS_CONFIG[status].bg} ${STATUS_CONFIG[status].color} border`
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {STATUS_CONFIG[status].icon}
                {STATUS_CONFIG[status].label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Table */}
        {loading ? (
          <div className="text-center py-20">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">كنحملو الليدات...</p>
          </div>
        ) : filteredLeads.length === 0 ? (
          <motion.div
            className="glass-card p-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              {searchQuery || statusFilter !== "all"
                ? "ما لقينا حتى ليد بهاد الفيلتر"
                : "مازال ما كاين حتى ليد. الليدات غادي يبانو هنا ملي شي حد يعمر الفورم."}
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">
                      السمية والكنية
                    </th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">
                      العيادة
                    </th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">
                      المدينة
                    </th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">
                      واتساب
                    </th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">
                      ميساجات/يوم
                    </th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">
                      الحالة
                    </th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">
                      التاريخ
                    </th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">
                      ملاحظات
                    </th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {filteredLeads.map((lead) => (
                      <motion.tr
                        key={lead.id}
                        className="border-b border-border/20 hover:bg-white/[0.02] transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, x: -30 }}
                        layout
                      >
                        <td className="px-6 py-4 font-medium text-foreground">
                          {lead.name}
                        </td>
                        <td className="px-6 py-4 text-foreground/80">
                          {lead.clinic_name}
                        </td>
                        <td className="px-6 py-4 text-foreground/80">
                          {lead.city}
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href={`https://wa.me/${formatWhatsAppNumber(lead.whatsapp)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:underline"
                          >
                            {lead.whatsapp}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-foreground/70">
                          {lead.messages_per_day || "—"}
                        </td>
                        <td className="px-6 py-4">
                          <div className="relative">
                            <button
                              onClick={() =>
                                setOpenStatusDropdown(
                                  openStatusDropdown === lead.id
                                    ? null
                                    : lead.id
                                )
                              }
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${STATUS_CONFIG[lead.status].bg} ${STATUS_CONFIG[lead.status].color}`}
                            >
                              {STATUS_CONFIG[lead.status].icon}
                              {STATUS_CONFIG[lead.status].label}
                              <ChevronDown className="w-3.5 h-3.5" />
                            </button>
                            {openStatusDropdown === lead.id && (
                              <div className="absolute z-50 top-full mt-1 right-0 glass-card p-1 min-w-[140px] shadow-xl">
                                {ALL_STATUSES.map((s) => (
                                  <button
                                    key={s}
                                    onClick={() => updateStatus(lead.id, s)}
                                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-white/5 ${STATUS_CONFIG[s].color}`}
                                  >
                                    {STATUS_CONFIG[s].icon}
                                    {STATUS_CONFIG[s].label}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-foreground/60 text-sm">
                          {new Date(lead.created_at).toLocaleDateString(
                            "ar-MA",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {editingNotes === lead.id ? (
                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                value={notesValue}
                                onChange={(e) => setNotesValue(e.target.value)}
                                className="glass-input text-sm py-1.5 px-2 min-w-[120px]"
                                autoFocus
                                onKeyDown={(e) => {
                                  if (e.key === "Enter")
                                    updateNotes(lead.id);
                                  if (e.key === "Escape")
                                    setEditingNotes(null);
                                }}
                              />
                              <button
                                onClick={() => updateNotes(lead.id)}
                                className="text-primary hover:text-primary/80 text-sm"
                              >
                                ✓
                              </button>
                              <button
                                onClick={() => setEditingNotes(null)}
                                className="text-muted-foreground hover:text-foreground"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => {
                                setEditingNotes(lead.id);
                                setNotesValue(lead.notes || "");
                              }}
                              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <StickyNote className="w-3.5 h-3.5" />
                              {lead.notes || "زيد ملاحظة"}
                            </button>
                          )}
                        </td>
                        <td className="px-6 py-4 flex items-center justify-end gap-2">
                          <a
                            href={`https://wa.me/${formatWhatsAppNumber(lead.whatsapp)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="تواصل في واتساب"
                            className="text-emerald-500 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </a>
                          <button
                            onClick={() => deleteLead(lead.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors p-2 rounded-lg hover:bg-destructive/10"
                            title="مسح"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden p-4 space-y-4">
              <AnimatePresence>
                {filteredLeads.map((lead) => (
                  <motion.div
                    key={lead.id}
                    className="glass-card p-5 space-y-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    layout
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-foreground text-lg">
                          {lead.name}
                        </h3>
                        <p className="text-muted-foreground text-sm font-medium">
                          {lead.clinic_name}
                        </p>
                        <p className="text-muted-foreground/80 text-xs">
                          {lead.city}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <a
                          href={`https://wa.me/${formatWhatsAppNumber(lead.whatsapp)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-500 hover:text-emerald-400 transition-colors p-1.5 rounded-lg hover:bg-emerald-500/10"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => deleteLead(lead.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors p-1.5 rounded-lg hover:bg-destructive/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <a
                        href={`https://wa.me/${formatWhatsAppNumber(lead.whatsapp)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:underline"
                      >
                        {lead.whatsapp}
                      </a>
                      <span className="text-muted-foreground">
                        {lead.messages_per_day
                          ? `${lead.messages_per_day} ميساج/يوم`
                          : ""}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="relative">
                        <button
                          onClick={() =>
                            setOpenStatusDropdown(
                              openStatusDropdown === lead.id ? null : lead.id
                            )
                          }
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${STATUS_CONFIG[lead.status].bg} ${STATUS_CONFIG[lead.status].color}`}
                        >
                          {STATUS_CONFIG[lead.status].icon}
                          {STATUS_CONFIG[lead.status].label}
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                        {openStatusDropdown === lead.id && (
                          <div className="absolute z-50 top-full mt-1 right-0 glass-card p-1 min-w-[140px] shadow-xl">
                            {ALL_STATUSES.map((s) => (
                              <button
                                key={s}
                                onClick={() => updateStatus(lead.id, s)}
                                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-white/5 ${STATUS_CONFIG[s].color}`}
                              >
                                {STATUS_CONFIG[s].icon}
                                {STATUS_CONFIG[s].label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <span className="text-muted-foreground text-xs">
                        {new Date(lead.created_at).toLocaleDateString("ar-MA", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                    </div>

                    {editingNotes === lead.id ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={notesValue}
                          onChange={(e) => setNotesValue(e.target.value)}
                          className="glass-input text-sm py-1.5 px-2 flex-1"
                          autoFocus
                          onKeyDown={(e) => {
                            if (e.key === "Enter") updateNotes(lead.id);
                            if (e.key === "Escape") setEditingNotes(null);
                          }}
                        />
                        <button
                          onClick={() => updateNotes(lead.id)}
                          className="text-primary text-sm"
                        >
                          ✓
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingNotes(lead.id);
                          setNotesValue(lead.notes || "");
                        }}
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <StickyNote className="w-3.5 h-3.5" />
                        {lead.notes || "زيد ملاحظة..."}
                      </button>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default LeadsPage;
