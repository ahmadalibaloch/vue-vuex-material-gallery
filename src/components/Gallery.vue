<template>
  <div class="grid">
    <GalleryImage
      class="img"
      :img="img"
      v-for="img of imgurs"
      v-bind:key="img.id"
      @showDetails="(img) => detailedImage=img"
    />
    <div class="messages">
      <div v-show="!loadingResults && errorLoadingResults.length">{{errorLoadingResults}}</div>
      <div v-show="loadingResults">Loading Results</div>
      <div v-show="noResults">No Results</div>
    </div>
    <md-dialog v-if="showDialog" :md-active.sync="showDialog">
     <GalleryImageDetails :img="detailedImage" />
	  <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GalleryImage from "./GalleryImage.vue";
import GalleryImageDetails from "./GalleryImageDetails.vue";

/**
 * Gallery component is responsible for rendering images in a gallery
 * It also holds the dialog for detailed image and error/loading messages
 */
@Component({
  components: {
	GalleryImage,
	GalleryImageDetails,
  },
})
export default class Gallery extends Vue {
  mounted() {
    this.$store.dispatch("list", {
      section: "hot",
      sort: "top",
      page: "1",
      window: "day",
    });
  }

  data() {
	  return {
		  detailedImage: undefined,
	  };
  }

  get imgurs(): number {
    return this.$store.state.imgurs;
  }

  get showDialog() {
	  return typeof this.$data.detailedImage !== "undefined";
  }

  set showDialog(show) {
	  this.$data.detailedImage = undefined;
  }

  hideDialog() {
	  this.$data.detailedImage = undefined;
  }

  get errorLoadingResults(): number {
    return this.$store.getters.errorLoadingResults;
  }

  get noResults(): number {
    return this.$store.getters.noResults;
  }

  get loadingResults(): number {
    return this.$store.getters.loadingResults;
  }
}
</script>

<style scoped lang="scss">
.grid {
  padding: 20px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  .img {
    min-height: 200px;
  }
}
</style>
