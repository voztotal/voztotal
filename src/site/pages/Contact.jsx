import React from "react";
import { Button, Form } from "react-bootstrap";
import "../../css/pages/contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm ('service_zy29tr1', 'template_ophs0fq', e.target, 'o4xwhJnPtKjHSPt82')
      .then((result) => {
          console.log(result.text);
          // alert('Mensaje enviado con éxito')
      }, (error) => {
          console.log(error.text);
          // alert(error.message)
      });
      e.target.reset();
    }
  return (
    <div className="contact">
      <p className="heading__primary heading__primary-center">
        ¿ Tienes alguna duda o quieres un DEMO ?
      </p>

      <div className="contact__main">
        <section className="contact__mainSection">
          <h1 className="heading__secondary">Contáctanos</h1>
          <Form href={form} id="form" onSubmit={sendEmail}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="fullname">Nombre y Apellido</Form.Label>
              <Form.Control type="text" name="fullname" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control id="email" type="email" name="email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="phone">Numero de teléfono</Form.Label>
              <Form.Control id="phone" type="number" name="phone" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlor="service">
                ¿Cuál de nuestros servicios te interesa más?
              </Form.Label>
              <Form.Control id="service" type="text" name="service" />
            </Form.Group>

            <Button
              value="Send Email"
              id="button"
              className="ms-auto"
              variant="danger"
              type="submit"
            >
              Enviar
            </Button>
          </Form>
          

        </section>

        <section className="contact__mainSection">
          <h2 className="heading__secondary">Información de VOZ TOTAL</h2>
          <h3>Dirección en: </h3>
          <ul className="mainSection_ul">
            <li className="section__ul_item">
            <strong>Ciudad de México, CDMX:</strong> Anaxágoras 29, Piedad Narvarte, Benito Juárez, 03000 
            </li>
            <li className="section__ul_item">
            <strong>Querétaro, Qro:</strong> Avenida Armando Birlaín Shaffler 2001, Centro Sur, 76090
            </li>
            <li className="section__ul_item">
              T<strong>Mérida, Yuc:</strong>Torre Magnia Corporate Center Calle 15 No. 503, Piso 7, Col.
                Altabrisa, 97130 
            </li>
          </ul>

          <div className="contact__mainSection_phones">
            <h3 className="mainSection_phones_subtitle">Teléfonos:</h3>
            <ul className="mainSection_ul">
              <li className="section__ul_item">
                <strong>Oficina:</strong>(55) 888 02 100
              </li>
              <li className="section__ul_item">
                <strong>WhatsApp:</strong>{" "}
                <a href="https://wa.me/525588802100?text= " target="_blank">
                (55) 888 02 100
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mainSection_phones_subtitle">Correo electrónico</h3>
            <a
              className="mainSection_email"
              href="mailto: contacto@voztotal.mx"
            >
              contacto@voztotal.mx
            </a>
          </div>
        </section>
        <div className="contact__schedule">
          <h3 className="heading__secondary schedule-subtitle">Horario:</h3>
          <p className="schedule-p">
            <strong>Lunes - Viernes:</strong> 9:00am - 6:00pm
          </p>
          <p className="schedule-p">
            <strong>Sábado:</strong> 10:00am - 1:00pm
          </p>
          <p className="schedule-p">
            <strong>Domingo:</strong> Cerrado
          </p>
        </div>
      </div>
    </div>
  );
};
