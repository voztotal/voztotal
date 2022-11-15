import React from 'react';

export const ServiceItem = ({ title, description, icon, footer }) => {

      return (
            <li className='service'>
                  <header className='service__header'>
                        <h3 className='heading__tertiary'>{ title }</h3>
                        <div className='service__iconBox'>
                              <i className={`bx bx-${icon } service__icon`}></i>
                        </div>
                  </header>
                   <div className= 'service__modal'>
                         <div className="service__information">
                              <p>{ description }</p>
                        <footer className='service__footer'>{ footer }</footer> 
                        </div>
                  </div>
                       
            </li>
      )
}
