<template>
  <div id="app">
    <Nav/>
    <div class='container main_container'>
      <div class="row">
        <div class="col-lg-12">
        <router-view></router-view>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/Nav';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>

.main_container {
  height: 38rem;
}

/* Attractive style for form input. Keeping as global */
input[type=text] {
    border: 0;
    outline: 0;
    border-bottom: 1px solid #ccc;
    border-radius: 0px;
}
</style>
