import { configureStore } from "@reduxjs/toolkit";
import { weatherApiSlice } from "./features/weather/weather-api-slice";

export const store = configureStore({
  reducer: {
    [weatherApiSlice.reducerPath]: weatherApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(weatherApiSlice.middleware);
  },
});
