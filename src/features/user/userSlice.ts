import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getUserFromLocalStorage = (): string | null => {
  return JSON.parse(localStorage.getItem("user") as string) || null;
};

interface UserState {
  user: string | null;
}

const initialState: UserState = {
  user: getUserFromLocalStorage() || null,
};

const userSlice: any = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.token };
      console.log(user);
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },

    logOutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },
  },
});

export const { loginUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
