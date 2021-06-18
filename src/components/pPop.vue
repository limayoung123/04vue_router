<template>
  <div v-if="pView==true">
    <div class="pPop text-center">
      <img :src="pdata[pNum].image" alt="" class='w-100'>
      <p>{{pdata[0].title}}</p>
      <button class="btn btn-primary" @click="$emit('pClose')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
    name:'pPop',
    props:['pdata','pView','pNum'],

}
</script>

<style>

</style>