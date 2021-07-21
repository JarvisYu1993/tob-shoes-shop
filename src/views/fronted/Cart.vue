<template>
  <Navbar/>
    <pulse-loader :loading="loading" :color="color"></pulse-loader>
    <section class="bg-light py-4 py-md-10">
      <div class="container p-6 bg-white" v-if="num > 0">
        <div class="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
          <h3 class="font-md fw-bold text-center">購物車品項</h3>
            <router-link to="/products/所有鞋類"
            class="btn btn-outline-primary btn-sm rounded-pill go-product px-3 d-none d-md-flex">
              <span class="material-icons">
              chevron_left
              </span>繼續購物
            </router-link>
        </div>
        <table class="table table-hover d-none d-md-table">
        <tbody>
            <tr v-for="item in cart.carts" :key="item.id"
            class="text-center">
                <td class="align-middle text-start" width="50%">
                  <div class="d-flex align-items-center">
                    <router-link :to="`/product/${item.product.id}`">
                      <img class="table-img me-4" :src="item.product.imageUrl"
                      :alt="item.product.title">
                    </router-link>
                     <div class="d-flex flex-column align-items-start">
                    <h4 class="font-lg-m mb-1">{{item.product.title}}</h4>
                    <h5 class="font-lg-normal mb-1">尺寸：{{item.size.size}}</h5>
                    <h5 class="font-lg-normal">{{item.product.content}}</h5>
                  </div>
                  </div>
                </td>
                <td class="align-middle" width="30%">
                    <div class="input-group">
                    <input
                        v-model.number="item.qty"
                        @blur="updateCart(item)"
                        min="1"
                        type="number"
                        class="form-control"
                    >
                    <span class="input-group-text">{{
                        item.product.unit
                    }}</span>
                    </div>
                </td>
                <td class="font-lg-m align-middle" width="10%">NT${{ $toCurrency(item.total) }}</td>
                <td width="10%" class="align-middle">
                <a
                href="#"
                class="material-icons del-icon font-xl rounded-pill"
                @click.prevent="delCartItem(item.id)"
                >
                delete
                </a>
                </td>
            </tr>
            </tbody>
        </table>
        <div class="d-block d-md-none mb-4" v-for="item in cart.carts" :key="item.id">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="d-flex align-items-center">
              <router-link :to="`/product/${item.product.id}`">
                <img class="table-img me-3" :src="item.product.imageUrl"
                :alt="item.product.title">
              </router-link>
              <div class="d-flex flex-column align-items-start">
                <h4 class="font-lg-m mb-1">{{item.product.title}}</h4>
                <h5 class="font-lg-normal mb-1">尺寸：{{item.size.size}}</h5>
                <h5 class="font-lg-normal">{{item.product.content}}</h5>
              </div>
            </div>
            <p class="">NT${{ $toCurrency(item.total) }}</p>
          </div>
          <div class="row justify-content-between align-items-center">
            <div class="col-6">
              <div class="input-group">
                <input
                    v-model.number="item.qty"
                    @blur="updateCart(item)"
                    min="1"
                    type="number"
                    class="form-control"
                >
                <span class="input-group-text">{{
                    item.product.unit
                }}</span>
              </div>
            </div>
            <div class="col-6 d-flex justify-content-end">
              <a
                href="#"
                class="material-icons del-icon font-xl rounded-pill"
                @click.prevent="delCartItem(item.id)"
            >
            delete
            </a>
            </div>
          </div>
        </div>
        <div class="row justify-content-end">
        <div class="col-md-6 col-lg-3">
          <div class="input-group mb-3">
            <input
            min="1"
            type="text"
            class="form-control"
            placeholder="輸入優惠券代碼"
            v-model="coupon_code"
            >
            <button type="button" class="btn btn-danger" id="basic-addon2"
            @click="addCouponCode">
            確認
            </button>
          </div>
        </div>
        </div>
        <div class="border-top pt-2" v-if="cart.final_total != cart.total">
            <p class="text-end mb-2">小計： <span>NT${{$toCurrency(cart.total)}}</span></p>
            <p class="text-end">折扣：<span>NT$
              {{ $toCurrency(Math.round(cart.final_total - cart.total)) }}</span>
            </p>
            <div class="d-flex align-items-center justify-content-end mb-4
            border-bottom py-3">
            <span class="font-md fw-bold">總金額：</span>
            <span class="font-md fw-bold">NT${{ $toCurrency(Math.round(cart.final_total)) }}</span>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-between mb-4
        border-top border-bottom py-3" v-else>
        <span class="font-md fw-bold">總金額：</span>
        <span class="font-md fw-bold">NT${{ $toCurrency(Math.round(cart.final_total))}}</span>
        </div>
        <div class="d-flex justify-content-between justify-content-md-end">
            <router-link to="/products/所有鞋類"
            class="btn btn-outline-primary go-product d-md-none">
              <span class="material-icons">
              chevron_left
              </span>繼續購物
            </router-link>
            <button class="btn btn-outline-secondary"
            @click="goCheckout">
            前往付款資料
            </button>
        </div>
    </div>
    <div class="container py-6" v-else>
      <div class="row">
        <div class="col d-flex flex-column align-items-center">
        <img class="cart-img" src="@/assets/img/cart.jpg" alt="cart">
        <h4 class="font-md my-4 fw-bold">購物車無商品，繼續逛逛吧</h4>
        <div class="d-flex justify-content-center">
            <router-link to="/products/所有鞋類"
            class="btn btn-outline-primary">
            繼續購物
            </router-link>
        </div>
        </div>
      </div>
    </div>
    </section>
  <Footer/>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import PulseLoader from '@/components/PulseLoader.vue';

export default {
  name: 'Cart',
  data() {
    return {
      loading: false,
      color: '#9DBEC7',
      cart: {},
      num: 0,
      coupon_code: '',
    };
  },
  components: {
    Navbar,
    Footer,
    PulseLoader,
  },
  methods: {
    getCart() {
      this.loading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.cart = res.data.data;
          this.num = this.cart.carts.length;
          this.loading = false;
        }
      }).catch((error) => {
        console.log(error);
      });
    },
    updateCart(item) {
      this.loading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http
        .put(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.loading = false;
            this.getCart();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    delCartItem(id) {
      this.loading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            this.loading = false;
            this.getCart();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.loading = true;
      this.$http.post(api, { data: coupon }).then((res) => {
        if (res.data.success) {
          this.getCart();
          console.log(res.data);
          this.loading = false;
          this.$swal.fire(
            {
              position: 'top',
              icon: 'success',
              title: res.data.message,
              showConfirmButton: false,
              timer: 1000,
            },
          );
        } else {
          this.$swal.fire(
            {
              position: 'top',
              icon: 'error',
              title: res.data.message,
              showConfirmButton: false,
              timer: 1000,
            },
          );
        }
      });
    },
    goCheckout() {
      this.$router.push('/checkout');
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
