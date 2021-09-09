import styled from 'styled-components';


export const Container = styled.div`
  max-width: 64rem;
  width :100%;
  height: 32rem;
  margin-right: 3rem;
  display: flex;
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.55);
`;

export const FormWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 2rem;
`;

export const LeftFormWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const RightFormWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Input = styled.input`
  width: 90%;
  height: 25px;
  padding: 10px;
  position: relative;
  outline: none;
  border-radius: 10px;
  &:focus {
    border-color: #f74705;
  }
  &:active {
    border-color: #f74705;
  }
`;

export const Area = styled.textarea`
  width: 90%;
  height: 200px;
  padding: 10px;
  position: relative;
  outline: none;
  border-radius: 10px;
  resize: none;
  &:focus {
    border-color: #f74705;
  }
  &:active {
    border-color: #f74705;
  }
`;

export const Submit = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: 5px 5px 30px rgba(0,0,0,0.2);
  color:  #f74705;
  margin-bottom: 2rem;
  
  &:hover {
    cursor: pointer;
    opacity: 1;
    color: white;
    background-color: #f74705;
    box-shadow: 5px 5px 30px rgba(0,0,0,0.2);
    transition: color 0.3s ease-out;
  }
`;

export const SocialWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SocialIcon = styled.div`
  &:hover {
    cursor: pointer;
    fill: #f74705;
  }
`;