import React from 'react';
import { CatalogContainer } from './catalog.styles';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectProductsForCatalogPage } from '../../redux/product/product.selectors'
import ShopItem from '../shop-item/shop-item.component'
import { chooseProduct } from '../../redux/product/product.actions'


const Catalog = ({products, chooseProduct}) => (
  <CatalogContainer>
    <div className="drop-page">
      <div className="drop-title">
        <h2>CATALOG</h2>
      </div>
      <div className="drop-products">
        {
          products.map((product) => (
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


const mapStateToProps = createStructuredSelector({
  products: selectProductsForCatalogPage
})

const mapDispatchToProps = dispatch => ({
  chooseProduct: product => dispatch(chooseProduct(product))
})
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
