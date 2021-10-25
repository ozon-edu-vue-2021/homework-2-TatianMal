<template>
  <div id="app">
    <directory
      :item="tree"
    ></directory>
  </div>
</template>

<script>
import Directory from "@/components/Directory";
import tree from "../public/static/node_modules.json"

export default {
  name: 'App',
  components: {
    Directory,
  },
  data: () => ({
    tree
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
