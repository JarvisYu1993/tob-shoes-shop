<template>
  <Navbar/>
    <section class="error-bg py-8">
    <div class="container">
      <div class="row justify-content-center py-10">
        <div class="col-8 col-md-5">
          <h2 class="font-lg-4xl text-center text-white fw-bold mb-6 mb-md-8">404</h2>
          <p class="font-md text-center text-white pt-6 pb-4">
            oh~oh 網頁發生錯誤喔
          </p>
          <div class="d-flex justify-content-center">
            <router-link to="/" class="btn btn-secondary text-white">重新回到首頁</router-link>
          </div>
        </div>
      </div>
    </div>
    </section>
  <Footer/>
</template>
<script>
import Navbar from '@/components/fronted/Navbar.vue';
import Footer from '@/components/fronted/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
