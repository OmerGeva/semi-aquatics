import React from 'react';
import {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './drop.styles.scss';


import ShopItem from '../shop-item/shop-item.component'
import { chooseProduct } from '../../redux/product/product.actions'
import CountdownTimer from '../../components/countdown-timer/countdown-timer.component'


const Drop = ({ match }) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);

    const calculateTimeLeft = () => {
      const startDate = new Date();
      const endDate = new Date("2020/10/05 16:00:00 EST");

      const startDateInUTC = new Date(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate(), startDate.getUTCHours(), startDate.getUTCMinutes(), startDate.getUTCSeconds());
      const endDateInUTC = new Date(endDate.getUTCFullYear(), endDate.getUTCMonth(), endDate.getUTCDate(), endDate.getUTCHours(), endDate.getUTCMinutes(), endDate.getUTCSeconds());
      const difference = Date.parse(endDateInUTC) - Date.parse(startDateInUTC);

      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return timeLeft;
    };

    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const currentDropHeader = (dropId) => {
      if(dropId <= 6)
      {
        return `Fall / Winter ${dropId}`
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

    const currentDrop = []
    if(products){
      products.forEach((drop) => {
        if (drop.title.includes(match.params.dropId)) {
          currentDrop.push(drop)
        }
      })
    }
    return (
      <div className="drop-page">
        <div className="drop-title">
          <h2>{currentDropHeader(parseInt(match.params.dropId))}</h2>
          <h4>{currentDrop[0] ? currentDrop[0].description : ''}</h4>
          <h5>{match.params.dropId === '7' ?
            "Happy Birthday, Will! 100% of profits from this drop will be donated to the William G. Nash Memorial Fund."
          : "" }</h5>

        </div>
         {
           match.params.dropId === '13' && (timeLeft.seconds ||  timeLeft.hours||  timeLeft.minutes||  timeLeft.days)  ?
            <CountdownTimer timeLeft={timeLeft}/>
          :
            ""
          }

        <div className='drop-products'>
        {
           currentDrop[0].products.map((product) => (
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



