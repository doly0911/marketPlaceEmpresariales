<template>
  <div>
    <h1>products</h1>
    <h2>{{ this.search }}</h2>
  </div>
</template>

<script>
export default {
  name: "Products",

  data: () => ({
    search: "",
  }),

  watch: {
    $route(to, from) {
      if (to !== from) {
        this.search = this.$route.params.search;
      }
    },
  },

  async created() {
    this.search = this.$route.params.search;
  },
};
</script>