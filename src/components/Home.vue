<template>
  <section class="hero is-light is-medium">
  <div class="hero-head">
    <Navigation></Navigation>
    <instant-chart></instant-chart>
    <div class="container has-text-centered">
      <p class="title has-text-info">
        الحالة الوبائية بالمغرب
      </p>
      <p class="subtitle">
      بعض المبيانات التراكمية و اليومية + الخريطة الاقليمية للحالة الوبائية بالمغرب
      </p>
    </div>
    <div class="fb-share-button"
      data-href="https://aitabin.github.io/covid-19-maroc/index.html"
      data-layout="button_count" style="padding-bottom=20px;">
    </div>
  </div>
  <div class="hero-body">
        <div class="columns">
          <div class="column">
            <p class="subtitle">
            مبيان يومي لتطور الحالة الوبائية
            </p>
            <daily-cases></daily-cases>
          </div>
          <div class="column">
            <p class="subtitle">
            مبيان تراكمي لتطور الحالة الوبائية
            </p>
            <comulative-cases></comulative-cases>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <p class="subtitle">
            مبيان تراكمي لنسب الحالات المؤكدة حسب جهات المغرب
            </p>
            <regions-chart></regions-chart>
          </div>
          <div class="column">
            <p class="subtitle">
            مبيان تراكمي لتطور الحالة الوبائية حسب الاشهر
            </p>
            <compare-months></compare-months>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <p class="subtitle">
            مبيان تراكمي لعدد المتعافين, المرضى و المتوفين
            </p>
            <global-overview></global-overview>
          </div>
          <div class="column">
            <p class="subtitle">
             مبيان الحالات المؤكدة اليومية خلال الاسبوعين الماضيين
            </p>
            <last-two-weeks></last-two-weeks>
          </div>
        </div>
        <div class="columns">
         <div class="column">
            <p class="subtitle">
              الحالة الوبائية حسب الحالات التي تتلقى العلاج -بعض الارقام قد تبدو غير دقيقة نظرا لشح المعطيات-
            </p>
                <province-map></province-map>
          </div>
          <div class="column">
            <p class="subtitle">
              مستجدات الحالة الوبائية بجماعات اقليم سيدي افني حسب المرضى الذين يتلقون العلاج
            </p>
                <commune-map></commune-map>
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
  <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Ingissa</strong> by <a href="#">Aitabin</a>. The source code is licensed
      <a href="#">BSD 2-Clause License</a>. The application content
      is licensed <a href="#"></a>.
    </p>
  </div>
</footer>
</section>
</template>

<script>
import Navigation from '@/components/Navigation'
import RegionsChart from '@/components/RegionsChart'
import GlobalOverview from '@/components/GlobalOverview'
import CompareMonths from '@/components/CompareMonths'
import DailyCases from '@/components/DailyCases'
import ComulativeCases from '@/components/ComulativeCases'
import GlobalRates from '@/components/GlobalRates'
import LastTwoWeeks from '@/components/LastTwoWeeks'
import CommuneMap from '@/components/CommuneMap'
import ProvinceMap from '@/components/ProvinceMap'
import RegionMap from '@/components/RegionMap'
export default {
  name: 'Home',
  components: {
    Navigation,
    DailyCases,
    ComulativeCases,
    RegionsChart,
    GlobalOverview,
    CompareMonths,
    GlobalRates,
    LastTwoWeeks,
    CommuneMap,
    ProvinceMap,
    RegionMap
  }
}
</script>
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
  .card-equal-height {
   display: flex;
   flex-direction: column;
   height: 100%;
}
.card-equal-height .card-footer {
  margin-top: auto;
}
.card{
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border-radius: 0.5rem;
}
.card img{
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
border-radius: 0.5rem;
max-width: 96.5%;
max-height: 96.5%;
margin: 0;
}
</style>
