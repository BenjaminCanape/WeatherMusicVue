const WEATHER_API_KEY = process.env.VUE_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

export default function getWeatherResponseFromAPI(localisation) {
    console.log(WEATHER_API_KEY);
  const url = BASE_URL + "/current.json?key=" + WEATHER_API_KEY + "&q=" + localisation;

  return fetch(url).then(response => response.json());
}
