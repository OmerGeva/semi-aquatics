import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react'

import { ShopPageContainer } from './shop.styles'
import Drop from '../../components/drop/drop.component'
import Catalog from '../../components/catalog/catalog.component'

import ShowProduct from '../../components/show-product/show-product.component'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { fetchProductsStartAsync } from '../../redux/product/product.actions'
import { updateCheckoutAsync } from '../../redux/cart/cart.actions'



const DropWithSpinner = WithSpinner(Drop);
const CatalogWithSpinner = WithSpinner(Catalog);
const ShowProductWithSpinner = WithSpinner(ShowProduct);

const ShopPage = ({ match }) => {

  const dispatch = useDispatch();
  const isProductsFetching = useSelector(state => state.product.isFetching)
  const products = useSelector(state => state.product)
  const checkout = useSelector(state => state.cart.checkout)

  useEffect(() => {
    dispatch(updateCheckoutAsync(checkout));

    dispatch(fetchProductsStartAsync());
  }, [])

    return(
      <ShopPageContainer>
        <Route exact path={`${match.path}/drops/:dropId`} render={(props) => <DropWithSpinner isLoading={isProductsFetching} products={products.products} {...props}/>} />
        <Route exact path={`${match.path}/catalog`} render={(props) => <CatalogWithSpinner isLoading={isProductsFetching} products={products.products} {...props}/>} />
        <Route exact path={`${match.path}/drops/:dropId/:productId`} render={(props) => <ShowProductWithSpinner isLoading={isProductsFetching} products={products.products} {...props}/>} />
      </ShopPageContainer>
      )
  }


export default ShopPage;
