<template>
  <div :class="classList" @click="setActive(path)">
    <link-icon class="icon" />
    <span>{{ item.name }}{{ item.target }}</span>
  </div>
</template>

<script>
import TreeElementMixin from "@/mixins/TreeElementMixin";
import ListElementMixin from "@/mixins/ListElementMixin";
import LinkIcon from "@/components/icons/LinkIcon";

export default {
  name: "Link",
  mixins: [TreeElementMixin, ListElementMixin],
  components: {
    LinkIcon,
  },
};
</script>

<style scoped>
</style>