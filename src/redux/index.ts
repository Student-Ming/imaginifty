import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme";
import storage from "redux-persist/lib/storage";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const persistConfig = {
    key: 'imaginifty',
    storage: storage,
    stateReconciler: autoMergeLevel1
}

const reducers = combineReducers({
    themeReducer,
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