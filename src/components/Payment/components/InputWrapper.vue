<template>
  <div class="relative">
    <label class="mb-1 block uppercase text-xs text-grey-dark tracking-wide"> {{ form.$labels[fieldKey] }} </label>
    <div class="relative">
      <slot />
      <transition name="error-icon-animation">
        <div
          v-if="form.$errors.has(fieldKey)"
          class="h-full flex absolute pin-r pin-t items-center pr-2 text-red-light"
          :key="'error'"
        >
          <svg-icon icon="warning" class="w-4 fill-current"/>
        </div>
        <div
          v-if="!form.$errors.has(fieldKey) && form.$extra[fieldKey].dirty && !form.$extra[fieldKey].focused"
          :key="'success'"
          class="h-full flex absolute pin-r pin-t items-center pr-2 text-green-light"
        >
          <svg-icon icon="checked" class="w-4 fill-current"/>
        </div>
      </transition>
    </div>
    <transition name="error-message-animation">
      <p v-if="form.$errors.has(fieldKey) && form.$extra[fieldKey].focused" class="text-red text-xs mt-1 absolute pin-l" style="top: 100%;">
        * {{ form.$errors.getFirst(fieldKey) }}
      </p>
    </transition>
  </div>
</template>

<script>
  import {Form} from 'form-wrapper-js'
  import SvgIcon from "../../common/SvgIcon";

  export default {
    components: {
      SvgIcon,
    },
    props: {
      form: {
        type: Form,
        required: true
      },
      fieldKey: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        inputFocused: false,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .error-icon-animation {
    &-enter-active, &-leave-active {
      transform: translateY(0px);
      transition: all .2s;
    }

    &-enter, &-leave-to {
      transform: translateY(6px);
      opacity: 0;
    }
  }

  .error-message-animation {

    &-enter-active, &-leave-active {
      transform: translateY(0px);
      transition: all .2s;
    }

    &-enter, &-leave-to {
      transform: translateY(-6px);
      opacity: 0;
    }
  }
</style>
