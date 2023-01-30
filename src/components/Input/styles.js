import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  margin-top: 0.5rem;

  div {
    .error {
      margin-left: 5px;
      color: var(--red-negative);
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--grey-2);
  border-radius: 10px;
  border: 2px solid var(--grey-1);
  color: var(--grey-1);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
      svg {
        color: var(--red);
      }
    `}

  input {
    background-color: var(--grey-2);

    align-items: center;
    flex: 1;
    border: 0;
    color: var(--grey-1);
    &::placeholder {
      color: var(--grey-1);
    }
  }
  svg {
    margin-right: 16px;
  }
`;
