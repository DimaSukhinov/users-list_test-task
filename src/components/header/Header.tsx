import React, { ChangeEvent } from "react";
import * as Styled from "./Header.styled";
import { Button } from "../common/button/Button";

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
        <input value={filterValue} onChange={onValueChangeHandler} type="text" placeholder="search..." />
        <Button buttonText="Reset" onClickHandler={removeAll} />
      </Styled.Container>
    </Styled.HeaderWrapper>
  );
};
