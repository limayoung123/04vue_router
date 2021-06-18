<template>
  <h1>Downy</h1>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><router-link to="/home">Downy</router-link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

    <li v-for="(item,i) in menu" :key="i" >
        <router-link :to="menu[i].link" class="nav-item active">{{menu[i].title}}</router-link>
    </li>
    
     
    </ul>
  </div>
</nav>
</template>

<script>
export default {
    name:'header',
    data(){
        return{
            menu:[
                {title:'home',link:'/'},
                {title:'company',link:'/company'},
                {title:'product',link:'/product'},
            ]
        }
    }
}
</script>

<style>
*{margin: 0;padding: 0;box-sizing: border-box;}
li{list-style: none;}
a:link,a:visited{color:#333;text-decoration: none;}
.clearfix:after{display: block;content: "";clear:both;}
.nav-item{margin-right: 50px;}
.router-link-active {border-bottom:2px solid navy}
</style>