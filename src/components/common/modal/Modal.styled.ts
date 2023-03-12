import styled from "styled-components";

export const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: #fff;
  position: relative;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 5px;
  right: 9px;
  font-weight: 500;
  cursor: pointer;
`;
