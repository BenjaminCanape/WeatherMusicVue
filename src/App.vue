<template>
  <Weather />
  <MusicList />
</template>

<script>
import Weather from "./components/Weather.vue";
import MusicList from "./components/MusicList.vue";

export default {
  name: "App",
  components: {
    Weather,
    MusicList
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
