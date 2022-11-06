import React from "react";
import workingTeam from '../../assets/img/team.jpg';
import technologies from '../../assets/img/tech.jpg';
import practices from '../../assets/img/practices.jpg';
import '../../css/pages/about.css';

export const About = () => {
      return (
            <div className="about">

                  <header className="mission section-separation container">
                        <h1 className='heading__primary'>Misión</h1>
                        <p className='mission__description'>Proveer las soluciones más confiables e innovadoras de tecnologías de información, seguridad informática y telecomunicaciones, para mejorar la experiencia y productividad de nuestros clientes empresariales y gubernamentales.</p>
                  </header>   
                  
                  <main className="about containerG section-separation ">
                        <h2 className="heading__secondary">Propuesta de valor</h2>

                        <div className="about__values ">

                              <div className="value ">
                                    <div className="value__imageBox">
                                          <img 
                                                src={ technologies } 
                                                alt="Working Team" 
                                                className="value__image" 
                                          />
                                    </div>
                                    <div className="value__text">
                                          <h2 className='value__heading'>Conectividad y tecnología superior</h2>
                                          <ul className="value__list">
                                                <li className='value__item'>Latencia 	&lt; 1ms</li>
                                                <li className='value__item'>Menos del 0.01% en pérdida de paquetes</li>
                                                <li className='value__item'>Alta disponibilidad en servidores para PBX y SIP Trunk</li>
                                          </ul>
                                    </div>
                              </div>

                              <div className="value ">
                                    <div className="value__text value__text--blue">
                                          <h2 className='value__heading'>El mejor capital humano</h2>
                                          <ul className="value__list">
                                                <li className='value__item'>Instalación en 72 hrs</li>
                                                <li className='value__item'>Cuadrillas de instaladores</li>
                                                <li className='value__item'>Ingenieros especializados en cada segmento de mercado</li>
                                          </ul>
                                    </div>
                                    <div className="value__imageBox">
                                          <img 
                                                src={ workingTeam } 
                                                alt="Working Team" 
                                                className="value__image" 
                                          />
                                    </div>
                              </div>

                              <div className="value">
                                    <div className="value__imageBox">
                                          <img 
                                                src={ practices } 
                                                alt="Working Team" 
                                                className="value__image" 
                                          />
                                    </div>
                                    <div className="value__text">
                                          <h2 className='value__heading'>Mejores prácticas operativas</h2>
                                          <ul className="value__list">
                                                <li className='value__item'>NOC / SOC atención personalizada 24/7</li>
                                                <li className='value__item'>Procesos internos orientados a la satisfacción del cliente</li>
                                          </ul>
                                    </div>
                              </div>

                        </div>

                  </main>

                  <section className="banner banner--about">
                        <p className='banner__text'>Atención permanente y personalizada <strong>SIN COSTO</strong></p>
                  </section>

            </div>
      )
}
