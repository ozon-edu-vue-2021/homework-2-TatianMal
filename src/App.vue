<template>
  <div id="app">
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
  justify-items: flex-start;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 60px;
}
</style>
