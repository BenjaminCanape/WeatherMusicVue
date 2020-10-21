const WEATHER_API_KEY = "***************";
const BASE_URL = "http://api.weatherapi.com/v1";

export default function getWeatherResponseFromAPI(localisation) {
  const url = BASE_URL + "/current.json?key=" + WEATHER_API_KEY + "&q=" + localisation;

  return fetch(url).then(response => response.json());
}
