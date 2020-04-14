import React from 'react';
import { connect } from 'react-redux';
import { ShowProductContainer } from './show-product.styles';
import CustomButtom from '../custom-button/custom-button.component'
import { createStructuredSelector } from 'reselect';
import { selectChosenProduct, selectProductSizes, selectIsProductsSizeHidden, selectVariantProduct } from '../../redux/product/product.selectors'
import { toggleProductSize, chooseVariantProduct } from '../../redux/product/product.actions'
import { addItemToCart } from '../../redux/cart/cart.actions'

const ShowProduct = ({ product, addToCart, hidden, toggleHidden, chooseProduct, variantProduct }) =>(
    <ShowProductContainer>
      <div className="product-info">
        <img src={product.images[0].src} alt=""/>
      </div>
      <div className="buy-product">
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <h4>${product.variants[0].price}</h4>
        <div className="size-and-add-to-cart">
          <div>
            <div onClick={() => toggleHidden()}className="choose-size">
              {
                variantProduct ? variantProduct.title : "SIZE"
              }
            </div>
            {
              product.variants.length > 1 ?
                <div className={hidden ? "product-sizes-hidden" : "product-sizes-show"}>
                {
                  product.variants.map(variant =>
                    <span onClick={() => chooseProduct(variant)}className="product-size" key={variant.id}>{variant.title}</span>
                    )
                }
                </div>
              :
              <span></span>
            }
          </div>
          <div onClick={() => (variantProduct || product.variants.length == 1) ? addToCart(variantProduct, product) : null}>
            <CustomButtom>
            {
              product.availableForSale ? "ADD TO CART" : "SOLD OUT"
            }

            </CustomButtom>
          </div>
        </div>
      </div>
    </ShowProductContainer>
  )

const mapStateToProps = createStructuredSelector({
  product: selectChosenProduct,
  sizes: selectProductSizes,
  hidden: selectIsProductsSizeHidden,
  variantProduct: selectVariantProduct
})

const mapDispatchToProps = dispatch => ({
  addToCart: (variantProduct, product) =>  dispatch(addItemToCart(variantProduct, product)),
  toggleHidden: () => dispatch(toggleProductSize()),
  chooseProduct: (variant) => dispatch(chooseVariantProduct(variant))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct);
