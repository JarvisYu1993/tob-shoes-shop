<template>
  <Navbar/>
    <pulse-loader :loading="loading" :color="color"></pulse-loader>
  <!-- 輪播 -->
  <Swiper/>
  <!-- 精選商品 -->
  <section class="py-4">
    <div class="container">
      <h3 class="font-md-l fw-bold mb-4">精選鞋款</h3>
      <div class="row gy-4">
        <ul class="col-md-4 col-lg-3" v-for="item in showProducts" :key="item.id">
          <li class="card">
            <router-link :to="`/product/${item.id}`">
              <div class="card-img-top"
                :style="`background-image: url(${item.imageUrl})`">
                <div class="mask">
                  <div class="caption">查看商品</div>
                </div>
              </div>
              <div class="card-body">
                <span class="text-grizzle">{{item.category}}</span>
                <h4 class="card-text my-2 fw-bold font-m">{{item.title}}</h4>
                <del>NT${{$toCurrency(item.origin_price)}}</del>
                <p class="font-m mt-2 fw-bold">NT${{$toCurrency(item.price)}}</p>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="d-flex justify-content-center">
          <router-link to="/products/精選鞋款" class="btn btn-outline-primary rounded-0">
            查看更多
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <!-- 類別 -->
  <section class="pt-4 pb-8">
    <div class="bg-grayLight mb-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 d-flex justify-content-center order-2 order-md-1">
            <div class="d-flex flex-column py-3 py-md-0 px-4 px-md-6">
              <h4 class="font-md-l fw-bold mb-3">跑步鞋</h4>
              <p class="mb-4">在跑步的過程中，軟硬適中的鞋底，對於使用者的
                腳底能減少更大的負擔。
              </p>
              <router-link to="/products/跑步鞋" class="check-product fw-bold">查看更多
                <span class="material-icons font-xxl ms-2">
                  trending_flat
                </span>
              </router-link>
            </div>
          </div>
          <div class="col-md-6 intro-bg intro-running order-1 order-md-2">
          </div>
        </div>
      </div>
    </div>
    <div class="bg-grayLight mb-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 intro-bg intro-basketball">
          </div>
          <div class="col-md-6 d-flex justify-content-center">
            <div class="d-flex flex-column py-3 py-md-0 px-4 px-md-6">
              <h4 class="font-md-l fw-bold mb-3">籃球鞋</h4>
              <p class="mb-4">兼具彈性與避震的鞋底，對於熱愛籃球的使用者，提供全方位的柔軟舒適腳感。
              </p>
              <router-link to="/products/籃球鞋" class="check-product fw-bold">
                查看更多
                <span class="material-icons font-xxl ms-2">
                  trending_flat
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-grayLight">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 d-flex justify-content-center order-2 order-md-1">
            <div class="d-flex flex-column py-3 py-md-0 px-4 px-md-6">
              <h4 class="font-md-l fw-bold mb-3">休閒鞋</h4>
              <p class="mb-4">在都市叢林中脫穎而出，隨性好穿搭，提供全天候的舒適感及時尚的焦點。
              </p>
              <router-link to="/products/休閒鞋" class="check-product fw-bold">查看更多
                <span class="material-icons font-xxl ms-2">
                  trending_flat
                </span>
              </router-link>
            </div>
          </div>
          <div class="col-md-6 intro-bg intro-fashion order-1 order-md-2">
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  <router-view/>
</template>

<script>
import Swiper from '@/components/Swiper.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  data() {
    return {
      loading: false,
      color: '#9DBEC7',
      products: [],
      showProducts: [],
      router: '',
    };
  },
  components: {
    Swiper,
    Navbar,
    Footer,
  },
  methods: {
    getProducts() {
      // eslint-disable-next-line prefer-destructuring
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
              this.showProducts = this.products.filter((product) => {
                this.category = '精選鞋款';
                return product.price < 4000;
              });
              this.showProducts.length = 8;
              window.scrollTo({
                top: 0,
                behavior: 'instant',
              });
            }, 700);
          } else {
            this.$swal.fire(
              {
                position: 'top',
                icon: 'error',
                title: '商品取得失敗',
                showConfirmButton: false,
                timer: 1000,
              },
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
