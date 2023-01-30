import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 118px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--grey-4);
  border-bottom: 1px var(--grey-3) solid;
  padding-left: 2rem;
  padding-right: 2rem;
  flex-wrap: nowrap;
`;

export const Content = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;

  h1 {
    padding-right: 5.3rem;
    font-weight: 600;
    color: var(--red-primary);
    font-size: 1.5rem;
  }
  button {
    width: 6rem;
    height: 32px;
  }
`;
