import React from 'react';
import { connect } from 'react-redux';
import { ShowProductContainer } from './show-product.styles';
import CustomButtom from '../custom-button/custom-button.component'
import { createStructuredSelector } from 'reselect';
import { selectCartCheckout, selectCartInventoryQuantity } from '../../redux/cart/cart.selectors';
import { selectChosenProduct, selectProductSizes, selectIsProductsSizeHidden, selectVariantProduct } from '../../redux/product/product.selectors';
import { toggleProductSize, chooseVariantProduct } from '../../redux/product/product.actions';
import { addItemToCartAsync } from '../../redux/cart/cart.actions';
import { productText } from './text'

const ShowProduct = ({ product, addToCart, hidden, toggleHidden, chooseProduct, variantProduct, checkout, inventoryQuantity, isDark}) =>(
    <ShowProductContainer>
    <div className="other-text">
      Hoodie Crewneck Sweatshirt T-Shirt Sweater Jacket Outerwear Style Fashion Comfort Design Streetwear 
    </div>
      <div className="product-info">
        <img src={product.images[0].src} alt=""/>
      </div>
      <div className="buy-product">
        <h4>{product.title}</h4>

        <div className="product-description" dangerouslySetInnerHTML={{__html: product.descriptionHtml}}></div>

        <h4>${product.variants[0].price}</h4>
        {
          product.title.length === 42 ?
          <p className='smaller-text'>
          <span className="italic-font">
            { productText.faceMasks.line3 }
          </span>
          <br/>
            { productText.faceMasks.line1 }
          <br/>
            { productText.faceMasks.line2 }
          </p>
          :
          ""
        }
        <div className="size-and-add-to-cart">
          <div>
            <div className="mobile-sizes-btn">
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
              {
                product.variants.length > 1 ?
              <div onClick={() => toggleHidden()}className="choose-size">
                {
                  variantProduct ? variantProduct.title : "SIZE"
                }
              </div>
              :
              <div className="choose-size no-size">
                NO SIZE
              </div>
              }
            </div>
            <div className="desktop-sizes-btn">
              {
                product.variants.length > 1 ?
              <div onClick={() => toggleHidden()}className="choose-size">
                {
                  variantProduct ? variantProduct.title : "SIZE"
                }
              </div>
              :
              <div className="choose-size no-size">
                NO SIZE
              </div>
              }
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
          </div>
          <div onClick={() => ((variantProduct && variantProduct.available) || product.variants.length === 1) ? addToCart(variantProduct, product, checkout, inventoryQuantity) : null}>

            {
              (variantProduct && variantProduct.available) || (product.availableForSale & variantProduct == null) ?
                <CustomButtom soldOut={false}>
                   ADD TO CART
                </CustomButtom>
               :
                <CustomButtom soldOut={true}>
                   SOLD OUT
                </CustomButtom>
            }
          </div>
        </div>

        <div className="mobile-description" dangerouslySetInnerHTML={{__html: product.descriptionHtml}}></div>

      </div>
      {
        product.title.length === 42 ?
        <p className='smaller-text mobile-sizes-btn'>
        <span className="italic-font">
          { productText.faceMasks.line3 }
        </span>
        <br/>
          { productText.faceMasks.line1 }
        <br/>
          { productText.faceMasks.line2 }
        </p>
        :
        ""
      }
    </ShowProductContainer>
  )

const mapStateToProps = createStructuredSelector({
  product: selectChosenProduct,
  sizes: selectProductSizes,
  hidden: selectIsProductsSizeHidden,
  variantProduct: selectVariantProduct,
  checkout: selectCartCheckout,
  inventoryQuantity: selectCartInventoryQuantity
})

const mapDispatchToProps = dispatch => ({
  addToCart: (variantProduct, product, checkout, inventoryQuantity) =>  dispatch(addItemToCartAsync(variantProduct, product, checkout, inventoryQuantity)),
  toggleHidden: () => dispatch(toggleProductSize()),
  chooseProduct: (variant) => dispatch(chooseVariantProduct(variant))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct);
