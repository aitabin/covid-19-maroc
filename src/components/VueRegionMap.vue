/* eslint-disable no-undef */
<template>
  <section class="hero is-light is-medium">
    <div class="hero-head">
  <Navigation></Navigation>
    </div>
    <div class="columns">
      <div class="column">
        <h3>الحالة الوبائية لفيروس كورونا بجهات المغرب</h3>
        <region-map></region-map>
      </div>
    </div>
  </section>
</template>

<script>
import Navigation from '@/components/Navigation'
import RegionMap from '@/components/RegionMap'

export default {
  name: 'VueRegionMap',
  components: {
    Navigation,
    RegionMap
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
