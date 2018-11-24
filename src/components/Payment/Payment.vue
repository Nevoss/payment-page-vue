<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-lg border-t-8 border-blue-light" :style="{
    maxWidth: '440px'
  }">
    <div class="px-6 py-10 bg-grey-lightest">
      <p class="flex font-mono">
        <span class="text-5xl "> 15.90 </span>
        <span class="text-lg ml-2 pt-2"> $ </span>
      </p>
      <p class="text-grey-dark mt-1 text-base font-light">
        Some description about the subscription
      </p>
    </div>
    <form
      @submit.prevent="submit"
      @keyup="clearErrorsOnKeyUp"
    >
      <div class="p-6 pt-10">
        <input-wrapper :form="form" field-key="card" class="mb-10">
          <card-input
            v-model="form.card"
            @blur="onInputBluer('card')"
            @focus="form.$extra.card.focused = true"
            :has-error="form.$errors.has('card')"
          />
        </input-wrapper>
        <div class="mb-10 flex -mx-4">
          <input-wrapper :form="form" field-key="expiry" class="mx-4 w-1/2">
            <input
              v-model="form.expiry"
              @blur="onInputBluer('expiry')"
              @focus="form.$extra.expiry.focused = true"
              v-mask="'## / ##'"
              type="text"
              name="expiry"
              class="border-b w-full p-3 outline-none"
              :class="form.$errors.has('expiry') ? 'border-red-lighter' : 'border-grey-light'"
              placeholder="MM / YY"
              autocomplete="off"
            />
          </input-wrapper>
          <input-wrapper :form="form" field-key="cvv" class="mx-4 w-1/2">
            <input
              v-model="form.cvv"
              @blur="onInputBluer('cvv')"
              @focus="form.$extra.cvv.focused = true"
              v-mask="'###'"
              type="text"
              name="cvv"
              class="border-b w-full p-3 outline-none"
              :class="form.$errors.has('cvv') ? 'border-red-lighter' : 'border-grey-light'"
              placeholder="xxx"
              autocomplete="off"
            />
          </input-wrapper>
        </div>
        <input-wrapper :form="form" field-key="name" class="mb-10">
          <input
            v-model="form.name"
            @blur="onInputBluer('name')"
            @focus="form.$extra.name.focused = true"
            type="text"
            name="name"
            class="border-b w-full p-3 outline-none"
            :class="form.$errors.has('name') ? 'border-red-lighter' : 'border-grey-light'"
            placeholder="Joe Doe"
            autocomplete="off"
          />
        </input-wrapper>
      </div>
      <button type="submit" class="payment-btn" :class="form.$submitting ? 'opacity-50' : ''" :disabled="form.$submitting">
        <span class="flex justify-around items-center w-full" v-show="!form.$submitting">
          <span>
            PAY NOW
          </span>
          <svg-icon icon="right-arrow" class="w-10 payment-btn-icon"/>
        </span>
        <loader v-show="form.$submitting"/>
      </button>
    </form>
  </div>
</template>

<script>
  import {Form} from 'form-wrapper-js'
  import {mask} from 'vue-the-mask'
  import {required, creditCard, expiryDate, cvv, minChars} from "../../utils/rules";

  import CardInput from './components/CardInput'
  import InputWrapper from "./components/InputWrapper";
  import SvgIcon from "../common/SvgIcon";
  import Loader from '../common/Loader'

  export default {
    directives: {mask},
    components: {
      InputWrapper,
      SvgIcon,
      CardInput,
      Loader,
    },
    data() {
      return {
        form: new Form({
          card: {
            value: null,
            label: 'Card Number',
            rules: [required, creditCard],
            extra: {
              dirty: false,
              focused: false,
            },
          },
          expiry: {
            value: null,
            label: 'Expiry Date',
            rules: [required, expiryDate],
            extra: {
              dirty: false,
              focused: false,
            },
          },
          cvv: {
            value: null,
            label: 'CVV',
            rules: [required, cvv],
            extra: {
              dirty: false,
              focused: false,
            },
          },
          name: {
            value: null,
            rules: [required, minChars(2)],
            extra: {
              dirty: false,
              focused: false,
            },
          },
        })
      }
    },
    methods: {

      onInputBluer(fieldKey) {
        this.form.validate(fieldKey)
        this.form.$extra[fieldKey].focused = false
        this.form.$extra[fieldKey].dirty = true
      },

      clearErrorsOnKeyUp(event) {
        if (event.key === 'Tab') {
          return
        }

        this.form.$errors.clearField(event.target.name)
      },

      async submit() {
        try {
          await this.form.submit(() => new Promise(resolve => setTimeout(() => resolve(), 3000)))

          this.$emit('done')

        } catch (e) {
          console.error(e.message)
        }
      }
    }
  }
</script>
