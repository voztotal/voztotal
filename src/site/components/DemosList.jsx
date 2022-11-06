import React from 'react';
import demos from '../../data/demos.json';
import { DemosItem } from './DemosItem';

export const DemosList = () => {
      return (
            <ul className="demos__list">
                  {
                        demos.map( demo => (
                              <DemosItem key={ demo.title } { ...demo } />
                        ))
                  }
            </ul>
      )
}
