import styled from 'styled-components';

export const CheckoutTotalContainer = styled.div`
border: 1px solid #ABABAB;
height: 40vh;
width: 15%;
margin-left: 24px;
padding: 16px;
display: flex;
flex-direction: column;

.total-price{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-space{
  flex-grow: 1;
}
.center-button{
  display: flex;
  justify-content: space-around;
}

  @media only screen and (max-width: 768px) {
    border: 1px solid #ABABAB;
    height: 28%;
    width: 80%;
    h5{
      margin: 16px;
    }
    .totals-mobile{
      margin-right: 16px;
      padding: 0 16px;
      display: flex;
      justify-content: space-around;
    }
    .total-price{
      width: 30%;
    }
}
`

