export default {
  computed: {
    isActive() {
      return this.currentActive === this.path;
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
    setActive(path) {
      this.$emit("setActive", path);
    },
  },
};
