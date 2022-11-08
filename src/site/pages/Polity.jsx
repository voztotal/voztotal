import React from "react";
import polity from "../../assets/img/polity.png";
import "../../css/pages/polity.css";

export const Polity = () => {
  return (
    <div className="container polity">
      <header className="section-separation">
        <h1 className="heading__primary">Política de Privacidad</h1>
        <div className="polity__description">
          <div className="polity__imageBox">
            <img
              className="polity__image"
              src={polity}
              alt="Polity of the company"
            />
          </div>
          <p className="polity__information">
            Esta Política de privacidad describe cómo se recopila, utiliza y
            comparte su información personal cuando visita{" "}
            <strong>www.voztotal.mx</strong> (denominado en lo sucesivo el
            "Sitio").
          </p>
        </div>
      </header>

      <main className="questions section-separation">
        <div className="question">
          <header className="question__header">
            <h3 className="heading__secondary">
              <span>1.</span> Información personal que recompilamos
            </h3>
          </header>
          <div className="question__information">
            <p>
            Cuando visita el Sitio, recopilamos automáticamente cierta
            información sobre su dispositivo, incluida información sobre su
            navegador web, dirección IP, zona horaria y algunas de las cookies
            que están instaladas en su dispositivo. Además, a medida que navega
            por el Sitio, recopilamos información sobre las páginas web
            individuales o los productos que ve, las páginas web o los términos
            de búsqueda que lo remitieron al Sitio e información sobre cómo
            interactúa usted con el Sitio. Nos referimos a esta información
            recopilada automáticamente como "Información del dispositivo".
            </p>
          </div>
        </div>

        <div className="question">
          <header className="question__header">
            <h3 className="heading__secondary">
              <span>2.</span> ¿Cómo recopilamos la información?
            </h3>
          </header>
          <div className="question__information">
            <div className="question__item">
              <h3 className="heading__tertiary">1. Cookies</h3>

              <div className="question__text">
                <p>
                  Aquí tienes una lista de cookies que utilizamos. Las
                  enlistamos para que puedas elegir si quieres optar por
                  quitarlas o no.
                </p>

                <ul>
                  <li>
                    _session_id, unique token, sessional, Allows Shopify to
                    store information about your session (referrer, landing
                    page, etc).
                  </li>
                  <li>
                    _shopify_visit, sin datos retenidos, Persistente durante 30
                    minutos desde la última visita, Utilizado por el rastreador
                    de estadísticas internas de nuestro proveedor de sitios web
                    para registrar el número de visitas
                  </li>
                  <li>
                    _shopify_uniq, no data held, expires midnight (relative to
                    the visitor) of the next day, Counts the number of visits to
                    a store by a single customer.
                  </li>
                  <li>
                    cart, unique token, persistent for 2 weeks, Stores
                    information about the contents of your cart.
                  </li>
                  <li>_secure_session_id, unique token, sessional</li>
                  <li>
                    storefront_digest, unique token, indefinite If the shop has
                    a password, this is used to determine if the current visitor
                    has access.
                  </li>
                </ul>
              </div>
            </div>
            <div className="question__item">
              <h3 className="heading__tertiary">2. Archivos de registro</h3>
              <p>
                Los "Archivos de registro" rastrean las acciones que ocurren en
                el Sitio y recopilan datos, incluyendo su dirección IP, tipo de
                navegador, proveedor de servicio de Internet, páginas de
                referencia/salida y marcas de fecha/horario.
              </p>
            </div>
            <div className="question__item">
              <h3 className="heading__tertiary">3. Balizas web</h3>
              <p>
                Las "balizas web", las "etiquetas" y los "píxeles" son archivos
                electrónicos utilizados para registrar información sobre cómo
                navega usted por el Sitio.
              </p>
            </div>
            <div className="question__item">
              <h3 className="heading__tertiary">4. Extras</h3>
              <p>
                Además, cuando hace una compra o intenta hacer una compra a
                través del Sitio, recopilamos cierta información de usted, entre
                la que se incluye su nombre, dirección de facturación, dirección
                de envío, información de pago incluidos los números de la
                tarjeta de crédito, dirección de correo electrónico y número de
                teléfono. Nos referimos a esta información como "Información del
                pedido".
              </p>{" "}
              <br />
              <p>
                Cuando hablamos de "Información personal" en la presente
                Política de privacidad, nos referimos tanto a la Información del
                dispositivo como a la Información del pedido.
              </p>{" "}
              <br />
              <p>
                Recopilamos sus datos también una vez que los inserta en
                "contacto" para comunicarnos con usted, hacer uso de mailing,
                campaÑas de sms, o cualquier otro medio de marketing o
                remarketing en la que usted acepte en recibir información de
                voztotal.
              </p>
            </div>
          </div>
        </div>
        <div className="question">
          <header className="question__header">
            <h3 className="heading__secondary">
              <span>3.</span> ¿Cómo utilizamos su información personal?
            </h3>
          </header>
          <div className="question__information">
            <p>
              Usamos la Información del pedido que recopilamos en general para
              preparar los pedidos realizados a través del Sitio (incluido el
              procesamiento de su información de pago, la organización de los
              envíos y la entrega de facturas y/o confirmaciones de pedido).
              Además, utilizamos esta Información del pedido para: comunicarnos
              con usted; examinar nuestros pedidos en busca de fraudes o riesgos
              potenciales; y cuando de acuerdo con las preferencias que usted
              compartió con nosotros, le proporcionamos información o publicidad
              relacionada con nuestros productos o servicios.
            </p>{" "}
            <br />
            <p>
              Utilizamos la Información del dispositivo que recopilamos para
              ayudarnos a detectar posibles riesgos y fraudes (en particular, su
              dirección IP) y, en general, para mejorar y optimizar nuestro
              Sitio (por ejemplo, al generar informes y estadísticas sobre cómo
              nuestros clientes navegan e interactúan con el Sitio y para
              evaluar el éxito de nuestras campañas publicitarias y de
              marketing).
            </p>
          </div>
        </div>
        <div className="question">
          <header className="question__header">
            <h3 className="heading__secondary">
              <span>4.</span> Compartir su información personal
            </h3>
          </header>
          <div className="question__information">
            <p>
              Compartimos su Información personal con terceros para que nos
              ayuden a utilizar su Información personal, tal como se describió
              anteriormente. Por ejemplo, utilizamos la tecnología de Shopify en
              nuestra tienda online. Puede obtener más información sobre cómo
              Shopify utiliza su Información personal aquí:{" "}
              <a href="https://www.shopify.com/legal/privacy">
                https://www.shopify.com/legal/privacy.
              </a>{" "}
              También utilizamos Google Analytics para ayudarnos a comprender
              cómo usan nuestros clientes el Sitio. Puede obtener más
              información sobre cómo Google utiliza su Información personal
              aquí:{" "}
              <a href="https://www.google.com/intl/es/policies/privacy/">
                https://www.google.com/intl/es/policies/privacy/
              </a>
              . Puede darse de baja de Google Analytics aquí:{" "}
              <a href="https://tools.google.com/dlpage/gaoptout">
                https://tools.google.com/dlpage/gaoptout
              </a>
              .
            </p>{" "}
            <br />
            <p>
              Finalmente, también podemos compartir su Información personal para
              cumplir con las leyes y regulaciones aplicables, para responder a
              una citación, orden de registro u otra solicitud legal de
              información que recibamos, o para proteger nuestros derechos.
            </p>
          </div>
        </div>
        <div className="question">
          <header className="question__header">
            <h3 className="heading__secondary">
              <span>5.</span> Publicidad orientada por el comportamiento
            </h3>
          </header>
          <div className="question__information">
            <p>
              Como se describió anteriormente, utilizamos su Información
              personal para proporcionarle anuncios publicitarios dirigidos o
              comunicaciones de marketing que creemos que pueden ser de su
              interés. Para más información sobre cómo funciona la publicidad
              dirigida, puede visitar la página educativa de la Iniciativa
              Publicitaria en la Red ("NAI" por sus siglas en inglés) en
              https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
            </p>{" "}
            <br />
            <p>
              Puede darse de baja de la publicidad dirigida mediante los
              siguientes enlaces:
            </p>{" "}
            <br />
            <p>
              <a href="mailto: contacto@voztotal.mx">contacto@voztotal.mx</a>
            </p>{" "}
            <br />
            <p>
              Además, puede darse de baja de algunos de estos servicios
              visitando el portal de exclusión voluntaria de Digital Advertising
              Alliance en:{" "}
              <a href="mailto: https://optout.aboutads.info/">
                https://optout.aboutads.info/
              </a>
              .
            </p>
          </div>
        </div>
        <div className="question">
          <header className="question__header">
            <h3 className="heading__secondary">
              <span>6.</span> No rastrear
            </h3>
          </header>
          <div className="question__information">
            <p>
              Tenga en cuenta que no alteramos las prácticas de recopilación y
              uso de datos de nuestro Sitio cuando vemos una señal de No
              rastrear desde su navegador.
            </p>
          </div>
        </div>
        <div className="question">
          <header className="question__header">
            <h3 className="heading__secondary">
              <span>7.</span> Retención de datos
            </h3>
          </header>
          <div className="question__information">
            <p>
              Cuando realiza un pedido a través del Sitio, mantendremos su
              Información del pedido para nuestros registros a menos que y hasta
              que nos pida que eliminemos esta información.
            </p>
          </div>
        </div>

        <div className="question">
          <header className="question__header">
            <h3 className="heading__secondary">
              <span>8.</span> Menores
            </h3>
          </header>
          <div className="question__information">
            <p>El sitio no está destinado a personas menores de 18 años.</p>
          </div>
        </div>

        <div className="question">
          <header className="question__header">
            <h3 className="heading__secondary">
              <span>9.</span> Cambios
            </h3>
          </header>
          <div className="question__information">
            <p>
              Podemos actualizar esta política de privacidad periódicamente para
              reflejar, por ejemplo, cambios en nuestras prácticas o por otros
              motivos operativos, legales o reglamentarios.
            </p>
          </div>
        </div>

        <div className="question">
          <header className="question__header">
            <h3 className="heading__secondary">
              <span>10.</span> Contáctenos
            </h3>
          </header>
          <div className="question__information">
            <p>
              Para obtener más información sobre nuestras prácticas de
              privacidad, si tiene alguna pregunta o si desea presentar una
              queja, contáctenos por correo electrónico a contacto@voztotal.mx o
              por correo mediante el uso de la información que se proporciona a
              continuación:
                Boulevard de Los Gobernadores, Monte Blanco II, Querétaro, QRO,
                76087, México 
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
