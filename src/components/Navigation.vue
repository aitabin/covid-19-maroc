<template>
<div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <a class="navbar-item" href="/">
        انغيسا
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item is-active">
          <router-link to="/" exact>الرئيسية</router-link>
          </a>
        </div>
    </div>
  </nav>
</div>
</template>
<script>
$(document).ready(function () {
  $('.navbar-burger').click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    // eslint-disable-next-line no-undef
    $('.navbar-burger').toggleClass('is-active')
    // eslint-disable-next-line no-undef
    $('.navbar-menu').toggleClass('is-active')
  })
})
</script>>
