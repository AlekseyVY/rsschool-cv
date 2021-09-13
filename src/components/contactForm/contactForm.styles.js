import styled from 'styled-components';


export const Container = styled.div`
  max-width: 64rem;
  width :100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.55);
  border-radius: 1rem;
`;


export const SocialWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`;

export const SocialIcon = styled.div`
  &:hover {
    cursor: pointer;
    fill: #f74705;
  }
`;