<template>
  <div id="app">
    <div class="mt-20 flex justify-center">
      <transition name="modal" appear>
        <payment @done="done = true" v-show="!done"/>
      </transition>
    </div>
  </div>
</template>

<script>
import Payment from './components/Payment/Payment'

export default {
  components: {
    Payment,
  },
  data() {
    return {
      done: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal {
    &-enter-active, &-leave-active {
      transform: translateY(0px);
      transition: all .4s;
    }

    &-enter {
      transform: translateY(-60px);
      opacity: 0;
    }

    &-leave-to {
      opacity: 0;
      transform: translateX(60px);
    }

  }
</style>
