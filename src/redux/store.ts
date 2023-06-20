import { createStore,combineReducers,applyMiddleware} from "redux";
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import thunk from 'redux-thunk'
// 自定义中间件
import {actionLog} from './middlewares/actionLog'
const rootReducer=combineReducers({
  language:languageReducer,
  recommendProducts:recommendProductsReducer
})
// 使用中间件applyMiddleware(thunk)
const store=createStore(rootReducer,applyMiddleware(thunk,actionLog))
export type RootState = ReturnType<typeof store.getState>
export default store;