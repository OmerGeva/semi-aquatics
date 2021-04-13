import React, { useState, useRef } from 'react';

import { NavbarDropContainter, LinkContainer } from './navbar-drop.styles'
import useOnClickOutside from '../../effects/use-on-click-outside.effect'


const NavbarDrop = ({title, drops, closeNavbar}) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));

  const closeMobileNavbar = closeNavbar ? closeNavbar : () => {};

  return(
  <NavbarDropContainter ref={ref}>
     {drops[0] === 16 && !isOpen ?
              <div className="new-drop-top">
                NEW!
              </div>
              :
              ''
      }
     <p className='drop-title' onClick={() => setIsOpen(!isOpen)}>{title}</p>
     <div className={isOpen ? 'individual-drops open' : 'individual-drops'}>

    {
      isOpen ?
      title=='SPRING/SUMMER 2021'
        ? 
        drops.map(drop =>
          <div key={drop}>
            <LinkContainer onClick={() => { setIsOpen(false); closeMobileNavbar(); }} key={drop.id} to={`/shop/drops/${drop}`}>
            DROP {drop - 14}
            </LinkContainer>
            {drop === 16 ?
              <div className="new-drop">
                NEW!
              </div>
              :
              ''
            }
          </div>
        )
        :
      title=='FALL/WINTER 2020/21'
        ? 
        drops.map(drop =>
          <div className="">
            <LinkContainer onClick={() => { setIsOpen(false); closeMobileNavbar(); }} key={drop.id} to={`/shop/drops/${drop}`}>
            DROP {drop - 12}
            </LinkContainer>
            {/* {drop === 14 ?
              <div className="new-drop">
                NEW!
              </div>
              :
              ''
            } */}
          </div>
        )
        :
        title=='SPRING/SUMMER 2020'
        ?
        drops.map(drop =>
          drop < 9 ?
            <LinkContainer onClick={() => { setIsOpen(false); closeMobileNavbar(); }} key={drop.id} to={`/shop/drops/${drop}`}>
            DROP {drop - 6}
            </LinkContainer>
          :
            drop === drops[0] ?
            <div key={drop.id}>
              <LinkContainer onClick={() => { setIsOpen(false); closeMobileNavbar(); }}to={`/shop/drops/${drop}`}>
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
