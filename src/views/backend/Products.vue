<template>
  <div class="container py-4">
    <PulseLoader :loading="loading" :color="color"></PulseLoader>
    <div class="d-flex justify-content-between">
      <h1 class="">商品列表</h1>
      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-secondary text-white me-2" @click="openModal('new')">
          新增商品
        </button>
      </div>
    </div>
    <table class="table mt-4 border-top table-hover">
      <thead>
        <tr>
          <th width="45%">產品</th>
          <th width="10%">類別</th>
          <th width="10%">原價</th>
          <th width="10%">售價</th>
          <th width="10%">啟用</th>
          <th width="15%">編輯/刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td class="d-flex align-items-center">
            <img class="align-middle me-3" :src="item.imageUrl" :alt="item.title"
            style="width:150px; height:150px;">
            <div class="d-flex flex-column">
              <h4>{{ item.title }}</h4>
              <span>{{ item.description }}</span>
            </div>
          </td>
          <td class="align-middle">{{ item.category }}</td>
          <td class="align-middle">
            {{ $toCurrency(item.origin_price) }}
          </td>
          <td class="align-middle">
            {{ $toCurrency(item.price) }}
          </td>
          <td class="align-middle">
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td class="align-middle">
            <a
              href="#"
              class="editBtn me-2"
              @click.prevent="openModal('edit', item)"
              ><span class="material-icons">edit</span></a
            >
            <a
              href="#"
              class="deleteBtn"
              @click.prevent="openModal('delete', item)"
              ><span class="material-icons">delete</span></a
            >
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-between">
      <p class="text-gray">商品總共有{{ products.length }}項</p>
      <pagination :page="pagination" @get-product="getProductList"></pagination>
    </div>
    <product-modal
      ref="productModal"
      :product="tempProduct"
      :is-new="isNew"
      @update-product="updateProduct"
    ></product-modal>
    <delProduct-modal
      ref="delProductModal"
      :delete-item="tempProduct"
      @delete="getProductList"
    ></delProduct-modal>
  </div>
</template>

<script>
import pagination from '@/components/backend/Pagination.vue';
import productModal from '@/components/backend/ProductModal.vue';
import delProductModal from '@/components/backend/DelProductModal.vue';
import PulseLoader from '@/components/PulseLoader.vue';

export default {
  name: 'Products',
  data() {
    return {
      token: '',
      products: [],
      isNew: false,
      tempProduct: {
        imagesUrl: [],
        variable: [],
      },
      pagination: {},
      loading: false,
      color: '#9DBEC7',
    };
  },
  components: {
    pagination,
    productModal,
    delProductModal,
    PulseLoader,
  },
  methods: {
    getProductList(page = 1) {
      this.loading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http
        .get(url)
        .then((response) => {
          if (response.data.success) {
            this.products = response.data.products;
            this.pagination = response.data.pagination;
            this.loading = false;
          }
        })
        .catch(() => {
          this.$swal.fire(
            {
              position: 'top',
              icon: 'error',
              title: '商品列表取得失敗',
              showConfirmButton: false,
              timer: 1000,
            },
          );
          this.loading = false;
        });
    },
    openModal(isNew, product) {
      switch (isNew) {
        case 'new':
          this.isNew = true;
          this.tempProduct = {
            imagesUrl: [],
            variable: [],
          };
          this.$refs.productModal.openModal();
          break;
        case 'edit':
          this.isNew = false;
          this.tempProduct = { ...product };
          this.$refs.productModal.openModal();
          break;
        case 'delete':
          this.isNew = false;
          this.tempProduct = { ...product };
          this.$refs.delProductModal.openModal();
          break;
        default:
          break;
      }
    },
    updateProduct(item) {
      this.tempProduct = item;
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        httpMethod = 'put';
      }
      this.$http[httpMethod](url, { data: this.tempProduct })
        .then((response) => {
          if (response.data.success) {
            this.$refs.productModal.hideModal();
            this.getProductList();
          }
        })
        .catch(() => {
          this.$swal.fire(
            {
              position: 'top',
              icon: 'error',
              title: '商品無法更新',
              showConfirmButton: false,
              timer: 1000,
            },
          );
          this.loading = false;
        });
    },
  },
  mounted() {
    this.token = document.cookie.replace(
      /(?:(?:^|.*;\s*)YuToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    if (this.token === '') {
      this.$router.push('/login');
    }
    this.$http.defaults.headers.common.Authorization = this.token;
  },
  created() {
    this.getProductList();
  },
};
</script>
