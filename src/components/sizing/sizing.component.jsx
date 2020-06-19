import React from 'react';

import crewneck from '../../assets/sizing-chart-crewneck.png'
import boxyTee from '../../assets/sizing-boxy.png';
import sweatpants from '../../assets/sweatpants-chart.png';
import shorts from '../../assets/sizing-chart-shorts.png';
import tShirt from '../../assets/sizing-chart-tshirt.png';
import hoodie from '../../assets/sizing-chart-hoodie.png';

import { SizingContainer } from './sizing.styles'

export const Sizing = () => (
  <SizingContainer>
    <h2>SIZING CHARTS</h2>
    <h5>CREWNECK</h5>
    <img src={crewneck} alt="crewneck chart"/>
    <h5>HOODIE</h5>
    <img src={hoodie}  alt="hoodie sizing chart"/>
    <h5>SWEATPANTS</h5>
    <img src={sweatpants} alt="sweatpants sizing chart"/>
    <h5>TEE</h5>
    <img src={tShirt}  alt="tshirt sizing chart"/>
    <h5>BOXY TEE</h5>
    <img src={boxyTee} alt="boxy tshirt sizing chart"/>
    <h5>SHORTS</h5>
    <img src={shorts} alt="shorts tshirt sizing chart"/>
  </SizingContainer>
  )


export default Sizing;
