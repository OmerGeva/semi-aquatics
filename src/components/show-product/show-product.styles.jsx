import styled from 'styled-components';


export const ShowProductContainer = styled.div`
display: flex;
height: 100%;
width: 100%;
overflow: hidden;
padding: 0px 10px;
align-items: center;
margin-top: 2%;
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
.see-sizing-guide-mobile{
  display: none;
}
.product-size{
  margin: 12px auto;
  display: block;
  cursor: pointer;
  background-color: white;
  color: #ABABAB;
  border: 4px solid rgba(0,0,0,0);
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 24px 0 24px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'VCR_OSD_MONO_1';
  font-weight: bolder;
  cursor: pointer;
  justify-content: center;
}
.chosen{
  color: #54A8C9;
  border: 4px solid #54A8C9;
}
.sizes{
  display: flex;
  justify-content: space-around;

}
.add-to-cart{
    margin: 35px auto;
    display: flex;
    justify-content: space-around;
}

.addToCartButton{
  width: 200px;
}
.buy-product{
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
  padding: 40px 10px;

  overflow-y: scroll;
  .desktop-sizes-btn{
    display: none;
  }
  .product-size{
    width: 32px;
  padding: 0 8px 0 8px;
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
    .see-sizing-guide-desktop{
      display: none;
    }
    .see-sizing-guide-mobile{
      text-align: left;
      display: block;
      padding-left: 34px;
      margin-bottom: 24px;
      cursor: pointer;
      font-size: 14px;
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
