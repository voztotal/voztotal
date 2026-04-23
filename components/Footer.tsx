import Link from "next/link";
import Image from "next/image";

const services = [
  "Telefonía IP",
  "Conectividad SD-WAN",
  "Internet Dedicado",
  "Campañas SMS",
  "Seguridad en Ciberataques",
  "Soporte TI",
];

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Image
            src="/assets/img/logo.png"
            alt="VOZTOTAL"
            width={140}
            height={40}
            className="h-10 w-auto mb-4 brightness-0 invert"
          />
          <p className="text-sm text-blue-200 leading-relaxed">
            Empresa mexicana con +13 años de experiencia en soluciones de
            telecomunicaciones para empresas y gobierno.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-700 uppercase tracking-wider text-blue-300 mb-4">
            Servicios
          </h3>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s}>
                <Link
                  href="/contacto"
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-700 uppercase tracking-wider text-blue-300 mb-4">
            Contacto
          </h3>
          <ul className="space-y-3 text-sm text-blue-100">
            <li>
              <a href="tel:+525588802100" className="hover:text-white transition-colors">
                (55) 888 02 100
              </a>
            </li>
            <li>
              <a
                href="mailto:contacto@voztotal.mx"
                className="hover:text-white transition-colors"
              >
                contacto@voztotal.mx
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/525588802100"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp: (55) 888 02 100
              </a>
            </li>
            <li className="text-blue-200 leading-relaxed">
              Querétaro · Ciudad de México · Mérida
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-blue-300">
          <span>© {new Date().getFullYear()} VOZTOTAL. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <Link href="/politica-de-privacidad" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos-y-condiciones" className="hover:text-white transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
