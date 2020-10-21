import { createStore } from "vuex";
import Weather from "../models/weatherEnum";

export default createStore({
  state: {
    weather: Weather
  },
  mutations: {
    SET_WEATHER(state, weather) {
      state.weather = weather;
    }
  },
  actions: {
    setWeather(context, weather) {
      switch (weather) {
        case "Sunny":
          weather = Weather.SUN;
          break;
        default:
          weather = Weather.RAIN;
      }
      context.commit("SET_WEATHER", weather);
    }
  },
  modules: {}
});
