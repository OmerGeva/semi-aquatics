import React from 'react';
import { HomeContainer } from './home.styles'
import EmailForm from '../../components/email-form/email-form.component'

const Home = () => (
    <HomeContainer>
      <div className="home-page">
        <h2 className='title-RE'><span className="bracket">[</span><span className="re">REVERSE EVOLUTION</span><span className="bracket">]</span></h2>
        <img src="https://cdn.shopify.com/s/files/1/0276/3305/7867/files/big3_1410x.png?v=1575617303" alt="logo"/>
        <EmailForm />
      </div>
    </HomeContainer>
  )

export default Home;
