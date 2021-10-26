export default {
  computed: {
    isActive() {
      return this.currentActive === this.id;
    },
    classList() {
      const classes = ["tree-list-name"];
      if (this.isActive) {
        classes.push("active");
      }
      return classes;
    },
  },
  methods: {
    setActive(id) {
      this.$emit("setActive", id);
    },
  },
};
