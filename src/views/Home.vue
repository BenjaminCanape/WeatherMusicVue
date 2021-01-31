<template>
  <div class="home">
    <Weather />
    <MusicList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Weather from "@/components/Weather.vue"; // @ is an alias to /src
import MusicList from "@/components/MusicList.vue"; 

@Options({
  components: {
    Weather,
    MusicList
  }
})
export default class Home extends Vue {}
</script>
