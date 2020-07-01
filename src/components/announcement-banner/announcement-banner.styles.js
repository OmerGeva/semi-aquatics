import styled from 'styled-components';

export const AnnouncementBannerContainer = styled.div`
  padding: 8px;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2vh;
  z-index: 1;
  background-color: #54a8c9;
  h5{
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    h5{
      font-size: 14px;
    }
}

`
