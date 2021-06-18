<template>
  
  <div class="company">
    <div class="container">
      <h2>COMPANY</h2>
      <p>자주 묻는 질문입니다.</p>
         <div class="row mb-5">
          <div class="col-sm-6 col-md-12 mb-5" v-for="(item,i) in bdata" :key="i">
    
    
            {{bdata[i].title}}
          </div>
        </div>
    
    </div>
  </div>
</template>

<script>
export default {
    name:'company',
    props:['bdata'],
}
</script>

<style>
.company h2{text-align: center;margin: 30px;}
.company h2:after{content:""; width:50px; height: 2px;background:skyblue;display: block;
margin: 0 auto;}
.company p{font-size: 14px;text-align: center;margin: 50px;}
</style>