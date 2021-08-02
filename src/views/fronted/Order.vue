<template>
  <Navbar :num="num"/>
  <section class="py-4 bg-light">
    <div class="container-m">
      <div class="row">
        <div class="col-12">
          <h3 class="font-xl fw-bold text-center border-bottom pb-3 mb-3">
          訂單資訊</h3>
          <div class="bg-white px-4 py-5 mb-4">
            <h4 class="font-md text-primary border-bottom pb-3 mb-4">訂單商品</h4>
            <div class="d-flex align-items-center justify-content-between mb-3
            border-bottom-dashed pb-3"
            v-for="item in order.products" :key="item.id">
              <h5 class="text-primary">{{ item.product.title }}</h5>
              <p class="text-primary">x{{ item.qty }}</p>
            </div>
            <p class="font-m fw-bold text-end text-primary">
              總計：{{ $toCurrency(Math.round(order.total)) }}</p>
          </div>
          <div class="bg-white px-4 py-5 mb-4" v-if="order.user">
            <h4 class="font-md text-primary border-bottom pb-3 mb-4">收件人資訊</h4>
            <div class="d-flex align-items-center justify-content-between mb-3
            border-bottom-dashed pb-3">
              <h5 class="text-primary">姓名:</h5>
              <p class="text-primary">{{ order.user.name }}</p>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3
            border-bottom-dashed pb-3">
              <h5 class="text-primary">電子郵件:</h5>
              <p class="text-primary">{{ order.user.email }}</p>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3
            border-bottom-dashed pb-3">
              <h5 class="text-primary">電話:</h5>
              <p class="text-primary">{{ order.user.tel }}</p>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3
            border-bottom-dashed pb-3">
              <h5 class="text-primary">地址:</h5>
              <p class="text-primary">{{ order.user.address }}</p>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3
            border-bottom-dashed pb-3">
              <h5 class="text-primary">付款狀態:</h5>
              <p class="text-success">
                {{ order.is_paid ? '已付款': '未付款' }}</p>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <router-link to="/products/所有鞋類" class="btn btn-secondary text-white">
            繼續購物</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  <router-view/>
</template>

<script>
import Navbar from '@/components/fronted/Navbar.vue';
import Footer from '@/components/fronted/Footer.vue';

export default {
  name: 'Order',
  data() {
    return {
      order_id: '',
      order: {},
      num: 0,
      cart: {},
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    getOrder(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${id}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.order = res.data.order;
        }
      }).catch(() => {
        this.$swal.fire({
          position: 'top',
          icon: 'error',
          title: '登入失敗',
          showConfirmButton: false,
          timer: 1000,
        });
      });
    },
    getCart() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
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
  },
  created() {
    this.order_id = this.$route.params.id;
    this.getOrder(this.order_id);
    this.getCart();
  },
};
</script>
