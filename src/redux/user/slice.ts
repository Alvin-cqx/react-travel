import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  loading: boolean;
  error: string | null;
  token: string | null;
}
const initialState: UserState = {
  loading: false,
  error: null,
  token: null,
};
export const signIn = createAsyncThunk(
  "user/signIn",
  async (
    paramaters: {
      email: string;
      password: string | string;
    },
    thunkAPI
  ) => {
    let url = `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${paramaters.email}&pageSize=${paramaters.password}`;

    const res = await axios.get(url);
    return res;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.token = action.payload;
      state.loading = false;
      state.error = null;
    },
    [signIn.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.data;
    },
  },
});
