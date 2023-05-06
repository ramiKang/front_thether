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

*{
  box-sizing: border-box;
}

#section{
  margin-top: 80px;
  width: 100%;
  height: auto;
}

#cen{
  width: 980px;
  max-width: 980px;
  margin: 0 auto;
  height: 100%;
  background-color: red;
}
#app{
  width: 100%;
  height: 100%;
}
</style>
