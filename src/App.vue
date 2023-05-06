<template>
    <Header></Header>
    <section id="section">
      <div id="cen">
      <router-view></router-view>
      </div>
    </section>
    <Footer></Footer>
</template>

<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}



</script>

<style>
@import "./assets/css/common.css";

</style>
