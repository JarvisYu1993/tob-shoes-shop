<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/dashaboard/products" class="nav-link"
              >後台產品</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/dashaboard/orders" class="nav-link"
              >後台訂單</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/dashaboard/coupon" class="nav-link"
              >優惠券</router-link
            >
          </li>
        </ul>
        <a href="#" class="ms-auto text-danger" @click.prevent="signout"
          >登出</a
        >
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>
import 'bootstrap/js/dist/collapse';

export default {
  methods: {
    signout() {
      const url = `${process.env.VUE_APP_API}/logout`;
      this.$http
        .post(url)
        .then((response) => {
          if (response.data.success) {
            document.cookie = 'YuToken=;expires=;';
            this.$router.push('/login');
            this.$swal.fire(
              {
                position: 'top',
                icon: 'success',
                title: '已登出',
                showConfirmButton: false,
                timer: 1000,
              },
            );
          }
        })
        .catch(() => {
          this.loading = false;
          this.$swal.fire({
            position: 'top',
            icon: 'error',
            title: '無法登出',
            showConfirmButton: false,
            timer: 1000,
          });
        });
    },
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)YuToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    const url = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http.defaults.headers.common.Authorization = `${token}`;
    this.$http
      .post(url)
      .then((response) => {
        if (!response.data.success) {
          this.$router.push('/login');
        }
      })
      .catch(() => {
        this.loading = false;
        this.$swal.fire({
          position: 'top',
          icon: 'error',
          title: '無法登入後台',
          showConfirmButton: false,
          timer: 1000,
        });
      });
  },
};
</script>
