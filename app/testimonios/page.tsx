import type { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonios",
  description:
    "Conoce lo que dicen nuestros clientes sobre los servicios de VOZTOTAL: reducción de costos, mejora en conectividad y atención personalizada.",
  alternates: { canonical: "https://voztotal.mx/testimonios" },
};

const testimonials = [
  {
    id: "1",
    logo: "https://1c9f9a8f20.cbaul-cdnwnd.com/998c7bba97934b27f4afa7de040ce73f/200000016-0aaa00aaa1/nissan-brand-logo-1200x938-1594842787.jpg?ph=1c9f9a8f20",
    testimonio:
      "De los principales beneficios de contar con una tecnología SD-WAN es que nuestro presupuesto se redujo un 20 % incrementando de 6 a 150 megas el servicio de internet.",
    name: "Miguel Templos",
    role: "Director de IT",
    company: "GRUPO COBAMA, AUTOS SONI",
  },
  {
    id: "2",
    logo: "https://1c9f9a8f20.cbaul-cdnwnd.com/998c7bba97934b27f4afa7de040ce73f/200000018-b3395b3397/OIP.jfif?ph=1c9f9a8f20",
    testimonio:
      "El equipo de Voztotal se ha convertido en un aliado de negocio muy importante para Resuelve tu deuda — gracias a ellos bajamos los costos de telefonía en Italia, Portugal, España, Brasil y México, pero no solo eso, el acompañamiento técnico es lo que más satisfecho nos tiene.",
    name: "Carlos Vargas",
    role: "Director de IT",
    company: "Resuelve tu Deuda",
  },
  {
    id: "3",
    logo: "https://1c9f9a8f20.cbaul-cdnwnd.com/998c7bba97934b27f4afa7de040ce73f/200000019-3e2733e274/Default-simple.png?ph=1c9f9a8f20",
    testimonio:
      "Una de las cosas que más nos convenció de Voztotal es la facilidad de hacer negocios con ustedes y el alto conocimiento técnico de cada solución.",
    name: "Adal Miranda",
    role: "Director Tecnologías de Redes y Equipos de Misión Crítica",
    company: "C5 CDMX",
  },
  {
    id: "4",
    logo: "https://1c9f9a8f20.cbaul-cdnwnd.com/998c7bba97934b27f4afa7de040ce73f/200000023-3777737778/Presentacion_VT%20%281%29.jpg?ph=1c9f9a8f20",
    testimonio:
      "Definitivamente son actores muy relevantes porque tienen la experiencia del despliegue de seguridad y esto permite que tengamos la certeza de que nuestros servidores siempre están seguros.",
    name: "Janeth Medina",
    role: "Directora de Seguridad IT",
    company: "SBS COLOMBIA",
  },
];

export default function TestimoniosPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(135deg, #1a2d5a 0%, #2E457A 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-700 text-white mb-4">Testimonios</h1>
          <p className="text-blue-200 text-lg">
            Lo que dicen nuestros clientes sobre VOZTOTAL
          </p>
        </div>
      </section>

      {/* ── Cards ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <Quote size={32} className="text-brand-red/30 mb-4 shrink-0" />
                <p className="text-gray-600 leading-relaxed flex-1 italic mb-6">
                  &ldquo;{t.testimonio}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 shrink-0">
                    <Image
                      src={t.logo}
                      alt={t.company}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain p-1"
                      unoptimized
                    />
                  </div>
                  <div>
                    <p className="font-700 text-brand-blue">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                    <p className="text-sm font-600 text-brand-red">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
