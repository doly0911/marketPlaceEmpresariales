<template>
<div>
    <div>
  <v-bottom-navigation>
    <v-btn>
        <v-row>
            <v-img id="iconos" src="../assets/icon-compras-seguras@2x.png"></v-img>
            <v-col><v-text>Compras <br> seguras</v-text></v-col>
        </v-row>
    </v-btn>
    <v-btn>
        <v-row>
            <v-img id="iconos" src="../assets/icon-multiples-medios-pago.png"></v-img>
            <v-col><v-text>Múltiples medios <br> de pago</v-text></v-col>
        </v-row>
    </v-btn>
    <v-btn>
        <v-row>
            <v-img id="iconos" src="../assets/icon-calidad-garantizada.png"></v-img>
            <v-col><v-text>Calidad <br> Garantizada</v-text></v-col>
        </v-row>
    </v-btn>
    <v-btn>
        <v-row>
            <v-img id="iconos" src="../assets/icon-envios-todo-elpais.png"></v-img>
            <v-col><v-text>Enviós a <br> Todo el país</v-text></v-col>
        </v-row>
    </v-btn>
  </v-bottom-navigation>
    </div>
    <!--Formulario de suscripción-->
    <div>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-row>
      <v-col>
          <v-row>
          <v-title>
              Suscríbete a nuestro boletín
          </v-title>
          </v-row>
          <v-row>
              <v-text>Recibe información de nuestras ofertas</v-text>
          </v-row>
      </v-col>
      <v-col>
        <v-row>
            <v-col><v-inp outlined rounded class="ma-2"></v-inp></v-col>
            <v-col><v-btn @click="searchProducts" outlined rounded class="ma-2">Buscar</v-btn></v-col>
        </v-row>
        
    
      </v-col>
  </v-row>
  
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
    </div>
    <!--Seccion de links-->
    <div>
        <v-row>
            <v-col>
                <v-img id="logolink" src="../assets/logo-oldwave-header.png"></v-img>
            </v-col>
            <v-col>
                <v-row><v-title id="titletext">oldwave</v-title></v-row>
                <v-row>
                <v-a >¿Quienes somos?</v-a>
                </v-row>
                <v-row>
                <v-a>Nuestras tiendas</v-a>
                </v-row>
            </v-col>
            <v-col>
                <v-row>
                <v-title id="titletext">Links de interés</v-title>
                </v-row>
                <v-row>
                <v-a>Preguntas frecuentes</v-a>
                </v-row>
                <v-row>
                <v-a>Términos y condiciones</v-a>
                </v-row>
                <v-row>
                <v-a>Políticas de devoluciones</v-a>
                </v-row>
            </v-col>
            <v-col>
                <v-row>  
                  <v-title id="titletext">Contácto</v-title>
                </v-row>
                <v-row>
                  <v-a>servicioalcliente@oldwave.co <br> Telefono: 316 1924</v-a>
                </v-row>
                <v-row>
                <v-title id="titletext">Redes Sociales</v-title>
                </v-row>  
                <v-row>
                   <v-col><v-img id="networkicon" src="../assets/icon-facebook.png"></v-img></v-col>
                   <v-col><v-img id="networkicon" src="../assets/icon-instagram.png"></v-img></v-col>
                </v-row>
            </v-col>
            
        </v-row>
    </div>
    <!--Agradecimientos-->
    <div id="thanks">
      <div class="text-center">
        <v-row>
            <v-text>oldwave© 2020 | Powered by:</v-text>
            <div id="thanksimg">
            <v-img  src="../assets/experimentality-vtex.png" ></v-img>
            </div>
        </v-row>
    </div>
    </div>
</div>
</template>
<style scope>
#networkicon{
  margin: auto;
  width: 40px;
}
#logolink{
  margin: auto;
  width: 120px;
  height: 89.33px;
}
#titletext{
  top: 2205px;
left: 345px;
width: 200px;
height: 28px;
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-772ce8);
text-align: left;
letter-spacing: 0px;
color: #772CE8;
opacity: 1;
font-size: 20px;
font-weight: bold;
font-family: 'Poppins', sans-serif;
}
#thanksimg{
  width: 150px;
  display: flex;
  align-items: center;
}
#thanks{
  margin: auto;
    width: 35%;
    padding: 10px;   
}

.v-bottom-navigation{
justify-content: space-between;
}
#iconos{
    align-items: center;
    width: 30px;
    height: 30px;
}
</style>