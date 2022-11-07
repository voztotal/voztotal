import { HashRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Footer } from "./ui/components/Footer.js";
import { NavBarB } from "./ui/components/NavBarB.js";

export const VozTotalApp = () => {

      return (
            <HashRouter>
                 
                  <NavBarB/>
                  <AppRouter />
                  <Footer />
            </HashRouter>
      )
}
 