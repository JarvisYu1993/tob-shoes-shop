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
              :class="{ active: $route.name === '/' }"
            >
              首頁
            </router-link>
          </li>
          <li>
            <a href="#"
              class="mobile-link"
              @click.prevent="openMenu = !openMenu"
            >
              商品列表
            </a>
            <ul class="mobile-dropdown" :class="{'active': openMenu}">
              <li @click="$emit('get-products'), openMenu = false, mobileBtn = false">
                <router-link to="/products/所有鞋款" class="mobile-link">
                所有鞋款
                </router-link >
              </li>
              <li @click="$emit('get-products'), openMenu = false, mobileBtn = false">
                <router-link to="/products/精選鞋款"
                class="mobile-link">
                精選鞋款</router-link>
              </li>
              <li @click="$emit('get-products'), openMenu = false, mobileBtn = false">
                <router-link to="/products/籃球鞋" class="mobile-link">
                籃球鞋
                </router-link>
              </li>
              <li @click="$emit('get-products'), openMenu = false, mobileBtn = false">
                <router-link to="/products/跑步鞋" class="mobile-link">
                跑步鞋
                </router-link>
              </li>
              <li @click="$emit('get-products'), openMenu = false, mobileBtn = false">
                <router-link to="/products/休閒鞋" class="mobile-link">
                休閒鞋
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link
              @click="mobileBtn = false"
              class="mobile-link"
              to="/about"
              :class="{ active: $route.name === 'Intro' }"
            >
              關於我們
            </router-link>
          </li>
          <li>
            <router-link
              @click="mobileBtn = false"
              class="mobile-link"
              to="/login"
              :class="{ active: $route.name === 'Coupon-front' }"
            >
              登入
            </router-link>
          </li>
        </ul>
    </div>
     </nav>
      <div class="bg-dark text-white text-center fw-bold py-3 d-none d-md-block">
        {{msg}}</div>
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
            <li @click="openMenu = false">
              <router-link to="/" class="text-white p-2 d-block header-link">
                首頁
              </router-link>
            </li>
            <li class="dropdown">
              <a href="#" class="text-white p-2 d-block dropdown-toggle header-link"
                @click.prevent="openMenu = !openMenu">
                商品列表</a>
                <ul class="dropdown-content" :class="{'show': openMenu}">
                    <li @click="$emit('get-products'), openMenu = false">
                      <router-link to="/products/所有鞋款" class="dropdown-item">
                      所有鞋款
                      </router-link >
                    </li>
                    <li @click="$emit('get-products'), openMenu = false">
                      <router-link to="/products/精選鞋款"
                      class="dropdown-item">
                      精選鞋款</router-link>
                    </li>
                    <li @click="$emit('get-products'), openMenu = false">
                      <router-link to="/products/籃球鞋" class="dropdown-item">
                      籃球鞋
                      </router-link>
                    </li>
                    <li @click="$emit('get-products'), openMenu = false">
                      <router-link to="/products/跑步鞋" class="dropdown-item">
                      跑步鞋
                      </router-link>
                    </li>
                    <li @click="$emit('get-products'), openMenu = false">
                      <router-link to="/products/休閒鞋" class="dropdown-item">
                      休閒鞋
                      </router-link>
                    </li>
                </ul>
            </li>
            <li @click="openMenu = false">
              <router-link to="/about" class="text-white p-2 d-block header-link">
                關於我們
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <router-view/>
</template>

<script>
export default {
  props: ['router'],
  data() {
    return {
      msg: '7/7 - 7/30 結帳時輸入7777，即可享七折優惠',
      intervalId: null,
      mobileBtn: false,
      openMenu: false,
      cart: {},
      num: 0,
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
      }).catch((error) => {
        console.log(error);
      });
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
  created() {
    this.getCart();
    this.lang();
  },
};
</script>
