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
      <IconSlider/>
    </div>
  </div>
</template>

<script>
import IconSlider from "../components/IconSlider";

export default {
  name: "Home",
  components: {
    IconSlider},
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
</style>
