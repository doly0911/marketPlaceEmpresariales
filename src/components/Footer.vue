<template>
  <div class="">
    <div id="webinfo">
      <div>
        <v-row>
          <v-img id="icono1" src="../assets/icon-compras-seguras.svg"></v-img>
          <p id="icotx1">
            Compras <br />
            seguras
          </p>
        </v-row>
      </div>

      <div>
        <v-row>
          <v-img
            id="icono2"
            src="../assets/icon-multiples-medios-pago.svg"
          ></v-img>
          <p id="icotx1">
            Múltiples medios <br />
            de pago
          </p>
        </v-row>
      </div>
      <div>
        <v-row>
          <v-img
            id="icono3"
            src="../assets/icon-calidad-garantizada.svg"
          ></v-img>
          <p id="icotx1">
            Calidad <br />
            Garantizada
          </p>
        </v-row>
      </div>
      <div>
        <v-row>
          <v-img
            id="icono4"
            src="../assets/icon-envios-todo-elpais.svg"
          ></v-img>
          <p id="icotx1">
            Enviós a <br />
            Todo el país
          </p>
        </v-row>
      </div>
    </div>

    <!--Formulario de suscripción-->
    <div id="subform">
      <v-row>
        <v-col id="infosub">
          <v-row>
            <p id="titulosub">Suscríbete a nuestro boletín</p>
          </v-row>
          <v-row>
            <p id="subtitlesubs">Recibe información de nuestras ofertas</p>
          </v-row>
        </v-col>
        <v-col>
          <v-row>
            <v-col>
              <div>
                <input
                  type="text"
                  id="subs1"
                  placeholder="Ingresa tu correo electrónico"
                />
              </div>
            </v-col>
            <v-col
              ><v-btn color="white" outlined rounded class="ma-2"
                >Suscribirse</v-btn
              ></v-col
            >
          </v-row>
        </v-col>
      </v-row>
    </div>
    <!--Seccion de links-->
    <div class="ma-5 mt-6">
      <v-row>
        <v-col>
          <v-img id="logolink" src="../assets/logo-oldwave-header.png"></v-img>
        </v-col>
        <v-col>
          <v-row><p id="titletext">oldwave</p></v-row>
          <v-row> ¿Quienes somos? </v-row>
          <v-row> Nuestras tiendas </v-row>
        </v-col>
        <v-col>
          <v-row>
            <p id="titletext">Links de interés</p>
          </v-row>
          <v-row> Preguntas frecuentes </v-row>
          <v-row> Términos y condiciones </v-row>
          <v-row> Políticas de devoluciones </v-row>
        </v-col>
        <v-col>
          <v-row>
            <p id="titletext">Contácto</p>
          </v-row>
          <v-row>
            servicioalcliente@oldwave.co <br />
            Telefono: 316 1924
          </v-row>
          <v-row>
            <p id="titletext">Redes Sociales</p>
          </v-row>
          <v-row>
            <v-img id="networkicon" src="../assets/icon-facebook.png"></v-img>
            <v-img id="networkicon" src="../assets/icon-instagram.png"> </v-img>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <!--Agradecimientos-->
    <div id="thanks">
      <div class="text-center">
        <v-row>
          <p>oldwave© 2020 | Powered by:</p>
          <div id="thanksimg">
            <v-img src="../assets/experimentality-vtex.png"></v-img>
          </div>
        </v-row>
      </div>
    </div>
  </div>
</template>

<!--Estilos-->

<style scope>
#subtitlesubs {
  font-size: 18;
}
#titulosub {
  font-weight: bold;
  font-size: 26px;
}
#infosub {
  padding-left: 72px;
  color: white;
}
#icotx1 {
  color: #772ce8;
}
#subs1 {
  padding-left: 15px;
  width: 324px;
  height: 38px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 0.75px solid #ffffff;
  border-radius: 19px;
  opacity: 1;
}

#icono1 {
  width: 44px;
  height: 45px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-right: 20px;
}
#icono2 {
  width: 52px;
  height: 40px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-right: 20px;
}
#icono3 {
  width: 34px;
  height: 48px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-right: 20px;
}
#icono4 {
  width: 34px;
  height: 46px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-right: 20px;
}

#webinfo {
  height: 123px;
  background-color: #bdf1fd;
  display: flex;
  justify-content: space-around;
  padding: 40px 0;
}
#emailsub {
  padding: 5px;
  color: white;
}
#subform {
  height: 128px;
  background-color: #772ce8;
  padding: 20px;
}
#networkicon {
  margin-right:10px;
  max-width: 40px;
}
#logolink {
  margin: auto;
  width: 120px;
  height: 89.33px;
}
#titletext {
  top: 2205px;
  left: 345px;
  width: 200px;
  height: 28px;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-772ce8);
  text-align: left;
  letter-spacing: 0px;
  color: #772ce8;
  opacity: 1;
  font-size: 20px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
}
#thanksimg {
  width: 150px;
  display: flex;
  align-items: center;
}
#thanks {
  margin: auto;
  width: 35%;
  padding: 10px;
}

.v-bottom-navigation {
  justify-content: space-between;
}
</style>