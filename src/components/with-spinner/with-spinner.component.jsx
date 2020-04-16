import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({isLoading, products, ...otherProps}) => {
  if (isLoading === false && products !== null) {
    return (
      <WrappedComponent isLoading={isLoading} {...otherProps} />
      )
  } else {

    return (
      <SpinnerOverlay>
        <SpinnerContainer/>
      </SpinnerOverlay>
    )
  }
}

export default WithSpinner;
