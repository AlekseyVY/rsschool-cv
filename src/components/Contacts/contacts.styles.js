import styled from "styled-components";


export const Container = styled.footer`
  max-width: 1440px;
  width: 100%;
  position: relative;
  
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const AnimationWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  position: absolute;
  left: -10rem;
  bottom: 0;
  pointer-events: none;
  z-index: -2;
`;