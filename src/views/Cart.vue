<template>
  <v-container>
    <h1 id="TituloCarrito">Carrito de Compras</h1>
    <v-card id="Card">
      <v-row v-bind:key="index" v-for="(item,index) in cart" cols="12" sm="3">
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar rounded size="100">
              <img :src="item.image" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="item.name"></v-list-item-title>
              <v-list-item-subtitle v-html="item.price"></v-list-item-subtitle>
            </v-list-item-content>
            <v-btn elevation="2" @click="deleteItem(index)" rounded>Eliminar</v-btn>
          </v-list-item>
        </v-list>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Cart",
  data: () => ({
    cart: [],
  }),
  methods: {
    deleteItem: function(index) {
      this.cart.splice(index,1);
      const parsed = JSON.stringify(this.cart);
      localStorage.setItem("cart", parsed);
    }
  },

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

<style scoped>
#TituloCarrito {
  top: 593px;
  left: 444px;
  width: 479px;
  height: 49px;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-772ce8);
  text-align: left;
  letter-spacing: 0px;
  color: #772ce8;
  opacity: 1;
}
#Card {
  margin: auto;
  padding-left: 15px;
}
</style>