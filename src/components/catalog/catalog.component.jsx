import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { CatalogContainer } from './catalog.styles';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectProductsForCatalogPage } from '../../redux/product/product.selectors'
import ShopItem from '../shop-item/shop-item.component'
import { chooseProduct } from '../../redux/product/product.actions'


const Catalog = ({products, chooseProduct}) => {

const [chosenFilter, setChosenFilter] = useState("")
const [isModalOpen, setModalOpen] = useState(false);
const ref = useRef();
const currentProducts = chosenFilter === "" ? products : products.filter(product => product[0].productType == chosenFilter)

useOnClickOutside(ref, () => setModalOpen(false));

return(
  <CatalogContainer>
    <div className="drop-page">
      <div className="drop-title">
        <h2>CATALOG</h2>
      </div>
      <div className="product-filter-container"  ref={ref}>
        <div className={isModalOpen ? 'filter-tab-active' : 'filter-tab'} onClick={() => setModalOpen(!isModalOpen)}>Filter</div>
        <div className={isModalOpen ? 'product-filters' : 'product-filters-closed'}>
          <h5 className={chosenFilter === '' ? 'product-filter-active' : 'product-filter'} onClick={() => {setChosenFilter(''); setModalOpen(false)}}>ALL</h5>
          <h5 className={chosenFilter === 'T-Shirts' ? 'product-filter-active' : 'product-filter'} onClick={() => {setChosenFilter('T-Shirts'); setModalOpen(false)}}>T-Shirts</h5>
          <h5 className={chosenFilter === 'Organic Cotton Hoodies' ? 'product-filter-active' : 'product-filter'} onClick={() => {setChosenFilter('Organic Cotton Hoodies'); setModalOpen(false)}}>Organic Cotton Hoodies</h5>
          <h5 className={chosenFilter === 'Organic Cotton Crews' ? 'product-filter-active' : 'product-filter'} onClick={() => {setChosenFilter('Organic Cotton Crews'); setModalOpen(false)}}>Organic Cotton Crews</h5>
          <h5 className={chosenFilter === 'French Terry Shorts' ? 'product-filter-active' : 'product-filter'} onClick={() => {setChosenFilter('French Terry Shorts'); setModalOpen(false)}}>French Terry Shorts</h5>
          <h5 className={chosenFilter === 'Organic Cotton Face Masks' ? 'product-filter-active' : 'product-filter'} onClick={() => {setChosenFilter('Organic Cotton Face Masks'); setModalOpen(false)}}>Organic Cotton Face Masks</h5>
          <h5 className={chosenFilter === 'Skate Decks' ? 'product-filter-active' : 'product-filter'} onClick={() => {setChosenFilter('Skate Decks'); setModalOpen(false)}}>Skate Decks</h5>
        </div>
      </div>
      <div className="drop-products">
        {
          currentProducts.reverse().map((product) => (
            <Link to={`/shop/drops/${product[1].title[product[1].title.length-1]}/${product[0].id}`} key={product[0].id} >
            <div onClick={() => chooseProduct(product[0])}>
              <ShopItem  product={product[0]} key={product[0].id} />
            </div>
            </Link>
            )
          )
        }
      </div>
    </div>
  </CatalogContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  products: selectProductsForCatalogPage
})

const mapDispatchToProps = dispatch => ({
  chooseProduct: product => dispatch(chooseProduct(product))
})
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);

const useOnClickOutside = (ref, handler) => {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}

