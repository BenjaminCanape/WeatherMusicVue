<template>
  <div class="playlist">
    <carousel class="story-carousel story-carousel--colors" v-if="playlists.length">
      <slide class="story-carousel__slide" v-for="playlist in playlists" :key="playlist" >
        <Playlist :id="playlist" />
      </slide>
    </carousel>
  </div>
</template>

<script lang="ts">
import Playlist from "./Playlist.vue";
import searchPlaylist from "../external/deezerApi";
import { Vue, Options} from 'vue-class-component';
import { namespace } from 'vuex-class';
import { Carousel, Slide } from 'vue-snap';
import 'vue-snap/dist/vue-snap.css'

const weatherStore = namespace('weather');

@Options({
  components: {
    Playlist,
    Carousel,
    Slide
  }
})
export default class MusicList extends Vue {
  private playlists: Array<object> = [];
  private unsubscribeStoreFunction!: () => void;

  @weatherStore.State
  public weather!: string;

  private getPlaylists() {
    this.playlists = [];
    searchPlaylist(this.weather).then(data => {
      data.data.forEach((playlist: Playlist) => {
        this.playlists.push(playlist.id);
      });
    });
  }
  
  created() {
    this.unsubscribeStoreFunction = this.$store.subscribe((mutation: { type: string; }) => {
      if (mutation.type === "weather/setWeather") {
        this.getPlaylists();
      }
    });
  }

  beforeUnmount() {
    this.unsubscribeStoreFunction();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .playlist {
    flex: 1
  }
</style>
