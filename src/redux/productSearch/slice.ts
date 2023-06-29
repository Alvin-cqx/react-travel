import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductSearchState {
  loading: boolean;
  error: string | null;
  data: any;
  pagenation: null;
}
const initialState: ProductSearchState = {
  loading: false,
  error: null,
  data: null,
  pagenation:null,
};
export const searchProduct = createAsyncThunk(
  "productSearch/searchProduct",
  async (
    paramaters: {
      keywords: string;
      nextPage: number | string;
      pageSize: number | string;
    },
    thunkAPI
  ) => {
    let url = `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${paramaters.nextPage}&pageSize=${paramaters.pageSize}`;
    if(paramaters.keywords){
      url+=`&keywords=${paramaters.keywords}`
    }
    const res=await axios.get(url);
    return{
      data:res.data,
      pagenation:'1'
    }
  }
);


export const productSearchSlice=createSlice({
  name:"productSearch",
  initialState,
  reducers:{

  },
  extraReducers:{
    [searchProduct.pending.type]:(state)=>{
      state.loading=true
    },
    [searchProduct.fulfilled.type]:(state,action)=>{
      state.data=action.payload.data;
      state.pagenation=action.payload.pagenation;
      state.loading=false;
      state.error=null;
    },
    [searchProduct.rejected.type]:(state,action)=>{
      state.loading=false
      state.error=action.payload.data
    },
  }
})