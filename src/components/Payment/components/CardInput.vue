<template>
  <div class="relative">
    <input
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      :value="value"
      :id="id"
      v-mask="'####  ####  ####  ####'"
      type="text"
      name="card"
      class="border-b w-full p-3 pl-14 outline-none"
      :class="hasError ? 'border-red-lighter' : 'border-grey-light'"
      placeholder="xxxx    xxxx    xxxx    xxxx"
      autocomplete="off"
    />
    <div class="absolute flex items-center pin-t pin-l h-full">
      <transition name="fade" mode="out-in">
        <div
          v-if="!cardIcon"
          :key="'noBrand'"
          class="rounded bg-grey-lighter flex items-center justify-center text-grey text-xs font-mono border-l-2 border-grey-light"
          :style="{ width: '36px', height: '25px' }"
        >
          ?
        </div>
        <div v-else class="w-9">
          <svg-icon :icon="cardIcon" :key="cardIcon"/>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import cardValidator from 'card-validator'
  import {mask} from 'vue-the-mask'

  import SvgIcon from '../../common/SvgIcon'

  export default {
    directives: {
      mask,
    },
    components: {
      SvgIcon,
    },
    props: {
      value: {
        type: String,
      },
      id: {
        type: String,
      },
      hasError: {
        type: Boolean,
      }
    },
    data() {
      return {
        cardsIcons: {
          'visa': 'card-visa',
          'mastercard': 'card-master',
          'american-express': 'card-american-express',
          'discover': 'card-discover',
        },
      }
    },
    computed: {
      cardIcon() {
        let card = cardValidator.number(this.value).card

        if (!card || !this.cardsIcons.hasOwnProperty(card.type)) {
          return null
        }

        return this.cardsIcons[card.type]
      }
    },
  }
</script>

<style lang="scss">
  .fade {
    &-enter-active, &-leave-active {
      transform: translateY(0px);
      transition: all .2s;
    }

    &-enter {
      transform: translateY(-5px);
      opacity: 0.3;
    }

    &-leave-to {
      transform: translateY(5px);
      opacity: 0.3;
    }
  }

</style>
