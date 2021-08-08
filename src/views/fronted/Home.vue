<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from '@/components/fronted/Navbar.vue';
import Footer from '@/components/fronted/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
  },
};
</script>
