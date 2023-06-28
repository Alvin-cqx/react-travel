import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// 处理异步 createAsyncThunk
interface ProductDetailState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: ProductDetailState = {
  loading: false,
  error: null,
  data: null,
};
// 使用异步thunk
// 方法1
// export const getProductDetail = createAsyncThunk(
//   "productDetail/getProductDetail",
//   async (productId: string, thunkAPI) => {
//     //thunkAPI包括thunk一些函数功能

//     try {
//       thunkAPI.dispatch(productDetailSlice.actions.fetchStart());
//       const { data } = await axios.get(
//         `http://123.56.149.216:8080/api/productCollections/${productId}`
//       );

//       thunkAPI.dispatch(productDetailSlice.actions.fetchSuccess(data));
//     } catch (error) {
//       thunkAPI.dispatch(productDetailSlice.actions.fetchFail("error.msg"));
//     }

//   }
// );
// 方法2
export const getProductDetail = createAsyncThunk(
  "productDetail/getProductDetail",
  async (productId: string, thunkAPI) => {
    const { data } = await axios.get(
      `http://123.56.149.216:8080/api/productCollections/${productId}`
    );
    return data;
  }
);

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    // 方法1
    // fetchStart: (state) => {
    //   state.loading = true;
    // },
    // fetchSuccess: (state, action) => {
    //   state.data = action.payload;
    //   state.loading = false;
    //   state.error = null;
    // },
    // // PayloadAction可以修改指定返回的类型
    // fetchFail: (state, action: PayloadAction<string | null>) => {
    //   const dd = action.payload;
    //   state.loading = false;
    //   state.error = action.payload;
    // },
  },
  // 处理createAsyncThunk异步事件
  extraReducers: {
    // 方法2
    [getProductDetail.pending.type]: (state) => {
      state.loading = true;
    },
    [getProductDetail.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    // PayloadAction可以修改指定返回的类型
    [getProductDetail.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      const dd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
