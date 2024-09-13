import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper-future";
import loginDialogReducer from "./features/loginDialog"

const reducers = combineReducers({
    loginDialog: loginDialogReducer,
})

export function makeStore() {
    return configureStore({
        reducer: reducers
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof reducers>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
