<template>
  <div>
    <div class="dir-name" @click="toggleShowChildren">
      <span>{{ name }}</span>
    </div>
    <div
      v-if="showChildren"
      class="children"
    >
      <component
        v-for="item in contents"
        :key="item.name"
        :is="defineComponent(item.type)"
        :item="item"
      ></component>
    </div>
  </div>
</template>

<script>
import TreeElementMixin from "@/mixins/TreeElementMixin";

export default {
  name: "Directory",
  mixins: [TreeElementMixin],
  data() {
    return {
      showChildren: false,
    };
  },
  computed: {
    name() {
      return this.item.name;
    },
    contents() {
      return this.item.contents || [];
    },
  },
  methods: {
    toggleShowChildren () {
      this.showChildren != this.showChildren;
    },
    defineComponent(type) {
      switch (type) {
        case "directory": {
          return "directory";
        }
        case "link": {
          return "link";
        }
        case "file": {
          return "file";
        }
        default: {
          throw Error(`Not existed component: ${type}`);
        }
      }
    },
  },
};
</script>

<style>
</style>