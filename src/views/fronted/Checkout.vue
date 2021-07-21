<template>
  <Navbar/>
    <pulse-loader :loading="loading" :color="color"></pulse-loader>
    <div class="container-m py-4 py-md-6">
      <div class="row">
        <div class="col-md-7 order-2 order-md-1">
          <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
            <h3 class="font-md fw-bold">
            結帳資訊</h3>
            <router-link to="/products/所有鞋類"
            class="btn btn-outline-primary btn-sm rounded-pill go-product px-3 d-none d-md-flex">
              <span class="material-icons">
              chevron_left
              </span>繼續購物
            </router-link>
          </div>
          <Form ref="form" v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3 d-flex flex-column align-items-start">
            <label for="email" class="form-label fw-bold">
                <span class="text-danger">*</span>
                Email
            </label>
            <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
            ></Field>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3 d-flex flex-column align-items-start">
            <label for="name" class="form-label fw-bold">
                <span class="text-danger">*</span>
                收件人姓名
            </label>
            <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
            ></Field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3 d-flex flex-column align-items-start">
            <label for="tel" class="form-label fw-bold">
                <span class="text-danger">*</span>
                收件人電話
            </label>
            <Field
            id="tel"
            name="電話"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            rules="required"
            v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3 d-flex flex-column align-items-start">
            <label for="address" class="form-label fw-bold">
                <span class="text-danger">*</span>
                收件人地址
            </label>
            <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
            ></Field>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3 d-flex flex-column align-items-start">
            <label for="payment" class="form-label fw-bold">
                <span class="text-danger">*</span>
                付款方式
            </label>
            <Field
            id="payment"
            name="付款方式"
            as="select"
            class="form-control"
            :class="{ 'is-invalid': errors['付款方式'] }"
            rules="required"
            v-model="form.user.payment"
            >
            <option disabled>請選擇付款方式</option>
            <option value="ATM轉帳">ATM轉帳</option>
            <option value="信用卡">信用卡</option>
            <option value="現金付款">現金付款</option>
            <option value="ApplePay">ApplePay</option>
            <option value="SamsuangPay">SamsuangPay</option>
            <option value="GooglePay">GooglePay</option>
            <option value="LinePay">LinePay</option>
            </Field>
            <ErrorMessage name="付款方式" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3 d-flex flex-column align-items-start">
            <label for="message" class="form-label fw-bold">留言</label>
            <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
            ></textarea>
        </div>
        <div class="d-flex align-items-center justify-content-between">
            <router-link to="/cart" class="btn btn-outline-primary">返回購物車</router-link>
            <button class="btn btn-danger" :disabled="!isErrors">送出訂單</button>
        </div>
          </Form>
        </div>
        <div class="col-md-5 order-1 order-md-2 mb-4 mb-md-0">
            <div class="border p-4">
                <h3 class="fw-bold font-md border-bottom pb-3 mb-3">訂單明細</h3>
              <div class="d-flex align-items-center justify-content-between mb-2"
              v-for="item in cart.carts" :key="item.id">
              <div class="d-flex align-items-center mb-2">
                 <img class="order-img" :src="item.product.imageUrl"
                :alt="item.product.title">
                <div class="p-2">
                  <h4 class="fw-bold">{{item.product.title}}</h4>
                  <h5 class="font-s d-flex align-items-center">{{item.size.size}}
                    <span class="ms-1">x{{item.qty}}</span>
                  </h5>
                  <h5 class="font-s">{{item.product.content}}</h5>
                </div>
              </div>
                <p>NT${{$toCurrency(item.product.price)}}</p>
              </div>
              <p class="text-end mb-2 d-flex justify-content-between align-items-center mb-2">
                小計：
                <span>NT${{cart.total}}</span>
              </p>
              <p class="text-end mb-2 d-flex justify-content-between align-items-center">
                折扣：
                <span>NT${{ $toCurrency(Math.round(cart.final_total - cart.total)) }}</span>
              </p>
              <div class="d-flex align-items-center justify-content-between
              border-top pt-3">
                <span class="font-md-md fw-bold">總金額：</span>
                <span class="font-md-md fw-bold">
                    NT${{ $toCurrency(Math.round(cart.final_total)) }}
                </span>
              </div>
            </div>
        </div>
      </div>
    </div>
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
      id: '',
      cart: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          payment: 'ATM轉帳',
        },
        message: '',
      },
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
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.cart = res.data.data;
          this.loading = false;
        }
      }).catch((error) => {
        console.log(error);
      });
    },
    createOrder() {
      if (this.cart.carts.length > 0) {
        const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
        const order = this.form;
        this.$http
          .post(api, { data: order })
          .then((res) => {
            if (res.data.success) {
              this.$refs.form.resetForm();
              this.id = res.data.orderId;
              this.$swal.fire(
                {
                  position: 'top',
                  icon: 'success',
                  title: res.data.message,
                  showConfirmButton: false,
                  timer: 1000,
                },
              );
              this.$router.push(`/order/${this.id}`);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  computed: {
    isErrors() {
      return this.form.user.name && this.form.user.email && this.form.user.tel
      && this.form.user.address && this.form.user.payment;
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
