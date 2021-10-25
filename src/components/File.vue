<template>
  <div>
    <div class="file-name" @click="setActive">
      <file-icon style="width:12px"/><span>{{ item.name }}{{ item.target }}</span>
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

<style>

</style>