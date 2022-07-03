<template>
  <div>
    <div v-bind:style='{backgroundColor : getColor}'></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState({
        color: state => state.window.properties.color
      }),
      getColor(){
        return this.color;
      }
    }  
  }
</script>

<style>
  div {
   width: 500px;
   height: 500px;
  }
</style>