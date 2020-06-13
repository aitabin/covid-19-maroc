<template>
  <section class="hero is-light is-medium">
    <div class="hero-head">
  <Navigation></Navigation>
    </div>
    <div class="columns is-desktop">
        <div class="column">
          <p class="subtitle">
          الحالة الوبائية لفيروس كورونا باقاليم المغرب
          </p>
          <province-map></province-map>
        </div>
    </div>
  </section>
</template>

<script>
import Navigation from '@/components/Navigation'
import ProvinceMap from '@/components/ProvinceMap'
// import RegionMap from '@/components/RegionMap'
export default {
  name: 'VueProvinceMap',
  components: {
    Navigation,
    ProvinceMap
    // RegionMap
  }
}
// eslint-disable-next-line no-undef
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
