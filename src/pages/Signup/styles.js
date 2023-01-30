import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  text-align: center;
  height: 57rem;

  display: flex;
  align-items: stretch;
  section {
    display: flex;
    position: absolute;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 380px;
    margin-top: 0.5rem;
    h1 {
      color: var(--red-primary);
      font-size: 1.5rem;
    }

    button {
      max-width: 5rem;
      border: none;
      background-color: var(--grey-3);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5.5rem;
  max-width: 100px;
  height: 54rem;
  background-color: var(--grey-3);
  padding: 15rem 12rem 15rem 12rem;

  div {
    span {
      color: blue;
    }
  }

  form {
    width: 340px;
    text-align: center;

    div {
      div {
        color: var(--red-negative);
      }
    }

    h3 {
      margin-bottom: 20px;
    }

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      margin-bottom: 0.5rem;
      color: var(--grey-1);
    }
    span {
      font-size: 13px;
      color: var(--white);
      margin-bottom: 0.5rem;
      padding-top: 10px;
      float: left;
    }
  }

  button {
    background-color: var(--primary-negative);
    border: none;
    height: 2.8rem;
  }
`;

export const Select = styled.select`
  height: 45px;
  background: var(--grey-2);
  border-radius: 5px;
  border: 2px solid var(--gray);
  color: var(--grey-1);
  padding: 0.7rem;
  width: 100%;
  display: flex;
  transition: 0.4s;
  cursor: pointer;

  option {
    color: var(--grey-1);
    background: var(--grey-2);
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    border: none;
  }
`;
