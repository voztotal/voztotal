import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Footer } from "./ui/components/Footer.jsx";
import { NavBarB } from "./ui/components/NavBarB.jsx";

export const VozTotalApp = () => {

      return (
            <BrowserRouter>
                 
                  <NavBarB/>
                  <AppRouter />
                  <Footer />
            </BrowserRouter>
      )
}
 