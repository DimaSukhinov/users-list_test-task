import React from "react";
import * as Styled from "./Modal.styled";

type HeaderPropsType = {
  children: React.ReactNode;
  closeModal: () => void;
};

export const Modal = ({ children, closeModal }: HeaderPropsType) => {
  return (
    <Styled.ModalWrapper onClick={() => closeModal()}>
      <Styled.ModalContent>
        {children}
        <Styled.CloseButton onClick={() => closeModal()}>X</Styled.CloseButton>
      </Styled.ModalContent>
    </Styled.ModalWrapper>
  );
};
