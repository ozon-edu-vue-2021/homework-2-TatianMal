<template>
  <div>
    <div class="link-name" @click="setActive">
      <link-icon style="width:12px"/><span>{{ item.name }}{{ item.target }}</span>
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
}
</script>

<style>

</style>