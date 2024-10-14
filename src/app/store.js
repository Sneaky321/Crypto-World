import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from './currencySlice'; // Ensure this imports the reducer correctly
import { cryptoApi } from '../config/cryptoApiSlice';

const store = configureStore({
    reducer: {
        currency: currencyReducer, // This should be the reducer, not currencySlice.reducer
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware),
});

export default store;
