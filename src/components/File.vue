<template>
  <div>
    <div class="file-name" @click="setActive">
      <span>{{ item.name }}{{ item.target }}</span>
    </div>
  </div>
</template>

<script>
import TreeElementMixin from "@/mixins/TreeElementMixin";
import ListElementMixin from "@/mixins/ListElementMixin";

export default {
  name: "File",
  mixins: [TreeElementMixin, ListElementMixin],
}
</script>

<style>

</style>