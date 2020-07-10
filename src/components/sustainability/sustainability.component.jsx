import React from 'react';

import supimaCotton from '../../assets/supima-cotton-bundle.jpg';
import farming from '../../assets/farming.png';


import { SustainabilityContainer } from './sustainability.styles'

const Sustainability = () => (
  <SustainabilityContainer>
    <h2>Sustainability</h2>
    <div className="example-card-sustainability">
      <div className="example-card-sustainability-text">
        <h4>Innovative Farming</h4>
        <p>Supima Cotton farmers utilize GPS and Satellite technology to ensure that they are growing the best quality cotton in the world with as little impact on the environment as possible. Supima is twice as strong as regular cotton, which makes for extraordinarily resilient products. The longer fiber resists pilling, breaking and tearing resulting in fashion and home products that are incredibly resilient and keep their form for a longer-lasting product.</p>
         <p>To learn more about our Supima Tees, visit <a href="https://supima.com/" className='supima-link' target="_blank" rel="noopener noreferrer" >Supima</a></p>
      </div>
      <img src={supimaCotton} alt="tshirt-sizing-chart"/>
    </div>
    <div className="desktop-example-card-sustainability">
      <div className="example-card-sustainability">
        <img src="https://cdn.shopify.com/s/files/1/0276/3305/7867/files/Screen_Shot_2020-01-28_at_11.31.03_AM_1584x.png?v=1581786284" alt="tshirt-sizing-chart"/>
        <div className="example-card-sustainability-text">
          <h4>GPS & Satellite</h4>
          <p>Through satellite imagery of the fields farmers are able to analyze  the growth rate of plants. If low growth rates are identified, samples are studied to uncover any potential pest problems or nutrient needs. In real time, these findings are communicated directly to GPS out
          fitted tractors allowing for treatment in only areas of need. Furthermore, data from GPS and satellites create a detailed history for each individual field  allowing farmers to precisely monitor their crops efficiently. GPS guided tractors  minimizes the need for tilling the soil, while maximizing seed germination and crop yields.</p>
        </div>
      </div>
    </div>
    <div className="mobile-example-card-sustainability">
      <div className="example-card-sustainability">
        <div className="example-card-sustainability-text">
          <h4>GPS & Satellite</h4>
          <p>Through satellite imagery of the fields farmers are able to analyze  the growth rate of plants. If low growth rates are identified, samples are studied to uncover any potential pest problems or nutrient needs. In real time, these findings are communicated directly to GPS out
          fitted tractors allowing for treatment in only areas of need. Furthermore, data from GPS and satellites create a detailed history for each individual field  allowing farmers to precisely monitor their crops efficiently. GPS guided tractors  minimizes the need for tilling the soil, while maximizing seed germination and crop yields.</p>
        </div>
        <img src="https://cdn.shopify.com/s/files/1/0276/3305/7867/files/Screen_Shot_2020-01-28_at_11.31.03_AM_1584x.png?v=1581786284" alt="tshirt-sizing-chart"/>
      </div>
    </div>
    <div className="example-card-sustainability">
      <div className="example-card-sustainability-text">
        <h4>Water Conservation</h4>
        <p>To maximize water-use efficiency, cotton fields are laser-leveled. Farmers gain knowledge regarding the topography and substance of the soil allowing them to pick the best method for irrigating crop. Supima farmers can select drip irrigation, which directly feed the plant only or flood irrigation, which restores moisture to the soil resulting in replenishing aquifers, promoting soil health, and fostering wildlife.</p>
      </div>
      <img src="https://cdn.shopify.com/s/files/1/0276/3305/7867/files/Screen_Shot_2020-01-28_at_11.30.56_AM_1584x.png?v=1581786102" alt="tshirt-sizing-chart"/>
    </div>
    <div className="desktop-example-card-sustainability">
      <div className="example-card-sustainability">
        <img src={farming} alt="farming"/>
        <div className="example-card-sustainability-text">
          <h4>No Waste</h4>
          <p>All plant materials besides the seed and fiber is captured during the ginning process and is utilized in the local cattle industry as much needed bedding for livestock. Additionally, one of the most valuable bi-products of the seed is cottonseed oil.</p>
        </div>
      </div>
    </div>
    <div className="mobile-example-card-sustainability">
      <div className="example-card-sustainability">
        <div className="example-card-sustainability-text">
          <h4>No Waste</h4>
          <p>All plant materials besides the seed and fiber is captured during the ginning process and is utilized in the local cattle industry as much needed bedding for livestock. Additionally, one of the most valuable bi-products of the seed is cottonseed oil.</p>
        </div>
        <img src={farming} alt="farming"/>
      </div>
    </div>

  </SustainabilityContainer>
);

export default Sustainability;
