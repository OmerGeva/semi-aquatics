import React, { useEffect, useRef } from 'react';

import crewneck from '../../assets/sizing-chart-crewneck.png'
import boxyTee from '../../assets/sizing-boxy.png';
import sweatpants from '../../assets/sweatpants-chart.png';
import shorts from '../../assets/sizing-chart-shorts.png';
import tShirt from '../../assets/sizing-chart-tshirt.png';
import hoodie from '../../assets/sizing-chart-hoodie.png';
import { ModalContainer } from './modal.styles';

const Modal = ({open, setOpen, type}) =>
{
  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));

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
      default:
        return null
    }
  }
return(
  open ?
  <ModalContainer  ref={ref}>
    {
      chosenSizingChart(type)  ?
    <img src={chosenSizingChart(type)} alt="crewneck chart"/>
      :
    <h3>NO SIZING CHART</h3>
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
