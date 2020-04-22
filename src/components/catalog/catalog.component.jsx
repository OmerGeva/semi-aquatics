import React from 'react';
import { CatalogContainer } from './catalog.styles';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


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
        products.map(drop =>
             drop.products.map((product) => (
              <Link to={`/shop/drops/${drop.title[drop.title.length-1]}/${product.id}`} key={product.id} >
                <div onClick={() => chooseProduct(product)}>
                  <ShopItem  product={product} key={product.id} />
                </div>
              </Link>
            ))
          )
      }
      </div>
    </div>
  </CatalogContainer>
)

const mapStateToProps = state => ({
  products: state.product.products
})

const mapDispatchToProps = dispatch => ({
  chooseProduct: product => dispatch(chooseProduct(product))
})
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
