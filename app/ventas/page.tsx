import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Ventas",
  description:
    "Contacta al equipo de ventas de VOZTOTAL para recibir una propuesta personalizada en telefonía IP, SD-WAN, internet dedicado y más.",
  alternates: { canonical: "https://voztotal.mx/ventas" },
  robots: { index: false, follow: false },
};

export default function VentasPage() {
  return (
    <>
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #1a2d5a 0%, #2E457A 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-700 text-white mb-4">
            ¿Tienes alguna duda o quieres un DEMO?
          </h1>
          <p className="text-blue-200 text-lg">
            Nuestro equipo de ventas te atenderá a la brevedad.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-700 text-brand-blue mb-8">Escríbenos</h2>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-700 text-brand-blue mb-8">
                Información de VOZ TOTAL
              </h2>

              <div className="flex gap-3">
                <Phone size={20} className="text-brand-red shrink-0 mt-0.5" />
                <div>
                  <p className="font-700 text-brand-blue">Teléfono</p>
                  <a href="tel:+525588802100" className="text-sm text-gray-500 hover:text-brand-blue">
                    (55) 888 02 100
                  </a>
                  {" · "}
                  <a
                    href="https://wa.me/525588802100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-brand-blue"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail size={20} className="text-brand-red shrink-0 mt-0.5" />
                <div>
                  <p className="font-700 text-brand-blue">Correo</p>
                  <a
                    href="mailto:contacto@voztotal.mx"
                    className="text-sm text-gray-500 hover:text-brand-blue"
                  >
                    contacto@voztotal.mx
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin size={20} className="text-brand-red shrink-0 mt-0.5" />
                <div>
                  <p className="font-700 text-brand-blue">Querétaro</p>
                  <p className="text-sm text-gray-500">
                    Avenida Armando Birlaín Shaffler 2001, Centro Sur, 76090
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock size={20} className="text-brand-red shrink-0 mt-0.5" />
                <div>
                  <p className="font-700 text-brand-blue mb-1">Horario</p>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p><span className="font-600 text-gray-700">Lunes – Viernes:</span> 9:00am – 6:00pm</p>
                    <p><span className="font-600 text-gray-700">Sábado:</span> 10:00am – 1:00pm</p>
                    <p><span className="font-600 text-gray-700">Domingo:</span> Cerrado</p>
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
