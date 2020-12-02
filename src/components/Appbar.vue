<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>Aqui va el logo y titulo</v-toolbar-title>
    </v-app-bar>
    <v-app-bar color="purple" dark>
      <v-text-field
        v-model="productName"
        class="ma-2"
        hide-details
        append-icon="mdi-magnify"
        single-line
        filled
        outlined
        rounded
      ></v-text-field>
      <v-btn @click="searchProducts" outlined rounded class="ma-2"
        >Buscar</v-btn
      >
      <v-divider class="mx-4" vertical></v-divider>
      <v-btn icon>
        <v-icon>mdi-account-circle-outline</v-icon>
      </v-btn>
      <v-btn @click="cart" icon>
        <v-icon>mdi-basket-outline</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Appbar",

  data() {
    return {
      productName: "",
    };
  },

  methods: {
    searchProducts() {
      let product = this.productName;
      this.$router.push({
        name: "Products",
        params: { search: product },
      });
    },
    cart() {
      this.$router.push({
        name: "Cart",
      });
    },
  },
};
</script>
