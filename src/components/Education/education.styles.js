import styled from "styled-components";


export const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  position: relative;
  
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const AnimationWrapper = styled.div`
  max-width: 750px;
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  pointer-events: none;
  z-index: -2;
  @media (max-width: 639px) {
    display: none;
  }
`;

export const CodeWrapper = styled.aside`
  width: 700px;
  font-size: 1.9rem;
  margin: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.55);
  
  @media (max-width: 768px) {
    margin: 0;
  }
  @media (max-width: 639px) {
    margin: 0;
    font-size: 1.4rem;
  }
  @media (max-width: 500px) {
    margin: 0;
    font-size: 1.2rem;
  }
  @media (max-width: 425px) {
    margin: 0;
    font-size: 1rem;
  }
  @media (max-width: 320px) {
    margin: 0;
    font-size: 0.8rem;
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