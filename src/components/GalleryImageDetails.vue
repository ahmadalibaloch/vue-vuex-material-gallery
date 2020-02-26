<template>
  <md-card class="image-card" md-dynamic-height>
    <md-card-area md-inset>
	  <img :src="getLink()" :alt="img.title" class="img"/>
      <md-card-header>
        <h2 class="md-title">{{img.account_url}}</h2>
        <div class="md-subhead">
          <span>{{img.topic}}</span>
        </div>
      </md-card-header>

      <md-card-content>{{img.title}}</md-card-content>
    </md-card-area>

    <md-card-content>
      <h3 class="md-subheading">Details</h3>
      <div class="img-points">
          <span>Points {{img.points}}</span>
          <span>Downs {{img.downs}}</span>
          <span>Ups {{img.ups}}</span>
      </div>
    </md-card-content>
  </md-card>
</template>

<script lang="ts">
import {
	 Component, Prop, Vue,
	  } from "vue-property-decorator";
import { Image } from './GalleryImage.vue';

/**
 * A card layout for Image details, this component renders in a dialog in the gallery component
 */
@Component
export default class Gallery extends Vue {
  @Prop() private img!: Image;

  getLink() {
	  return this.img?.images?.length ? this.img.images[0].link : this.img.link;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image-card{
	padding: 20px;
	overflow: auto;
	.img{
		max-height: 500px;
	}
}
.img-points{
	display: flex;
	*{
		margin: 5px;
	}
}
</style>
