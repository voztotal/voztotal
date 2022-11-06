import { Navigate, Route, Routes } from "react-router-dom";
import { About, Clients, Contact, Home, Polity, Testimonials } from "../site/pages";
import React from 'react';

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
