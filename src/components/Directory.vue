<template>
  <div>
    <div class="tree-list-name" @click="toggleShowChildren">
      <directory-icon class="icon"/>
      <span>{{ name }}</span>
      <arrow-icon class="icon-arrow"/>
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
import DirectoryIcon from "@/components/icons/DirectoryIcon";
import ArrowIcon from "@/components/icons/ArrowIcon";
import File from "@/components/File";
import Link from "@/components/Link";

export default {
  name: "Directory",
  mixins: [TreeElementMixin],
  components: {
    DirectoryIcon,
    ArrowIcon,
    File,
    Link,
  },
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
      this.showChildren = !this.showChildren;
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

<style scoped>
.active {
  background-color: rgb(14, 14, 172);
}
.children {
  margin-left: 3vw;
}
</style>