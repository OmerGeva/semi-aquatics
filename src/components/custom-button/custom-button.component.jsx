import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({children}) => (
  <CustomButtonContainer>
    {children}
  </CustomButtonContainer>

);

export default CustomButton;
