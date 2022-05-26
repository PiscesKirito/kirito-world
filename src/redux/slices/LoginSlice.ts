import { createSlice } from "@reduxjs/toolkit";
export interface LoginState {
  value: string;
}

const initialState: LoginState = {
  value: "Login",
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
});

export default LoginSlice.reducer;
