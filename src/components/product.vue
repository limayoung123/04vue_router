<template>
  
  <div class="product">
    <div class="container">
      <h2>PRODUCT</h2>
      <p>자세한 제품 설명입니다.</p>
         <div class="row mb-5">
          <div class="col-sm-6 col-md-3" v-for="(item,i) in pdata" :key="i">
    
              <img :src="pdata[i].image" alt="" class="w-100">
    
            {{pdata[i].content}}
          </div>
        </div>
    
    </div>
  </div>
</template>

<script>
export default {
    name:'product',
    props:['pdata'],
}
</script>

<style>
.product h2{text-align: center;margin: 30px;}
.product h2:after{content:""; width:50px; height: 2px;background:skyblue;display: block;
margin: 0 auto;}
.product p{font-size: 14px;text-align: center;margin: 50px;}
</style>