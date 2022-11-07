import { Navigate, Route, Routes } from "react-router-dom";
import React from 'react';
import { Home } from "../site/pages/Home";
import { About } from "../site/pages/About";
import { Clients } from "../site/pages/Clients";
import { Testimonials } from "../site/pages/Testimonials";
import { Polity } from "../site/pages/Polity";
import { Contact } from "../site/pages/Contact";

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
