import React, { useState, useRef } from 'react';

import { NavbarDropContainter, LinkContainer } from './navbar-drop.styles'
import useOnClickOutside from '../../effects/use-on-click-outside.effect'


const NavbarDrop = ({title, drops, closeNavbar}) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();
  console.log(title)
  useOnClickOutside(ref, () => setIsOpen(false));

  const closeMobileNavbar = closeNavbar ? closeNavbar : () => console.log('');

  return(
  <NavbarDropContainter ref={ref}>
    {
      !isOpen && title === 'FALL/WINTER 2020/21' ?
      <p className="new-drop">NEW!</p>
      : 
      ""
    }
     <p className='drop-title' onClick={() => setIsOpen(!isOpen)}>{title}</p>
     <div className={isOpen ? 'individual-drops open' : 'individual-drops'}>

    {
      isOpen ?
        title=='SPRING/SUMMER 2020'
        ?
        drops.map(drop =>
          drop < 9 ?
            <LinkContainer onClick={() => { setIsOpen(false); closeMobileNavbar(); }} key={drop.id} to={`/shop/drops/${drop}`}>
            DROP {drop - 6}
            </LinkContainer>
          :
            drop === drops[0] ?
            <div>
              <LinkContainer onClick={() => { setIsOpen(false); closeMobileNavbar(); }} key={drop.id} to={`/shop/drops/${drop}`}>
              DROP {drop - 7}
              </LinkContainer>
            </div>
            :
              <LinkContainer onClick={() => { setIsOpen(false); closeMobileNavbar(); }} key={drop.id} to={`/shop/drops/${drop}`}>
              DROP {drop - 7}
              </LinkContainer>
          )


        :
        drops.map(drop =>
          <LinkContainer onClick={() => { setIsOpen(false); closeMobileNavbar(); }} key={drop.id} to={`/shop/drops/${drop}`}>
            {
              drop === 13 ?
              <p className='new-drop'> NEW!</p>
              : 
              ""
            }
          DROP {drop}
          </LinkContainer>
          )
      :
        ''
    }
     </div>


  </NavbarDropContainter>
    )
}


export default NavbarDrop;
