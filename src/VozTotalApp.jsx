import { HashRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { Footer, NavBarB } from "./ui/components";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export const VozTotalApp = () => {

      return (
            <HashRouter>
                 
                  <NavBarB/>
                  <AppRouter />
                  <Footer />
            </HashRouter>
      )
}
 