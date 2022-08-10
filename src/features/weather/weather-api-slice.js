import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const WEATHER_API_KEY = "9CLR6Z6JJWPBBA8BCMM34YJUR";

const locationQuery = (params) => {
  const { locationName } = params;

  console.log(locationName);

  if (!locationName || locationName === "") {
    let coords = "";

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        coords += position.coords.latitude + "," + position.coords.longitude;

        console.log(coords);
      });
    } else {
      throw new Error("Geolocation is not supported by this browser.");
    }

    console.log(coords);
    return `/${coords}/next7days?unitGroup=metric&key=${WEATHER_API_KEY}`;
  } else {
    console.log(locationName);
    return `/${locationName}/next7days?unitGroup=metric&key=${WEATHER_API_KEY}`;
  }
};

export const weatherApiSlice = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline",
  }),
  endpoints(builder) {
    return {
      fetchWeatherByCity: builder.query({
        query: (params) => {
          const { locationName } = params;
          return `/${locationName}/next7days?unitGroup=metric&key=${WEATHER_API_KEY}`;
        },
        // queryFn: (params) => {
        //   return fetch(locationQuery(params));
        // },
      }),
      fetchWeatherByCoords: builder.query({
        query: (params) => {
          const { latitude, longitude } = params;
          return `/${latitude},${longitude}/next7days?unitGroup=metric&key=${WEATHER_API_KEY}`;
        },
      }),
    };
  },
});

export const { useFetchWeatherByCityQuery, useFetchWeatherByCoordsQuery } =
  weatherApiSlice;
