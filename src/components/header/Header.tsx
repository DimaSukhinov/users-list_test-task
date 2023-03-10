import React, { ChangeEvent } from "react";
import * as Styled from "./Header.styled";

type HeaderPropsType = {
  filterValue: string;
  setFilterValue: (filterValue: string) => void;
  getAllUsers: () => void;
};

export const Header = ({ filterValue, setFilterValue, getAllUsers }: HeaderPropsType) => {
  const onValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setFilterValue(e.currentTarget.value);
  const removeAll = () => {
    getAllUsers();
    setFilterValue("");
  };

  return (
    <Styled.HeaderWrapper>
      <Styled.Container>
        <input value={filterValue} onChange={onValueChangeHandler} type="text" />
        <Styled.ResetButton onClick={removeAll}>Reset</Styled.ResetButton>
      </Styled.Container>
    </Styled.HeaderWrapper>
  );
};
