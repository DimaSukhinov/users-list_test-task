import { usersType } from "../api";

const initialState: usersType[] = [];

export const usersReducer = (state: usersType[] = initialState, action: ActionsType): usersType[] => {
  switch (action.type) {
    case "SET-USERS": {
      return action.users.map((u) => {
        return { ...u };
      });
    }
    case "REMOVE-USER": {
      return state.filter((u) => u.id !== action.id);
    }
    default:
      return state;
  }
};

export const setUsersAC = (users: usersType[]) => {
  return { type: "SET-USERS", users } as const;
};
export const removeUserAC = (id: number) => {
  return { type: "REMOVE-USER", id } as const;
};

type ActionsType = ReturnType<typeof setUsersAC> | ReturnType<typeof removeUserAC>;
