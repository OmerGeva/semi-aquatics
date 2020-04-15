import styled from 'styled-components';

export const ShowProductContainer = styled.div`
display: flex;
height: 100%;
width: 100%;
overflow: hidden;
padding: 42px 10px;
align-items: center;
.product-info{
  width: 50%
}
img{
  max-height: 70%;
  width: 90%;
}
p{
  line-height: 2;
}
.size-and-add-to-cart{
  margin-top: 52px;
  display: flex;
  justify-content: space-around;
    .choose-size{
    background-color: white;
    color: #ABABAB;
    border: 1px solid #ABABAB;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'HelveticaNeue';
    font-weight: bolder;
    cursor: pointer;
    justify-content: center;
    }
    .product-sizes-hidden{
      text-align: center;
      display: none;
    }
    .product-sizes-show{
      position: absolute;
      .product-size{
       padding: 0 24px 0 24px;
        margin-top: 12px;
        display: block;
        cursor: pointer;
      }
    }
}
.buy-product{
  width: 40%;
  padding: 42px;
}
button{
  font-family: 'HelveticaNeue'
}
`