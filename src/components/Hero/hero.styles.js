import styled from "styled-components";


export const Container = styled.section`
  max-width: 144rem;
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

  @media (max-width: 639px) {
    display: none;
  }
`;


export const CTAContainer = styled.div`
  max-width: 90rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;

  backdrop-filter: blur(1rem) saturate(180%);
  -webkit-backdrop-filter: blur(1rem) saturate(180%);
  background-color: rgba(255, 255, 255, 0.55);
  border-radius: 1rem;
`;

export const MainText = styled.h1`
  background-color: #f74705;
  font-size: 6rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  color: white;
  @media (max-width: 549px) {
    font-size: 6rem;
  }
  @media (max-width: 512px) {
    font-size: 4.5rem;
  }
  @media (max-width: 425px) {
    font-size: 3.5rem;
  }
  @media (max-width: 350px) {
    font-size: 3.2rem;
  }
  @media (max-width: 320px) {
    font-size: 3rem;
  }
`;

export const SecText = styled.h2`
  font-size: 4rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 549px) {
    font-size: 3rem;
  }
  @media (max-width: 425px) {
    font-size: 2.5rem;
  }
  @media (max-width: 320px) {
    font-size: 2rem;
  }
`;

export const PText = styled.p`
  font-size: 3rem;
  text-align: justify;
  @media (max-width: 549px) {
    font-size: 2rem;
  }
  @media (max-width: 425px) {
    font-size: 1.6rem;
  }
`;

export const Emphasized = styled.span`
  background-color: #f74705;
  padding: 0.2rem;
  color: white;
  border-radius: 5px;
`;

export const CVDownloadBtn = styled.div`
  font-size: 2rem;
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