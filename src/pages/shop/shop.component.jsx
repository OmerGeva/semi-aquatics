import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {useEffect} from 'react'
import { createStructuredSelector } from 'reselect';

import { ShopPageContainer } from './shop.styles'
import Drop from '../../components/drop/drop.component'
import Catalog from '../../components/catalog/catalog.component'

import ShowProduct from '../../components/show-product/show-product.component'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { selectIsProductsFetching, selectProducts } from '../../redux/product/product.selectors'
import { selectCheckout } from '../../redux/cart/cart.selectors'

import { fetchProductsStartAsync } from '../../redux/product/product.actions'
import { updateCheckoutAsync } from '../../redux/cart/cart.actions'



const DropWithSpinner = WithSpinner(Drop);
const CatalogWithSpinner = WithSpinner(Catalog);

const ShopPage = ({ fetchProductsStartAsync, updateCart, selectCheckout, match, isProductsFetching, products }) => {

  useEffect(() => {
    console.log('YOOOOOO')
    updateCart(selectCheckout);

    fetchProductsStartAsync();
  }, [])

    return(
      <ShopPageContainer>
        <Route exact path={`${match.path}/drops/:dropId`} render={(props) => <DropWithSpinner isLoading={isProductsFetching} products={products.products} {...props}/>} />
        <Route exact path={`${match.path}/catalog`} render={(props) => <CatalogWithSpinner isLoading={isProductsFetching} products={products.products} {...props}/>} />
        <Route path={`${match.path}/drops/:dropId/:productId`} render={(props) => <ShowProduct {...props}/>}/>
      </ShopPageContainer>
      )
  }

const mapStateToProps = createStructuredSelector({
  isProductsFetching: selectIsProductsFetching,
  products: selectProducts,
  checkout: selectCheckout
})

const mapDispatchToProps = (dispatch) => ({
  fetchProductsStartAsync: () => dispatch(fetchProductsStartAsync()),
  updateCart: (checkout) => dispatch(updateCheckoutAsync(checkout))
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
