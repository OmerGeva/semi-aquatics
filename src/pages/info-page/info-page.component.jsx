import React from 'react'
import { Route } from 'react-router-dom'
import  { InfoPageContainer } from './info-page.styles'
import Faq from '../../components/faq/faq.component'

const InfoPage = ({ match }) => (
  <InfoPageContainer>
    <Route path={`${match.path}/faq`} component={Faq}/>
  </InfoPageContainer>
)

export default InfoPage;
