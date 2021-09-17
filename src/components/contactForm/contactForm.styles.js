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
  transition: 0.5s ease;
  &:hover {
    cursor: pointer;
    fill: #f74705;
    transition: 0.5s ease;
  }
`;


export const ContactBtn = styled.div`
  font-size: 2rem;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  color: #f74705;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: 1s ease;
  
  &:hover {
    cursor: pointer;
    background-color: #f74705;
    color: white;
    transition: 0.5s ease;
  }
`;

export const ContactLink = styled.a`
  text-decoration: none;
`;