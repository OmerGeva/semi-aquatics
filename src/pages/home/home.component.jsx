import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsDark } from '../../redux/style/style.selectors'
import { HomeContainer } from './home.styles'


class Home extends React.Component {
  state={
    text: ""
  }
  handleChange = event =>{
    this.setState({text: event.target.value})
  }

  render(){
  const {isDark} = this.props;
  return(
    <HomeContainer isDark={isDark}>
      <div className="home-page">
        <h2 className='title-RE'>[Reverse Evolution]</h2>
        <img src="https://cdn.shopify.com/s/files/1/0276/3305/7867/files/big3_1410x.png?v=1575617303" alt="logo"/>
        <h4>CURRENTLY ALL SOLD OUT. ADD YOUR EMAIL TO FIND OUT WHEN OUR NEXT DROP IS</h4>
        <form action="https://gmail.us4.list-manage.com/subscribe/post?u=98190063b370f72608d400f09&amp;id=fbde19324c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div className="form-flex-box">
            <div className="group">
              <input type="email" name="EMAIL" className="form-input" id="mce-EMAIL"  autoComplete="off" onChange={this.handleChange}/>
              <label className={`${this.state.text.length ? 'shrink' : ""} form-input-label`}>
              EMAIL
              </label>
            </div>
            <button className='submit-subscribe-button'>Subscribe</button>
          </div>
        </form>
      </div>
    </HomeContainer>
  )
  }
}

const mapStateToProps = createStructuredSelector({
  isDark: selectIsDark
})

export default connect(mapStateToProps)(Home);
