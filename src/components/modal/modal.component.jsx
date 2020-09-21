import React, { useEffect, useRef } from 'react';

import EmailForm from '../email-form/email-form.component'

import crewneck from '../../assets/sizing-chart-crewneck.png'
import boxyTee from '../../assets/sizing-boxy.png';
import sweatpants from '../../assets/sweatpants-chart.png';
import shorts from '../../assets/sizing-chart-shorts.png';
import tShirt from '../../assets/sizing-chart-tshirt.png';
import longSleeve from '../../assets/sizing-chart-long-sleeve.png';
import hoodie from '../../assets/sizing-chart-hoodie.png';
import { ModalContainer } from './modal.styles';

const Modal = ({open, setOpen, type, description, closeEmailModal}) =>
{
  const ref = useRef();
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
return(
  open || (!open && type == 'email form') ?
  <ModalContainer  ref={ref} hasDescription={description} type={type}>
    {
      type == 'email form' ?
        <div className='email-modal'>
          <h2>Currently, all sold out. Add your email to find out when our next drop is.</h2>
          <span className='flex-grower'></span>
          <EmailForm inModal />
          <p className="no-thanks" onClick={closeEmailModal}>No thanks.</p>
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
