import styled from "styled-components";

export const Contianer = styled.div`
  display: flex;
  width: 20vw;
  height: 100vh;
  background-color: #508991;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25%;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h1`
  color: white;
  font-size: 18px;
  padding: 5px;
  align-self: center;
`; 

export const Logo = styled.img`
  width: 35%;
  height: 50%;
`;

export const LocalContainer = styled.div`
  width: 80%;
  height: 40%;

  p {
    color: white;
    font-weight: 600;
  }

  select {
    border-radius: 10px;
    border: 0px;
    width: 95%;
    height: 8%;
  }
  .select-selected {
    background-color: red;
  }
  
`;