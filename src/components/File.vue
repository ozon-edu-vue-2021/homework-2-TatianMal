<template>
  <div :class="classList" @click="setActive(path)">
    <icon type="file" class="icon" />
    <span>{{ item.name }}{{ item.target }}</span>
  </div>
</template>

<script>
import TreeElementMixin from "@/mixins/TreeElementMixin";
import ListElementMixin from "@/mixins/ListElementMixin";
import Icon from "@/components/icons/Icon";

export default {
  name: "File",
  mixins: [TreeElementMixin, ListElementMixin],
  components: {
    Icon,
  },
};
</script>

<style scoped>
</style>