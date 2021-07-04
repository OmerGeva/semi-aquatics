import React from 'react';
import { connect } from 'react-redux';


import './shop-item.styles.scss';

import { addItemToCart } from '../../redux/cart/cart.actions'


const ShopItem = ({ product, match, dropId }) => {
  const { images, title, availableForSale } = product
  const startDate = new Date();
  const dropDate = new Date("2021/7/05 17:00:00 EST");

  const startDateInUTC = new Date(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate(), startDate.getUTCHours(), startDate.getUTCMinutes(), startDate.getUTCSeconds());
  const endDateInUTC = new Date(dropDate.getUTCFullYear(), dropDate.getUTCMonth(), dropDate.getUTCDate(), dropDate.getUTCHours(), dropDate.getUTCMinutes(), dropDate.getUTCSeconds());
  const difference = Date.parse(endDateInUTC) - Date.parse(startDateInUTC);

  return (
        <div className="shop-item">
          {
            availableForSale ? <span></span> : <p className="sold-out">SOLD OUT</p>
          }
           {
            dropId === '18' && !availableForSale && difference > 0? <p className="sold-out">COMING SOON</p> : <span></span>
           }

          <img src={ images[0].src } alt={title}/>
          <h5>{title}</h5>
        </div>
    )}

const mapDispatchToProps = dispatch => ({
  addItemToCart: addItemToCart
})

export default connect(null, mapDispatchToProps)(ShopItem);



