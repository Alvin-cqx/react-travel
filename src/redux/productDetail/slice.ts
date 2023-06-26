import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    // PayloadAction可以修改指定返回的类型
    fetchFail: (state, action: PayloadAction<string | null>) => {
      const dd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
