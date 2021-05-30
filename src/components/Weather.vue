<template>
  <span v-if="!isLoading">
    <img :src="iconUrl" />
    <p>{{ weather }}</p>
    <p>Temperature: {{ temperature }} °C</p>
    <p>Wind: {{ wind }} km/h</p>
  </span>
</template>

<script lang="ts">
import getWeatherResponseFromAPI from "../external/weatherApi";
import { Vue, Options } from 'vue-class-component';
import { namespace } from 'vuex-class';
const weatherStore = namespace('weather');

@Options({})
export default class Weather extends Vue {
  private latitude: Number = 0;
  private longitude: Number = 0;
  private isLoading: Boolean = false;
  private iconUrl: String = "";
  private wind: number = 0;
  private temperature: number = 0;

  @weatherStore.State
  public weather!: string;

  @weatherStore.Action
  public updateWeather!: (weather: string) => void;

  public getLocalisation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = parseFloat(position.coords.latitude.toString());
        this.longitude = parseFloat(position.coords.longitude.toString());
        getWeatherResponseFromAPI(this.latitude, this.longitude).then(
          data => {
            console.log(data.current);
            this.wind = data.current.wind_kph;
            this.temperature = data.current.temp_c;
            this.iconUrl = data.current.condition.icon;
            this.updateWeather(data.current.condition.text);
            this.isLoading = false;
          }
        );
      });
    }
  }

  mounted() {
    this.isLoading = true;
    this.getLocalisation();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
