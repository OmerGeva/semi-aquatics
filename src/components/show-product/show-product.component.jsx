import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import { ShowProductContainer } from './show-product.styles';
import CustomButtom from '../custom-button/custom-button.component'
import { chooseVariantProduct } from '../../redux/product/product.actions';
import { addItemToCartAsync } from '../../redux/cart/cart.actions';
import { productText } from './text'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleLeft, faAngleDoubleRight, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Modal from '../modal/modal.component'
import { useSelectProductForCatalogPage } from '../../effects/use-select-products-for-catalog-page';



const ShowProduct = () =>
{
  const dispatch = useDispatch();
  const variantProduct = useSelector(state => state.product.chosenVariantProduct)
  const isDark = useSelector(state => state.style.isDark)
  const checkout = useSelector(state => state.cart.checkout)
  const inventoryQuantity = useSelector(state => state.cart.inventoryQuantity)
  let product = useSelector(state => state.product.chosenProduct)
  const allProducts = useSelectProductForCatalogPage();

  const [modalOpen, setModalOpen] = useState(false);
  const [descriptionModalOpen, setDescriptionModalOpen] = useState(false);
  const params = useParams();


  product = product && product.id === params.productId ? product : allProducts.filter(individualProduct => individualProduct[0].id === params.productId)[0][0]

  const startDate = new Date();
  const dropDate = new Date("2021/9/16 17:00:00 EST");

  const startDateInUTC = new Date(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate(), startDate.getUTCHours(), startDate.getUTCMinutes(), startDate.getUTCSeconds());
  const endDateInUTC = new Date(dropDate.getUTCFullYear(), dropDate.getUTCMonth(), dropDate.getUTCDate(), dropDate.getUTCHours(), dropDate.getUTCMinutes(), dropDate.getUTCSeconds());
  const difference = Date.parse(endDateInUTC) - Date.parse(startDateInUTC);

  const createNotification = (product) => {
      return NotificationManager.success(`${product.title} was added to cart!`);
      };

  useEffect(() => {
    chooseVariantProduct(null)
  },[])

  const handleAddToCart = (variantProduct, product, checkout, inventoryQuantity) => {
    dispatch(addItemToCartAsync(variantProduct, product, checkout, inventoryQuantity));
    createNotification(product);
  }

  const slides = product.images.map(image =>
               (<img src={image.src} alt=""/>)
                )

return (
    <ShowProductContainer isDark={isDark}>
    <div className="other-text">
      Hoodie Crewneck Sweatshirt T-Shirt Sweater Jacket Outerwear Style Fashion Comfort Design Streetwear 
    </div>
      <div className="product-info">
        <div className="product-image">
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
        <div className="title-desktop">
          <h4>{product.title}</h4>
        </div>
      </div>
      <div className="title-and-price-mobile">
        <div className="product-title-mobile">
          <h4>{product.title}</h4>
        </div>
        <div className="product-price-mobile">
          <h4>${product.variants[0].price}</h4>
        </div>
      </div>

      <div className="see-size-guide-and-info-mobile">
        <div className="see-size-guide">
          <h5 className='see-sizing-guide-mobile' onClick={() => setModalOpen(true)}>See size guide</h5>
        </div>
        <div className="see-more-info">
          <h5 className='see-sizing-guide-mobile' onClick={() => setDescriptionModalOpen(true)}>Tap for details</h5>
        </div>
      </div>

      <div className="buy-product">

        <div className="product-description" dangerouslySetInnerHTML={{__html: product.descriptionHtml}}></div>
        <p className='see-sizing-guide-desktop' onClick={() => setModalOpen(true)}>See size guide</p>
        <Modal open={modalOpen} setOpen={setModalOpen} type={product.productType}/>
        <Modal open={descriptionModalOpen} setOpen={setDescriptionModalOpen} description={product.descriptionHtml}/>

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
        <h4 className='hide-on-mobile'>${product.variants[0].price}</h4>
        {
          product.variants.length !== 1 ?
          <div className="sizes">
            {
            product.variants.map(variant =>
                variant === variantProduct ?
                <span onClick={() => dispatch(chooseVariantProduct(variant))} className="product-size chosen" key={variant.id}>{variant.title}</span>
                  :
                <span onClick={() => dispatch(chooseVariantProduct(variant))} className="product-size" key={variant.id}>{variant.title}</span>
              )
            }
          </div>
          :
          ""
        }
        <div className="add-to-cart">
          {
            product.variants.length === 1 ?
            <div onClick={() => dispatch(addItemToCartAsync(product.variants[0], product, checkout, inventoryQuantity))} className="addToCartButton">

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
                product.availableForSale ?
                (!variantProduct) ?
                  <CustomButtom soldOut={true}>
                     PICK SIZE
                  </CustomButtom>
                 :
                 variantProduct && variantProduct.available ?
                  <CustomButtom soldOut={false}>
                    ADD TO CART
                  </CustomButtom>
                  :
                  <CustomButtom soldOut={true}>
                     SOLD OUT
                  </CustomButtom>
                :
                  <CustomButtom soldOut={true}>
                    {
                    (product.id === 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY2MDUwMzE1Mzg3NjM=' 
                    || product.id === 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1ODI4Njc1NTg0NzU=' 
                    || product.id === 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY2MDUwMzI1MjE4MDM=') && difference > 0 ?
                      'COMING SOON'
                    :

                      'SOLD OUT'
                    }
                  </CustomButtom>
              }
            </div>
          }

        </div>




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

export default ShowProduct;
