import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Network, Globe, MessageSquare, Shield, Headphones } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://voztotal.mx/" },
};

const services = [
  {
    icon: Phone,
    title: "Telefonía IP",
    description:
      "Tecnología 100% SIP que elimina la infraestructura dedicada. Reemplaza tu línea analógica y disfruta de ahorros reales.",
    footer: "PBX en nube o terminación de llamadas al mejor costo del mercado.",
  },
  {
    icon: Network,
    title: "Conectividad SD-WAN",
    description:
      "Crea tu propia red privada basada en software. Reduce gastos hasta 50% vs redes MPLS sin sacrificar rendimiento.",
    footer: "Red privada empresarial sin invertir miles de dólares en servicios dedicados.",
  },
  {
    icon: Globe,
    title: "Internet Dedicado",
    description:
      "Múltiples interconexiones (peerings) con los Tier-1 más importantes a nivel global. Hasta 10 Gb simétricos.",
    footer: "Baja latencia garantizada para operaciones críticas.",
  },
  {
    icon: MessageSquare,
    title: "Campañas SMS",
    description:
      "Comunica ofertas, promociones y descuentos directamente a los dispositivos de tus clientes más valiosos.",
    footer: "Marketing directo con tasa de apertura superior al 95%.",
  },
  {
    icon: Shield,
    title: "Seguridad en Ciberataques",
    description:
      "México está entre los países más atacados de América Latina. Protege tu infraestructura con expertos en ciberseguridad.",
    footer: "NOC/SOC con atención personalizada 24/7.",
  },
  {
    icon: Headphones,
    title: "Soporte TI",
    description:
      "Asistencia técnica especializada para resolver cualquier inconveniente en los equipos electrónicos de tu empresa.",
    footer: "Cuadrillas de instaladores e ingenieros por segmento de mercado.",
  },
];

const demos = [
  { title: "Telefonía IP", image: "/assets/img/phone.webp" },
  { title: "Internet", image: "/assets/img/wifi.webp" },
  { title: "Campañas SMS", image: "/assets/img/movil.webp" },
  { title: "Conectividad de Redes", image: "/assets/img/networks.webp" },
  { title: "Seguridad en Ciberataques", image: "/assets/img/cybersecurity.webp" },
  { title: "Soporte TI", image: "/assets/img/support.webp" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="min-h-[calc(100vh-4rem)] flex items-center"
        style={{
          background: "linear-gradient(135deg, #1a2d5a 0%, #2E457A 60%, #3d5a94 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-200 text-sm font-600 mb-6">
              Empresa Mexicana · +13 años de experiencia
            </span>
            <h1 className="text-5xl lg:text-6xl font-700 text-white leading-tight mb-6">
              ¡VozTotal es tu mejor aliado!
            </h1>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-lg">
              ¿Buscas optimizar costos en tus facturas de Internet, Telefonía, Campañas SMS o
              Soporte TI? Reducimos tus gastos hasta un <strong className="text-white">50%</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 rounded-full bg-brand-red text-white font-700 hover:bg-brand-red-hover transition-colors"
              >
                Contáctanos
              </Link>
              <a
                href="#servicios"
                className="px-8 py-4 rounded-full border-2 border-white/40 text-white font-700 hover:bg-white/10 transition-colors"
              >
                Ver servicios
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/assets/img/bg-purple.webp"
              alt="Soluciones de telecomunicaciones para empresas"
              width={600}
              height={450}
              className="rounded-2xl shadow-2xl w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-700 text-brand-blue mb-4">Servicios</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Soluciones de telecomunicaciones integrales para empresas y gobierno.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:border-brand-blue/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <s.icon size={24} className="text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-700 text-brand-blue mb-3">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{s.description}</p>
                {s.footer && (
                  <p className="text-xs text-gray-400 border-t border-gray-100 pt-3 mt-3">
                    {s.footer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demos ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-700 text-brand-blue mb-4">
              Quiero un DEMO de:
            </h2>
            <p className="text-gray-500">
              Agenda una demostración gratuita según las operaciones de tu empresa.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demos.map((d) => (
              <div
                key={d.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={d.image}
                    alt={d.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-700 text-brand-blue mb-4">{d.title}</h3>
                  <Link
                    href="/contacto"
                    className="inline-block px-5 py-2 rounded-full bg-brand-red text-white text-sm font-700 hover:bg-brand-red-hover transition-colors"
                  >
                    Solicitar DEMO
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #1a2d5a 0%, #2E457A 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl lg:text-4xl font-300 text-white mb-8 leading-relaxed">
            ¡DEMO GRATUITO SEGÚN LAS OPERACIONES DE TU EMPRESA!
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 rounded-full bg-brand-red text-white font-700 text-lg hover:bg-brand-red-hover transition-colors"
          >
            Solicitar ahora
          </Link>
        </div>
      </section>
    </>
  );
}
