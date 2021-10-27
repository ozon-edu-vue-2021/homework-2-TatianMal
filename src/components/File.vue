<template>
  <div :class="classList" @click="setActive(path)">
    <file-icon class="icon" />
    <span>{{ item.name }}{{ item.target }}</span>
  </div>
</template>

<script>
import TreeElementMixin from "@/mixins/TreeElementMixin";
import ListElementMixin from "@/mixins/ListElementMixin";
import FileIcon from "@/components/icons/FileIcon";

export default {
  name: "File",
  mixins: [TreeElementMixin, ListElementMixin],
  components: {
    FileIcon,
  },
};
</script>

<style scoped>
</style>