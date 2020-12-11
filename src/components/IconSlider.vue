<template>
  <v-sheet class="mx-auto" max-width="700">
    <v-slide-group multiple show-arrows=always>
      <v-slide-item v-for="n in icons" :key="n.src">
        <img
          class="ma-5"
          id="Iconos"
          :src="n.src"
          alt=""
        />
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>


<script>
export default {
  name: "IconSlider",
  data: () => ({
    model: null,
    icons: [
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F9.jfif?alt=media&token=5cefa235-a124-4b0c-9854-1fb36f2b83cd",
      },
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F8.jfif?alt=media&token=20ddce90-47c7-4abd-a8e8-a2fe9645c854",
      },
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F7.jfif?alt=media&token=c4241a5a-aea6-44cc-861d-ab4f86177d15",
      },
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F6.jfif?alt=media&token=dc38151b-6ebb-4904-83f0-23b6a5b593e1",
      },
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F5.jfif?alt=media&token=577b3baa-3996-45f7-ae9c-d6166445caac",
      },
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F4.jfif?alt=media&token=e839f547-e371-44a9-aa9d-dbb6ee5ec3d5",
      },
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F3.jfif?alt=media&token=9c2af6a4-fa51-4d71-8def-cf01ef1285d2",
      },
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F2.jfif?alt=media&token=736ed39a-ca2c-46ce-a068-9e0e02fb0f20",
      },
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/oelo-2315e.appspot.com/o/iconos%2F1.jfif?alt=media&token=c61fd589-1982-436b-b8de-3753295fe9b4",
      },
    ],
  }),
};
</script>