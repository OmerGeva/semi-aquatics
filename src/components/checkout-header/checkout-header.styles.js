import styled from 'styled-components';

export const CheckoutHeaderContainer = styled.div`
  width: 80%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  height: 10%;
  .header-block {
    text-transform: capitalize;
    width: 16%;

    &:last-child {
      width: 8%;
    }
  }
`
