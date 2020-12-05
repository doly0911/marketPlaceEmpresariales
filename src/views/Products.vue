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
    cart: [],
  }),

  mounted() {
    if (localStorage.getItem("cart")) {
      try {
        this.cart = JSON.parse(localStorage.getItem("cart"));
        if (!this.cart) {
          this.cart = [];
        }
      } catch (e) {
        localStorage.removeItem("cart");
      }
    }
  },

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

    addToCart: function (idSeller, idProduct) {
      let product = { idSeller, idProduct };
      console.log(this.cart.includes(product));
      if (this.cart.indexOf(product) == -1) {
        this.cart.push(product);
        const parsed = JSON.stringify(this.cart);
        localStorage.setItem("cart", parsed);
      }
    },
  },
};
</script>