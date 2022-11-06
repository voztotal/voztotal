import services from '../../data/servicios.json';
import { ServiceItem } from './ServiceItem';
import React from 'react';

export const ServicesList = () => {
      return (
            <ul className="servicies__grid">
                  {
                        services.map( service => (
                              <ServiceItem 
                                    key={ service.id }
                                    { ...service }
                              />
                        ))
                  }
            </ul>
      )
}
