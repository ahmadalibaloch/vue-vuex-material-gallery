<template>
  <div class="filters-section">
    <Menu
      title="Section"
      :action="actions.SET_SECTION"
      storeKey="section"
      :options="sectionOptions"
    />
    <Menu
      v-show="showSortOption"
      title="Sort"
      :action="actions.SET_SORT"
      storeKey="sort"
      :options="sortOptions"
    />
    <Menu title="Window" :action="actions.SET_WINDOW" storeKey="window" :options="windowOptions" />
    <Menu title="Page" :action="actions.SET_PAGE" storeKey="page" :options="pageOptions" />

    <MdButton class="md-dense md-raised md-primary" v-on:click="refreshResults">Go</MdButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menu from "./Menu/Menu.vue";
/* eslint-disable */
import * as actions from "../store/actions";
/* eslint-enable */

/**
 * GalleryFilters component containers filter like sorting, windowing and overrides relavent
 * values in the store, also provided the query or Go button to refresh results
 */
@Component({
  components: {
    Menu,
  },
})
export default class GalleryFilters extends Vue {
  data() {
    return {
      sortOptions: this.$store.state.sortOptions,
      sectionOptions: this.$store.state.sectionOptions,
      windowOptions: this.$store.state.windowOptions,
      pageOptions: this.$store.state.pageOptions,
      actions,
    };
  }

  refreshResults() {
    this.$store.dispatch("list", this.$store.state);
  }

  get showSortOption() {
    return this.$store.getters.showSortOption;
  }
}
</script>

<style scoped lang="scss">
.filters-section {
  display: flex;
  justify-content: center;
  * {
    margin: 10px;
  }
}
</style>
