import React from 'react';
import { connect } from 'react-redux';

import './drop.styles.scss';

import ShopItem from '../shop-item/shop-item.component'

class Drop extends React.Component {
  render(){
    const products = []
    if (this.props.products.product.products != undefined){
      products.push(this.props.products.product.products)
    }
    console.log(this.props.products)
    // const { products } = this.props.products
    return (
      <div className="drop-page">
        <h2>Drop {this.props.match.params.dropId}</h2>
        {
          //  products.map((product) => (
          //   <ShopItem image={product.images[0].src} id={product.id} />
          // ))
        }
      </div>
      )
  }
}


const mapStateToProps = state => ({
  products: state
})

export default connect(mapStateToProps)(Drop);


