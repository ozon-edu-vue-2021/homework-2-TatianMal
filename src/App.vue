<template>
  <div id="app">
    <span class="full-path">{{ currentActivePath }}</span>
    <directory
      :item="tree"
      :path="tree.name"
      :current-active="currentActive"
      @setActive="setActive"
    ></directory>
  </div>
</template>

<script>
import Directory from "@/components/Directory";
import tree from "../public/static/node_modules.json";

export default {
  name: "App",
  components: {
    Directory,
  },
  data() {
    return {
      tree,
      currentActive: undefined,
    };
  },
  computed: {
    currentActivePath() {
      return this.currentActive ? `Путь выбранного файла/ссылки: ${this.currentActive}` : "";
    },
  },
  methods: {
    setActive(path) {
      this.currentActive = path;
    },
  },
};
</script>

<style>
@import "./assets/css/tree-element.css";

#app {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1em;
  margin: 60px;
}

.full-path {
  margin-bottom: 2vh;
}
</style>
