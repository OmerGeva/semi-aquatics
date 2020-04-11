import React from 'react';

import './shop-item.styles.scss';

const ShopItem = ({ image, title }) => (
    <div className="shop-item">
      <img src={ image } alt="product"/>
      <h5>{title}</h5>
    </div>
  )
export default ShopItem;
