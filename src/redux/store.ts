// import { createStore,combineReducers,applyMiddleware} from "redux";
import { createStore, applyMiddleware } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
// 自定义中间件
import { actionLog } from "./middlewares/actionLog";
// 原本combineReducers是从redux引入，因为使用了reduxjs/toolkit,reduxjs/toolkit中也有combineReducers,可以相互兼容
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productDetailSlice } from "./productDetail/slice";
import { productSearchSlice } from "./productSearch/slice";
const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
});

// 使用中间件applyMiddleware(thunk)
// const store=createStore(rootReducer,applyMiddleware(thunk,actionLog))

// 使用中间件reduxjs/toolkit中的configureStore代替redux中的createStore
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
