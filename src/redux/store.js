import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../utils/cryptoApi";
import { cryptoNewsApi } from "../utils/cryptoNewsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
