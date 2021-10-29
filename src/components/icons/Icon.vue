<template>
  <component
    v-if="currentIcon"
    :is="currentIcon"
  />
</template>

<script>
import ArrowIcon from "@/assets/icons/chevron-right-solid.svg";
import DirectoryIcon from "@/assets/icons/folder-regular.svg";
import FileIcon from "@/assets/icons/file-regular.svg";
import LinkIcon from "@/assets/icons/link-solid.svg";

export default {
  name: "FileIcon",
  props: {
    type: {
      type: String,
      required: true,
    }
  },
  data: () => ({
    currentIcon: undefined,
  }),
  methods: {
    defineComponent () {
      switch (this.type) {
        case "directory": {
          this.currentIcon = DirectoryIcon;
          break;
        }
        case "link": {
          this.currentIcon = LinkIcon;
          break;
        }
        case "file": {
          this.currentIcon = FileIcon;
          break;
        }
        case "arrow": {
          this.currentIcon = ArrowIcon;
          break;
        }
      }
    },
  },
  created () {
    this.defineComponent()
  },
}
</script>

<style>

</style>