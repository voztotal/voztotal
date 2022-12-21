import { Navigate, Route, Routes } from "react-router-dom";
import React from 'react';
import { Home } from "../site/pages/Home.jsx";
import { About } from "../site/pages/About.jsx";
import { Clients } from "../site/pages/Clients.jsx";
import { Testimonials } from "../site/pages/Testimonials.jsx";
import { Polity } from "../site/pages/Polity.jsx";
import { Contact } from "../site/pages/Contact.jsx";
import Conditions from "../site/pages/Conditions.jsx";

export const AppRouter = () => {
      return (
            <Routes>
                  <Route path="/home" element={ <Home /> } />
                  <Route path="/nosotros" element={ <About /> } />
                  <Route path="/clientes" element={ <Clients /> } />
                  <Route path="/testimonios" element={ <Testimonials /> } />
                  <Route path="/contacto" element={ <Contact /> } />
                  <Route path="/politica-de-privacidad" element={ <Polity /> } />
                  <Route path="/terminos-y-condiciones" element={ <Conditions /> } />
                  <Route path="/*" element={ <Navigate to="/home" /> } />
            </Routes>
      )
}
