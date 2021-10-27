<template>
  <div :class="classList" @click="setActive(path)">
    <link-icon class="icon" />
    <div class="link-fullname">
      <span>{{ item.name }}</span>
      <span class="link-target">{{ target }}</span>
    </div>
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
  computed: {
    target () {
      return `Ссылается на: ${this.item.target}`
    },
  },
};
</script>

<style scoped>
.link-fullname {
  display: flex;
  flex-direction: column;
}
.link-target {
  font-size: 0.70em;
}
</style>