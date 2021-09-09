import styled from "styled-components";


export const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  position: relative;
  
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AnimationWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  position: absolute;
  left: -10rem;
  bottom: 0;
  pointer-events: none;
  z-index: -2;
`;