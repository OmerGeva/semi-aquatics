import React from 'react';
import { connect } from 'react-redux';

import { FooterContainer } from './footer.styles'
import { toggleDarkTheme } from '../../redux/style/style.actions'

const Footer = ({ isDark, toggleDarkTheme }) => {
    return(
      <FooterContainer isDark={isDark}>
          <input type="checkbox" id="themeSwitch" name="theme-switch" className="theme-switch__input" />
          <label htmlFor="themeSwitch" className="theme-switch__label" onClick={() => toggleDarkTheme()}>
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
const mapStateToProps = state => ({
  isDark: state.style.isDark
})

const mapDispatchToProps = dispatch => ({
  toggleDarkTheme: () => dispatch(toggleDarkTheme())
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
