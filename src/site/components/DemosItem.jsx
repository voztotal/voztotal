import { Link } from "react-router-dom";
import React from 'react';

export const DemosItem = ({image, title}) => {
      return (
            <li 
                  className='demo'
                  key={title}>
                                    
                  <Link to="/contacto" onClick={() => window.scrollTo(0, 0)}>
                        <div className='demo__imageBox'>
                              <img className='demo__image' src={ image } alt="Demo image" />
                        </div>

                        <h3 className='demo__heading'>{ title }</h3>
                  </Link>
            </li>
      )
}
