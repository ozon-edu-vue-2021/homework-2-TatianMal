export default {
  methods: {
    setActive (item) {
      // TODO: добавить ключ для обновления по дереву?
      this.$emit('setActive', item)
    },
  },
}