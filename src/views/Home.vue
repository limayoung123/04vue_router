<template>
<swiper :pagination="{
  'dynamicBullets': true
}" class="mySwiper">
  <swiper-slide><img src="image/banner01.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="image/banner02.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="image/banner03.jpg" alt=""></swiper-slide>
  </swiper>
  <div class="best">
    <div class="container">
      <h2>BEST PRODUCT</h2>
      <p>본 사이트에 소개된 제품 포함 한국피앤지가 수입판매하는 모든 다우니 제품은 국내 소비자들의 필요와 선호도를 세심히 고려해 개발·생산된 제품입니다.<br>
병행수입된 다우니의 경우 용법에 따라 사용하면 안전한 제품이긴 하나, 다른 나라 소비자의 요구와 기대를 충족하기 위해 개발된 제품입니다.<br>
따라서, 한국피앤지는 이러한 병행수입 다우니 제품에 대해 책임이 없습니다.</p>
      <div class="row mb-5">
        <div class="col-sm-2 col-md-3" v-for="(item,i) in pdata" :key="i">
          
            <img :src="pdata[i].image" alt="" class="w-100">
        
          <div @click="$emit('pOpen',pdata[i].id)">{{pdata[i].content}}{{pdata[i].price}}</div>
        </div>
      </div>
      <div class="btn btn-primary m-auto d-block" style="width:100px">
        <router-link to="/product">more</router-link></div>
    </div>
  </div>
  
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import "swiper/components/pagination/pagination.min.css"

// Import Swiper styles
import 'swiper/swiper.scss';

// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

export default {
  props:['pdata'],
  components: {
    Swiper,
    SwiperSlide,
  },

 
}
</script>
<style>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.best h2{text-align: center;margin: 30px;}
.best h2:after{content:""; width:80px; height: 2px;background:skyblue;display: block;
margin: 0 auto;}
.best p{font-size: 14px;text-align: center;margin: 50px;}
</style>
