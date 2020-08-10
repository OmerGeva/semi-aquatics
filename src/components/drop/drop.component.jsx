import React from 'react';
import {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './drop.styles.scss';


import ShopItem from '../shop-item/shop-item.component'
import { chooseProduct } from '../../redux/product/product.actions'
import CountdownTimer from '../../components/countdown-timer/countdown-timer.component'


const Drop = ({products, match, chooseProduct}) => {
    const calculateTimeLeft = () => {

      // const localTimeNow = new Date();
      // const utcTimeNow = localTimeNow.getTime() + (localTimeNow.getTimezoneOffset() * 60000);

      // const utcTime = new Date(Date.UTC(2020, 6, 20, 18, 0));
      const startDate = new Date();
      const endDate = new Date("2020/08/10 17:00:00 EST");

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

    const timerComponents = [];

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });

    Object.keys(timeLeft).forEach(interval => {
      if (!timeLeft[interval]) {
        return;
      }
      timerComponents.push(
        <span>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    });

    const currentDropHeader = (dropId) => {
      if(dropId <= 6)
      {
        return `Fall / Winter ${dropId}`
      }
      else
      {
        return `Spring / Summer ${dropId < 9  ? dropId - 6 : dropId - 7}`
      }
    }

    const currentDrop = []
    products.forEach((drop) => {
      if (drop.title.includes(match.params.dropId)) {
        currentDrop.push(drop)
      }
    })
    return (
      <div className="drop-page">
        <div className="drop-title">
          <h2>{currentDropHeader(parseInt(match.params.dropId))}</h2>
          <h4>{currentDrop[0] ? currentDrop[0].description : ''}</h4>
          <h5>{match.params.dropId === '7' ?
            "Happy Birthday, Will! 100% of profits from this drop will be donated to the William G. Nash Memorial Fund."
          : "" }</h5>


        </div>


        <div className='drop-products'>
        {
           currentDrop[0].products.map((product) => (
            <Link to={`${match.params.dropId}/${product.id}`} key={product.id} >
              <div onClick={() => chooseProduct(product)}>
                <ShopItem  product={product} key={product.id} dropId={(match.params.dropId)}/>
              </div>
            </Link>
          ))
        }
        </div>

      </div>
      )
}

const mapStateToProps = state => ({
  products: state.product.products,
  state: state
})

const mapDispatchToProps = dispatch => ({
  chooseProduct: product => dispatch(chooseProduct(product))
})
export default connect(mapStateToProps, mapDispatchToProps)(Drop);


