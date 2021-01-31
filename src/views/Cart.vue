<template>
  <v-container>
    <h1>Carrito</h1>
    {{ this.cart }}
  </v-container>
</template>

<script>
export default {
  name: "Cart",
  data: () => ({
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
};
</script>