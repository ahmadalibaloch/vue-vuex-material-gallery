<template>
  <div id="app">
	<h1>Eurowings - IMGUR</h1>
    <GalleryFilters />
    <Gallery />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Gallery from "./components/Gallery.vue";
import GalleryFilters from "./components/GalleryFilters.vue";

@Component({
  components: {
    Gallery,
    GalleryFilters,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
