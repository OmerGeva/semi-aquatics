import React from 'react';
import { connect } from 'react-redux';
import { ShowProductContainer } from './show-product.styles';
import CustomButtom from '../custom-button/custom-button.component'
import { createStructuredSelector } from 'reselect';
import { selectChosenProduct, selectProductSizes } from '../../redux/product/product.selectors'

import { addItemToCart } from '../../redux/cart/cart.actions'

const ShowProduct = ({ product, addToCart }) =>(
    <ShowProductContainer>
      <div className="product-info">
        <img src={product.images[0].src} alt=""/>
      </div>
      <div className="buy-product">
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <p>${product.variants[0].price}</p>
        <div onClick={() => addToCart(product)}>
          <CustomButtom>ADD TO CART</CustomButtom>
        </div>
      </div>
    </ShowProductContainer>
  )

const mapStateToProps = createStructuredSelector({
  product: selectChosenProduct,
  sizes: selectProductSizes
})

const mapDispatchToProps = dispatch => ({
  addToCart: product =>  dispatch(addItemToCart(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct);
