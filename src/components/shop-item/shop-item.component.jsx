import React from 'react';
import { connect } from 'react-redux';

import './shop-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component'

import { addItemToCart } from '../../redux/cart/cart.actions'


const ShopItem = ({ item, image, title, available, addItemToCart, currentState }) => {
  console.log(currentState);
return (
    <div className="shop-item">
      {
        available ? <span></span> : <p className="sold-out">sold out</p>
      }
      <img src={ image } alt="product"/>
      <h5>{title}</h5>
    </div>
  )

}
const mapStateToProps = state => ({
  currentState: state
})

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopItem);


