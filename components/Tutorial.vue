<!-- Please remove this file from your project -->
<template>
  <div id="app">
    <v-app dark>
      <v-main>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex d-flex xs12 sm6 md4>
              <Window class="border"/>
            </v-flex>

            <v-flex d-flex xs12 sm6 md4>
              <v-btn btn color="secondary" v-on:click="redScreen">
                Red Window
              </v-btn>

              <v-btn  color="secondary" v-on:click="greenScreen">
                Green Window
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>    
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { VApp, VMain, VLayout, VFlex, VBtn, VContainer } from 'vuetify/lib'
import Window from './window.vue';

export default {
    name: "NuxtDispatch",
    computed: {
      ...mapState({
        changeBackgroundColor: false
      })
    },
    components: {
    VApp,
    VMain,
    VLayout,
    VFlex,
    VBtn,
    VContainer,
    Window
},
  methods: {
    greenScreen(){
        this.setColor('#00FF00');
    },
    redScreen(){
        this.setColor('#FF0000');
    },
    setColor(colorText) {
      this.$store.dispatch("window/setColor", colorText);
    }
  }
}
</script>

<style>

.border {
  border: solid rgb(32, 27, 27) 8px;
  border-radius: 8px;
  width: 500px;
  height: 500px;
}
</style>
