import styled from 'styled-components';



export const Container = styled.div`
  width: 440px;
  height: 300px;
  z-index: 10;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  will-change: transform;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: rgb(0 0 0 / 50%) 0 0 20px 2px;
    transition: all 0.3s ease-in-out 0s;
    color: #f74705;
  }
`;

export const IconWrapper = styled.div`
  width: 200px;
  height: 200px;
`;


export const LogoText = styled.div`
  font-size:30px;
  margin-bottom: 20px;
`;