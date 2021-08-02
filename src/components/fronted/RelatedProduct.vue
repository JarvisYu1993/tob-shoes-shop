<template>
  <ul class="row gy-4">
    <li class="col-md-4 col-lg-3" v-for="item in identical" :key="item.id">
      <div class="card">
        <a href="#" @click.prevent="goProduct(item.id)">
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
            <del>NT${{ item.origin_price }}</del>
            <p class="font-m mt-2 fw-bold">NT${{ item.price }}</p>
          </div>
        </a>
      </div>
    </li>
  </ul>
  <router-view />
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      products: [],
    };
  },
  emits: ['get-product'],
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goProduct(id) {
      setTimeout(() => {
        this.$router.push(`/product/${id}`);
      }, 1000);
      this.$emit('get-product');
    },
  },
  computed: {
    identical() {
      return this.products.filter(
        (item, i) => item.id !== this.product.id
        && item.category === this.product.category && i < 4,
      );
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
