import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
  if (isLoading === false) {
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
