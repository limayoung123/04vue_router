<template>
  
  <div class="company">
    <div class="container">
      <h2>COMPANY</h2>
      <p>자주 묻는 질문입니다.</p>
    </div>
  </div>
  <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">*</th>
      <th scope="col">Question</th>
      <th scope="col">Content</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{{bdata[0].title}}</td>
      <td>{{bdata[0].content}}</td>
      <td>{{bdata[0].date}}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{{bdata[1].title}}</td>
      <td>{{bdata[1].content}}</td>
      <td>{{bdata[1].date}}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>{{bdata[2].title}}</td>
      <td>{{bdata[2].content}}</td>
      <td>{{bdata[2].date}}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>{{bdata[3].title}}</td>
      <td>{{bdata[3].content}}</td>
      <td>{{bdata[3].date}}</td>
    </tr>
  </tbody>
</table>

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