import { useState } from "react";
import React from 'react';

export const ServiceItem = ({ title, description, icon, footer }) => {

      const [showService, setShowService] = useState(true);

      return (
            <li className='service'>
                  <header className='service__header'>
                        <h3 
                              onClick={ () => setShowService(true) }
                              className='heading__tertiary'>{ title }</h3>
                        <div className='service__iconBox'>
                              <i className={`bx bx-${icon } service__icon`}></i>
                        </div>
                  </header>
                  {
                        showService && 
                        (
                              <div className={`${showService && 'service__show'} service__modal`}>
                                    <div className="service__information">
                                          <p>{ description }</p>
                                          </div>
                                    <footer className='service__footer'>{ footer }</footer> 
                              </div>
                        )
                  }     
            </li>
      )
}
