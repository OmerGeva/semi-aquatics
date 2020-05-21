import styled from 'styled-components';

export const SustainabilityContainer = styled.div`
overflow: scroll;
height: 90vh;
h5{
  margin-bottom: 0;
}
.example-card-sustainability{
  padding: 2% 10%;
  display: flex;
  align-items: center;
  img{
    width: 40%;
    margin: 16px;
    border 1px solid #ABABAB;;
  }
}
.example-card-sustainability-text{
  text-align: left;
  width: 60%;
}
.example-card-sustainability-text-final{
  text-align: center;
  width: 60%;
  margin: auto;
}
.supima-link{
  padding-bottom: 4px;
  border-bottom: 2px solid gray;
  &:hover{
    opacity: 0.7;
  }
}
.mobile-example-card-sustainability{
  display: none;
}

@media only screen and (max-width: 768px) {
  .mobile-example-card-sustainability{
    display: block;
  }
  .desktop-example-card-sustainability{
    display: none;
  }
  .example-card-sustainability{
    padding: 0 10%;
    display: block;
    align-items: center;
    img{
      width: 100%;
      margin: 0;
      border 1px solid #ABABAB;
    }
  }
  .example-card-sustainability-text{
    h4{
      margin-bottom: 4px;
    }
    text-align: left;
    width: 100%;
  }
}
`
