import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import storage from "redux-persist/lib/storage";
import themeReducer from "./features/theme";
import loginDialogReducer from "./features/loginDialog"

const persistConfig = {
    key: 'imaginifty',
    storage: storage,
    stateReconciler: autoMergeLevel1,
    blacklist: ['loginDialog']
}

const reducers = combineReducers({
    theme: themeReducer,
    loginDialog: loginDialogReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers as any)

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