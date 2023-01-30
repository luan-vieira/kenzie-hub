import styled from "styled-components";

export const ContainerCard = styled.li`
  width: 100%;
  height: 49px;
  background-color: var(--grey-4);
  border-radius: 4px;
  margin: 8px 0px 8px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  &:hover {
    background-color: var(--grey-2);
    cursor: pointer;
  }
  h1 {
    font-size: 14px;
    font-weight: 700;
  }
  span {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey-1);
  }
`;
