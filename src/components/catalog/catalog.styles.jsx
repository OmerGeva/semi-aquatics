import styled from 'styled-components';

export const CatalogContainer = styled.div`
.drop-page {
  text-align: center;
  padding: 16px;
  overflow: scroll;
  height: 85vh;
  h2{
    margin-top: 2%;
  }
  .drop-title{
    height: 15%;
    margin-bottom: 2%;
  }
  .drop-products {
    z-index: 0;
    display: grid;
    grid-gap: 1rem;

    // display: flex;
    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (max-width: 768px) {
      padding-top: 20%;
      margin-right: 1vh;
      height: 100vh;
      width: 100%;
      padding-right: 8px;
      .drop-title{
        height: 10%;
      }
    }
}
.filter-tab{
  display: flex;
  margin: 0 0 4px 24px;
  width: 58px;
  cursor: pointer;
  padding: 8px;
  border: 1px solid #ABABAB;
}
.filter-tab-active{
  display: flex;
  margin: 0 0 4px 24px;
  width: 58px;
  cursor: pointer;
  padding: 8px;
  background-color: #ABABAB;
}
.product-filters-closed{
  display: none;
}

.product-filters{
  z-index:2;
  -webkit-transform: translate3d(0,0,0)
  padding: 0;
  background-color: #2D2D2D;
  position: fixed;
  opacity: 0.8;
  left: 12.7%;
  border: 1px solid #ABABAB;
  text-align: left;

  .product-filter{
    cursor: pointer;
    margin:0;
    padding: 8px;
    border-top: 1px solid #ABABAB;
  }
  .product-filter-active{

    cursor: pointer;
    background-color: #ABABAB;
    margin: 0;
    padding: 8px;
  }
}

 @media only screen and (max-width: 768px) {

  .product-filters{
    -webkit-transform: translate3d(0,0,0)
    z-index: 2;
    left: 10%;
  }
}

`
