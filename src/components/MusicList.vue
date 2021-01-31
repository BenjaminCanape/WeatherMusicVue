<template>
  <Playlist v-for="playlist in playlists" :key="playlist" :id="playlist" />
</template>

<script lang="ts">
import Playlist from "./Playlist.vue";
import searchPlaylist from "../external/deezerApi";
import { Vue, Options} from 'vue-class-component';
import { namespace } from 'vuex-class';
const weatherStore = namespace('weather');

@Options({
  components: {
    Playlist
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
<style scoped></style>
