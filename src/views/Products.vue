<template>
  <div>
    <h1>products</h1>
    <h2>{{ this.search }}</h2>
    <button @click="goDetails('0', 'MCO557060514')">presioname</button>\
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

  methods: {
    goDetails: function (idSeller, idProduct) {
      this.$router.push({
        name: "Details",
        params: { idSeller: idSeller, id: idProduct },
      });
    },
  },
};
</script>