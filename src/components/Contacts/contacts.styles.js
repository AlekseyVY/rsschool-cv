import styled from "styled-components";


export const Container = styled.footer`
  max-width: 1440px;
  width: 100%;
  position: relative;
  
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const AnimationWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  position: absolute;
  left: -10rem;
  bottom: 0;
  pointer-events: none;
  z-index: -2;

  @media (max-width: 639px) {
    display: none;
  }
`;


export const MobileAnimationWrapper = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100vh;
  overflow: hidden;
  z-index: -2;
  pointer-events: none;
  
  @media (max-width: 639px) {
    display: block;
  }
`;