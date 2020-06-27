<template>
    <div class="conteneur">
      <div class="box">
        <div class="container">
            <span>1.87%</span>
            <progress class="progress is-warning is-large" value="1.87" max="100">1.87%</progress>
            <h2 style="color: orange;">نسبة الاصابات الاجمالية</h2>
        </div>
      </div>
      <div class="box">
      <div class="container">
        <span>24.70%</span>
        <progress class="progress is-info is-large" value="24.70" max="100">24.70%</progress>
        <h2 style="color: blue;">نسبة الاصابات قيد العلاج</h2>
      </div>
      </div>
      <div class="box">
      <div class="container">
        <span>73.44%</span>
        <progress class="progress is-success is-large" value="73.44" max="100">73.44%</progress>
        <h2 style="color: green;">نسبة التعافي</h2>
      </div>
      </div>
      <div class="box">
      <div class="container">
        <span>1.85%</span>
        <progress class="progress is-danger is-large" value="1.85" max="100">1.85%</progress>
        <h2 style="color: red;">نسبة الفتك</h2>
      </div>
      </div>
    </div>
</template>
<script>

</script>
<style>
span{
    position: relative;
    top: 24px;
    left: 1%;
    font-size: 12px;
}
.conteneur {
  font-family: sans-serif;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(1, 200px);
  grid-gap: 20px;
  padding-top: 20px;
  padding-bottom: 25px;
}

.conteneur .box {
  width: 100%;
  height: 100%;
}

.conteneur .box h2 {
  display: block;
  text-align: center;
  color: rgb(3, 3, 3);
}

.conteneur .box .chart {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 30px;
  line-height: 140px;
  height: 140px;
  color: rgb(10, 10, 10);
}

.conteneur .box canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (min-width: 420px) and (max-width: 659px) {
  .conteneur {
    grid-template-columns: repeat(2, 200px);
    grid-gap: 60px;
  }
}

@media (min-width: 660px) and (max-width: 899px) {
  .conteneur {
    grid-template-columns: repeat(3, 200px);
    grid-gap: 70px;
  }
}

@media (min-width: 900px) {
  .conteneur {
    grid-template-columns: repeat(4, 200px);
    grid-gap: 80px;
  }
}
</style>
