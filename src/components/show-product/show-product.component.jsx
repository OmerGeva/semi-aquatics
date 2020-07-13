import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import { ShowProductContainer } from './show-product.styles';
import CustomButtom from '../custom-button/custom-button.component'
import { createStructuredSelector } from 'reselect';
import { selectCartCheckout, selectCartInventoryQuantity } from '../../redux/cart/cart.selectors';
import { selectChosenProduct, selectProductSizes, selectIsProductsSizeHidden, selectVariantProduct, selectProductsForCatalogPage } from '../../redux/product/product.selectors';
import { toggleProductSize, chooseVariantProduct } from '../../redux/product/product.actions';
import { addItemToCartAsync } from '../../redux/cart/cart.actions';
import { productText } from './text'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleLeft, faAngleDoubleRight, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const ShowProduct = ({ product, addToCart, hidden, toggleHidden, chooseProduct, variantProduct, checkout, allProducts, inventoryQuantity, isDark}) =>
{

  const params = useParams();
  product = product && product.id === params.productId ? product : allProducts.filter(individualProduct => individualProduct[0].id === params.productId)[0][0]

  const createNotification = (product) => {
      return NotificationManager.success(`${product.title} was added to cart!`);
      };

  const handleAddToCart = (variantProduct, product, checkout, inventoryQuantity) => {
    addToCart(variantProduct, product, checkout, inventoryQuantity);
    createNotification(product);
  }

  const slides = product.images.map(image =>
               (<img src={image.src} alt=""/>)
                )


return (
    <ShowProductContainer>
    <div className="other-text">
      Hoodie Crewneck Sweatshirt T-Shirt Sweater Jacket Outerwear Style Fashion Comfort Design Streetwear 
    </div>
      <div className="product-info">
      <Carousel
          arrowLeft={<FontAwesomeIcon icon={faAngleDoubleLeft}/>}
          arrowLeftDisabled={<FontAwesomeIcon icon={faAngleLeft}/>}
          arrowRight={<FontAwesomeIcon icon={faAngleDoubleRight}/>}
          arrowRightDisabled={<FontAwesomeIcon icon={faAngleRight}/>}
          addArrowClickHandler
          slides={slides}
      >
      </Carousel>
      </div>
      <div className="buy-product">
        <h4>{product.title}</h4>

        <div className="product-description" dangerouslySetInnerHTML={{__html: product.descriptionHtml}}></div>
        <p className='sizing-guide'></p>
        {
          product.id === 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ1OTAxNzMxMjY3MzE=' || product.id === 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ1ODg2MTcwNzI3MTU=' ?
          <p className='smaller-text'>
          <span className="italic-font">
            { productText.faceMasks.line3 }
          </span>
          <br/>
          <span className="bolder-font">
            { productText.faceMasks.line1 }
          </span>
          <br/>
            { productText.faceMasks.line2 }
          </p>
          :
          ""
        }
        {
          product.variants.length !== 1 ?
          <div className="sizes">
            {
            product.variants.map(variant =>
                variant === variantProduct ?
                <span onClick={() => chooseProduct(variant)} className="product-size chosen" key={variant.id}>{variant.title}</span>
                  :
                <span onClick={() => chooseProduct(variant)} className="product-size" key={variant.id}>{variant.title}</span>
              )
            }
          </div>
          :
          ""
        }
        <div className="add-to-cart">
          {
            product.variants.length === 1 ?
            <div onClick={() => addToCart(product.variants[0], product, checkout, inventoryQuantity)} className="addToCartButton">

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
            :
            <div onClick={() =>  (variantProduct && variantProduct.available) ? handleAddToCart(variantProduct, product, checkout, inventoryQuantity): ''} className="addToCartButton">
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
          }

        </div>

        <div className="mobile-description" dangerouslySetInnerHTML={{__html: product.descriptionHtml}}></div>

      </div>
      {
        // CHECKING IF PRODUCT IS THE FACEMASKS OR THE SHIRTS, AND IT WILL SHOW THE EXTRA TEXT.
        product.id === 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ1OTAxNzMxMjY3MzE=' || product.variants[0].id === 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ1ODg2MTcwNzI3MTU=' ?
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
      <NotificationContainer/>
    </ShowProductContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  product: selectChosenProduct,
  sizes: selectProductSizes,
  hidden: selectIsProductsSizeHidden,
  variantProduct: selectVariantProduct,
  checkout: selectCartCheckout,
  inventoryQuantity: selectCartInventoryQuantity,
  allProducts: selectProductsForCatalogPage
})

const mapDispatchToProps = dispatch => ({
  addToCart: (variantProduct, product, checkout, inventoryQuantity) =>  dispatch(addItemToCartAsync(variantProduct, product, checkout, inventoryQuantity)),
  toggleHidden: () => dispatch(toggleProductSize()),
  chooseProduct: (variant) => dispatch(chooseVariantProduct(variant))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct);
