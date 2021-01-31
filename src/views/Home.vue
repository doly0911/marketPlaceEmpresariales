<template>
  <div class="home">
    <v-carousel :show-arrows="false">
      <v-carousel-item
        v-for="(item, i) in banners"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-row>
      <v-col></v-col>
      <h1 class="ma-4" id="TituloHome">¿Que estas buscando hoy?</h1>
      <v-col></v-col>
    </v-row>
    <div class="ma-2">
      <IconSlider />
    </div>
    <div>
      <v-col>
        <v-row class="mb-10">
          <img
            id="ImageBanner"
            src="https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/Empresariales%2Fbanner-auxilar-ordenadores%402x.png?alt=media&token=9c22ee90-51a4-4c23-9bdd-a3bbc178a83a"
            alt=""
          />
          <v-card id="cards"
            ><img
              id="ImageCards"
              src="https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/Empresariales%2Fproducto1%402x.png?alt=media&token=f007e960-2c52-434b-b259-d90b24c89214"
              alt=""
          /></v-card>
          <v-card id="cards"
            ><img
              id="ImageCards"
              src="https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/Empresariales%2Fproducto2%402x.png?alt=media&token=aa63d324-f643-4ff7-bc7e-f509b8f233d0"
              alt=""
          /></v-card>
        </v-row>
        <v-row class="mt-10">
          <v-card id="cards"
            ><img
              id="ImageCards"
              src="https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/Empresariales%2Fproducto3%402x.png?alt=media&token=b85afc99-ca50-4250-ae8e-ab5bfcdb72f9"
              alt=""
          /></v-card>
          <v-card id="cards"
            ><img
              id="ImageCards"
              src="https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/Empresariales%2Fproducto4%402x.png?alt=media&token=e4f2de3a-ec68-42cc-abd1-3e74379ac2b2"
              alt=""
          /></v-card>
          <img
            id="ImageBanner"
            src="https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/Empresariales%2Fbanner-auxiliar-bicicletas%402x.png?alt=media&token=a6b97c84-f266-418d-9699-f6b38c075565"
            alt=""
          />
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<script>
import IconSlider from "../components/IconSlider";

export default {
  name: "Home",
  components: {
    IconSlider,
  },
  data() {
    return {
      banners: [
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/BlackFridayEmpresariales.jfif?alt=media&token=9c2a6ddc-a1e6-4f95-9f16-9e34becaf345",
        },
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/BlackFridayEmpresariales.jfif?alt=media&token=9c2a6ddc-a1e6-4f95-9f16-9e34becaf345",
        },
      ],
    };
  },
};
</script>

<style scoped>
#Center {
  margin: auto;
}
#TituloHome {
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
#Iconos {
  margin: 25px;
}
#ImageCards {
  max-width: 256px;
  max-height: 202px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#ImageBanner {
  margin: auto;
  width: 625px;
  height: 202px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
}
#cards {
  margin: auto;
  width: 256px;
  height: 202px;
  background: 0% 0% no-repeat padding-box;
  background: #f4f6fa 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 20px;
}
</style>
