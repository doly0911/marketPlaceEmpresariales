<template>
  <div>
    <v-row>
      <v-col cols="3">
        <div id="divFiltros">
          <v-col id="filtrosMenu">
            <v-card class="mx-auto" max-width="200">
              <v-card-title class="space-betwen"> Filtros </v-card-title>

              <v-divider></v-divider>

              <v-list flat subheader three-line>
                <v-subheader>Tipos de Producto</v-subheader>

                <v-list-item-group>
                  <v-list-item>
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title id="opcionesFiltro">Iphone 11</v-list-item-title>
                        <v-list-item-subtitle></v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title id="opcionesFiltro">Iphone 11 pro</v-list-item-title>
                        <v-list-item-subtitle></v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title id="opcionesFiltro">Iphone 11 pro plus</v-list-item-title>
                        <v-list-item-subtitle></v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </div>
      </v-col>

      <v-col cols="9">
        <!--Recorrer el Array de proveedores que son 3 -->
        <div id="divProducts">
          <div v-for="(product, index) in products" v-bind:key="index">
            <div v-if="product != null">
              <v-row>
                <v-col id="items" v-for="item in product.items" v-bind:key="item.id" cols="9" sm="3">
                  <!--Recorrer Los items del vendedor -->
                  <v-card class="mx-auto my-12" max-width="265px">
                    <v-img v-bind:src="item.thumbnail" v-on:click="goDetails(index, item.id)"></v-img>
                    <v-card-text>
                      <!--ESTA ES LA CLASE QUE ME CENTRA TODO -->
                      <div class="text-center">
                        <v-card-title id="productName" class="space-betwen">{{ item.name }}</v-card-title>
                        <v-card-text id="productBrand" class="space-betwen">{{ item.brand }}</v-card-text>
                        <v-row>
                          <v-col>
                            <p id="oldPrice">{{ item.price }}</p>
                          </v-col>
                          <v-col>
                            <p id="newPrice">{{ item.price }}</p>
                          </v-col>
                        </v-row>
                        <v-btn rounded color="#772CE8" dark v-on:click="addToCart(index, item.id)"> Agregar al carrito </v-btn>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
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

  watch: {
    $route(to, from) {
      if (to !== from) {
        this.search = this.$route.params.search;
        this.reload();
      }
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

  async created() {
    this.search = this.$route.params.search;
    this.products = await productServices.getProducts(this.search);
  },

  methods: {
    reload: async function () {
      this.search = this.$route.params.search;
      this.products = await productServices.getProducts(this.search);
    },
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

<style scoped>
#productBrand {
  font: var(--unnamed-font-style-bold) bold var(--unnamed-font-weight-600) 12px/18px var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-772ce8);
  font: bold bold 600 12px;
  letter-spacing: 0px;
  color: #772ce8;
  opacity: 1;
  font-size: 12px;
  font-weight: bold;
}
#productName {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-13) / 16px var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-3b3b3b);
  text-align: center;
  letter-spacing: 0px;
  color: #3b3b3b;
  opacity: 1;
  font-size: 14px;
}
#oldPrice {
  text-decoration: line-through;

  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-13) / 16px var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-3b3b3b);
  text-align: center;
  font: normal normal medium 13px/16px Poppins;
  letter-spacing: 0px;
  color: #3b3b3b;
  opacity: 1;
  font-size: 16px;
}
#newPrice {
  font: var(--unnamed-font-style-normal) normal bold 14px/21px var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-772ce8);
  text-align: center;
  letter-spacing: 0px;
  color: #772ce8;
  opacity: 1;
  font-weight: bold;
  font-size: 16px;
}
.v-card {
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  opacity: 1;
}

#opcionesFiltro {
  font-size: 12px;
}

#items {
  width: 300px;
  display: inline-block;
}
#divProducts {
  float: left;
}

#divFiltros {
  float: left;
}
</style>
