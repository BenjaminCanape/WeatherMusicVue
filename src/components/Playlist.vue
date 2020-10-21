<template>
  <iframe
    scrolling="no"
    frameborder="0"
    allowTransparency="true"
    :src="playerUrl"
    width="700"
    height="240"
  />
</template>

<script>
export default {
  name: "Playlist",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      playerUrl: String
    };
  },
  created() {
    this.playerUrl =
      "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=EF5466&layout=&size=medium&type=playlist&id=" +
      this.id +
      "&app_id=1";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
