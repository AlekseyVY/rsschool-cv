import styled from 'styled-components';



export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.55);
  z-index: 9999;
  color: black;
`;

export const NavWrapper = styled.nav`
  max-width: 144rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Navigation = styled.ul`
  width: 60rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Kaisei HarunoUmi', serif;
  font-size: 2rem;
  text-transform: uppercase;
  opacity: 1;
`;

export const NavElement = styled.li`
  &::after {
    bottom: 0;
    content: "";
    display: block;
    height: 0.2rem;
    left: 50%;
    background-color: black;
    transition: width 0.5s ease 0s, left 0.5s ease 0s;
    width: 0;
  }
  
  &:hover {
    &::after {
      width: 100%;
      background-color: #f74705;
    }
  }
`;


export const NavigationLink = styled.a`
  text-decoration: none;
  color: black;
  
  &:hover {
    cursor: pointer;
    color: #f74705;
  }
`;