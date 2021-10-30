import React from 'react';
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './drop.styles.scss';


import ShopItem from '../shop-item/shop-item.component'
import { chooseProduct } from '../../redux/product/product.actions'
import CountdownTimer from '../../components/countdown-timer/countdown-timer.component'


const Drop = ({ match }) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const isProductsFetching = useSelector(state => state.product.isFetching);
    const [currentDrop, setCurrentDrop] = useState({products: []});
    
    const dropId = match.params.dropId;

    const currentDropHeader = (dropId) => {
      if(dropId <= 6)
      {
        return `Fall / Winter ${dropId}`
      }
      else if(dropId === 20)
      {
        return `Fall 2021`
      }
      else if(dropId >= 15)
      {
        return `Spring / Summer 2021`
      }
      else if(dropId >= 13)
      {
        return `Fall / Winter ${dropId - 12}`
      }
      else
      {
        return `Spring / Summer ${dropId < 9  ? dropId - 6 : dropId - 7}`
      }
    }
    useEffect(() => {
      if(!isProductsFetching){
        products.forEach((drop) => {
          if (drop.title.includes(dropId)) {
            setCurrentDrop({products: drop.products});
          }
        })
      }
      },[dropId, products, isProductsFetching])
      
      
    
    return (
      <div className="drop-page">
        <div className="drop-title">
          <h2>{currentDropHeader(parseInt(match.params.dropId))}</h2>
          {/* <h4>{currentDrop[0]  currentDrop[0].description : ''}</h4> */}
          <h5>{match.params.dropId === '7' &&
            "Happy Birthday, Will! 100% of profits from this drop will be donated to the William G. Nash Memorial Fund."
          }</h5>

        </div>
         {
           match.params.dropId === '20' &&
           <div className="">
            <CountdownTimer />
           </div>
         }

        <div className='drop-products'>
        { 
           currentDrop.products.map((product) => (
            <Link to={`${match.params.dropId}/${product.id}`} key={product.id} >
              <div onClick={() => dispatch(chooseProduct(product))}>
                <ShopItem  product={product} key={product.id} dropId={(match.params.dropId)}/>
              </div>
            </Link>
          ))
        }
        </div>

      </div>
      )
}


export default Drop;



