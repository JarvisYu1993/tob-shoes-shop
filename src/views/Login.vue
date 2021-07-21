<template>
  <Navbar />
  <pulse-loader :loading="loading" :color="color"></pulse-loader>
  <section class="login-bg py-8">
    <div class="mask">
      <div class="container py-8">
        <div class="row justify-content-center">
          <div class="col-8 col-md-5">
            <div class="d-flex justify-content-center">
              <div class="login-logo mb-4"></div>
            </div>
            <h2 class="font-l mb-4 fw-bold text-center text-white">後台登入</h2>
            <Form v-slot="{ errors }" class="form-signin" @submit="signIn">
              <div class="form-floating mb-3">
                <Field
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email"
                  rules="email|required"
                  v-model="user.username"
                ></Field>
                <ErrorMessage
                  name="email"
                  class="invalid-feedback"
                ></ErrorMessage>
                <label for="username">帳號</label>
              </div>
              <div class="form-floating">
                <Field
                  id="password"
                  name="password"
                  type="password"
                  class="form-control"
                  :class="{ 'is-invalid': errors['password'] }"
                  placeholder="請輸入 Password"
                  rules="required"
                  v-model="user.password"
                ></Field>
                <ErrorMessage
                  name="password"
                  class="invalid-feedback"
                ></ErrorMessage>
                <label for="password">密碼</label>
              </div>
              <button class="btn btn-lg btn-secondary rounded-0 w-100 mt-3 text-white">
                登入
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      loading: false,
      color: '#9DBEC7',
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    signIn() {
      this.loading = true;
      const url = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http
        .post(url, this.user)
        .then((response) => {
          if (response.data.success) {
            const { token, expired } = response.data;
            document.cookie = `YuToken=${token};expires=${new Date(expired)}`;
            this.$router.push('/dashaboard/products');
            this.loading = false;
            this.$swal.fire({
              position: 'top',
              icon: 'success',
              title: '登入成功',
              showConfirmButton: false,
              timer: 1000,
            });
          } else {
            this.loading = false;
            this.$swal.fire({
              position: 'top',
              icon: 'error',
              title: '登入失敗',
              showConfirmButton: false,
              timer: 1000,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
