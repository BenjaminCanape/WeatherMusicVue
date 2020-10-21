<template>
  <div class="home">
    <Weather />
    <MusicList />
  </div>
</template>

<script>
// @ is an alias to /src
import Weather from "@/components/Weather.vue";
import MusicList from "@/components/MusicList.vue";

export default {
  name: "Home",
  components: {
    Weather,
    MusicList
  }
};
</script>
