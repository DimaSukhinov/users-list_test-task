import styled from "styled-components";

export const Button = styled.div`
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
