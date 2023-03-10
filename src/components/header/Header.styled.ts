import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  display: flex;
  justify-content: right;
  margin: 0 auto;
  width: 850px;
  gap: 250px;

  & > input {
    width: 240px;
  }
`;

export const ResetButton = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  padding: 6px 12px;
  max-width: 70px;
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  user-select: none;

  &:hover {
    background-color: #e8e8e8;
  }
`;
