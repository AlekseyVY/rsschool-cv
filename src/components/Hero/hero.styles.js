import styled from "styled-components";


export const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const AnimationWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
`;

export const CTAContainer = styled.div`
  width: 60rem;
  height: 30rem;
`;

export const MainText = styled.h1`
  width: 35rem;
  background-color: aqua;
  font-size: 5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SecText = styled.h2`
  font-size:4rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const PText = styled.p`
  font-size: 2rem;
`;