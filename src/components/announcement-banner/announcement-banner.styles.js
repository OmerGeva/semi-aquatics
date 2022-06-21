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
  text-transform: uppercase;




  h5{
    text-transform: uppercase;
    animation-name: slide;
    animation-duration: 21s;
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
      animation-duration: 13s;
      width: 310vw;
    }
    @keyframes slide{
    from {
	    transform: translateX(170vw);
    }
    to {
	    transform: translateX(-260vw);
     }
    }
}

`
