<template>
  <div class="ma-5" v-if="this.product != ''" id="details">
    <v-row>
      <v-col>
        <v-carousel style="max-width: 600px; margin: auto">
          <v-carousel-item
            v-for="(item, i) in product.pictures"
            :key="i"
            reverse-transition="fade-transition"
            transition="fade-transition"
            style="width:auto;object-fit:cover" 
          >
          <img :src="item" style="width:auto;height:auto"/>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col style="margin: auto">
        <div class="ma-2">
          <h1 id="title">{{ this.product.name }}</h1>
          <br />
          <h3>Marca: {{ this.product.brand }}</h3>
          <br />
          <h4>Reseller: {{ this.product.seller.name }}</h4>
          <br />
          <h2>Descripción</h2>
          <h5 style="font-weight: normal">{{ this.product.description }}</h5>
          <br />
          <h5 style="font-weight: normal" id="price">
            Precio: $ {{ formatPrice(this.product.price)
            }}{{ this.product.currency }}
          </h5>
          <br />
          <v-rating
            :value="this.product.rating"
            background-color="#772CE8"
            color="#772CE8"
            readonly
            large
          ></v-rating>
          <br />
          <v-btn
            id="addToCart"
            rounded
            color="#772CE8"
            dark
            v-on:click="addToCart()"
          >
            Agregar al carrito
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import productServices from "../services/product.services";

export default {
  name: "Details",

  data: () => ({
    product: "",
    cart: [],
    idSeller: "",
    idProduct: "",
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
  async beforeCreate() {
    this.idSeller = this.$route.params.idSeller;
    this.idProduct = this.$route.params.id;
    let products = await productServices.getProductById(
      this.idProduct,
      this.idSeller
    );
    console.log(products);
    this.product = products;
  },

  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    addToCart: function () {
      let idSeller = this.$route.params.idSeller;
      let idProduct = this.$route.params.id;
      let name = this.product.name;
      let image = this.product.pictures[0] ? this.product.pictures[0] : "";
      let price = this.product.price;
      let product = { idSeller, idProduct, name, image, price };
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

