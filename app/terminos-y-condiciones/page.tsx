import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso de los servicios de VOZTOTAL. Conozca sus derechos y obligaciones como cliente.",
  alternates: { canonical: "https://voztotal.mx/terminos-y-condiciones" },
};

export default function TermsPage() {
  return (
    <>
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #1a2d5a 0%, #2E457A 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-700 text-white">Términos y Condiciones</h1>
          <p className="mt-4 text-blue-200">
            Por favor lea cuidadosamente los siguientes términos de uso y responsabilidad
            antes de acceder a las páginas web de <strong>www.voztotal.mx</strong>.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* ── Section 1 ── */}
          <div className="border-b border-gray-100 pb-10">
            <h2 className="text-xl font-700 text-brand-blue mb-6">
              <span className="text-brand-red mr-2">1.</span>
              Funcionalidad y Beneficios del Servicio
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>1.1 Las cuentas gratuitas tendrán acceso a las siguientes funcionalidades:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-500 ml-4">
                <li>Número de teléfono virtual exclusivo (Solo números en donde tengamos cobertura). Solo aplica a números nacionales (Ciudad de México e interior de la República).</li>
                <li>Llamadas entrantes SIN COSTO, la tarifa de minuto adicional será de .80ctvs + IVA.</li>
                <li>La bolsa de minutos se renueva mensualmente y no es acumulable.</li>
                <li>Saludo de bienvenida personalizado.</li>
                <li>Sin límite de extensiones por cuenta.</li>
                <li>Grabación de llamadas con 20Gb de almacenamiento en formato wav.</li>
                <li>Reporte de llamadas, desde la generación de cuenta.</li>
              </ul>
            </div>
          </div>

          {/* ── Section 2 ── */}
          <div className="border-b border-gray-100 pb-10">
            <h2 className="text-xl font-700 text-brand-blue mb-6">
              <span className="text-brand-red mr-2">2.</span>
              Términos y Condiciones
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-8">

              <div>
                <h3 className="font-700 text-brand-blue mb-3">1. CALLCENTER-TOTAL®</h3>
                <p className="mb-3">
                  Es un servicio de telecomunicaciones para negocios y empresas. Los términos y
                  condiciones del servicio están estrictamente alineados para un uso empresarial
                  y por ende, nos reservamos el derecho de restringir las cuentas que no se
                  utilicen para dicho fin. Dentro de las obligaciones del cliente resaltamos:
                </p>
                <ul className="list-inside space-y-1 text-sm text-gray-500 ml-4">
                  <li>(ii) <strong>No perturbar, impedir, interferir, distorsionar o dañar los sistemas y/o software de VozTotal;</strong></li>
                  <li>(iii) <strong>No utilizar los servicios para la realización de actividades contrarias a las leyes, a la moral, al orden público; ni a utilizar los servicios con fines o efectos ilícitos, prohibidos, lesivos de derechos e intereses de terceros y en caso de hacerlo VozTotal tiene el derecho de suspender el servicio contratado sin previo aviso.</strong></li>
                </ul>
                <p className="mt-3">
                  <strong>¿Qué se considera el utilizar nuestros servicios para la realización de actividades contrarias a las leyes, a la moral, al orden público, o con fines o efectos ilícitos prohibidos, lesivos de derechos e intereses de terceros?</strong>
                </p>
                <p className="mt-2">
                  A aquellas actividades o acciones de uso que NO sean para fines empresariales, o que competan directamente con su giro de negocio. Esto significa que NO está permitido su uso para fines personales o cualquier otro no establecido en este documento.
                </p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-3">1.1 Estado de la Cuenta</h3>
                <p>
                  Para mantener el estado <strong>&ldquo;de por vida&rdquo;</strong> la cuenta debe estar en
                  constante uso, es decir, recibir y/o realizar llamadas. El uso de la cuenta se
                  mide con promedio de 15 llamadas al mes, realizando y/o recibiendo.
                </p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-3">1.2 Configuración de la Cuenta</h3>
                <p className="mb-2">
                  La cuenta debe configurarse a un mínimo del 50%, eso es, configurar 3 de los 6
                  apartados que aparecen en la pantalla principal del Panel de Administrador de
                  VozTotal® en un lapso de 3 semanas. Esto incluye:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-500 ml-4 space-y-1">
                  <li>¡Une a tu equipo! – Crea 3 extensiones.</li>
                  <li>Alertas de llamadas – Activar las alertas de llamadas perdidas con un correo electrónico empresarial.</li>
                  <li>Haz una llamada – Realizar una llamada a través de la aplicación de VozTotal®.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-3">1.3 Cuentas Gratuitas</h3>
                <p className="mb-2">
                  Las cuentas gratuitas pueden tener acceso para configurar el servicio de
                  WhatsApp for Business presentando con su asesor la siguiente información:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-500 ml-4 space-y-1">
                  <li>Nombre del titular de la cuenta gratuita.</li>
                  <li>Correo electrónico empresarial (No se aceptan correos de uso personal o genérico).</li>
                  <li>Teléfono de la empresa.</li>
                  <li>Link al sitio web de la empresa o en su caso página en redes sociales.</li>
                  <li>Cargo en la empresa.</li>
                  <li>Nombre de la empresa.</li>
                  <li>Número aproximado de empleados.</li>
                </ul>
                <p className="mt-3">
                  Se debe de entregar mínimo 5 de los 7 puntos mencionados anteriormente. VozTotal®
                  se reserva el derecho de negarle el alta de servicio de WhatsApp for Business si
                  se sospecha que podría usarse para: uso personal, fraude, extorsión, cobranza, o
                  uso atípico del servicio.
                </p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-3">1.4 Cuentas Demos</h3>
                <p>Las cuentas demo son exclusivamente para nuevos usuarios. Si anteriormente tuviste una cuenta demo o fuiste cliente, no podrás ser considerado para acceder a esta modalidad de servicio.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-3">1.5 Cuenta Cancelada</h3>
                <p>Una vez cancelada la cuenta, no hay forma de recuperar la información previa.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-3">1.6 Suspensión de Cuenta</h3>
                <p className="mb-2">
                  Si se sospecha de alguna cuenta gratuita en cuanto a su forma de uso, la cuenta
                  se suspenderá. Podrá ser recuperada presentando los siguientes documentos a un
                  asesor en un lapso no mayor de 24 horas:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-500 ml-4 space-y-1">
                  <li>Comprobante de identidad (INE, Pasaporte o Cédula Profesional).</li>
                  <li>RFC.</li>
                  <li>Comprobante de domicilio no mayor a 3 meses.</li>
                </ul>
                <p className="mt-3">Si la documentación no se presenta en el tiempo indicado, la cuenta será eliminada de forma definitiva y no se aceptarán prórrogas.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-3">1.7 Asignación de Números</h3>
                <p>Los números son asignados a la cuenta gratuita en un lapso de 3 a 5 días hábiles, dependiendo de la disponibilidad y demanda.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-3">1.8 Cambio de número</h3>
                <p>No se puede hacer cambio del número asignado.</p>
              </div>
            </div>
          </div>

          {/* ── Section 3 ── */}
          <div className="border-b border-gray-100 pb-10">
            <h2 className="text-xl font-700 text-brand-blue mb-6">
              <span className="text-brand-red mr-2">3.</span>
              Cancelación o Suspensión de la Cuenta
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>La cuenta se suspenderá si:</p>
              <ul className="list-disc list-inside text-sm text-gray-500 ml-4 space-y-1">
                <li>3.1.1 Si no se cumple con los términos y condiciones establecidos.</li>
                <li>3.1.2 Si la cuenta es usada para términos no relacionados a un tema empresarial.</li>
                <li>3.1.3 Si se sospecha de una cuenta y no se envía la documentación anteriormente mencionada en un lapso de 24 horas, la cuenta será cancelada.</li>
              </ul>

              <div className="mt-4">
                <h3 className="font-700 text-brand-blue mb-2">3.2 VozTotal®</h3>
                <p className="mb-2">Se reserva el derecho a suspender o cancelar las cuentas gratuitas en las siguientes condiciones:</p>
                <ul className="list-disc list-inside text-sm text-gray-500 ml-4 space-y-1">
                  <li>3.2.1 Mal uso de la cuenta, número virtual y/o WhatsApp for Business. (Fraude, extorsión, cobranza, spam).</li>
                  <li>3.2.2 Si el uso del servicio genera un riesgo real o algún daño o pérdida a terceros u otros usuarios.</li>
                  <li>3.2.3 Cualquier otro caso extraordinario, no estipulado en este documento, relacionado con el uso atípico de la cuenta para el que fue asignado inicialmente.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── Section 4 ── */}
          <div className="border-b border-gray-100 pb-10">
            <h2 className="text-xl font-700 text-brand-blue mb-6">
              <span className="text-brand-red mr-2">4.</span>
              Términos y Condiciones Generales
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-8">

              <div>
                <h3 className="font-700 text-brand-blue mb-2">1. Acuerdo entre usuarios y Voztotal</h3>
                <p>Las páginas web de voztotal.com y demás relacionadas, se encuentran operadas por la persona moral denominada VOZTOTAL SAS. y sus afiliadas, a quienes en lo sucesivo se le denominará como &ldquo;Voztotal&rdquo;.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">2. Términos</h3>
                <p>Estos términos y condiciones se aplican en caso de acceso a las páginas web, plataforma, aplicación, software, sistema, programa o afín propiedad de Voztotal y/o al completar el proceso de compra de servicios en el portal o directamente con un representante autorizado. Estos términos y condiciones pueden ser modificados o eliminados por Voztotal, sin notificación o consulta previa, en cualquier momento y por cualquier motivo.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">3. Uso del sitio – Limitación de uso</h3>
                <p>El contenido de las páginas web es propiedad de Voztotal; usted no debe modificar, copiar, distribuir, transmitir, mostrar, realizar, reproducir, publicar, licenciar, crear trabajos derivados de, transferir, o vender cualquier información, software, producto o servicio obtenido de las páginas web. Cualquier otro uso de materiales en este sitio sin el permiso por escrito de Voztotal, está estrictamente prohibido.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">4. Derechos de autor y marcas registradas</h3>
                <p className="mb-2">Todo el contenido de las páginas web, incluido, pero no limitativo a los textos, diseño, imágenes, gráficos, interfaces, código de software, selección, arreglos, entre otros, son propiedad de Voztotal y están protegidos por las leyes de propiedad intelectual de los Estados Unidos Mexicanos.</p>
                <p><strong>Errores tipográficos:</strong> En el caso de encontrarse un error tipográfico relativo al contenido de un producto o servicio provisto por Voztotal, éste tendrá el derecho de rechazar, anular o cancelar cualquier orden o notificación, aún cuando ésta haya sido confirmada.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">5. Vínculos electrónicos de terceros</h3>
                <p className="mb-2">Las páginas web pueden contener vínculos electrónicos hacia otras páginas web operadas por proveedores externos. Voztotal no tiene ningún tipo de control sobre estas páginas web vinculadas y no se hace responsable por las políticas y acciones independientes emprendidas por otras empresas.</p>
                <p>Voztotal busca proteger la integridad de sus sitios web y solicita comentarios de lo encontrado en sus páginas web a través de: <a href="mailto:contacto@voztotal.mx" className="text-brand-red underline">contacto@voztotal.mx</a></p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">6. Información enviada por usuarios</h3>
                <p>Exceptuando la información personal provista y amparada bajo las pautas establecidas en el Aviso de Privacidad de Voztotal, cualquier material, información u otro tipo de comunicación transmitida, cargada o publicada en las páginas web por parte del Cliente, será considerada como no confidencial.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">7. Participación de los usuarios</h3>
                <p>Voztotal y sus afiliadas, se reservan el derecho y su completa discreción, de bloquear y/o eliminar publicaciones que consideren abusivas, difamatorias, obscenas, fraudulentas, engañosas, ofensivas, que violen derechos de autor, marcas registradas y/o derechos de propiedad intelectual, o que sean inaceptables para los valores corporativos de Voztotal.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">8. Política de suspensión o cancelación de servicios</h3>
                <p>Voztotal y sus afiliadas, se reservan el derecho a suspender o cancelar el servicio contratado, total o parcialmente, temporal o definitivamente en los casos en que se tengan algunos indicios de falsedad en los datos proporcionados por el Cliente, o cuando estos no validen sus datos y documentos a solicitud de Voztotal, o se tengan indicios de que se realizará o se está realizando un mal uso del servicio.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">9. General</h3>
                <p>Las páginas web <strong>voztotal.com</strong> y demás relacionadas, están dirigidas a residentes de los Estados Unidos Mexicanos. CLIENTES CONTRATANTES CON LA PERSONA MORAL DENOMINADA VOZTOTAL SAS y sus afiliadas, a quienes en lo sucesivo se le denominará como <strong>&ldquo;Voztotal&rdquo;</strong>, TÉRMINOS Y CONDICIONES GENERALES DE LOS SERVICIOS CONTRATADOS.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">10. Generalidades del servicio</h3>
                <p className="mb-2">Voztotal provee el servicio de un conmutador virtual con telefonía, sobre el cual utiliza un software para llevar a cabo la unión entre un proveedor de telefonía autorizado y el Cliente. Este servicio no debe ser considerado como uno de telecomunicación.</p>
                <p className="mb-2">El servicio puede ser contratado en diferentes modalidades: a través de las páginas web, directo con Voztotal o por medio de algún representante autorizado.</p>
                <p>El servicio solicitado a través de las páginas voztotal.com es prepago, teniendo una duración de 30 días naturales. El Cliente debe seguir realizando los pagos cada 30 días naturales para mantener su servicio activo.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">12. Política de &ldquo;Conoce a tu Cliente&rdquo;</h3>
                <p className="mb-3">Voztotal ha implementado una política de &ldquo;Conoce a tu Cliente&rdquo; con el fin de validar, revisar y actualizar la información proporcionada por los Clientes. Voztotal podrá solicitar al Cliente en cualquier momento los siguientes datos y documentos:</p>
                <div className="space-y-3 text-sm text-gray-500">
                  <p><strong className="text-gray-700">I. Persona física — Datos personales:</strong> Nombre completo, fecha de nacimiento, país de nacimiento, nacionalidad, ocupación, número telefónico, correo electrónico, datos bancarios.</p>
                  <p><strong className="text-gray-700">I. Persona física — Documentos:</strong> Identificación Oficial Vigente (INE, IFE, PASAPORTE), Cédula de Identificación Fiscal Vigente, Comprobante de Domicilio vigente (no mayor a 3 meses).</p>
                  <p><strong className="text-gray-700">II. Persona moral — Datos:</strong> Denominación o Razón Social, nombre del Representante Legal, número telefónico, correo electrónico, datos bancarios.</p>
                  <p><strong className="text-gray-700">II. Persona moral — Documentos:</strong> Acta Constitutiva debidamente inscrita en Registro Público de Comercio, Identificación Oficial Vigente del Representante Legal, Poder del Representante Legal, Cédula de Identificación Fiscal Vigente y Comprobante de Domicilio vigente (no mayor a 3 meses).</p>
                </div>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">13. Validación de datos</h3>
                <p className="mb-2">El Cliente acepta y reconoce que sus datos y/o documentos proporcionados a Voztotal deberán ser validados dentro de un plazo no mayor a 3 días hábiles. Voztotal y sus afiliadas se reservan el derecho a cancelar total o parcialmente el servicio en caso de falsedad en los datos, falta de validación, o indicios de mal uso del servicio.</p>
                <p>Voztotal no se hace responsable de la fidelidad y/o autenticidad de los datos proporcionados por el Cliente, por lo que este se obliga con Voztotal a responder de cualquier responsabilidad que se derive por dicho concepto.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">14. Cambio de titular de la cuenta</h3>
                <p className="mb-2">El Cliente está facultado para solicitar el cambio de titular de la cuenta proporcionando los datos y/o documentos solicitados por Voztotal. Voztotal realizará el cambio dentro de los 5 días hábiles contados a partir de recibida la solicitud.</p>
                <p>Voztotal no se hace responsable de la fidelidad y/o autenticidad de los datos proporcionados por el Cliente para dicho cambio.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">15. Planes del servicio</h3>
                <p className="mb-3">El servicio que ofrece Voztotal tiene tres modalidades:</p>
                <ul className="list-disc list-inside text-sm text-gray-500 ml-4 space-y-2">
                  <li><strong>Plan de Bolsa de Minutos:</strong> Incluye determinada cantidad de minutos. Los minutos no se acumulan para el siguiente mes.</li>
                  <li><strong>Extensiones ilimitadas:</strong> El cobro es por extensión ilimitada por Cliente.</li>
                  <li><strong>Plan Híbrido:</strong> Combina Bolsa de Minutos y Extensión Ilimitada.</li>
                </ul>
                <div className="mt-3 space-y-2 text-sm text-gray-500">
                  <p>Los minutos a destinos fuera de México, Estados Unidos y Canadá serán tarificados según el tabulador vigente de minutos internacionales. Todos los paquetes están en pesos mexicanos y no incluyen el IVA.</p>
                  <p>Los planes en modalidad ilimitada están sujetos a condiciones de uso justo y no están permitidos para actividades de Callcenter y/o Telemarketing a menos que se tenga autorización previa por escrito por parte de Voztotal.</p>
                  <p>Todos nuestros paquetes están sujetos a: (1) Fecha de corte, (2) Fecha límite de pago, (3) Suspensión parcial del servicio, (4) Suspensión total del servicio, (5) Cancelación de cuenta.</p>
                </div>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">16. Funcionalidades del servicio</h3>
                <p>El servicio tiene algunas funcionalidades que solo están disponibles en ciertos planes o con un cargo adicional. Voztotal y sus afiliadas se reservan el derecho a suspender o cancelar algunas o todas las funcionalidades del servicio cuando se tengan indicios de falsedad en los datos o cuando el contenido de las llamadas sea ofensivo, degradante, o contrario a la normatividad aplicable.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">17. Contracargos</h3>
                <p>En el caso de que el Cliente erróneamente desconociera o pidiera la devolución de la transacción del pago de los servicios efectivamente cobrados por Voztotal ante su institución bancaria correspondiente, el Cliente será responsable de cubrir la cantidad del contracargo o el monto erróneamente reembolsado, además de todos los gastos adicionales que se eroguen por dicho concepto.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">18. Grabación del servicio</h3>
                <p className="mb-2">El Cliente reconoce y acepta que algunos de nuestros servicios ofrecen una funcionalidad que permite grabar audio y datos compartidos durante las llamadas, por lo que el Cliente faculta a Voztotal a revisar el contenido de las llamadas para fines de calidad.</p>
                <p>El Cliente es el único responsable de cumplir todas las leyes aplicables cuando use la funcionalidad de grabación y Voztotal no se hace responsable del uso que este le dé a las grabaciones.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">19. Cancelación Automática</h3>
                <p className="mb-2">En caso de que el Cliente decida no mantener el servicio, este deberá suspender el pago; en el caso de estar realizando los pagos domiciliados a su tarjeta bancaria, el Cliente debe enviar un correo a <a href="mailto:contacto@voztotal.mx" className="text-brand-red underline">contacto@voztotal.mx</a> solicitando la baja del servicio.</p>
                <p>La cancelación sólo será procedente si el Cliente se encuentra al corriente en los pagos.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">21. Derechos y obligaciones del Cliente</h3>
                <p className="mb-2"><strong>(a) Derechos.</strong> El Cliente tendrá derecho a utilizar el servicio contratado en los términos pactados y a recibir información respecto del desarrollo e implementación de funcionalidades nuevas.</p>
                <p className="mb-2"><strong>(b) Obligaciones.</strong> El Cliente deberá:</p>
                <ul className="list-disc list-inside text-sm text-gray-500 ml-4 space-y-1">
                  <li>I. Cumplir con las obligaciones de pago en los términos y condiciones establecidos.</li>
                  <li>II. No perturbar, impedir, interferir, distorsionar o dañar los sistemas y/o software de Voztotal.</li>
                  <li>III. No utilizar los servicios para la realización de actividades contrarias a las leyes, a la moral, al orden público, ni con fines o efectos ilícitos.</li>
                  <li>IV. Cumplir con todas las obligaciones establecidas en el presente contrato.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">22. Servicios complementarios</h3>
                <p className="mb-2">Voztotal ofrece a sus Clientes algunos servicios complementarios, mismos que podrán estar sujetos a términos y condiciones adicionales:</p>
                <ul className="list-disc list-inside text-sm text-gray-500 ml-4 space-y-1">
                  <li><strong>1. Callbot:</strong> Sistema automático de atención de llamadas para brindar información.</li>
                  <li><strong>2. Voztotal Chat:</strong> Plataforma de chat que unifica el chat de WhatsApp, Messenger, entre otros.</li>
                  <li><strong>3. Envío de SMS:</strong> Envío de mensajes SMS a bases de datos brindadas por el Cliente.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">23. Integración con otras plataformas</h3>
                <p>En algunos casos el Cliente deberá tener aplicaciones de paga de otras plataformas para hacer uso del servicio. Voztotal no es responsable de cualquier soporte, asistencia, mantenimiento, pago o indemnización que pudiera surgir por tal concepto.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">24. Conexión Vía SIP</h3>
                <p>El Cliente acepta que pueden existir consideraciones ajenas al servicio ya sea por conectividad a través de Softphone o Teléfono IP. El departamento de ingeniería se comunicará con usted para crear la interconexión con las mejores prácticas posibles. El Cliente libera a Voztotal de cualquier responsabilidad que pudiera derivarse por dicho concepto.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">26. Garantías del servicio</h3>
                <p className="mb-2">Voztotal se compromete a realizar el máximo esfuerzo en mantener un nivel aceptable en el cumplimiento de sus obligaciones contractuales. En caso de incumplimiento por razones imputables exclusivamente a Voztotal, el Cliente tendrá derecho a solicitar una compensación proporcional a su renta mensual.</p>
                <p>Los mantenimientos programados no deben ser mayores a 1 hora y se avisará a los usuarios con al menos 48 horas de anticipación.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">27. Régimen de responsabilidad</h3>
                <div className="space-y-3 text-sm text-gray-500">
                  <p><strong className="text-gray-700">(a) Régimen General.</strong> Voztotal quedará exonerada de cualquier tipo de responsabilidad frente al Cliente, sus usuarios y terceros, en los supuestos en que las anomalías se deban a acciones u omisiones directamente imputables al Cliente.</p>
                  <p><strong className="text-gray-700">(b) Exoneración.</strong> Voztotal no será responsable de los problemas derivados de la falta de acceso o de los problemas inherentes a la conectividad o a las redes de electricidad cuando estas tuvieren su origen en causas ajenas a su control o de fuerza mayor.</p>
                  <p><strong className="text-gray-700">(c) Limitación.</strong> La responsabilidad de Voztotal derivada de este Contrato quedará limitada a la suma del último mes precedente a la producción del evento causante del daño.</p>
                  <p><strong className="text-gray-700">(d) Responsabilidad del Cliente.</strong> El Cliente es el único responsable del uso que realice de los servicios prestados y del cumplimiento íntegro de cualquier norma aplicable.</p>
                </div>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">28. Uso indebido del servicio</h3>
                <p className="mb-2">El Cliente se obliga a usar nuestros servicios:</p>
                <ul className="list-disc list-inside text-sm text-gray-500 ml-4 space-y-1">
                  <li>i) De manera lícita en apego al marco normativo vigente.</li>
                  <li>ii) No modificar nuestros servicios ni preparar trabajos derivados de ellos.</li>
                  <li>iii) No usar nuestros servicios de forma que haga un mal uso de nuestras redes o cuentas de usuario.</li>
                  <li>iv) No transmitir material que constituya algún tipo de contenido ilegal.</li>
                  <li>v) No comercializar los servicios o revenderlos a terceros.</li>
                  <li>vi) No usar los servicios para enviar publicidad no autorizada o correo no deseado.</li>
                  <li>vii) No obtener, recopilar o reunir datos de usuarios sin su consentimiento.</li>
                  <li>viii) No transmitir material que pueda infringir los derechos de propiedad intelectual de terceros.</li>
                  <li>ix) No usar los servicios para cometer fraude o suplantar a personas o entidades.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">29. Indemnización</h3>
                <p>El Cliente reconoce y acepta indemnizar y eximir a Voztotal, sus proveedores de información, administradores, directores, afiliadas, licenciadores, socios, consultores, contratantes, agentes, abogados y empleados, de toda y cualquier responsabilidad, costos y gastos resultantes del uso de cualquier Programa de Voztotal o de la violación o incumplimiento de cualesquier términos, declaraciones y/o garantías contenidas en este Contrato.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">30. Terminación del contrato</h3>
                <p className="mb-2">El presente Contrato terminará por las causas siguientes: (a) unilateralmente dejando de realizar los pagos efectivos, (b) unilateralmente por incumplimiento de las obligaciones plasmadas en este contrato.</p>
                <p>El incumplimiento de cualquiera de las partes, si no se llegara a subsanar en un plazo no mayor a 30 días hábiles contados a partir del primer día hábil del incumplimiento, generará la rescisión del Contrato inmediata sin responsabilidad alguna para Voztotal.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">34. Datos de carácter personal</h3>
                <p className="mb-2">Las partes se comprometen a respetar en todo momento la normativa vigente en materia de protección de datos de carácter personal. Los datos facilitados por el Cliente serán incorporados a un fichero de datos de carácter personal titularidad de Voztotal.</p>
                <p>Voztotal se compromete a adoptar las medidas de seguridad que se indican en las direcciones web voztotal.com, las cuales forman parte de este contrato por referencia.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">35. Relación encargado y responsable de manejo de datos personales</h3>
                <p className="mb-2">Voztotal por cuestiones de calidad mantiene grabaciones sobre las llamadas realizadas a través del servicio. El Cliente y Voztotal son los únicos con los que cuentan con acceso a las mismas.</p>
                <p className="mb-2">Las grabaciones son consideradas datos personales del usuario final del Cliente. Siendo así, el Cliente es el único responsable de su uso y cuenta con la obligación de avisar a sus usuarios sobre dicha manera de obtención de datos personales.</p>
                <p>Cualquier solicitud sobre las grabaciones deberá ser solicitada a través del correo <a href="mailto:contacto@voztotal.mx" className="text-brand-red underline">contacto@voztotal.mx</a>.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">36. Notificaciones</h3>
                <p>Todas las notificaciones u otras comunicaciones que hayan de realizarse bajo el presente se deberán realizar por escrito por cualquier medio digital que acredite su recepción.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">37. Cesión del contrato</h3>
                <p>El Cliente no podrá ceder los derechos y/o las obligaciones adquiridas en virtud del presente Contrato a ningún tercero por ser un servicio de prepago.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">38. No-Reventa del servicio</h3>
                <p>Salvo que medie un Contrato de Distribución entre el Cliente y Voztotal, queda expresamente prohibido que el Cliente revenda o autorice a terceros ajenos el servicio.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">39. Seguros</h3>
                <p>Será de exclusiva responsabilidad de cada una de las partes la contratación de los correspondientes seguros que garanticen las posibles responsabilidades que se deriven del Contrato.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">40. Modificación de los servicios</h3>
                <p>Voztotal se reserva la facultad de modificar unilateralmente la presentación, configuración y operatividad del Servicio. Cuando Voztotal introduzca cualquier modificación que suponga un incremento de los precios o de las condiciones, procederá a notificarlo a través de su página web.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">41. Ley aplicable y resolución de controversias</h3>
                <p>Lo dispuesto en el presente Contrato se regirá e interpretará conforme a la legislación mexicana. Para la resolución de las controversias, ambas partes acuerdan someterse al fuero y jurisdicción de los Juzgados y Tribunales del Estado de Querétaro, México.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">42. Atención al Cliente</h3>
                <p>El Cliente podrá dirigirse a Voztotal a través del teléfono de atención al Cliente: (55) 888 02 100 y/o por medio del correo electrónico <a href="mailto:contacto@voztotal.mx" className="text-brand-red underline">contacto@voztotal.mx</a>, para solicitar información sobre los servicios y para presentar quejas, reclamaciones o peticiones.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">43. Acuerdo total</h3>
                <p>Los términos y condiciones que se recogen en las presentes Condiciones Generales serán de aplicación respecto de las Condiciones Particulares que se pudieran acordar entre un Cliente y Voztotal, que no tengan disposiciones en sentido contrario.</p>
              </div>

              <div>
                <h3 className="font-700 text-brand-blue mb-2">44. Interpretación</h3>
                <p>Si cualquier cláusula de este Contrato fuese declarada nula o sin efecto, en todo o en parte, por cualquier tribunal, las restantes estipulaciones conservarán su validez.</p>
              </div>
            </div>
          </div>

          {/* ── Aviso de Privacidad ── */}
          <div className="pb-10">
            <h2 className="text-xl font-700 text-brand-blue mb-4">
              <span className="text-brand-red mr-2">5.</span>
              Aviso de Privacidad
            </h2>
            <p className="text-gray-600">
              Para consultar nuestro Aviso de Privacidad, visite:{" "}
              <Link href="/politica-de-privacidad" className="text-brand-red underline hover:text-brand-red-hover">
                voztotal.mx/politica-de-privacidad
              </Link>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
