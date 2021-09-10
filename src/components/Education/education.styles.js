import styled from "styled-components";


export const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  position: relative;
  
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const AnimationWrapper = styled.div`
  max-width: 750px;
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  pointer-events: none;
  z-index: -2;
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
`;