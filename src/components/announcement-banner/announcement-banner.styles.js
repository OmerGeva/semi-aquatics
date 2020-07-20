import styled from 'styled-components';


export const AnnouncementBannerContainer = styled.div`
  padding: 8px;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2vh;
  z-index: 7;
  background-color: #54a8c9;
  color: white;




  h5{
    animation-name: slide;
    animation-duration: 23s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: normal;
    margin: 0;
  .spacer-banner{
    width: 24px;
  }
  }

  @keyframes slide{
  from {
  transform: translateX(120vw);
  }
  to {
  transform: translateX(-67vw);
   }
  }



  @media only screen and (max-width: 768px) {
    h5{
      animation-duration: 15s;
      width: 310vw;
      font-size: 12px;
    }
    @keyframes slide{
    from {
    transform: translateX(170vw);
    }
    to {
    transform: translateX(-290vw);
     }
    }
}

`
