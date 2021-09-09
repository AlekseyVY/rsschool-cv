import styled from "styled-components";

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
    color: #f74705;
  }
`;

export const DescWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45%;
  background-color: white;
`;

export const DescLogo = styled.h3`
  font-size: 3rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
`;
