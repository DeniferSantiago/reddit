import { applyMiddleware, createStore } from "redux";
import { SetCacheMiddleware } from "../Middlewares/SetCacheMiddleware";
import reducers from "../Reducers/index";
export const store = createStore(reducers, applyMiddleware(SetCacheMiddleware));
