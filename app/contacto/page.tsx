import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para recibir un DEMO gratuito o cotizar nuestros servicios de telefonía IP, SD-WAN, internet dedicado y más. Oficinas en CDMX, Querétaro y Mérida.",
  alternates: { canonical: "https://voztotal.mx/contacto" },
};

const offices = [
  {
    city: "Ciudad de México",
    address: "Anaxágoras 29, Piedad Narvarte, Benito Juárez, 03000",
  },
  {
    city: "Querétaro",
    address: "Avenida Armando Birlaín Shaffler 2001, Centro Sur, 76090",
  },
  {
    city: "Mérida",
    address:
      "Torre Magnia Corporate Center, Calle 15 No. 503, Piso 7, Col. Altabrisa, 97130",
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #1a2d5a 0%, #2E457A 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-700 text-white mb-4">
            ¿Tienes alguna duda o quieres un DEMO?
          </h1>
          <p className="text-blue-200 text-lg">
            Cuéntanos sobre tu empresa y te preparamos una propuesta personalizada.
          </p>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-700 text-brand-blue mb-8">Escríbenos</h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-700 text-brand-blue mb-8">
                  Información de contacto
                </h2>

                {/* Offices */}
                <div className="space-y-5 mb-8">
                  {offices.map((o) => (
                    <div key={o.city} className="flex gap-3">
                      <MapPin size={20} className="text-brand-red shrink-0 mt-0.5" />
                      <div>
                        <p className="font-700 text-brand-blue">{o.city}</p>
                        <p className="text-sm text-gray-500">{o.address}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Phone */}
                <div className="flex gap-3 mb-4">
                  <Phone size={20} className="text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <p className="font-700 text-brand-blue">Teléfono</p>
                    <a
                      href="tel:+525588802100"
                      className="text-sm text-gray-500 hover:text-brand-blue transition-colors"
                    >
                      (55) 888 02 100
                    </a>
                    {" · "}
                    <a
                      href="https://wa.me/525588802100"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-brand-blue transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3 mb-8">
                  <Mail size={20} className="text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <p className="font-700 text-brand-blue">Correo electrónico</p>
                    <a
                      href="mailto:contacto@voztotal.mx"
                      className="text-sm text-gray-500 hover:text-brand-blue transition-colors"
                    >
                      contacto@voztotal.mx
                    </a>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex gap-3">
                  <Clock size={20} className="text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <p className="font-700 text-brand-blue mb-2">Horario</p>
                    <div className="space-y-1 text-sm text-gray-500">
                      <p>
                        <span className="font-600 text-gray-700">Lunes – Viernes:</span>{" "}
                        9:00am – 6:00pm
                      </p>
                      <p>
                        <span className="font-600 text-gray-700">Sábado:</span> 10:00am – 1:00pm
                      </p>
                      <p>
                        <span className="font-600 text-gray-700">Domingo:</span> Cerrado
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
