<template>
  <div>
    <h1>products</h1>
    <h2>{{ this.search }}</h2>
  </div>
</template>

<script>
import productServices from "../services/product.services";

export default {
  name: "Products",

  data: () => ({
    search: "",
    products: [],
  }),

  async created() {
    this.search = this.$route.params.search;
    this.products = await productServices.getProducts(this.search);
  },
};
</script>