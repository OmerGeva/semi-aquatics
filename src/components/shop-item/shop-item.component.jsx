import React from 'react';
import { connect } from 'react-redux';


import './shop-item.styles.scss';

import { addItemToCart } from '../../redux/cart/cart.actions'


const ShopItem = ({ product, match, dropId }) => {
  const { images, title, availableForSale } = product
  return (
        <div className="shop-item">
          {
            availableForSale ? <span></span> : <p className="sold-out">SOLD OUT</p>
          }
          {
            dropId === '10' && !availableForSale ? <p className="sold-out">COMING SOON</p> : <span></span>
          }
          <img src={ images[0].src } alt={title}/>
          <h5>{title}</h5>
        </div>
    )}

const mapDispatchToProps = dispatch => ({
  addItemToCart: addItemToCart
})

export default connect(null, mapDispatchToProps)(ShopItem);


