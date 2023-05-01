import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartSlice from './slicers/cartSlice';
import homeSlice from './slicers/homeSlice';

const rootReducer = combineReducers({
    cart: cartSlice,
    home: homeSlice,
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['postList'],
    whiteList: ['']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);
export default store;