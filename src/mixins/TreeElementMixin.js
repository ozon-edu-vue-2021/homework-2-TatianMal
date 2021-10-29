export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    currentActive: {
      type: String,
    },
    path: {
      type: String,
      required: true,
    }
  },
};
