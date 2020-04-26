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
  font-size: 12px;
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
    font-family: 'VCR_OSD_MONO_1';
    font-weight: bolder;
    cursor: pointer;
    justify-content: center;
    }
    .no-size{
      cursor: default;
    }
    .product-sizes-hidden{
      text-align: center;
      display: none;
    }
    .product-sizes-show{
      position: absolute;
      width: 100px;
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
  .product-description{
  text-align: left;
    margin: 4px;
  }
}
button{
  font-family: 'VCR_OSD_MONO_1'
}
.mobile-sizes-btn{
  display: none;
}
.mobile-description{
  display: none;
}
@media only screen and (max-width: 768px) {
  .desktop-sizes-btn{
    display: none;
  }
  .mobile-sizes-btn{
    display: block;
  }
  .product-sizes-show{
    position: relative;
    background-color: white;
  }
  display: block;
  .product-info{
    width: 90%
  }
  .buy-product{
    width: 90%;
    padding:12px;
    p{
      display: none;
    }
    .mobile-description{
      text-align: left;
      padding-top: 16px;
      margin: auto;
      width: 90%;
      display: block;
    }
  }
}
`
