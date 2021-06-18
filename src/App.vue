<template>
  <top-header />
  <router-view :pdata="pdata" :bdata="bdata" ></router-view>
 
  
</template>

<script>
import header from './components/header.vue'
import pdata from './pdata.js'
import bdata from './bdata.js'
export default {
  name:'App',
  data(){
    return{
      pdata:pdata,
      bdata:bdata,

    }
  },
  components:{
    'top-header':header,
  

  }

}
</script>

<style>
*{margin: 0;padding: 0;box-sizing: border-box;}
li{list-style: none;}
a:link,a:visited{color:#333;text-decoration: none;}
.clearfix:after{display: block;content: "";clear:both;}
h1{text-align: center; margin-bottom: 10px;}
</style>