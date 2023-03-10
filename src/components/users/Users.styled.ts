import styled from "styled-components";

export const UsersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 10px;
  padding: 12px 0;
  margin: 12px 0;
  cursor: pointer;

  &:hover {
    background-color: #e8e8e8;
  }
`;

export const UserItem = styled.div`
  width: 200px;
  text-align: center;
`;

export const DeleteButton = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  padding: 0 5px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #e8e8e8;
  }
`;
