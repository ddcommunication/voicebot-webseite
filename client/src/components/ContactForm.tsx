import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("Vielen Dank!", {
        description: "Ihre Anfrage wurde erfolgreich versendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      });
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    },
    onError: (error) => {
      toast.error("Fehler beim Versenden", {
        description: error.message || "Bitte versuchen Sie es später erneut.",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Bitte füllen Sie alle Pflichtfelder aus");
      return;
    }

    submitMutation.mutate(formData);
  };

  return (
    <div
      id="kontakt-formular"
      className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] text-white animate-in slide-in-from-right-5 duration-700 delay-200 border border-white/20 relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all duration-1000"></div>

      <h3 className="text-2xl font-bold mb-2 relative z-10">
        Jetzt durchstarten
      </h3>
      <p className="text-blue-200 mb-6 relative z-10">
        Füllen Sie das Formular aus – wir melden uns innerhalb von 24h.
      </p>

      <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-xs font-medium text-blue-200 uppercase tracking-wider"
            >
              Ansprechpartner *
            </label>
            <input
              id="name"
              type="text"
              placeholder="Max Mustermann"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="flex h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:border-transparent transition-all"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="company"
              className="text-xs font-medium text-blue-200 uppercase tracking-wider"
            >
              Firma
            </label>
            <input
              id="company"
              type="text"
              placeholder="Muster GmbH"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="flex h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-xs font-medium text-blue-200 uppercase tracking-wider"
          >
            E-Mail Adresse *
          </label>
          <input
            id="email"
            type="email"
            placeholder="max@muster.de"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="flex h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:border-transparent transition-all"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-xs font-medium text-blue-200 uppercase tracking-wider"
          >
            Telefon *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+49 3533 4807-0"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="flex h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:border-transparent transition-all"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-xs font-medium text-blue-200 uppercase tracking-wider"
          >
            Nachricht (optional)
          </label>
          <textarea
            id="message"
            placeholder="Wie können wir helfen?"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="flex min-h-[80px] w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:border-transparent transition-all"
          />
        </div>

        <Button 
          type="submit"
          disabled={submitMutation.isPending}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white h-12 text-lg font-bold rounded-xl shadow-lg shadow-blue-900/20 mt-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitMutation.isPending ? "Wird gesendet..." : "Kostenlos anfragen"}
        </Button>
        <p className="text-[10px] text-center text-blue-200/60 mt-4">
          Mit dem Absenden stimmen Sie unserer{" "}
          <Link href="/datenschutz" className="underline hover:text-blue-300">
            Datenschutzerklärung
          </Link>{" "}
          zu.
        </p>
      </form>
    </div>
  );
}
