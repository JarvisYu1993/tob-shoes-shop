<template>
    <header class="sticky-top">
     <nav class="header-nav bg-primary d-block d-md-none">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
          <router-link to="/" class="logo-wrap"><h1>TOB</h1></router-link>
          <ul class="d-flex align-items-center">
            <li>
              <router-link to="/cart" class="p-3">
                <i class="fas fa-shopping-cart font-md text-white"></i>
                <span class="position-absolute top-20 start-90 translate-middle
                  badge rounded-pill bg-danger" v-if="num >= 1">
                  {{ num }}</span>
              </router-link>
            </li>
            <li class="ham-btn" :class="{'active': mobileBtn}"
            @click="mobileBtn = !mobileBtn">
              <i class="fas fa-align-justify font-md"></i>
            </li>
          </ul>
      </div>
      <ul class="mobile-menu" :class="{ active: mobileBtn }">
          <li>
            <router-link
              @click="mobileBtn = false"
              class="mobile-link"
              to="/"
            >
              首頁
            </router-link>
          </li>
          <li @click="mobileBtn = false">
            <router-link to="/products/所有鞋款"
              class="mobile-link"
            >
              商品列表
            </router-link>
          </li>
          <li>
            <router-link
              @click="mobileBtn = false"
              class="mobile-link"
              to="/about"
            >
              關於我們
            </router-link>
          </li>
          <li>
            <router-link
              @click="mobileBtn = false"
              class="mobile-link"
              to="/login"
            >
              登入
            </router-link>
          </li>
        </ul>
    </div>
     </nav>
      <div class="bg-dark text-white text-center fw-bold py-3 d-none d-md-block">
        {{ msg }}</div>
      <nav class="header-nav bg-white d-none d-md-block">
        <div class="container">
          <div class="d-flex align-items-center justify-content-between">
            <ul class="header-icon">
              <li>
                <a href="#" class="p-2"><i class="fab fa-facebook font-md"></i></a>
              </li>
              <li>
                <a href="#" class="p-2"><i class="fab fa-instagram font-md"></i></a>
              </li>
              <li>
                <a href="https://github.com/JarvisYu1993" class="p-2">
                  <i class="fab fa-github font-md"></i>
                </a>
              </li>
            </ul>
            <router-link to="/" class="logo-wrap"><h1>TOB</h1></router-link>
            <ul class="header-icon">
              <li class="me-4">
                <router-link to="/cart" class="p-2 position-relative">
                  <i class="fas fa-shopping-cart font-md"></i>
                  <span class="position-absolute top-20 start-90 translate-middle
                    badge rounded-pill bg-danger" v-if="num >= 1">
                    {{ num }}</span>
                </router-link>
              </li>
              <li>
                <router-link to="/login" class="p-2">
                  <i class="fas fa-user font-md"></i>
                </router-link>
              </li>
              <li class="ham-btn" @click.prevent="openMainMenu = !openMainMenu">
                <i class="fas fa-align-justify"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="header-nav bg-primary d-none d-md-block">
        <div class="container-sm">
          <ul class="header-bar">
            <li>
              <router-link to="/" class="text-white p-2 d-block header-link">
                首頁
              </router-link>
            </li>
            <li class="dropdown">
              <router-link  to="/products/所有鞋款"
              class="text-white p-2 d-block header-link">
              商品列表</router-link>
            </li>
            <li>
              <router-link to="/about" class="text-white p-2 d-block header-link"
              >
                關於我們
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
</template>

<script>
import emitter from '@/assets/javascript/emitter';

export default {
  data() {
    return {
      msg: '8/1 - 8/31 結帳時輸入 『 8888 』，即可享八折優惠，時間有限敬請把握。',
      intervalId: null,
      mobileBtn: false,
      cart: {},
      num: 0,
      products: [],
      showProducts: [],
      category: '',
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.cart = res.data.data;
          this.num = this.cart.carts.length;
        }
      }).catch(() => {
        this.$swal.fire(
          {
            position: 'top',
            icon: 'error',
            title: '購物車取得失敗',
            showConfirmButton: false,
            timer: 1000,
          },
        );
      });
    },
    goProducts(products) {
      this.$router.push(`/products/${products}`);
    },
    lang() {
      if (this.intervalId != null) return;
      this.intervalId = setInterval(() => {
        const start = this.msg.substring(0, 1);
        const end = this.msg.substring(1);
        this.msg = end + start;
      }, 300);
    },
  },
  mounted() {
    emitter.on('product-cart', () => this.getCart());
    this.getCart();
    this.lang();
  },
  unmounted() {
    emitter.off('product-cart', () => this.getCart());
  },
};
</script>
