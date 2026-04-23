import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clientes",
  description:
    "Durante 13 años, nuestro canal de crecimiento ha sido la recomendación de nuestros clientes. Conoce cómo VOZTOTAL ayuda a empresas a optimizar sus telecomunicaciones.",
  alternates: { canonical: "https://voztotal.mx/clientes" },
};

export default function ClientesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(135deg, #1a2d5a 0%, #2E457A 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-700 text-white leading-tight">
            Sin ustedes, VOZTOTAL no sería posible.
          </h1>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/img/customs.webp"
                alt="Clientes de VOZTOTAL"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-700 text-brand-blue mb-6">
                13 años creciendo juntos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Durante 13 años nuestro canal había sido la recomendación, pues gracias a
                cada cliente que recomendó nuestros servicios pudimos expandirnos y
                satisfacer esas necesidades que muchas empresas tenían. Hoy en día decidimos
                seguir ayudando, a través de nuestro canal digital y seguimos agradeciendo
                la recomendación de cada cliente con sus compañeros, amigos, colegas y
                familiares. VOZTOTAL seguirá mejorando más empresas y negocios en la
                optimización de costos en el área de telecomunicaciones.
              </p>
              <Link
                href="/contacto"
                className="inline-block px-8 py-4 rounded-full bg-brand-red text-white font-700 hover:bg-brand-red-hover transition-colors"
              >
                Únete a nuestros clientes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Thank you banner ── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #1a2d5a 0%, #2E457A 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-6xl font-700 text-white tracking-widest">¡ GRACIAS !</p>
        </div>
      </section>
    </>
  );
}
