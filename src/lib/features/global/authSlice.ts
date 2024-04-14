import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isLoggedIn: false,
  userId: "",
  token: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      login: (state, action: PayloadAction<{ token: string; email: string; }>) => {
        const { email, token } = action.payload
        state.email = email;
        state.isLoggedIn = true
        state.token = token
      },
      logout: (_state) => {
        _state = initialState
      }
    }
})

export const {
  login,
  logout
} = authSlice.actions

export default authSlice.reducer