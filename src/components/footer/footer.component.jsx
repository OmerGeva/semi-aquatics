import React from 'react';

import { FooterContainer } from './footer.styles'

const Footer = () => {
    return(
      <FooterContainer>
          <a href="mailto:info@semiaquatics.com" className='mail-us-footer'>info@semiaquatics.com</a>
          <a href="https://www.instagram.com/semiaquatics">
            <i className="fab fa-instagram footer-item" ></i>
          </a>
          <h4 className="footer-item">© 2020 Semi Aquatics</h4>
      </FooterContainer>
    )
}
export default Footer;
