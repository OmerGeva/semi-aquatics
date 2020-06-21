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
.smaller-text{
  font-size: 10px;
  text-align: left;
  padding: 10px;
  border: 1px solid #ABABAB;
  margin-bottom: 0px;
}
.italic-font{
  font-style: italic;
}
.bolder-font{
  font-weight: bolder;
}
.other-text{
  display: none;
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
  margin-top: 35px;
  display: flex;
  justify-content: space-around;
    .choose-size{

    background-color: white;
    color: #ABABAB;
    border: 1px solid #ABABAB;
    width: 32px;
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
      position: fixed;
      width: 102px;
        bottom: 90px;
        background-color: white;
        color: #ABABAB;
        border: 1px solid #ABABAB;

      .product-size{
        padding: 0 24px 0 24px;
        margin: 12px auto;
        width: 16px;
        display: block;
        cursor: pointer;
      }
    }
}
.addToCartButton{
  width: 200px;
}
.buy-product{
  width: 40%;
  padding: 42px;
  .product-description{
    p{
      margin: 2px;
    }
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
  overflow-y: scroll;
  .desktop-sizes-btn{
    display: none;
  }


  .mobile-sizes-btn{
    display: block;
  }
  .smaller-text{
    width: 80%;
    margin: auto;
    padding: 10px;
  }
  .product-sizes-show{
    bottom: 150px !important;
    color: #ABABAB;
    background-color: white;
  }
  display: block;
  .product-info{
    width: 95%
  }
  .buy-product{
    width: 90%;
    padding:12px;
    p{
      display: none;
    }

    .mobile-description{
      line-height: normal;
      text-align: left;
      padding-top: 8px;
      margin: auto;
      width: 80%;
      display: block;
      p{
        margin: 2px;
        display: block;
      }

    }
  }
}
`
