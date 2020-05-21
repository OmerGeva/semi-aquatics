import React from 'react';

import { Route } from 'react-router-dom';
import  { InfoPageContainer } from './info-page.styles';
import Faq from '../../components/faq/faq.component';
import Sizing from '../../components/sizing/sizing.component';
import Sustainability from '../../components/sustainability/sustainability.component';

const InfoPage = ({ match }) => (
  <InfoPageContainer>
    <Route path={`${match.path}/faq`} component={Faq}/>
    <Route path={`${match.path}/sizing`} component={Sizing}/>
    <Route path={`${match.path}/Sustainability`} component={Sustainability}/>
  </InfoPageContainer>
)

export default InfoPage;
