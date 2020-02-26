<template>
  <md-content class="md-elevation-3" v-on:click="() => showDetails(img)">
    <img :src="getLink()" />
    <span class="description">{{img.title}}</span>
  </md-content>
</template>

<script lang="ts">
import {
	 Component,
	 Prop,
	 Vue,
	 Emit,
	} from "vue-property-decorator";

/**
 * A simple component to render image with description, structured with flex-Layout
 */
@Component
export default class Gallery extends Vue {
  @Prop() private img!: {images?: {link: string}[]; link?: string};

  @Emit('showDetails')
  /* tslint:disable:no-empty */
  // eslint-disable-next-line
  showDetails(img: object):void {}

  getLink() {
	  return this.img?.images?.length ? this.img.images[0].link : this.img.link;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.md-content {
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  img {
	max-height: 250px;
	object-fit: cover;
  }
}
.description {
  max-height: 20%;
  overflow: hidden;
}
</style>
