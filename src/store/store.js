import {configureStore} from '@reduxjs/toolkit'
import {cryptoApi} from "../servies/cryptoAPI";
import {cryptoNewsApi} from "../servies/cryptoNewsApi";

export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    },
})