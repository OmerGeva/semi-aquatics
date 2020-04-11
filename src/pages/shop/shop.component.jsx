import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Drop from '../../components/drop/drop.component'

import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { setCurrentProducts } from '../../redux/product/product.actions'


const DropWithSpinner = WithSpinner(Drop);

class ShopPage extends React.Component {
  state = {
    loading: true
  };


  componentDidMount(){
    this.props.fetchProducts();
    if (this.props.products){
      this.setState({loading: false});
    }
  }

  render(){
    const { match } = this.props;
    const { loading } = this.state;
    return(
      <Route path={`${match.path}/drops/:dropId`} render={(props) => <DropWithSpinner isLoading={loading} {...props}/>} />
      )
  }
}

const mapStateToProps = state => ({
  products: state.product.products
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProducts: () => dispatch(setCurrentProducts(), console.log(ownProps))
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
