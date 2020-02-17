<template>
  <md-content class="md-elevation-3" v-on:click="() => showDetails(img)">
    <img :src="img.link" />
    <span class="description">{{img.title}}</span>
  </md-content>
</template>

<script lang="ts">
import {
	 Component, Prop, Vue, Emit,
	  } from "vue-property-decorator";

/**
 * A simple component to render image with description, structured with flex-Layout
 */
@Component
export default class Gallery extends Vue {
  @Prop() private img!: object;

  @Emit('showDetails')
  /* tslint:disable:no-empty */
  // eslint-disable-next-line
  showDetails(img: object):void {}
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
}
.description {
  max-height: 20%;
  overflow: hidden;
}
</style>
