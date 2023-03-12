import React, { useCallback, useEffect } from "react";
import { Users } from "../users/Users";
import { AppWrapper } from "./App.styled";
import { Header } from "../header/Header";
import { getUsers } from "../../api";
import { setUsersAC } from "../../store/users-reducer";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/store";
import { useInput } from "../../utils/useInput";

export const App = () => {
  const dispatch = useDispatch();
  const users = useAppSelector((state) => state.users);
  const filterValue = useInput("");

  const getAllUsers = useCallback(() => {
    getUsers().then((data) => {
      dispatch(setUsersAC(data.data));
    });
  }, [dispatch]);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  return (
    <>
      <Header
        filterValue={filterValue.value}
        setFilterValue={filterValue.setValue}
        getAllUsers={getAllUsers}
      />
      <AppWrapper>
        <Users users={users} filterValue={filterValue.value} />
      </AppWrapper>
    </>
  );
};
