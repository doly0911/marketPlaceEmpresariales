<template>
  <v-container>
    <h1 id="TituloCarrito">Carrito de Compras</h1>
    <v-card id="Card">
      <v-row
        class="separo"
        v-bind:key="index"
        v-for="(item, index) in cart"
        cols="12"
        sm="3"
        width="500px"
      >
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar rounded size="100">
              <img :src="item.image" />
            </v-list-item-avatar>
            <v-row class="datos">
              <v-list-item-content>
                <v-col>
                  <v-list-item-title class="name">
                    {{ item.name }}
                  </v-list-item-title>
                </v-col>
                <v-col>
                  <v-list-item-subtitle class="price">
                    ${{ formatPrice(item.price) }}
                  </v-list-item-subtitle>
                </v-col>
              </v-list-item-content>

              <v-btn
                class="delete"
                color="#772ce8"
                elevation="2"
                @click="deleteItem(index)"
                rounded
              >
                <v-icon color="white">mdi-delete</v-icon> Eliminar
              </v-btn>
            </v-row>
          </v-list-item>
        </v-list>
      </v-row>
    </v-card>
    <v-row class="compra">
      <v-text></v-text>
      <v-btn class="buy" color="#772ce8" elevation="2" margin="20px" rounded
        ><v-icon color="white">mdi-cash</v-icon> Comprar</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Cart",
  data: () => ({
    cart: [],
  }),
  methods: {
    deleteItem: function (index) {
      this.cart.splice(index, 1);
      const parsed = JSON.stringify(this.cart);
      localStorage.setItem("cart", parsed);
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
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
  width: 1200px;
  justify-content: space-between;
  font: var(--unnamed-font-style-normal) normal bold 14px/21px
    var(--unnamed-font-family-poppins);
}
.name {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 800px;
  margin-right: 50px;
  font: var(--unnamed-font-style-normal) normal bold 14px/21px
    var(--unnamed-font-family-poppins);
}
.price {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font: var(--unnamed-font-style-normal) normal bold 14px/21px
    var(--unnamed-font-family-poppins);
}
.separo {
  display: flex;
  justify-content: space-between;
  font: var(--unnamed-font-style-normal) normal bold 14px/21px
    var(--unnamed-font-family-poppins);
}
.row {
  margin-right: 0;
}
v-btn {
  color: #772ce8;
  background-color: #772ce8;
  font: var(--unnamed-font-style-normal) normal bold 14px/21px
    var(--unnamed-font-family-poppins);
}
.delete {
  color: white;
  font: var(--unnamed-font-style-normal) normal bold 14px/21px
    var(--unnamed-font-family-poppins);
}
.buy {
  color: white;
  margin: 20px;
  display: flex;
  font: var(--unnamed-font-style-normal) normal bold 14px/21px
    var(--unnamed-font-family-poppins);
}
.compra {
  display: flex;
  justify-content: space-between;
  text-align: center;
  font: var(--unnamed-font-style-normal) normal bold 14px/21px
    var(--unnamed-font-family-poppins);
}
</style>