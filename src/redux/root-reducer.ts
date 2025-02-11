import { combineReducers } from "redux";
import { userReducer } from "./UserReducer/Reducer";

export const rootReducer = combineReducers({
  userReducer,
})

export type RootReducer = ReturnType<typeof rootReducer>
