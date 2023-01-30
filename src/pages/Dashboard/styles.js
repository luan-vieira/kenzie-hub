import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ContainerAddTech = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  h2 {
    padding-right: 5.3rem;
    font-weight: 600;
    font-size: 16px;
  }
  button {
    width: 32px;
    height: 32px;
    margin-right: 1.5rem;
  }
`;
