<template>
  <div>
    <div :class="classList" @click="setActive(id)">
      <file-icon class="icon" />
      <span>{{ item.name }}{{ item.target }}</span>
    </div>
  </div>
</template>

<script>
import { randomBytes } from "crypto";
import TreeElementMixin from "@/mixins/TreeElementMixin";
import ListElementMixin from "@/mixins/ListElementMixin";
import FileIcon from "@/components/icons/FileIcon";

export default {
  name: "File",
  mixins: [TreeElementMixin, ListElementMixin],
  components: {
    FileIcon,
  },
  data() {
    return {
      id: `${randomBytes(16).toString("hex")}-${this.item && this.item.name}`,
    };
  },
};
</script>

<style scoped>
</style>