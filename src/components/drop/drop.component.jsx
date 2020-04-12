import React from 'react';
import { connect } from 'react-redux';

import './drop.styles.scss';

import ShopItem from '../shop-item/shop-item.component'

class Drop extends React.Component {
  render(){
    const currentDrop = []
    this.props.products.forEach((drop) => {
      if (drop.title.includes(this.props.match.params.dropId)) {
        currentDrop.push(drop)
      }
    })
    console.log(currentDrop[0].products[0]);
    return (
      <div className="drop-page">
        <h2>DROP {this.props.match.params.dropId}</h2>
        <div className="drop-products">
        {
           currentDrop[0].products.map((product) => (
            <ShopItem image={product.images[0].src} available={product.availableForSale} title={product.title}key={product.id} />
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

export default connect(mapStateToProps)(Drop);


