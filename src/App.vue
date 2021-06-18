<template>

  
  
  <top-header />
  <router-view :pdata="pdata" :bdata="bdata" @pOpen="pView=true;pNum=$event" ></router-view>
  <transition name="fade" style="position:relative;z-index:1000">
    <pPop :pdata="pdata" :pView="pView" @pClose="pView=false;" :pNum="pNum" /> 
  </transition>
  
</template>

<script>
import header from './components/header.vue'
import pdata from './pdata.js'
import bdata from './bdata.js'
import pPop from './components/pPop.vue'
export default {
  name:'App',
  data(){
    return{
      pdata:pdata,
      bdata:bdata,
      pView:false,
      pNum:0,

    }
  },
  components:{
    'top-header':header,
    pPop:pPop,
  

  }

}
</script>

<style>
*{margin: 0;padding: 0;box-sizing: border-box;}
li{list-style: none;}
a:link,a:visited{color:#333;text-decoration: none;}
.clearfix:after{display: block;content: "";clear:both;}
h1{text-align: center; margin-bottom: 10px;}
.pPop{position:fixed; z-index:10; background: #fff;width: 80%;top:50%;left:50%;
transform: translate(-50%,-50%);box-shadow: 0 0 10px rgba(0,0,0,0.5);
border-radius:10px;padding: 20px;}

.fade-enter-from{opacity: 0;}
.fade-enter-active{transition:0.5s}
.fade-enter-to{opacity: 1;}

.fade-leave-from{opacity: 1;}
.fade-leave-active{transition:0.5s}
.fade-leave-to{opacity: 0;}
@media screen and (min-width:900px){
  .pPop{width:800px;}
  
}
</style>