<template>
    <Header></Header>
    <section>
      <router-view></router-view>
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
section{
  margin-top: 80px;
}

#app{
  width: 100%;
  height: 100%;
}
</style>
