<template>
  <div id="details">
    <h1>details</h1>
    <h2>{{ this.product.name }}</h2>
    <h3>{{ this.product.brand }}</h3>
    <v-carousel style="width: 300px; margin: auto" height="300">
      <v-carousel-item
        v-for="(item, i) in product.pictures"
        :key="i"
        :src="item"
        reverse-transition="fade-transition"
        transition="fade-transition"
        style="width: 300px"
      ></v-carousel-item>
    </v-carousel>
    <h4>{{ this.product.seller.name }}</h4>

    {{ this.product.description }}
    <br />
    {{ this.product.currency }}
    <br />
    {{ this.product.price }}
    <br />
    {{ this.product.rating }}
  </div>
</template>

<script>
import productServices from "../services/product.services";

export default {
  name: "Details",

  data: () => ({
    product: {},
  }),

  async beforeCreate() {
    let idSeller = this.$route.params.idSeller;
    let idProduct = this.$route.params.id;
    let products = await productServices.getProductById(idProduct, idSeller);
    this.product = products;
  },

  methods: {},
};
</script>

<style>
</style>