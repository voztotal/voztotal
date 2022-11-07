
import hero from '../../assets/img/bg-purple.jpg';
import logo from '../../assets/img/logo.png';
import '../../css/pages/home.css';
import React from 'react';
import { ServicesList } from '../components/ServicesList.js';
import { DemosList } from '../components/DemosList.js';

export const Home = () => {
      return (
            <div className='home'>
                  <section className="hero section-separation">
                        <div className="container hero__grid">
                              <div className="hero__information">
                                    <div className="hero__text">
                                          <h1 className='heading__primary'>¡VozTotal es tu mejor aliado!</h1>
                                          <p>¿Buscas optimizar costos en tus facturas de: Internet, Telefonía, Campañas, SMS o Soporte de TI?</p>
                                    </div>

                                    <button className="btn">Contáctanos</button>
                              </div>

                              <div className="hero__image">
                                    <img src={ hero } alt="Hero image" />
                              </div>
                        </div>
                  </section>

                  <section className="description section-separation">
                        <div className="container">
                              <h2 className="heading__secondary heading__secondary--white">Empresa Mexicana con +13 años de experiencia</h2>
                              <p className='description__connection'>Easy <span>Connection</span></p>

                              <div className="description__grid">
                                    <div className="description__image">
                                          <img src={ logo } alt="Logo VozTotal" />
                                    </div>

                                    <div className="description__text">
                                          <p>Comenzamos en el 2009 con las mejores prácticas operativas en telecomunicaciones para las principales empresas de Ciudad de México.</p> 
                                          
                                          <p>Tenemos la flexibilidad para entender las actividades y necesidades del cliente con soluciones que excedan sus expectativas, por eso hacemos que nuestros aliados reduzcan los costos de sus facturas.</p>
                                          
                                          <p>El cliente, como eje de nuestro negocio, nos permite tener una atención permanente y personalizada integrada en todos nuestros servicios.</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section className='services section-separation'>
                        <div className="container">
                              <h2 className="heading__secondary">Servicios</h2>
                              <ServicesList />
                        </div>
                  </section>

                  <section className="banner banner--home section-separation">
                        <div className="container">
                              <p className='banner__text'>¡DEMO GRATUITO SEGÚN LAS OPERACIONES DE TU EMPRESA!</p>
                        </div>
                  </section>

                  <section className="demos section-separation">
                        <div className="container">
                              <h2 className="heading__secondary">Quiero un DEMO de: </h2>
                              <DemosList />
                        </div>
                  </section>

            </div>
      )
}
