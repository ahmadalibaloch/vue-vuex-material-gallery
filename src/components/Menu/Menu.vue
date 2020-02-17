<template>
  <div class="menu">
    <div class="title">{{title}}</div>
    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger>{{value}}</md-button>
      <md-menu-content>
        <md-menu-item
          @click="() => value = option"
          v-for="option of options"
          v-bind:key="option"
        >{{option}}</md-menu-item>
      </md-menu-content>
    </md-menu>
  </div>
</template>

<script lang="ts">
import {
	 Component, Prop, Vue,
	} from "vue-property-decorator";

/**
 * Menu Component is used for showing possible options and then overriding {storeKey} value
 * in the Vuex store on selection
 */
@Component
export default class Menu extends Vue {
  get value(): string {
    return this.$store.state[this.storeKey];
  }

  set value(value) {
	  this.$store.dispatch(this.action, value);
  }

  @Prop() private options!: string[];

  @Prop() private title!: string;

  @Prop() private action!: string;

  @Prop() private storeKey!: string;
}
</script>

<style scoped lang="scss">
.menu {
    display: flex;
    align-items: center;
    width: auto;
    background: white;
    width: fit-content;
	.title{
		padding:0 10px 0 10px;
		cursor: default;
	}
}
</style>
