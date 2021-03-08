import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import crewneck from '../../assets/sizing-chart-crewneck.png'
import boxyTee from '../../assets/sizing-boxy.png';
import sweatpants from '../../assets/sweatpants-chart.png';
import shorts from '../../assets/sizing-chart-shorts.png';
import tShirt from '../../assets/sizing-chart-tshirt.png';
import longSleeve from '../../assets/sizing-chart-long-sleeve.png';
import hoodie from '../../assets/sizing-chart-hoodie.png';
import { IconContext } from "react-icons";
import { HiOutlineX  } from 'react-icons/hi';
import { CgArrowLongRight  } from 'react-icons/cg';

import popUpImage from '../../assets/image-for-popup.jpg';
import popUpImageMobile from '../../assets/modal-mobile-image.jpg';
import { ModalContainer } from './modal.styles';

const Modal = ({open, setOpen, type, description, closeEmailModal}) =>
{
  const ref = useRef();
  const [email, setEmail] = useState('');
  useOnClickOutside(ref, () => setOpen ? setOpen(false) : '');

  const chosenSizingChart = (type) => {
    switch(type){
      case 'T-Shirts':
        return tShirt
      case 'Organic Cotton Hoodies':
        return hoodie
      case 'Organic Cotton Crews':
        return crewneck
      case 'Organic Cotton Sweatpants':
        return sweatpants
      case 'French Terry Shorts':
        return shorts
      case 'Boxy Tee':
        return boxyTee
      case 'Long Sleeve Tee':
        return longSleeve
      default:
        return null
    }
  }

  const submitForm = async () => {
    const apiUrl = `https://proxy-semi-aquatics.herokuapp.com/api/subscribe/${email}`;
    try{
      const response = await axios.post(apiUrl,{})
      await setEmail('');
      await closeEmailModal();
      await console.log(response)
      
    }catch(error){
        console.log(error.message);
      }
  }
return(
  open || (!open && type == 'email form') ?
  <ModalContainer  ref={ref} hasDescription={description} type={type}>
    {
      type == 'email form' ?
        <div className='email-modal'>
            <div className="exit-container" onClick={() => closeEmailModal()}>
              <IconContext.Provider value={{className: 'exit-icon'}}>
                < HiOutlineX />
              </IconContext.Provider>
            </div>
            <h2>Next drop is 3/15/21</h2>
            <p>Shopping for new clothing everyday is causing the fashion-related environmental disaster. Shopping the right day, is part of the solution.</p>
            <p>Sign up with your email to get notified when our next collection become available.</p>
            <span className='flex-grower'></span>
            <div className="email-form">
              <input type="text" value={email} placeholder='semi@aquatics.com' className="email-input" onChange={event => setEmail(event.target.value)}/>
              <div className="submit-button" onClick={() => submitForm()}>
                <div className="right-arrow">
                  Subscribe
                </div>
              </div>
            </div>
        </div>
      :
      type ?
          chosenSizingChart(type)  ?
        <img src={chosenSizingChart(type)} alt="crewneck chart"/>
          :
        <h3>NO SIZING CHART</h3>
      :
      <div className='modal-description' dangerouslySetInnerHTML={{__html: description}}>
      </div>

    }
  </ModalContainer>
  :
  ""
  )
}

export default Modal;

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },

    [ref, handler]
  );
}
