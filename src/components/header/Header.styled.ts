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

  @media (max-width: 768px) {
    gap: 0;
    justify-content: space-around;
  }
`;
