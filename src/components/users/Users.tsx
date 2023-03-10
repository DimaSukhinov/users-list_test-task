import React, { useCallback, useState } from "react";
import * as Styled from "./Users.styled";
import { useDispatch } from "react-redux";
import { removeUserAC } from "../../store/users-reducer";
import { Modal } from "../modal/Modal";
import { usersType } from "../../api";
import { LightText } from "../lightText/LightText";

type UsersPropsType = {
  users: usersType[];
  filterValue: string;
};

export const Users = ({ users, filterValue }: UsersPropsType) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>();

  const removeUser = (id: number) => dispatch(removeUserAC(id));

  const closeModal = () => setModal(false);
  const openModal = (data: usersType) => {
    setModalData(data);
    setModal(true);
  };
  const text = useCallback(
    (string: string) => {
      return <LightText string={string} filterValue={filterValue} />;
    },
    [filterValue]
  );

  return (
    <>
      {users.map((u) => (
        <Styled.UsersWrapper key={u.id} onClick={() => openModal(u)}>
          <Styled.UserItem>{text(u.name)}</Styled.UserItem>
          <Styled.UserItem>{text(u.username)}</Styled.UserItem>
          <Styled.UserItem>{text(u.email)}</Styled.UserItem>
          <Styled.DeleteButton
            onClick={(e) => {
              e.stopPropagation();
              removeUser(u.id);
            }}
          >
            X
          </Styled.DeleteButton>
        </Styled.UsersWrapper>
      ))}
      {modal && <Modal data={modalData} closeModal={closeModal} />}
    </>
  );
};
