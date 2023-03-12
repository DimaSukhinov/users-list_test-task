import React from "react";
import * as Styled from "./InfoModal.styled";
import { usersType } from "../../api";
import { Modal } from "../common/modal/Modal";

type HeaderPropsType = {
  data: usersType | null;
  closeModal: () => void;
};

export const InfoModal = ({ data, closeModal }: HeaderPropsType) => {
  return (
    <Modal closeModal={closeModal}>
      {data && (
        <Styled.InfoBlockWrapper>
          <Styled.InfoBlock>Name: {data.name}</Styled.InfoBlock>
          <Styled.InfoBlock>Company: {data.company.name}</Styled.InfoBlock>
          <Styled.InfoBlock>
            Address: {data.address.city}, {data.address.street} street
          </Styled.InfoBlock>
        </Styled.InfoBlockWrapper>
      )}
    </Modal>
  );
};
