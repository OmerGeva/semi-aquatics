import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './drop.styles.scss';


import ShopItem from '../shop-item/shop-item.component'
import { chooseProduct } from '../../redux/product/product.actions'


class Drop extends React.Component {
  render(){
    const currentDropHeader = (dropId) => {
      if(dropId <= 6)
      {
        return `Fall / Winter ${dropId}`
      }
      else if(dropId === 7)
      {
        return 'Spring / Summer 1'
      }
      else
      {
        return 'Spring / Summer 2'
      }
    }

    const currentDrop = []
    this.props.products.forEach((drop) => {
      if (drop.title.includes(this.props.match.params.dropId)) {
        currentDrop.push(drop)
      }
    })
    return (
      <div className="drop-page">
        <div className="drop-title">
          <h2>{currentDropHeader(parseInt(this.props.match.params.dropId))}</h2>
          <h4>{currentDrop[0].description}</h4>
          <h5>{this.props.match.params.dropId === 7 ?
            "Happy Birthday, Will! 100% of profits from this drop will be donated to the William G. Nash Memorial Fund."
          : "" }</h5>
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


