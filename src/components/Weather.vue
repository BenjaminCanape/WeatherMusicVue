<template>
  <span v-if="!isLoading"> 
    <img :src="iconUrl" /> 
    {{ weather }} 
  </span>
</template>

<script>
import getWeatherResponseFromAPI from "../external/weatherApi";
import { mapState, mapActions } from 'vuex';

export default {
  name: "Weather",
  data() {
    return {
      latitude: Number,
      longitude: Number,
      isLoading: Boolean,
      iconUrl: String
    };
  },
  methods: {
    getLocalisation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.latitude = parseFloat(position.coords.latitude);
          this.longitude = parseFloat(position.coords.longitude);
          getWeatherResponseFromAPI(this.latitude + "," + this.longitude).then(
            data => {
              this.iconUrl = data.current.condition.icon;
              this.setWeather(data.current.condition.text);
              this.isLoading = false;
            }
          );
        });
      }
    },
     ...mapActions(['setWeather'])
  },
  computed: {
     ...mapState(['weather'])
  },
  mounted() {
    this.isLoading = true;
    this.getLocalisation();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
