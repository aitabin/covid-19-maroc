<template>
<div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        انغيسا
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item is-active">
          <router-link to="/" exact>الرئيسية</router-link>
          </a>
        </div>
        <!--
        <div class="navbar-end">
          <a class="navbar-item">
          <router-link to="/regions" exact>الجهات</router-link>
          </a>
          <a class="navbar-item">
          <router-link to="/provinces" exact>الاقاليم</router-link>
          </a>
      </div>-->
    </div>
  </nav>
</div>
</template>
<script>
$(document).ready(function () {
  $('.navbar-burger').click(function () {
    $('.navbar-burger').toggleClass('is-active')
    $('.navbar-menu').toggleClass('is-active')
  })
})
</script>>
