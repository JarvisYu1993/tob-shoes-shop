<template>
<section>
  <swiper :pagination="{ clickable: true }" :autoplay="{ loop: true }">
    <swiper-slide
      v-for="(item, key) in imgs"
      :key="key"
      class="position-relative"
    >
      <img class="object-img" :src="item.img" alt="" />
      <div class="bg-section">
        <h2 class="object-title mb-3 mb-md-4">{{ item.title }}</h2>
        <router-link
          to="/products/所有鞋款"
          class="btn btn-secondary btn-md-lg rounded-0 text-white"
        >
          立即購買</router-link
        >
      </div>
    </swiper-slide>
  </swiper>
</section>
</template>

<script>
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Pagination, Navigation, Autoplay]);
export default {
  data() {
    return {
      imgs: [
        {
          img: 'https://images.unsplash.com/photo-1598136490941-30d885318abd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80',
          title: '運動來自於您冒險的精神',
        },
        {
          img: 'https://images.unsplash.com/photo-1527335937731-455a26f04bb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2842&q=80',
          title: '行前里不如來一雙好鞋',
        },
        {
          img: 'https://images.unsplash.com/photo-1594639581633-6c2d251c7465?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80',
          title: '穿著來自於你的自信',
        },
      ],
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SwiperCore,
    Swiper,
    SwiperSlide,
  },
};
</script>
