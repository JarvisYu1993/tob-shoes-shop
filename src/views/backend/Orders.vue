<template>
  <div class="container pt-4">
    <pulse-loader :loading="loading" :color="color"></pulse-loader>
    <table class="table mt-4 border-top table-hover">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, key) in orders" :key="`order${key}`">
          <tr class="border-top" v-if="orders.length" :class="{ 'text-grizzle': !item.is_paid }">
            <td>{{ $date(item.create_at) }}</td>
            <td>
              <span>{{ item.user.email }}</span>
            </td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ item.total }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :id="`paidSwitch${item.id}`"
                  v-model="item.is_paid"
                  @change="updatePaid(item)"
                />
                <label class="form-check-label" :for="`paidSwitch${item.id}`">
                  <span v-if="item.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>
              <a
                href="#"
                class="editBtn me-2"
                @click.prevent="openOrderModal(item)"
                ><span class="material-icons">edit</span></a
              >
              <a
                href="#"
                class="deleteBtn"
                @click.prevent="openDelOrderModal(item)"
                ><span class="material-icons">delete</span></a
              >
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <pagination :page="pagination" @get-product="getOrders"></pagination>
    <orderModal
      ref="orderModal"
      :order="tempOrder"
      @update-paid="updatePaid"
    ></orderModal>
    <delOrder ref="delOrder" :product="tempOrder" @delete="delOrder"></delOrder>
  </div>
</template>

<script>
import pagination from '@/components/Pagination.vue';
import orderModal from '@/components/OrderModal.vue';
import delOrder from '@/components/DelModal.vue';

export default {
  name: 'Orders',
  data() {
    return {
      loading: false,
      color: '#9DBEC7',
      orders: {},
      isNew: false,
      pagination: {},
      tempOrder: {},
    };
  },
  components: {
    pagination,
    orderModal,
    delOrder,
  },
  methods: {
    getOrders(page = 1) {
      this.loading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http
        .get(url)
        .then((response) => {
          if (response.data.success) {
            this.loading = false;
            this.orders = response.data.orders;
            this.pagination = response.data.pagination;
          } else {
            this.loading = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openOrderModal(item) {
      this.tempOrder = { ...item };
      this.isNew = false;
      this.$refs.orderModal.openModal();
    },
    openDelOrderModal(item) {
      this.tempOrder = { ...item };
      this.$refs.delOrder.openModal();
    },
    updatePaid(item) {
      this.loading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid,
      };
      this.$http
        .put(url, { data: paid })
        .then((response) => {
          if (response.data.success) {
            this.loading = false;
            this.$refs.orderModal.hideModal();
            this.getOrders();
          } else {
            this.loading = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    delOrder() {
      this.loading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.$http
        .delete(url)
        .then((response) => {
          if (response.data.success) {
            this.loading = false;
            this.getOrders();
            this.$refs.delOrder.hideModal();
          } else {
            this.loading = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
