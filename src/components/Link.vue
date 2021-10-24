<template>
  <div>
    <div class="link-name" @click="setActive">
      <span>{{ item.name }}{{ item.target }}</span>
    </div>
  </div>
</template>

<script>
import TreeElementMixin from "@/mixins/TreeElementMixin";
import ListElementMixin from "@/mixins/ListElementMixin";

export default {
  name: "Link",
  mixins: [TreeElementMixin, ListElementMixin],
}
</script>

<style>

</style>