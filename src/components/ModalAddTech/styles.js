import styled from "styled-components";

export const ContainerModal = styled.section`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
`;

export const Modal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey-3);
  padding: 0px;
  width: 350px;
  height: 370px;
  border-radius: 4px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--grey-2);
    width: 100%;
    height: 50px;
    border-radius: 4px 4px 0px 0px;
    padding: 0px 20px;
  }
  h2 {
    font-size: 14px;
    font-weight: 700;
  }
  header {
    button {
      background-color: transparent;
      width: 1.5rem;
      height: 26px;
      color: var(--grey-1);
      border: none;
      margin-bottom: 1rem;
    }
  }
  form {
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    input {
      background-color: var(--grey-2);
      padding: 6px;
      color: var(--grey-1);
    }

    div {
      margin: 0px;
      padding: 5px 0px 10px 0px;
      display: flex;
      flex-direction: column;
    }
    button {
      color: var(--white);
      background-color: var(--red-primary);
      height: 3rem;
    }
  }
`;

export const ContainerSelect = styled.section`
  background-color: var(--grey-2);
  width: 315px;
  height: 50px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  &:focus-within {
    border: 1px solid var(--grey-1);
  }
  select {
    width: 320px;
    height: 48px;
    padding: 0px 16px 0px 16px;
    border-radius: 4px;
    border: transparent;
    background-color: var(--grey-2);
    color: #868e96;
  }
  select:focus {
    color: var(--grey-1);
  }
`;
export const Label = styled.label`
  width: 100%;
  text-align: initial;

  font-size: 16px;
  font-weight: 400;
`;
