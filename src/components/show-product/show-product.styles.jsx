import styled from 'styled-components';


export const ShowProductContainer = styled.div`
display: flex;
height: 100vh;
width: 100%;
overflow: hidden;
padding: 0px 10px;
align-items: center;
.product-info{
  margin-bottom: 5%;
  width: 50%;
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
.product-info{
  h4{
    margin-top: 4px;
  }
}
.bolder-font{
  font-weight: bolder;
}
.other-text{
  display: none;
}
img{
  width: 90%;
}
p{
  font-size: 12px;
  line-height: 1.7;
}
.see-sizing-guide-desktop{
  display: block;
  text-align: left;
  padding-left: 34px;
  margin-bottom: 24px;
  cursor: pointer;
  font-size: 14px;
}
.title-desktop{
  display: block;
}
.title-and-price-mobile{
  display: none;
}
.see-size-guide-and-info-mobile{
  display: none;
}
.product-size{
  margin: 12px auto;
  display: block;
  cursor: pointer;
  color: white;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  width: 32px;
  padding: 0 16px 0 16px;
  font-size: 18px;
  text-transform: uppercase;
  font-family: 'VCR_OSD_MONO_1';
  font-weight: bolder;
  cursor: pointer;
  justify-content: center;
}
.chosen{
  color: #54A8C9;
}
.sizes{
  display: flex;
  justify-content: space-around;

}
.add-to-cart{
    margin: calc(10vw / 2) auto;
    display: flex;
    justify-content: space-around;
}

.addToCartButton{
  width: 200px;
}
.buy-product{
  margin-top: 7%;
  position: relative;
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
  padding: 0px;
  overflow-y: hidden;
  .desktop-sizes-btn{
    display: none;
  }
  .sizes{
    border: 1px solid white;
    border-right: 1px solid rgba(0,0,0,0);
    border-left: 1px solid rgba(0,0,0,0);
    border-bottom: 2px solid white;
  }
  .product-size{
    width: 32px;
    padding: 0 10px 0 10px;
}

.title-desktop{
  display: none;
}
.title-and-price-mobile{
  display: flex;
  .product-title-mobile{
    border: 1px solid white;
    border-left: 1px solid rgba(0,0,0,0);
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h4{
      margin: 10%;
    }
  }
  .product-price-mobile{
    border: 1px solid white;
    border-right: 1px solid rgba(0,0,0,0);
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h4{
      margin: 10%;
    }
  }
}
.see-size-guide-and-info-mobile{
  display: flex;
  .see-size-guide{
    border: 1px solid white;
    border-left: 1px solid rgba(0,0,0,0);
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
      margin: 10%;
    }
  }
  .see-more-info{
    border: 1px solid white;
    border-right: 1px solid rgba(0,0,0,0);
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .see-sizing-guide-mobile{
      margin: 10%:
      cursor: pointer;
      font-size: 14px;
    }
  }
}
  .smaller-text{
    width: 80%;
    margin: auto;
    padding: 10px;
  }
  display: block;
  .product-info{
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      margin-bottom: 0;
      margin-top: 20%;
      height: calc(45vh + 10vw/10);
      border-top:2px solid white;
      border-bottom: 1px solid white;
    .product-image{
      margin: auto;
      width: 85%;
      padding: 3%;
    }
    width: 100%
  }
  .buy-product{
    margin: 0px;
    width: 100%;
    padding:0px;
    .see-sizing-guide-desktop{
      display: none;
    }

    .product-description{
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
