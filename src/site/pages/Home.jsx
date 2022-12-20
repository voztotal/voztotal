
import hero from '../../assets/img/bg-purple.jpg';
import logo from '../../assets/img/logo.png';
import '../../css/pages/home.css';
import React from 'react';
import { ServicesList } from '../components/ServicesList.jsx';
import { DemosList } from '../components/DemosList.jsx';
import { Link } from 'react-router-dom';

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
                                    <Link to='/contacto'>
                                    <button className="btn">Contáctanos</button>
                                    </Link>

                              </div>

                              <div className="hero__image">
                                    <img src={ hero } alt="Hero image" />
                              </div>
                        </div>
                  </section>

                  <section className="demos section-separation">
                        <div className="container">
                              <h2 className="heading__secondary">Quiero un DEMO de: </h2>
                              <DemosList />
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

                 

            </div>
      )
}
