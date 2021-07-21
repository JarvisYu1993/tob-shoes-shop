<template>
  <Navbar @get-products="getProducts"/>
  <pulse-loader :loading="loading" :color="color"></pulse-loader>
  <!-- 主圖 -->
  <div class="position-relative">
    <img
      class="products-bg"
      v-if="category === '所有鞋款'"
      src="https://images.unsplash.com/photo-1528669697102-a6edb9b6a282?ixid=MnwxMj
  A3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      alt="所有鞋款"
    >
    <img
      class="products-bg"
      v-if="category === '精選鞋款'"
      src="https://images.unsplash.com/photo-1562183241-840b8af0721e?ixid=MnwxMj
      A3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80"
      alt="精選鞋款"
    >
    <img
      class="products-bg"
      v-if="category === '籃球鞋'"
      src="https://images.unsplash.com/photo-1617032870223-739a0362a2ec?ixid=MnwxMjA3fDB8MHxwa
      G90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
      alt="籃球鞋"
    >
    <img
      class="products-bg"
      v-if="category === '跑步鞋'"
      src="https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?ixid=MnwxMjA3fDB8MHxwa
      G90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1255&q=80"
      alt="跑步鞋"
    >
    <img
      class="products-bg"
      v-if="category === '休閒鞋'"
      src="https://images.unsplash.com/photo-1510163252415-9bc2892641a2?ixid=MnwxMjA3fDB8MHxwa
      G90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      alt="休閒鞋"
    >
    <div class="products-mask d-flex align-items-center justify-content-center">
      <h2 class="font-xl text-white fw-bold">{{category}}</h2>
    </div>
  </div>
  <!-- 篩選bar -->
  <div class="container">
    <div class="option-bar">
      <ul class="products-header-category my-3 my-md-4">
        <li class="border-end" @click="getProducts()">
          <router-link to="/products/所有鞋款" class="px-3 px-md-5 px-lg-6 py-1 font-m">
          所有鞋款 </router-link>
        </li>
        <li class="border-end" @click="getProducts()">
          <router-link to="/products/精選鞋款" class="px-3 px-md-5 px-lg-6 py-1 font-m">
          精選鞋款 </router-link>
        </li>
        <li class="border-end">
          <span class="px-3 px-md-5 px-lg-6 py-1 font-m text-primary">
          鞋款分類
          </span>
          <ul>
              <li @click="getProducts()">
                <router-link to="/products/籃球鞋" class="dropdown-item">
                籃球鞋
                </router-link>
              </li>
              <li @click="getProducts()">
                <router-link to="/products/跑步鞋" class="dropdown-item">
                跑步鞋
                </router-link>
              </li>
              <li @click="getProducts()">
                <router-link to="/products/休閒鞋" class="dropdown-item">
                休閒鞋
                </router-link>
              </li>
          </ul>
        </li>
        <li >
          <span class="px-3 px-md-5 px-lg-6 py-1 font-m text-primary">
          價格篩選
          </span>
          <ul>
              <li @click.prevent="filterPrice(), sortData = 'highToLow'">
                <a href="#" class="dropdown-item">
                價格從高到低
                </a>
              </li>
              <li @click.prevent="filterPrice(), sortData = 'lowToHight'">
                <a href="#" class="dropdown-item">
                價格從低到高
                </a>
              </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <!-- 商品列表 -->
  <div class="py-2 py-md-4">
    <div class="container">
      <div class="row gy-4 mb-6">
        <ul class="col-md-4 col-lg-3" v-for="item in showProducts" :key="item.id">
          <li class="card">
            <router-link :to="`/product/${item.id}`">
              <div
                class="card-img-top"
                :style="`background-image: url(${item.imageUrl})`"
              >
                <div class="mask">
                  <div class="caption">查看商品</div>
                </div>
              </div>
              <div class="card-body">
                <span class="text-grizzle">{{ item.category }}</span>
                <h4 class="card-text my-2 fw-bold font-m">{{ item.title }}</h4>
                <del>NT${{ $toCurrency(item.origin_price) }}</del>
                <p class="font-m mt-2 fw-bold">NT${{ $toCurrency(item.price) }}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Footer/>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {
      loading: false,
      color: '#9DBEC7',
      products: [],
      pagination: {},
      category: '',
      showProducts: [],
      sortData: '',
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    getProducts() {
      // eslint-disable-next-line prefer-destructuring
      const category = this.$route.params.category;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.loading = true;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            setTimeout(() => {
              this.showProducts = [];
              this.loading = false;
              this.products = res.data.products;
              if (category === '籃球鞋') {
                this.showProducts = this.products.filter((product) => {
                  this.category = '籃球鞋';
                  return product.category === '籃球鞋';
                });
              } else if (category === '跑步鞋') {
                this.showProducts = this.products.filter((product) => {
                  this.category = '跑步鞋';
                  return product.category === '跑步鞋';
                });
              } else if (category === '休閒鞋') {
                this.showProducts = this.products.filter((product) => {
                  this.category = '休閒鞋';
                  return product.category === '休閒鞋';
                });
              } else if (category === '精選鞋款') {
                this.showProducts = this.products.filter((product) => {
                  this.category = '精選鞋款';
                  return product.price < 4000;
                });
              } else {
                this.showProducts = this.products;
                this.category = '所有鞋款';
              }
              window.scrollTo({
                top: 0,
                behavior: 'instant',
              });
            }, 700);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    filterPrice() {
      this.showProducts.sort((a, b) => {
        if (this.sortData === 'highToLow') {
          return a.price - b.price;
        // eslint-disable-next-line no-else-return
        } else {
          return b.price - a.price;
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
