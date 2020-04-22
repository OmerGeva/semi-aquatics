import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({children, soldOut}) => (
  <CustomButtonContainer soldOut={soldOut}>
    {children}
  </CustomButtonContainer>

);

export default CustomButton;
