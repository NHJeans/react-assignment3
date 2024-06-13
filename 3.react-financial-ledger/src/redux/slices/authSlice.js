import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: !!localStorage.getItem("accessToken"),
  accessToken: localStorage.getItem("accessToken") || null,
  avatar: null,
  nickname: null,
  userId: null,

};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { accessToken, avatar, nickname, userId } = action.payload;
      state.isLogin = true;
      state.accessToken = accessToken;
      state.avatar = avatar;
      state.nickname = nickname;
      state.userId = userId;
    },
    logout: (state) => {
      state.isLogin = false;
      state.accessToken = null;
      state.avatar = null;
      state.nickname = null;
      state.userId = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;