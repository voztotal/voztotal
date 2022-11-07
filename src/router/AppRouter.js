import { Navigate, Route, Routes } from "react-router-dom";
import React from 'react';
import { Home } from "../site/pages/Home.js";
import { About } from "../site/pages/About.js";
import { Clients } from "../site/pages/Clients.js";
import { Testimonials } from "../site/pages/Testimonials.js";
import { Polity } from "../site/pages/Polity.js";
import { Contact } from "../site/pages/Contact.js";

export const AppRouter = () => {
      return (
            <Routes>
                  <Route path="/home" element={ <Home /> } />
                  <Route path="/nosotros" element={ <About /> } />
                  <Route path="/clientes" element={ <Clients /> } />
                  <Route path="/testimonios" element={ <Testimonials /> } />
                  <Route path="/politica" element={ <Polity /> } />
                  <Route path="/contacto" element={ <Contact /> } />
                  <Route path="/*" element={ <Navigate to="/home" /> } />
            </Routes>
      )
}
