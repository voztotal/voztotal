import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de VOZTOTAL. Descripción de cómo se recopila, utiliza y comparte su información personal.",
  alternates: { canonical: "https://voztotal.mx/politica-de-privacidad" },
};

const sections = [
  {
    n: "1",
    title: "Información personal que recopilamos",
    content: (
      <p>
        Cuando visita el Sitio, recopilamos automáticamente cierta información sobre su
        dispositivo, incluida información sobre su navegador web, dirección IP, zona
        horaria y algunas de las cookies que están instaladas en su dispositivo. Además,
        a medida que navega por el Sitio, recopilamos información sobre las páginas web
        individuales o los productos que ve, las páginas web o los términos de búsqueda
        que lo remitieron al Sitio e información sobre cómo interactúa usted con el
        Sitio. Nos referimos a esta información recopilada automáticamente como
        &ldquo;Información del dispositivo&rdquo;.
      </p>
    ),
  },
  {
    n: "2",
    title: "¿Cómo recopilamos la información?",
    content: (
      <div className="space-y-5">
        <div>
          <h4 className="font-700 text-brand-blue mb-2">1. Cookies</h4>
          <p className="mb-3">
            Aquí tienes una lista de cookies que utilizamos. Las enlistamos para que
            puedas elegir si quieres optar por quitarlas o no.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-500">
            <li>_session_id — almacena información sobre su sesión.</li>
            <li>_shopify_visit — registra el número de visitas.</li>
            <li>_shopify_uniq — cuenta visitas de un mismo cliente.</li>
            <li>cart — almacena el contenido del carrito.</li>
            <li>_secure_session_id — token de sesión segura.</li>
            <li>storefront_digest — acceso a tiendas con contraseña.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-700 text-brand-blue mb-2">2. Archivos de registro</h4>
          <p>
            Los &ldquo;Archivos de registro&rdquo; rastrean las acciones que ocurren en
            el Sitio y recopilan datos, incluyendo su dirección IP, tipo de navegador,
            proveedor de servicio de Internet, páginas de referencia/salida y marcas de
            fecha/horario.
          </p>
        </div>
        <div>
          <h4 className="font-700 text-brand-blue mb-2">3. Balizas web</h4>
          <p>
            Las &ldquo;balizas web&rdquo;, las &ldquo;etiquetas&rdquo; y los
            &ldquo;píxeles&rdquo; son archivos electrónicos utilizados para registrar
            información sobre cómo navega usted por el Sitio.
          </p>
        </div>
        <div>
          <h4 className="font-700 text-brand-blue mb-2">4. Extras</h4>
          <p>
            Además, cuando hace una compra o intenta hacer una compra a través del
            Sitio, recopilamos cierta información de usted, entre la que se incluye su
            nombre, dirección de facturación, dirección de envío, información de pago
            incluidos los números de la tarjeta de crédito, dirección de correo
            electrónico y número de teléfono. Nos referimos a esta información como
            &ldquo;Información del pedido&rdquo;.
          </p>
          <p className="mt-3">
            Recopilamos sus datos también una vez que los inserta en &ldquo;contacto&rdquo;
            para comunicarnos con usted, hacer uso de mailing, campañas de SMS, o
            cualquier otro medio de marketing o remarketing en la que usted acepte en
            recibir información de VOZTOTAL.
          </p>
        </div>
      </div>
    ),
  },
  {
    n: "3",
    title: "¿Cómo utilizamos su información personal?",
    content: (
      <div className="space-y-3">
        <p>
          Usamos la Información del pedido que recopilamos en general para preparar los
          pedidos realizados a través del Sitio (incluido el procesamiento de su
          información de pago, la organización de los envíos y la entrega de facturas
          y/o confirmaciones de pedido). Además, utilizamos esta Información del pedido
          para: comunicarnos con usted; examinar nuestros pedidos en busca de fraudes o
          riesgos potenciales; y cuando de acuerdo con las preferencias que usted
          compartió con nosotros, le proporcionamos información o publicidad relacionada
          con nuestros productos o servicios.
        </p>
        <p>
          Utilizamos la Información del dispositivo que recopilamos para ayudarnos a
          detectar posibles riesgos y fraudes (en particular, su dirección IP) y, en
          general, para mejorar y optimizar nuestro Sitio.
        </p>
      </div>
    ),
  },
  {
    n: "4",
    title: "Compartir su información personal",
    content: (
      <div className="space-y-3">
        <p>
          Compartimos su Información personal con terceros para que nos ayuden a
          utilizar su Información personal, tal como se describió anteriormente. También
          utilizamos Google Analytics para ayudarnos a comprender cómo usan nuestros
          clientes el Sitio. Puede darse de baja de Google Analytics aquí:{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            className="text-brand-red underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            tools.google.com/dlpage/gaoptout
          </a>
          .
        </p>
        <p>
          Finalmente, también podemos compartir su Información personal para cumplir con
          las leyes y regulaciones aplicables, o para proteger nuestros derechos.
        </p>
      </div>
    ),
  },
  {
    n: "5",
    title: "Publicidad orientada por el comportamiento",
    content: (
      <p>
        Como se describió anteriormente, utilizamos su Información personal para
        proporcionarle anuncios publicitarios dirigidos o comunicaciones de marketing.
        Puede darse de baja de la publicidad dirigida escribiéndonos a{" "}
        <a href="mailto:contacto@voztotal.mx" className="text-brand-red underline">
          contacto@voztotal.mx
        </a>
        .
      </p>
    ),
  },
  {
    n: "6",
    title: "No rastrear",
    content: (
      <p>
        Tenga en cuenta que no alteramos las prácticas de recopilación y uso de datos de
        nuestro Sitio cuando vemos una señal de &ldquo;No rastrear&rdquo; desde su
        navegador.
      </p>
    ),
  },
  {
    n: "7",
    title: "Retención de datos",
    content: (
      <p>
        Cuando realiza un pedido a través del Sitio, mantendremos su Información del
        pedido para nuestros registros a menos que y hasta que nos pida que eliminemos
        esta información.
      </p>
    ),
  },
  {
    n: "8",
    title: "Menores",
    content: <p>El sitio no está destinado a personas menores de 18 años.</p>,
  },
  {
    n: "9",
    title: "Cambios",
    content: (
      <p>
        Podemos actualizar esta política de privacidad periódicamente para reflejar, por
        ejemplo, cambios en nuestras prácticas o por otros motivos operativos, legales o
        reglamentarios.
      </p>
    ),
  },
  {
    n: "10",
    title: "Contáctenos",
    content: (
      <p>
        Para obtener más información sobre nuestras prácticas de privacidad, si tiene
        alguna pregunta o si desea presentar una queja, contáctenos por correo
        electrónico a{" "}
        <a href="mailto:contacto@voztotal.mx" className="text-brand-red underline">
          contacto@voztotal.mx
        </a>{" "}
        o por correo postal: Boulevard de Los Gobernadores, Monte Blanco II, Querétaro,
        QRO, 76087, México.
      </p>
    ),
  },
];

export default function PolityPage() {
  return (
    <>
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #1a2d5a 0%, #2E457A 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-700 text-white">Política de Privacidad</h1>
          <p className="mt-4 text-blue-200">
            Esta Política de privacidad describe cómo se recopila, utiliza y comparte su
            información personal cuando visita <strong>www.voztotal.mx</strong>.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((s) => (
              <div key={s.n} className="border-b border-gray-100 pb-10">
                <h2 className="text-xl font-700 text-brand-blue mb-4">
                  <span className="text-brand-red mr-2">{s.n}.</span>
                  {s.title}
                </h2>
                <div className="text-gray-600 leading-relaxed">{s.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
