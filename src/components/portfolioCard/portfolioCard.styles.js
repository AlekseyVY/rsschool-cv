import styled, {keyframes} from "styled-components";


export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  display: none;
`;

export const DeployLink = styled.div`
  position: absolute;
  top: 30%;
  right: 10%;
  z-index: 5;
  opacity: 0;
  &:hover {
    fill: #f74705;
  }
`;

export const GitLink = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  z-index: 5;
  opacity: 0;
  &:hover {
    fill: #f74705;
  }
`;

const breatheAnimation = keyframes`
 0% { height: 0;}
 100% { height: 100%;}
`

const opacityAnimation = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1;}
`;

export const Container = styled.div`
  width: 32rem;
  height: 32rem;
  margin: 2rem;
  position: relative;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: rgb(0 0 0 / 50%) 0 0 20px 2px;
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover ${Overlay} {
    display: block;
    height: 100%;
    animation-name: ${breatheAnimation};
    animation-duration: 1s;
    backdrop-filter: blur(10px) saturate(180%);
    -webkit-backdrop-filter: blur(10px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.55);

    transform: scale(1.02);
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover ${GitLink} {
    opacity: 1;
    transition-property: opacity;
    transition-delay: 0.5s;
    animation-delay: 0.5s;
    animation-name: ${opacityAnimation};
    animation-duration: 2s;
  }
  &:hover ${DeployLink} {
    opacity: 1;
    transition-property: opacity;
    transition-delay: 0.5s;
    animation-delay: 0.5s;
    animation-name: ${opacityAnimation};
    animation-duration: 2s;
  }
`;



export const DescWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 45%;
  background-color: white;
`;

export const DescLogo = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.1rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
`;

export const TechWrapper = styled.div`
  width: 100%;
  height: 33%;
  font-size: 1.6rem;
  display: flex;
  flex-wrap: wrap;
`;

export const TechContent = styled.div`
  color: white;
  margin: 0.5rem 0.5rem;
  height: 1.6rem;
  background-color: #f74705;
  border-radius:0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
`;

export const DescriptionWrapper = styled.div`
  height: 33%;
  font-size: 1.6rem;
`;