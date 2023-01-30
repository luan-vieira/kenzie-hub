import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 400px;
  background-color: var(--grey-3);
  padding: 5rem;
  h1 {
    margin-bottom: 1rem;
    font-size: 2.7rem;
    color: var(--red-primary);
  }
  div {
    flex: 1;
    display: flex;
    margin-top: 1rem;

    button + button {
      margin-left: 1rem;
    }
  }
  span {
    margin-bottom: 2rem;
    font-size: 1.4rem;
    flex-wrap: wrap;
  }
`;
