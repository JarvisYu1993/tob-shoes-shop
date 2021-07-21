<template>
  <div class="is-active is-full-page" :class="{ 'vld-overlay': loading }">
    <div class="vld-background" style="backdrop-filter: blur(2px)"></div>
    <div class="vld-icon" v-show="loading">
      <div
        class="v-pulse v-pulse1"
        v-bind:style="[spinnerStyle, spinnerDelay1]"
      ></div>
      <div
        class="v-pulse v-pulse2"
        v-bind:style="[spinnerStyle, spinnerDelay2]"
      ></div>
      <div
        class="v-pulse v-pulse3"
        v-bind:style="[spinnerStyle, spinnerDelay3]"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PulseLoader',
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: '#5dc596',
    },
    size: {
      type: String,
      default: '15px',
    },
    margin: {
      type: String,
      default: '2px',
    },
    radius: {
      type: String,
      default: '100%',
    },
  },
  data() {
    return {
      spinnerStyle: {
        backgroundColor: this.color,
        width: this.size,
        height: this.size,
        margin: this.margin,
        borderRadius: this.radius,
        display: 'inline-block',
        animationName: 'v-pulseStretchDelay',
        animationDuration: '0.75s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'cubic-bezier(.2,.68,.18,1.08)',
        animationFillMode: 'both',
      },
      spinnerDelay1: {
        animationDelay: '0.12s',
      },
      spinnerDelay2: {
        animationDelay: '0.24s',
      },
      spinnerDelay3: {
        animationDelay: '0.36s',
      },
    };
  },
};
</script>

<style>
/*.v-spinner
{
    margin: 100px auto;
    text-align: center;
}
*/
.vld-overlay {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;
  display: none;
  justify-content: center;
  overflow: hidden;
  z-index: 9999;
}
.vld-overlay.is-full-page {
  z-index: 9999;
  position: fixed;
}
.vld-overlay.is-active {
  display: flex;
}
.vld-overlay .vld-background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0.5;
}
.vld-overlay .vld-icon,
.vld-parent {
  position: relative;
}

@-webkit-keyframes v-pulseStretchDelay {
  0%,
  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
  }
  45% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    -webkit-opacity: 0.7;
    opacity: 0.7;
  }
}

@keyframes v-pulseStretchDelay {
  0%,
  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
  }
  45% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    -webkit-opacity: 0.7;
    opacity: 0.7;
  }
}
</style>
