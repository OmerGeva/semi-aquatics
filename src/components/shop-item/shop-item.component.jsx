import React from 'react';

import './shop-item.styles.scss';

const ShopItem = ({ image, title, available }) => (
    <div className="shop-item">
      {
        available ? <span></span> : <p className="sold-out">sold out</p>
      }
      <img src={ image } alt="product"/>
      <h5>{title}</h5>
    </div>
  )
export default ShopItem;
