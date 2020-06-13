<template>
  <section class="hero is-light is-medium">
  <div class="hero-head">
    <Navigation></Navigation>
    <instant-chart></instant-chart>
    <!--
    <figure class="image is-5by3 is-fullwidth">
      <img class="is-rounded" src="../assets/image.jpg">
    </figure>
    -->
  </div>
  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title has-text-info">
        مبيانات الحالة الوبائية بالمغرب
      </p>
      <p class="subtitle">
      </p>
    </div>
        <div class="columns">
          <div class="column">
            <p class="subtitle">
            مبيان اجمالي لتطور الحالة الوبائية
            </p>
            <daily-chart></daily-chart>
          </div>
          <div class="column">
            <p class="subtitle">
            مبيان يومي لتطور الحالة الوبائية
            </p>
            <daily-bar-chart></daily-bar-chart>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <p class="subtitle">
            مبيان لنسب الحالات المؤكدة بجهات المغرب
            </p>
            <regions-chart></regions-chart>
          </div>
          <div class="column">
            <p class="subtitle">
            مبيان يقارن تطور الحالة الوبائية حسب الاشهر
            </p>
            <compare-chart></compare-chart>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <p class="subtitle">
            مبيان لنسب التعافي, الاصابات و الوفيات
            </p>
            <current-state-chart></current-state-chart>
          </div>
          <div class="column">
            <p class="subtitle">
            الحالة الوبائية لفيروس كورونا باقاليم المغرب
            </p>
            <province-map></province-map>
          </div>
        </div>
       </div>
        <div class="columns">
          <div class="column">
            <p class="subtitle">
            </p>
            <div class="notification is-danger">
            تهيب وزارة الصحة بالمواطنات والمواطنين الالتزام بقواعد النظافة والسلامة الصحية،
             والانخراط في التدابير الاحترازية التي اتخذتها السلطات المغربية بكل مسؤولية
            </div>
          </div>
          <div class="column">
            <p class="subtitle">
            </p>
            <div class="notification is-info">
            <ul>
              <li>الرقم الاقتصادي ألو اليقضة: 47 100 080</li>
              <li>الو 141 للمساعدة الطبية الاستعجالية</li>
            </ul>
            </div>
          </div>
        </div>

  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active">
            <router-link to="/">من نحن؟</router-link>
          </li>
          <li>
            <router-link to="/">وزارة الصحة المغربية</router-link>
          </li>
          <li>
            <router-link to="/">ارقام هامة</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</section>
</template>

<script>
import Navigation from '@/components/Navigation'
import RegionsChart from '@/components/RegionsChart'
import CurrentStateChart from '@/components/CurrentStateChart'
import CompareChart from '@/components/CompareChart'
import DailyChart from '@/components/DailyChart'
import DailyBarChart from '@/components/DailyBarChart'
import InstantChart from '@/components/InstantChart'
import CasesChart from '@/components/CasesChart'
import ProvinceMap from '@/components/ProvinceMap'
import RegionMap from '@/components/RegionMap'
export default {
  name: 'Home',
  components: {
    Navigation,
    DailyChart,
    DailyBarChart,
    RegionsChart,
    CurrentStateChart,
    CompareChart,
    InstantChart,
    CasesChart,
    ProvinceMap,
    RegionMap
  }
}
$(document).ready(function () {
  // Check for click events on the navbar burger icon
  // eslint-disable-next-line no-undef
  $('.navbar-burger').click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    // eslint-disable-next-line no-undef
    $('.navbar-burger').toggleClass('is-active')
    // eslint-disable-next-line no-undef
    $('.navbar-menu').toggleClass('is-active')
  })
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
    text-decoration: underline;
  }
</style>
