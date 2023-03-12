import React from "react";
import * as Styled from "./Button.styled";

type HeaderPropsType = {
  buttonText: string;
  onClickHandler: () => void;
};

export const Button = ({ buttonText, onClickHandler }: HeaderPropsType) => {
  return (
    <Styled.Button
      onClick={(e) => {
        e.stopPropagation();
        onClickHandler();
      }}
    >
      {buttonText}
    </Styled.Button>
  );
};
