<template>
    <div class="conteneur">
      <div class="box">
        <div class="container">
            <span>2.9%</span>
            <progress class="progress is-warning is-large" value="2.9" max="100">2.6%</progress>
            <h2 style="color: orange;">نسبة الاصابات الاجمالية</h2>
        </div>
      </div>
      <div class="box">
      <div class="container">
        <span>7.4%</span>
        <progress class="progress is-info is-large" value="7.4" max="100">7.9%</progress>
        <h2 style="color: blue;">نسبة المرضى تحت العلاج</h2>
      </div>
      </div>
      <div class="box">
      <div class="container">
        <span>89.6%</span>
        <progress class="progress is-success is-large" value="89.6" max="100">89.5%</progress>
        <h2 style="color: green;">نسبة المتعافين</h2>
      </div>
      </div>
      <div class="box">
      <div class="container">
        <span>2.5%</span>
        <progress class="progress is-danger is-large" value="2.5" max="100">2.5%</progress>
        <h2 style="color: red;">نسبة المتوفين</h2>
      </div>
      </div>
    </div>
</template>
<script>

</script>
<style>

span{
    position: relative;
    top: 22px;
    left: 1%;
    font-size: 12px;

}
.conteneur {
  font-family: sans-serif;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(1, 160px);
  grid-gap: 80px;
}

@media (min-width: 420px) and (max-width: 659px) {
  .conteneur {
    grid-template-columns: repeat(2, 160px);
  }
}

@media (min-width: 660px) and (max-width: 899px) {
  .conteneur {
    grid-template-columns: repeat(3, 160px);
  }
}

@media (min-width: 900px) {
  .conteneur {
    grid-template-columns: repeat(4, 160px);
  }
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
</style>
