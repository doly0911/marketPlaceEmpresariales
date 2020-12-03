<template>
  <div>
    <v-app-bar>
      <a href="" class="ml-10">
        <img id="Logo" src="../assets/oldwave-logo-horizontal.png" alt="logo" />
      </a>
      <v-spacer></v-spacer>
      <button id="BotonIniciarSesion" class="ma-2">
        <label id="LetraIniciarSesion">Regístrate o inicia sesión</label>
      </button>
      <a href="" class="ma-2">
        <img id="Login-icon" src="../assets/login-icon.svg" />
      </a>
      <a href="" class="ma-2">
        <img id="Carrito-icon" src="../assets/carrito-icon.svg" />
      </a>
    </v-app-bar>
    <v-app-bar color="#772CE8">
      <v-text-field dark rounded outlined prepend-inner-icon="mdi-magnify" v-model="productName">
        <label id="EstoyBuscando">Estoy Buscando</label>
      </v-text-field>

      <button @click="searchProducts" id="BotonBuscar" class="ma-2">
        <label id="LetraBotonBuscar">Buscar</label>
      </button>

      <button id="BotonFiltros" class="ma-2">
        <img src="../assets/icon-filter.svg" class="mr-2" />
        <label id="LetraBotonFiltros">Filtros</label>
      </button>
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
      //Hay que controlar cuando ya se esta en la ventana Productos
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

<style scoped>
#Logo {
  top: 20px;
  left: 72px;
  width: 163px;
  height: 40px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
}
#Login-icon {
  top: 27px;
  left: 1214px;
  width: 29px;
  height: 29px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
}
#Carrito-icon {
  top: 20px;
  left: 1266px;
  width: 29px;
  height: 36px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
}
#EstoyBuscando {
  top: 96px;
  left: 129px;
  width: 128px;
  height: 21px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) 15px/23px
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-3b3b3b);
  text-align: left;
  font: normal normal normal 15px/23px Poppins;
  letter-spacing: 0px;
  color: #3b3b3b;
  opacity: 0.17;
}
#BotonBuscar {
  top: 89px;
  left: 1032px;
  width: 139px;
  height: 36px;
  border: 1px solid var(--unnamed-color-f4f6fa);
  border: 1px solid #f4f6fa;
  border-radius: 19px;
  opacity: 1;
}
#LetraBotonBuscar {
  top: 97px;
  left: 1075px;
  width: 52px;
  height: 21px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) 15px/23px
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal medium 15px/23px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
#BotonIniciarSesion {
  top: 23px;
  left: 963px;
  width: 237px;
  height: 37px;
  background: var(--unnamed-color-f4f6fa) 0% 0% no-repeat padding-box;
  background: #e1e2e6 0% 0% no-repeat padding-box;
  border-radius: 19px;
  opacity: 1;
}
#LetraIniciarSesion {
  top: 97px;
  left: 1075px;
  width: 52px;
  height: 21px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) 15px/23px
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal medium 15px/23px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}
#BotonFiltros {
  top: 89px;
  left: 1180px;
  width: 115px;
  height: 36px;
  border: 1px solid var(--unnamed-color-f4f6fa);
  border: 1px solid #f4f6fa;
  border-radius: 19px;
  opacity: 1;
}
#LetraBotonFiltros {
  top: 97px;
  left: 1223px;
  width: 45px;
  height: 21px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) 15px/23px
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal medium 15px/23px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
#IconoFiltros {
  top: 102px;
  left: 1202px;
  width: 13px;
  height: 12px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
}
#Input {
  top: 89px;
  left: 80px;
  width: 944px;
  height: 36px;
  background: var(--unnamed-color-f7f7f7) 0% 0% no-repeat padding-box;
  background: #f7f7f7 0% 0% no-repeat padding-box;
  border-radius: 18px;
  opacity: 1;
}
#InputImage {
  top: 99px;
  left: 98px;
  width: 17px;
  height: 16px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
}
</style>
