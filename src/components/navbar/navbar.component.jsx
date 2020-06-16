import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import { NavbarContainer, LinkContainer } from './navbar.styles';

import { selectIsDark } from '../../redux/style/style.selectors'
import { selectProducts } from '../../redux/product/product.selectors'
import onClickOutside from "react-onclickoutside"
import { toggleDarkTheme } from '../../redux/style/style.actions';

class  Navbar extends React.Component{
  state = {
    navbarOpen: false
  }
  handleClickOutside(){
    this.setState({
      navbarOpen: false
    })
  }
  toggleList(){
    this.setState(() => ({
      navbarOpen: !this.state.navbarOpen
    }))
  }


  render(){
    const winterDrops = [1,2,3,4,5,6].reverse()
    const summerDrops = [7,8,10].reverse()
    const navHeight  = window.innerHeight
    const {numberOfCartItems, toggleDarkTheme, isDark} = this.props
    return(
      <NavbarContainer isDark={isDark} navHeight = {navHeight}>
        <div className="nav-desktop">
          <LinkContainer to="/" className="home-link">
          HOME
          </LinkContainer>
          <LinkContainer to="/checkout" className="cart-link">
          CART ({numberOfCartItems})
          </LinkContainer>
          <LinkContainer to="/shop/catalog">
          CATALOG
          </LinkContainer>
          <div className="summer-season">
            SPRING/SUMMER 2020
            <p className="new-drop-top">NEW!</p>
            <div className="summer-drops">
              <LinkContainer to={`/shop/drops/${10}`}>
              DROP 3
              </LinkContainer>
              <p className="new-drop">NEW!</p>
              {
                summerDrops.map(drop =>
                  drop !== 10 ?
                  <LinkContainer to={`/shop/drops/${drop}`}>
                  DROP {drop - 6}
                  </LinkContainer>
                  :
                  ""
                  )
              }
            </div>
          </div>
          <div className="winter-season">
            FALL/WINTER <br />2019/20
            <div className="winter-drops">
            {
              winterDrops.map(drop =>
                <LinkContainer to={`/shop/drops/${drop}`}>
                DROP {drop}
                </LinkContainer>
                )
            }
            </div>
          </div>
          <div className="pages-space"></div>
          <input type="checkbox" id="themeSwitch" name="theme-switch" className="theme-switch__input" />
          <label htmlFor="themeSwitch" className="theme-switch__label" onClick={() => toggleDarkTheme()}>
            <span></span>
          </label>
          <LinkContainer to="/info/sizing">
          SIZING
          </LinkContainer>
          <LinkContainer to="/info/sustainability">
          SUSTAINABILITY
          </LinkContainer>
          <LinkContainer to="/info/faq">
          FAQ
        </LinkContainer>
        </div>

      {
        //////////////// MOBILE ////////////////
      }
      <div className={this.state.navbarOpen ? "mobile-toggle-btn-open" : "mobile-toggle-btn-closed"} onClick={() => this.toggleList()}>
        <i className="fas fa-bars"></i>
      </div>
      <div className={this.state.navbarOpen ? "nav-mobile-open" : "nav-mobile-closed"}>
        <LinkContainer to="/" className="home-link"  onClick={() => this.toggleList()}>
        HOME
        </LinkContainer>
        <LinkContainer to="/checkout" className="cart-link" onClick={() => this.toggleList()}>
        CART ({numberOfCartItems})
        </LinkContainer>
        <LinkContainer to="/shop/catalog"  onClick={() => this.toggleList()}>
        CATALOG
        </LinkContainer>
        <div className="summer-season">
          <div className="mobile-nav-titles">SPRING/SUMMER 2020</div>
          <p className="new-drop-top">NEW!</p>
          <div className="summer-drops">
            <LinkContainer to={`/shop/drops/3`} onClick={() => this.toggleList()}>
            DROP 3
            </LinkContainer>
            <p className="new-drop">NEW!</p>
            {
              summerDrops.map(drop =>
                drop !== 10 ?
                <LinkContainer to={`/shop/drops/${drop}`} onClick={() => this.toggleList()}>
                DROP {drop - 6}
                </LinkContainer>
                :
                ""
                )
            }
          </div>
        </div>
        <div className="winter-season">
          <div className="mobile-nav-titles">FALL/WINTER 2019/20</div>
          <div className="winter-drops">
            {
              winterDrops.map(drop =>
                <LinkContainer to={`/shop/drops/${drop}`}   onClick={() => this.toggleList()}>
                DROP {drop}
                </LinkContainer>
                )
            }
          </div>
        </div>
        <div className="pages-space"></div>
        <input type="checkbox" id="themeSwitch" name="theme-switch" className="theme-switch__input" />
        <label htmlFor="themeSwitch" className="theme-switch__label" onClick={() => toggleDarkTheme()}>
          <span></span>
        </label>
        <LinkContainer to="/info/sizing" className="non-drop-page" onClick={() => this.toggleList()}>
        SIZING
        </LinkContainer>
        <LinkContainer to="/info/sustainability" className="non-drop-page" onClick={() => this.toggleList()}>
        SUSTAINABILITY
        </LinkContainer>
        <LinkContainer to="/info/faq" className="non-drop-page" onClick={() => this.toggleList()}>
        FAQ
        </LinkContainer>
        <a href="https://www.instagram.com/semiaquatics">
          <i className="fab fa-instagram footer-item" ></i>
        </a>
        <h6 className="footer-item copyright">© 2020 Semi Aquatics</h6>
      </div>


      </NavbarContainer>
      )
  }
}

const mapStateToProps = createStructuredSelector({
  numberOfCartItems: selectCartItemCount,
  isDark: selectIsDark,
  products: selectProducts
})
const mapDispatchToProps = dispatch => ({
  toggleDarkTheme: () => dispatch(toggleDarkTheme())
})
export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(Navbar));
