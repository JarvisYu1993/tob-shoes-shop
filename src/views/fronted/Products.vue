<template>
  <PulseLoader :loading="loading" :color="color"></PulseLoader>
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
        <li class="option-content" @click="getProducts()">
          <router-link to="/products/所有鞋款" class="py-2 py-sm-0 px-3 px-md-5 px-lg-6 font-m">
          所有鞋款 </router-link>
        </li>
        <li class="option-content" @click="getProducts()">
          <router-link to="/products/精選鞋款" class="py-2 py-sm-0 px-3 px-md-5 px-lg-6 font-m">
          精選鞋款 </router-link>
        </li>
        <li class="option-content">
          <span class="py-2 py-sm-0 px-3 px-md-5 px-lg-6 font-m text-primary"
          >
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
          <span class="py-2 py-sm-0 px-3 px-md-5 px-lg-6 font-m text-primary">
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
    <div class="container-m">
      <div class="row gy-4 mb-4 mb-md-6">
        <ul class="col-md-4 col-lg-3" v-for="item in showProducts" :key="item.id">
          <li class="card">
              <div
                class="card-img-top"
                :style="`background-image: url(${ item.imageUrl })`"
              >
                <div class="mask">
                  <router-link :to="`/product/${ item.id }`"
                  class="caption">查看商品</router-link>
                </div>
              </div>
              <div class="card-body">
                <span class="text-grizzle">{{ item.category }}</span>
                <h4 class="card-text my-2 fw-bold font-m">{{ item.title }}</h4>
                <del>NT${{ $toCurrency(item.origin_price) }}</del>
                <p class="font-m mt-2 fw-bold">NT${{ $toCurrency(item.price) }}</p>
              </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<script>
import PulseLoader from '@/components/PulseLoader.vue';
import emitter from '@/assets/javascript/emitter';

export default {
  data() {
    return {
      loading: false,
      color: '#9DBEC7',
      products: [],
      category: '',
      showProducts: [],
      sortData: '',
    };
  },
  components: {
    PulseLoader,
  },
  methods: {
    getProducts() {
      const { category } = this.$route.params;
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
              emitter.emit('get-products');
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
        .catch(() => {
          this.$swal.fire(
            {
              position: 'top',
              icon: 'error',
              title: '商品取得失敗',
              showConfirmButton: false,
              timer: 1000,
            },
          );
          this.loading = false;
        });
    },
    filterPrice() {
      this.showProducts.sort((a, b) => {
        if (this.sortData === 'highToLow') {
          return a.price - b.price;
        }
        return b.price - a.price;
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
