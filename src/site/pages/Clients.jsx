import React from "react";
import customs from "../../assets/img/customs.webp";
import "../../css/pages/clients.css";

export const Clients = () => {
  return (
    <>
      <div className="section-separation section-separation-clients">
        <h1 className="heading__primary heading__primary-clients">
          Sin ustedes, VOZTOTAL no sería posible.
        </h1>
        <div className="clientsSection__info">
          <div className="clientsSection__column">
            <img className="clientsSection__img" src={customs} />
          </div>
          <section className="clientsSection__column">
            <p className="clientsSection__text">
              Durante 13 años nuestro canal había sido la recomendación, pues
              gracias a cada cliente que recomendó nuestros servicios pudimos
              expandirnos y satisfacer esas necesidades que muchas empresas
              tenían. Hoy en día decidimos seguir ayudando, a través de nuestro
              canal digital y seguimos agradeciendo la recomendación de cada
              cliente con sus compañeros, amigos, colegas y familiares. VOZTOTAL
              seguirá mejorando + empresas y negocios en la optimización de
              costos en el área de telecomunicaciones
            </p>
          </section>
        </div>
      </div>
      <div className="clients__footer">
        <h3 className="footer__text">¡ GRACIAS !</h3>
      </div>
    </>
  );
};
