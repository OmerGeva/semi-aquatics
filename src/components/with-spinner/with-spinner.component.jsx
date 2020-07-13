import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({isLoading, products, ...otherProps}) => {
  console.log('hello')
  if (isLoading === false && products !== null && products !== "Failed to fetch") {
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
