import React, { useCallback, useState } from "react";
import * as Styled from "./Users.styled";
import { useDispatch } from "react-redux";
import { removeUserAC } from "../../store/users-reducer";
import { InfoModal } from "../infoModal/InfoModal";
import { usersType } from "../../api";
import { LightText } from "../lightText/LightText";
import { Button } from "../common/button/Button";
import { useModal } from "../../utils/useModal";

type UsersPropsType = {
  users: usersType[];
  filterValue: string;
};

export const Users = ({ users, filterValue }: UsersPropsType) => {
  const dispatch = useDispatch();
  const { isModalOpen, toggleModal } = useModal();
  const [modalData, setModalData] = useState<usersType | null>(null);

  const removeUser = (id: number) => dispatch(removeUserAC(id));

  const openModal = (data: usersType) => {
    setModalData(data);
    toggleModal();
  };
  const text = useCallback(
    (string: string) => {
      return <LightText string={string} filterValue={filterValue} />;
    },
    [filterValue]
  );

  return (
    <>
      {users.length ? (
        users.map((u) => (
          <Styled.UsersWrapper key={u.id} onClick={() => openModal(u)}>
            <Styled.ItemsWrapper>
              <Styled.UserItem>{text(u.name)}</Styled.UserItem>
              <Styled.UserItem>{text(u.username)}</Styled.UserItem>
            </Styled.ItemsWrapper>
            <Styled.ItemsWrapper>
              <Styled.UserItem>{text(u.email)}</Styled.UserItem>
              <Button buttonText="Remove" onClickHandler={() => removeUser(u.id)} />
            </Styled.ItemsWrapper>
          </Styled.UsersWrapper>
        ))
      ) : (
        <Styled.Hint>Press Reset to display the list of users</Styled.Hint>
      )}
      {isModalOpen && <InfoModal data={modalData} closeModal={toggleModal} />}
    </>
  );
};
