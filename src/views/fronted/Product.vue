<template>
    <Navbar/>
    <pulse-loader :loading="loading" :color="color"></pulse-loader>
    <section class="py-4">
      <div class="container-m">
        <div class="row mb-6" v-if="product">
          <div class="col-md-6 mb-4 mb-md-0">
            <img class="products-bg mb-3" :src="selectImg" v-if="selectImg">
            <img class="products-bg mb-3" :src="product.imageUrl" v-else>
            <div class="row">
              <div class="col-3">
                <img class="min-img" :src="product.imageUrl"
                @click="selectImg = product.imageUrl">
              </div>
              <div class="col-3" v-for="(img, key) in product.imagesUrl" :key="key">
                <img class="min-img" :src="img"
                @click="selectImg = img">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <p class="text-grizzle mb-2">{{ product.category }}</p>
            <h2 class="card-text mb-4 fw-bold font-md-xl">{{ product.title }}</h2>
            <h3 class="text-grizzle font-md-m mb-2">產品描述</h3>
            <p class="mb-4">{{product.description}}</p>
            <h3 class="text-grizzle font-m mb-2">產品說明</h3>
            <p class="mb-4">{{product.content}}</p>
            <h3 class="text-grizzle font-md-m mb-2">選取尺寸</h3>
            <div class="row gx-2 gy-2 mb-4">
                <div class="col-md-4 col-lg-3" v-for="(size) in product.variable" :key="size.size">
                  <button class="btn btn-outline-primary w-100"
                  @click="selectSize(size)"
                  :class="{'active': tempSelect.size == size.size}">
                    {{size.size}}
                  </button>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <del class="font-m">NT${{ product.origin_price }}</del>
              <p class="font-md fw-bold">NT${{ product.price }}</p>
            </div>
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="select-qty mb-4">
                <button  type="button"
                @click="productQty = (productQty - 1)"
                :disabled="productQty === 1">
                    <span class="material-icons">
                    remove
                    </span>
                </button>
                <input type="number" :value="productQty"
                onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')">
                <button type="button" @click="productQty = (productQty + 1)">
                    <span class="material-icons">
                    add
                    </span>
                </button>
            </div>
              </div>
            </div>
            <div class="row gy-3 gy-md-0">
              <div class="col-md-6">
                <button type="button" class="btn btn-outline-primary w-100 rounded-0"
                :disabled="tempSelect.size === ''"
                @click="addCart(product.id, productQty)">
                  加入購物車
                </button>
              </div>
              <div class="col-md-6">
                <button type="button" class="btn btn-secondary text-white w-100 rounded-0"
                :disabled="tempSelect.size === ''"
                @click="goCart"
                >
                  立即購買
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <h2 class="text-center font-md-xl fw-bold pb-4 pt-2">相關商品</h2>
      </div>
    </section>
    <Footer/>
    <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import PulseLoader from '@/components/PulseLoader.vue';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default {
  data() {
    return {
      products: [],
      product: {},
      cart: {},
      loading: false,
      color: '#9DBEC7',
      selectImg: '',
      productQty: 1,
      tempSelect: {
        size: '',
      },
      randomProducts: [],
    };
  },
  components: {
    Navbar,
    Footer,
    PulseLoader,
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.getLookAlike();
          } else {
            // eslint-disable-next-line no-alert
            alert(res.data.success);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProduct() {
      const { id } = this.$route.params;
      this.randomProducts = [];
      this.loading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.product = res.data.product;
          this.loading = false;
          this.getProducts();
          window.scrollTo({
            top: 0,
            behavior: 'instant',
          });
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
          this.loading = false;
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    getCart() {
      this.loading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.cart = res.data.data;
          this.loading = false;
          console.log(res.data);
        }
      }).catch((error) => {
        console.log(error);
      });
    },
    goProduct(id) {
      this.$router.push(`/product/${id}`);
      this.getProduct();
    },
    selectSize(size) {
      this.tempSelect = { ...size };
    },
    addCart(id, qty) {
      this.loading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
        size: this.tempSelect,
      };
      this.$http.post(api, { data: cart }).then((res) => {
        if (res.data.success) {
          this.loading = false;
          this.tempSelect = {};
          this.getCart();
          this.$swal.fire(
            {
              position: 'top',
              icon: 'success',
              title: '已加入購物車',
              showConfirmButton: false,
              timer: 1000,
            },
          );
        } else {
          this.$swal.fire(
            {
              position: 'top-end',
              icon: 'error',
              title: '商品已在購物車',
              showConfirmButton: false,
              timer: 1000,
            },
          );
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    IntoCart(id, qty) {
      this.loading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
        size: this.tempSelect,
      };
      this.$http.post(api, { data: cart }).then((res) => {
        if (res.data.success) {
          this.loading = false;
          this.tempSelect = {};
          this.getCart();
        } else {
          this.$swal.fire(
            {
              position: 'top-end',
              icon: 'error',
              title: '商品已在購物車',
              showConfirmButton: false,
              timer: 1000,
            },
          );
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    getLookAlike() {
      const { category } = this.product;
      const filterProducts = this.products.filter((item) => item.category === category);
      const maxSize = filterProducts.length < 4 ? filterProducts.length : 4;
      const arrSet = new Set([]);
      getRandomInt();
      for (let index = 0; arrSet.size < maxSize; index + 1) {
        const num = getRandomInt(filterProducts.length);
        arrSet.add(num);
      }
      arrSet.forEach((i) => {
        this.randomProducts.push(filterProducts[i]);
      });
    },
    goCart() {
      this.IntoCart(this.product.id, this.productQty);
      setTimeout(() => {
        this.$router.push('/cart');
      }, 1000);
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
