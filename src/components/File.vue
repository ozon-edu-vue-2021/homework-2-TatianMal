<template>
  <div>
    <div class="tree-list-name" @click="setActive">
      <file-icon class="icon"/>
      <span>{{ item.name }}{{ item.target }}</span>
    </div>
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
}
</script>

<style scoped>
</style>