import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Empresa mexicana fundada en 2009 con +13 años de experiencia en telecomunicaciones, telefonía IP y seguridad informática para clientes empresariales y gubernamentales.",
  alternates: { canonical: "https://voztotal.mx/nosotros" },
};

const values = [
  {
    icon: Zap,
    title: "Conectividad y tecnología superior",
    items: [
      "Latencia < 1ms",
      "Menos del 0.01% en pérdida de paquetes",
      "Alta disponibilidad en servidores para PBX y SIP Trunk",
    ],
    image: "/assets/img/tech.webp",
    imageAlt: "Tecnología de conectividad superior",
    reverse: false,
  },
  {
    icon: Users,
    title: "El mejor capital humano",
    items: [
      "Instalación en 72 hrs",
      "Cuadrillas de instaladores",
      "Ingenieros especializados en cada segmento de mercado",
    ],
    image: "/assets/img/team.webp",
    imageAlt: "Equipo de trabajo VOZTOTAL",
    reverse: true,
  },
  {
    icon: Clock,
    title: "Mejores prácticas operativas",
    items: [
      "NOC / SOC atención personalizada 24/7",
      "Procesos internos orientados a la satisfacción del cliente",
    ],
    image: "/assets/img/practices.webp",
    imageAlt: "Mejores prácticas operativas",
    reverse: false,
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* ── Mission ── */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(135deg, #1a2d5a 0%, #2E457A 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-700 text-white mb-8">Misión</h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            Proveer las soluciones más confiables e innovadoras de tecnologías de información,
            seguridad informática y telecomunicaciones, para mejorar la experiencia y
            productividad de nuestros clientes empresariales y gubernamentales.
          </p>
        </div>
      </section>

      {/* ── Description ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-red text-lg font-700 mb-2">Easy Connection</p>
              <h2 className="text-4xl font-700 text-brand-blue mb-8 leading-tight">
                Empresa Mexicana con +13 años de experiencia
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Comenzamos en el 2009 con las mejores prácticas operativas en
                  telecomunicaciones para las principales empresas de Ciudad de México.
                </p>
                <p>
                  Tenemos la flexibilidad para entender las actividades y necesidades del
                  cliente con soluciones que excedan sus expectativas, por eso hacemos que
                  nuestros aliados reduzcan los costos de sus facturas.
                </p>
                <p>
                  El cliente, como eje de nuestro negocio, nos permite tener una atención
                  permanente y personalizada integrada en todos nuestros servicios.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/assets/img/logo.png"
                alt="Logo VOZTOTAL"
                width={320}
                height={200}
                className="w-64 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Value propositions ── */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-700 text-brand-blue text-center mb-16">
            Propuesta de valor
          </h2>
          <div className="space-y-20">
            {values.map((v) => (
              <div
                key={v.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  v.reverse ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className={v.reverse ? "lg:[direction:ltr]" : ""}>
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5">
                    <v.icon size={24} className="text-brand-blue" />
                  </div>
                  <h3 className="text-2xl font-700 text-brand-blue mb-5">{v.title}</h3>
                  <ul className="space-y-3">
                    {v.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-600">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-red shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={v.reverse ? "lg:[direction:ltr]" : ""}>
                  <Image
                    src={v.image}
                    alt={v.imageAlt}
                    width={560}
                    height={380}
                    className="rounded-2xl w-full object-cover shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Banner ── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #1a2d5a 0%, #2E457A 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-3xl font-300 text-white">
            Atención permanente y personalizada{" "}
            <strong className="font-700">SIN COSTO</strong>
          </p>
        </div>
      </section>
    </>
  );
}
