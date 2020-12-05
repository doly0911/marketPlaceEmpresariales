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
    <h1>Bienvenido al home</h1>
    <div class="ma-2">
      <v-row>
        <v-col></v-col>
        <img id="Iconos" src="https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F9.jfif?alt=media&token=5cefa235-a124-4b0c-9854-1fb36f2b83cd" alt="">
        <img id="Iconos" src="https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F8.jfif?alt=media&token=20ddce90-47c7-4abd-a8e8-a2fe9645c854" alt="">
        <img id="Iconos" src="https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F7.jfif?alt=media&token=c4241a5a-aea6-44cc-861d-ab4f86177d15" alt="">
        <img id="Iconos" src="https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F6.jfif?alt=media&token=dc38151b-6ebb-4904-83f0-23b6a5b593e1" alt="">
        <img id="Iconos" src="https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F5.jfif?alt=media&token=577b3baa-3996-45f7-ae9c-d6166445caac" alt="">
        <img id="Iconos" src="https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F4.jfif?alt=media&token=e839f547-e371-44a9-aa9d-dbb6ee5ec3d5" alt="">
        <img id="Iconos" src="https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F3.jfif?alt=media&token=9c2af6a4-fa51-4d71-8def-cf01ef1285d2" alt="">
        <img id="Iconos" src="https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F2.jfif?alt=media&token=736ed39a-ca2c-46ce-a068-9e0e02fb0f20" alt="">
        <img id="Iconos" src="https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F1.jfif?alt=media&token=c61fd589-1982-436b-b8de-3753295fe9b4" alt="">
        <v-col></v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
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
      // icons: [
      //   {
      //     src:
      //       "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F9.jfif?alt=media&token=5cefa235-a124-4b0c-9854-1fb36f2b83cd",
      //   },
      //   {
      //     src:
      //       "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F8.jfif?alt=media&token=20ddce90-47c7-4abd-a8e8-a2fe9645c854",
      //   },
      //   {
      //     src:
      //       "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F7.jfif?alt=media&token=c4241a5a-aea6-44cc-861d-ab4f86177d15",
      //   },
      //   {
      //     src:
      //       "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F6.jfif?alt=media&token=dc38151b-6ebb-4904-83f0-23b6a5b593e1",
      //   },
      //   {
      //     src:
      //       "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F5.jfif?alt=media&token=577b3baa-3996-45f7-ae9c-d6166445caac",
      //   },
      //   {
      //     src:
      //       "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F4.jfif?alt=media&token=e839f547-e371-44a9-aa9d-dbb6ee5ec3d5",
      //   },
      //   {
      //     src:
      //       "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F3.jfif?alt=media&token=9c2af6a4-fa51-4d71-8def-cf01ef1285d2",
      //   },
      //   {
      //     src:
      //       "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F2.jfif?alt=media&token=736ed39a-ca2c-46ce-a068-9e0e02fb0f20",
      //   },
      //   {
      //     src:
      //       "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F1.jfif?alt=media&token=c61fd589-1982-436b-b8de-3753295fe9b4",
      //   },
      // ],
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
