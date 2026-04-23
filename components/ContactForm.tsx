"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle } from "lucide-react";

const EMAILJS_SERVICE = "service_zy29tr1";
const EMAILJS_TEMPLATE = "template_ophs0fq";
const EMAILJS_PUBLIC_KEY = "o4xwhJnPtKjHSPt82";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("sent");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle size={56} className="text-green-500" />
        <h3 className="text-2xl font-700 text-brand-blue">¡Mensaje enviado!</h3>
        <p className="text-gray-500">Nos pondremos en contacto contigo muy pronto.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-brand-red underline hover:no-underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-600 text-gray-700 mb-1" htmlFor="fullname">
          Nombre y Apellido
        </label>
        <input
          id="fullname"
          type="text"
          name="fullname"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition text-sm"
          placeholder="Tu nombre completo"
        />
      </div>

      <div>
        <label className="block text-sm font-600 text-gray-700 mb-1" htmlFor="email">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition text-sm"
          placeholder="tu@empresa.com"
        />
      </div>

      <div>
        <label className="block text-sm font-600 text-gray-700 mb-1" htmlFor="phone">
          Teléfono
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition text-sm"
          placeholder="+52 55 1234 5678"
        />
      </div>

      <div>
        <label className="block text-sm font-600 text-gray-700 mb-1" htmlFor="service">
          ¿Qué servicio te interesa?
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition text-sm bg-white"
        >
          <option value="">Selecciona un servicio</option>
          <option>Telefonía IP / Cloud PBX</option>
          <option>Conectividad SD-WAN</option>
          <option>Internet Dedicado</option>
          <option>Campañas SMS</option>
          <option>Seguridad en Ciberataques</option>
          <option>Soporte TI</option>
          <option>Varios servicios</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-600 text-gray-700 mb-1" htmlFor="message">
          Mensaje (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition text-sm resize-none"
          placeholder="Cuéntanos sobre tu empresa y necesidades..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Ocurrió un error. Por favor escríbenos directamente a contacto@voztotal.mx
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-brand-red text-white font-700 hover:bg-brand-red-hover disabled:opacity-60 transition-colors"
      >
        <Send size={18} />
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
