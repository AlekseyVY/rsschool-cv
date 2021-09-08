import styled from "styled-components";


export const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  position: relative;
  
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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


export const CTAContainer = styled.div`
  max-width: 60rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.55);
  border-radius: 10px;
`;

export const MainText = styled.h1`
  width: 35rem;
  background-color: #f74705;
  font-size: 5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: white;
`;

export const SecText = styled.h2`
  font-size:4rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const PText = styled.p`
  font-size: 2rem;
  text-align: justify;
`;

export const Emphasized = styled.span`
  background-color: #f74705;
  color: white;
  border-radius: 5px;
`;

export const CVDownloadBtn = styled.div`
  font-size: 1.5rem;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  color: #f74705;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    cursor: pointer;
    background-color: #f74705;
    color: white;
  }
`;

export const CVDownloadLink = styled.a`
  text-decoration: none;
`;