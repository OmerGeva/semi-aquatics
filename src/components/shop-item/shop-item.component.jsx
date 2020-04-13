import React from 'react';
import { connect } from 'react-redux';


import './shop-item.styles.scss';

import { addItemToCart } from '../../redux/cart/cart.actions'


const ShopItem = ({ product, match }) => {
  const { images, title, availableForSale } = product
  return (
        <div className="shop-item">
          {
            availableForSale ? <span></span> : <p className="sold-out">sold out</p>
          }
          <img src={ images[0].src } alt="product"/>
          <h5>{title}</h5>
        </div>
    )}

const mapDispatchToProps = dispatch => ({
  addItemToCart: addItemToCart
})

export default connect(null, mapDispatchToProps)(ShopItem);


