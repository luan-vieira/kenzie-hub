import styled from "styled-components";

export const CardClean = styled.ul`
  width: 950px;
  height: 420px;
  background-color: var(--grey-3);
  list-style: none;
  border-radius: 4px;
  padding: 22px 19px 22px 19px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  li {
    width: 100%;
    height: 49px;
    background-color: var(--grey-4);
    border-radius: 4px;
  }
`;

export const ContainerListCards = styled.ul`
  width: 108vh;
  min-height: 420px;
  background-color: var(--grey-3);
  list-style: none;
  border-radius: 4px;
  padding: 22px 19px 22px 19px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  @media (max-width: 820px) {
    width: 430px;
  }
  @media (max-width: 530px) {
    width: 300px;
  }
`;

export const ContainerPai = styled.div`
  width: 100%;
  height: 118px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding-left: 5.3rem;
  padding-right: 7.5rem;
  flex-wrap: nowrap;
  margin-top: 10rem;
  @media (max-width: 520px) {
    padding-left: 0;
    padding-right: 0rem;
  }
`;
