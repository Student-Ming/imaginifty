import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import storage from "../utils/createNoopStorage";
import themeReducer from "./features/theme";
import loginDialogReducer from "./features/loginDialog"
import { createWrapper } from "next-redux-wrapper-future";
import { PersistPartial } from "redux-persist/es/persistReducer";

const persistConfig = {
    key: 'imaginifty',
    storage,
    stateReconciler: autoMergeLevel1,
    blacklist: ['loginDialog']
}

const reducers = combineReducers({
    theme: themeReducer,
    loginDialog: loginDialogReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers as any)

export function makeStore() {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [
                        FLUSH,
                        REHYDRATE,
                        PAUSE,
                        PERSIST,
                        PURGE,
                        REGISTER
                    ]
                }
            })
    })
}

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER
            ]
        }
    })
})

const persistor = persistStore(store)

export { store, persistor }

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof reducers> & PersistPartial;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
