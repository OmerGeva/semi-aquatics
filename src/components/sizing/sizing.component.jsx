import React from 'react';

import crewneck from '../../assets/sizing-chart-crewneck.jpg'
import boxyTee from '../../assets/sizing-boxy.jpg';
import sweatpants from '../../assets/sweatpants-chart.png';
import shorts from '../../assets/sizing-chart-shorts.png';
import tShirt from '../../assets/sizing-chart-tshirt.png';
import hoodie from '../../assets/sizing-chart-hoodie.png';
import longSleeve from '../../assets/sizing-chart-long-sleeve.png';

import { SizingContainer } from './sizing.styles'
// TODO: CHANGE FROM PNG TO JPG

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
    <h5>LONG SLEEVE</h5>
    <img src={longSleeve} alt="long sleeve sizing chart"/>
    <h5>SHORTS</h5>
    <img src={shorts} alt="shorts tshirt sizing chart"/>
  </SizingContainer>
  )


export default Sizing;
