<template>
  <Playlist v-for="playlist in playlists" :key="playlist" :id="playlist" />
</template>

<script>
import Playlist from "./Playlist.vue";
import searchPlaylist from "../external/deezerApi";
import { mapState } from "vuex";

export default {
  name: "MusicList",
  components: {
    Playlist
  },
  data() {
    return {
      playlists: Array
    };
  },
  computed: {
    ...mapState(["weather"])
  },
  methods: {
    getPlaylists() {
      this.playlists = [];
      searchPlaylist(this.weather).then(data => {
        data.data.forEach(playlist => {
          this.playlists.push(playlist.id);
        });
      });
    }
  },
  created() {
    this.unsubscribe = this.$store.subscribe(mutation => {
      if (mutation.type === "SET_WEATHER") {
        this.getPlaylists();
      }
    });
  },
  beforeUnmount() {
    this.unsubscribe();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
