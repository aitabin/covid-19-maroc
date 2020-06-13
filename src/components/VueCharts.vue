<template>
  <section class="container">
    <ul>
      <li><router-link to="/">الرئيسية</router-link></li>
      <li><router-link to="/regions">الخريطة الجهوية للحالة الوبائية</router-link></li>
      <li><router-link to="/provinces">الخريطة الاقليمية للحالة الوبائية</router-link></li>
    </ul>
    <h1>مبيانات الحالة الوبائية بالمغرب</h1>
    <div class="columns">
      <div class="column">
        <h3>الحالة الوبائية</h3>
        <cases-chart></cases-chart>
      </div>
       <div class="column">
        <h3>نسب</h3>
        <current-state-chart></current-state-chart>
        <!--Bubble Chart example-->
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>الحالة الوبائية بجهات المغرب</h3>
        <regions-chart></regions-chart>
        <!--Bar Chart example-->
      </div>
      <div class="column">
        <h3>مقارنة</h3>
         <compare-chart></compare-chart>
        <!--Reactivity Line Chart example-->
      </div>
    </div>
  </section>
</template>

<script>
import CasesChart from '@/components/CasesChart'
import RegionsChart from '@/components/RegionsChart'
import CurrentStateChart from '@/components/CurrentStateChart'
import CompareChart from '@/components/CompareChart'

export default {
  name: 'VueCharts',
  components: {
    CasesChart,
    RegionsChart,
    CurrentStateChart,
    CompareChart
  }
}
</script>
