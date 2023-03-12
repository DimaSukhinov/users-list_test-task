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

  @media (max-width: 420px) {
    gap: 3px;
    flex-direction: column;
  }
`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
`;

export const ItemsWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    gap: 5px;
    flex-direction: column;
    align-items: center;
  }
`;

export const Hint = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 26px;
  margin-top: 30px;
  user-select: none;
`;
