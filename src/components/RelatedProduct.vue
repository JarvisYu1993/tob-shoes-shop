<template>
    <ul class="row">
        <li class="col-md-4 col-lg-3" v-for="item in randomProducts" :key="item.id">
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
</template>

<script>
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
    products: {
      type: Array,
    },
  },
  methods: {
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
  },
};
</script>