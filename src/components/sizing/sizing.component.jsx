import React from 'react';

import boxyTee from '../../assets/sizing-boxy.png';
import sweatpants from '../../assets/sweatpants-chart.png';

import { SizingContainer } from './sizing.styles'

export const Sizing = () => (
  <SizingContainer>
    <h2>SIZING CHARTS</h2>
    <h5>CREWNECK</h5>
    <img src="https://cdn.shopify.com/s/files/1/0276/3305/7867/files/Screen_Shot_2020-01-04_at_7.27.35_PM_2376x.png?v=1578184132" alt="crewneck-sizing-chart"/>
    <h5>HOODIE</h5>
    <img src="https://cdn.shopify.com/s/files/1/0276/3305/7867/files/Screen_Shot_2020-01-04_at_7.27.22_PM_2376x.png?v=1578184079" alt="hoodie-sizing-chart"/>
    <h5>SWEATPANTS</h5>
    <img src={sweatpants} alt="boxy-tshirt-sizing-chart"/>
    <h5>TEE</h5>
    <img src="https://cdn.shopify.com/s/files/1/0276/3305/7867/files/Screen_Shot_2020-01-27_at_6.51.02_PM_1944x.png?v=1580169073" alt="tshirt-sizing-chart"/>
    <h5>BOXY TEE</h5>
    <img src={boxyTee} alt="boxy-tshirt-sizing-chart"/>
  </SizingContainer>
  )


export default Sizing;
