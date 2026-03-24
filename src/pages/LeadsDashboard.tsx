import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Phone, MessageCircle, Trash2, Edit2, Eye, EyeOff, LogOut } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  clinic_name: string;
  industry: string;
  city: string;
  whatsapp: string;
  status: "new" | "contacted" | "qualified" | "converted" | "lost";
  notes: string;
  created_at: string;
  updated_at: string;
}

const LeadsDashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<Lead>>({});
  const [showNotes, setShowNotes] = useState<Record<string, boolean>>({});
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const ADMIN_PIN = "300206";

  useEffect(() => {
    const checkAuth = localStorage.getItem("leads_auth");
    if (checkAuth === ADMIN_PIN) {
      setAuthenticated(true);
      fetchLeads();
    } else {
      setLoading(false);
    }
  }, []);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      localStorage.setItem("leads_auth", ADMIN_PIN);
      setAuthenticated(true);
      setPinError("");
      setPin("");
      fetchLeads();
    } else {
      setPinError("PIN incorrect. Accès refusé.");
      setPin("");
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erreur lors du chargement des leads:", error);
    } else {
      setLeads(data || []);
    }
    setLoading(false);
  };

  const formatWhatsApp = (whatsapp: string) => {
    let cleaned = whatsapp.replace(/\D/g, "");
    if (cleaned.startsWith("0")) {
      cleaned = "212" + cleaned.substring(1);
    }
    if (!cleaned.startsWith("212")) {
      cleaned = "212" + cleaned;
    }
    return cleaned;
  };

  const handleWhatsAppClick = (whatsapp: string, name: string) => {
    const formatted = formatWhatsApp(whatsapp);
    const message = `Bonjour ${name}, merci pour votre intérêt pour Mojib ! 🙏`;
    window.open(
      `https://wa.me/${formatted}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleStatusChange = async (id: string, newStatus: Lead["status"]) => {
    const { error } = await supabase
      .from("leads")
      .update({ status: newStatus, updated_at: new Date().toISOString() })
      .eq("id", id);

    if (!error) {
      setLeads(leads.map((l) => (l.id === id ? { ...l, status: newStatus } : l)));
    }
  };

  const handleNotesUpdate = async (id: string, notes: string) => {
    const { error } = await supabase
      .from("leads")
      .update({ notes, updated_at: new Date().toISOString() })
      .eq("id", id);

    if (!error) {
      setLeads(leads.map((l) => (l.id === id ? { ...l, notes } : l)));
      setEditingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce lead ?")) {
      const { error } = await supabase.from("leads").delete().eq("id", id);
      if (!error) {
        setLeads(leads.filter((l) => l.id !== id));
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("leads_auth");
    setAuthenticated(false);
    setPin("");
  };

  const filteredLeads =
    statusFilter === "all"
      ? leads
      : leads.filter((l) => l.status === statusFilter);

  const stats = {
    total: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    qualified: leads.filter((l) => l.status === "qualified").length,
    converted: leads.filter((l) => l.status === "converted").length,
    lost: leads.filter((l) => l.status === "lost").length,
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1A2A4A] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-2" style={{ color: "#0F172A" }}>
            Mojib Leads
          </h1>
          <p className="text-center text-slate-500 mb-8">
            Gérez vos leads en temps réel
          </p>

          <form onSubmit={handlePinSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Code d'accès PIN
              </label>
              <input
                type="password"
                inputMode="numeric"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-center text-2xl tracking-widest"
                placeholder="••••••"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setPinError("");
                }}
                maxLength={6}
              />
              {pinError && (
                <p className="text-red-500 text-xs mt-2 text-center">{pinError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#2589D0] to-[#1565C0] text-white font-bold rounded-xl hover:shadow-lg transition-all"
            >
              Accéder au Tableau de Bord
            </button>
          </form>

          <p className="text-center text-xs text-slate-400 mt-6">
            Accès réservé aux administrateurs
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#2589D0] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-500">Chargement des leads...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Leads Mojib</h1>
            <p className="text-sm text-slate-500 mt-1">Gérez tous vos prospects</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors"
          >
            <LogOut size={16} />
            Déconnexion
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          {[
            { label: "Total", value: stats.total, color: "#2589D0", key: "all" },
            { label: "Nouveau", value: stats.new, color: "#64748B", key: "new" },
            {
              label: "Contacté",
              value: stats.contacted,
              color: "#7C3AED",
              key: "contacted",
            },
            {
              label: "Qualifié",
              value: stats.qualified,
              color: "#059669",
              key: "qualified",
            },
            {
              label: "Converti",
              value: stats.converted,
              color: "#22C55E",
              key: "converted",
            },
            { label: "Perdu", value: stats.lost, color: "#EF4444", key: "lost" },
          ].map((stat) => (
            <button
              key={stat.key}
              onClick={() => setStatusFilter(stat.key)}
              className={`p-4 rounded-xl transition-all ${
                statusFilter === stat.key
                  ? "bg-white shadow-lg border-2"
                  : "bg-white border border-slate-200 hover:shadow-md"
              }`}
              style={
                statusFilter === stat.key
                  ? { borderColor: stat.color }
                  : undefined
              }
            >
              <p
                className="text-2xl font-bold"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            </button>
          ))}
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          {filteredLeads.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-slate-500">Aucun lead trouvé</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                      Nom
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                      Entreprise
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                      Secteur
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                      Ville
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-medium text-slate-900">{lead.name}</p>
                        <p className="text-xs text-slate-500">{lead.whatsapp}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-600">{lead.clinic_name}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          {lead.industry}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-600">{lead.city}</p>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={lead.status}
                          onChange={(e) =>
                            handleStatusChange(
                              lead.id,
                              e.target.value as Lead["status"]
                            )
                          }
                          className="px-3 py-1 rounded-lg text-xs font-medium border border-slate-200 bg-white"
                          style={{
                            color:
                              {
                                new: "#64748B",
                                contacted: "#7C3AED",
                                qualified: "#059669",
                                converted: "#22C55E",
                                lost: "#EF4444",
                              }[lead.status] || "#64748B",
                          }}
                        >
                          <option value="new">Nouveau</option>
                          <option value="contacted">Contacté</option>
                          <option value="qualified">Qualifié</option>
                          <option value="converted">Converti</option>
                          <option value="lost">Perdu</option>
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleWhatsAppClick(lead.whatsapp, lead.name)}
                            className="p-2 hover:bg-[#25D366]/10 rounded-lg text-[#25D366] transition-colors"
                            title="Envoyer WhatsApp"
                          >
                            <MessageCircle size={16} />
                          </button>
                          <button
                            onClick={() => {
                              setEditingId(lead.id);
                              setEditData({ notes: lead.notes });
                            }}
                            className="p-2 hover:bg-[#2589D0]/10 rounded-lg text-[#2589D0] transition-colors"
                            title="Ajouter notes"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() =>
                              setShowNotes({
                                ...showNotes,
                                [lead.id]: !showNotes[lead.id],
                              })
                            }
                            className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"
                            title="Afficher notes"
                          >
                            {showNotes[lead.id] ? (
                              <EyeOff size={16} />
                            ) : (
                              <Eye size={16} />
                            )}
                          </button>
                          <button
                            onClick={() => handleDelete(lead.id)}
                            className="p-2 hover:bg-red-100 rounded-lg text-red-500 transition-colors"
                            title="Supprimer"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Notes Modal */}
        {editingId && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">Notes</h3>
              <textarea
                value={editData.notes || ""}
                onChange={(e) =>
                  setEditData({ ...editData, notes: e.target.value })
                }
                className="w-full px-4 py-3 border border-slate-200 rounded-lg resize-none h-32 font-normal"
                placeholder="Ajouter des notes..."
              />
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setEditingId(null)}
                  className="flex-1 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={() =>
                    handleNotesUpdate(editingId, editData.notes || "")
                  }
                  className="flex-1 px-4 py-2 bg-[#2589D0] text-white rounded-lg font-medium hover:bg-[#1a6aad] transition-colors"
                >
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Notes Display */}
        {filteredLeads.map((lead) =>
          showNotes[lead.id] && lead.notes ? (
            <div key={`notes-${lead.id}`} className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-medium text-slate-900 mb-2">
                Notes pour {lead.name}:
              </p>
              <p className="text-sm text-slate-600 whitespace-pre-wrap">
                {lead.notes}
              </p>
            </div>
          ) : null
        )}
      </main>
    </div>
  );
};

export default LeadsDashboard;
