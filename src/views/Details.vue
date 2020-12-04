<template>
  <div>
    <h1>details</h1>
    <h2>{{ this.product }}</h2>
  </div>
</template>

<script>
import productServices from "../services/product.services";

export default {
  name: "Products",

  data: () => ({
    idSeller: "",
    idProduct: "",
    product: {},
  }),

  async created() {
    this.idSeller = this.$route.params.idSeller;
    this.idProduct = this.$route.params.id;
    this.product = await productServices.getProductById(
      this.idProduct,
      this.idSeller
    );
  },

  methods: {},
};
</script>