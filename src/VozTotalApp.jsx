import { HashRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Footer } from "./ui/components/Footer";
import { NavBarB } from "./ui/components/NavBarB";

export const VozTotalApp = () => {

      return (
            <HashRouter>
                 
                  <NavBarB/>
                  <AppRouter />
                  <Footer />
            </HashRouter>
      )
}
 