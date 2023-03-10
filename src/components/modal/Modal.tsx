import React from "react";
import * as Styled from "./Modal.styled";
import { usersType } from "../../api";

type HeaderPropsType = {
  data: usersType;
  closeModal: () => void;
};

export const Modal = ({ data, closeModal }: HeaderPropsType) => {
  return (
    <Styled.ModalWrapper onClick={() => closeModal()}>
      <Styled.ModalContent>
        <Styled.InfoBlockWrapper>
          <Styled.InfoBlock>Company: {data.company.name}</Styled.InfoBlock>
          <Styled.InfoBlock>
            Address: {data.address.city}, {data.address.street} street
          </Styled.InfoBlock>
        </Styled.InfoBlockWrapper>
        <Styled.CloseButton onClick={() => closeModal()}>X</Styled.CloseButton>
      </Styled.ModalContent>
    </Styled.ModalWrapper>
  );
};
