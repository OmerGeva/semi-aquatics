import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './drop.styles.scss';


import ShopItem from '../shop-item/shop-item.component'
import { chooseProduct } from '../../redux/product/product.actions'

class Drop extends React.Component {
  render(){
    const currentDrop = []
    this.props.products.forEach((drop) => {
      if (drop.title.includes(this.props.match.params.dropId)) {
        currentDrop.push(drop)
      }
      console.log(this.props)
    })
    return (
      <div className="drop-page">
        <div className="drop-title">
          <h2>DROP {this.props.match.params.dropId}</h2>
          <h4>{currentDrop[0].description}</h4>
        </div>
        <div className="drop-products">
        {
           currentDrop[0].products.map((product) => (
            <Link to={`${this.props.match.params.dropId}/${product.id}`} key={product.id} >
              <div onClick={() => this.props.chooseProduct(product)}>
                <ShopItem  product={product} key={product.id} />
              </div>
            </Link>
          ))
        }
        </div>
      </div>
      )
  }
}

const mapStateToProps = state => ({
  products: state.product.products
})

const mapDispatchToProps = dispatch => ({
  chooseProduct: product => dispatch(chooseProduct(product))
})
export default connect(mapStateToProps, mapDispatchToProps)(Drop);


