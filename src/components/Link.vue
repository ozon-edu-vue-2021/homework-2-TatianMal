<template>
  <div>
    <div :class="classList" @click="setActive(id)">
      <link-icon class="icon" />
      <span>{{ item.name }}{{ item.target }}</span>
    </div>
  </div>
</template>

<script>
import { randomBytes } from "crypto";
import TreeElementMixin from "@/mixins/TreeElementMixin";
import ListElementMixin from "@/mixins/ListElementMixin";
import LinkIcon from "@/components/icons/LinkIcon";

export default {
  name: "Link",
  mixins: [TreeElementMixin, ListElementMixin],
  components: {
    LinkIcon,
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