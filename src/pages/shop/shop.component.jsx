import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ShopPageContainer } from './shop.styles'
import Drop from '../../components/drop/drop.component'
import ShowProduct from '../../components/show-product/show-product.component'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { selectIsProductsFetching } from '../../redux/product/product.selectors'
import { fetchProductsStartAsync } from '../../redux/product/product.actions'



const DropWithSpinner = WithSpinner(Drop);

class ShopPage extends React.Component {

  componentDidMount(){
    const { fetchProductsStartAsync } = this.props;
    fetchProductsStartAsync();
  }

  render(){
    console.log(this.props)
    const { match, isProductsFetching } = this.props;
    return(
      <ShopPageContainer>
        <Route exact path={`${match.path}/drops/:dropId`} render={(props) => <DropWithSpinner isLoading={isProductsFetching} {...props}/>} />
        <Route path={`${match.path}/drops/:dropId/:productId`} render={(props) => <ShowProduct {...props}/>}/>
      </ShopPageContainer>
      )
  }
}

const mapStateToProps = createStructuredSelector({
  isProductsFetching: selectIsProductsFetching
})

const mapDispatchToProps = (dispatch) => ({
  fetchProductsStartAsync: () => dispatch(fetchProductsStartAsync())
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
