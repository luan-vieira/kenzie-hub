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
    margin-top: 10rem;
    h1 {
      width: 11rem;
      color: var(--red-primary);
      font-size: 2rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 14rem;
  max-width: 100px;
  height: 33rem;
  background-color: var(--grey-3);
  padding: 15rem 12rem 15rem 12rem;

  form {
    width: 340px;
    text-align: center;

    h2 {
      margin-bottom: 20px;
    }

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      margin-top: 2rem;
      margin-bottom: 1rem;
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
    background-color: var(--red-primary);
    border: none;
    height: 3rem;
  }

  div {
    button {
      background-color: var(--grey-1);
      border: none;
      height: 3rem;
      :hover {
        border: 2px solid #0c0d0d;
      }
    }
  }
`;
