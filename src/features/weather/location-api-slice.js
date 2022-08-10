import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const locationApiSlice = createApi({
  reducerPath: "location",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nominatim.openstreetmap.org/reverse",
  }),
  endpoints(builder) {
    return {
      fetchLocation: builder.query({
        locationByLatLon: (params) => {
          return `?format=json&lat=${params.lat}&lon=${params.lon}`;
        },
      }),
    };
  },
});

export const { useFetchLocationQuery } = locationApiSlice;
