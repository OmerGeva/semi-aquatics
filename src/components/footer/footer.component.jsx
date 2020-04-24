import React from 'react';

import { FooterContainer } from './footer.styles'

const Footer = ({ changeTheme }) => {
    return(
      <FooterContainer>
          <input type="checkbox" id="themeSwitch" name="theme-switch" className="theme-switch__input" />
          <label htmlFor="themeSwitch" className="theme-switch__label" onClick={() => changeTheme()}>
            <span></span>
          </label>

          <a href="mailto:info@semiaquatics.com" className='mail-us-footer'>info@semiaquatics.com</a>
          <a href="https://www.instagram.com/semiaquatics">
            <i className="fab fa-instagram footer-item" ></i>
          </a>
          <h4 className="footer-item">© 2020 Semi Aquatics</h4>
      </FooterContainer>
    )
}

export default Footer;
