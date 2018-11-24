<template>
  <div class="mt-20 flex justify-center">
    <div class="bg-white rounded-lg overflow-hidden shadow-lg border-t-8 border-blue-light" :style="{
      maxWidth: '440px'
    }">
      <div class="px-6 py-10 bg-grey-lightest">
        <p class="flex font-mono">
          <span class="text-5xl "> 500 </span>
          <span class="text-lg ml-2 pt-2"> $ </span>
        </p>
        <p class="text-grey-dark mt-1 text-base font-light">
          Budgei app subscription
        </p>
      </div>
      <form
        @submit.prevent="submit"
        @keyup="form.$errors.clearField($event.target.name)"
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
        <button type="submit" class="w-full block h-24 bg-gradient-blue-to-light-blue text-white bold text-2xl tracking-wide flex justify-around items-center">
          <span>
            PAY NOW
          </span>
          <svg-icon icon="right-arrow" class="w-10"/>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import {Form} from 'form-wrapper-js'
  import {mask} from 'vue-the-mask'
  import {required, creditCard, expiryDate, cvv} from "../../utils/rules";

  import CardInput from './CardInput'
  import SvgIcon from "../common/SvgIcon";
  import InputWrapper from "../common/forms/InputWrapper";

  export default {
    directives: {mask},
    components: {
      InputWrapper,
      SvgIcon,
      CardInput,
    },
    data() {
      return {
        form: new Form({
          card: {
            value: null,
            label: 'Card Number',
            rules: [required, creditCard],
            extra: {
              focused: false
            },
          },
          expiry: {
            value: null,
            label: 'Expiry Date',
            rules: [required, expiryDate],
            extra: {
              focused: false
            },
          },
          cvv: {
            value: null,
            label: 'CVV',
            rules: [required, cvv],
            extra: {
              focused: false
            },
          },
          name: {
            value: null,
            rules: [required],
            extra: {
              focused: false
            },
          },
        })
      }
    },
    methods: {

      onInputBluer(fieldKey) {
        this.form.validate(fieldKey)
        this.form.$extra[fieldKey].focused = false
      },

      async submit() {
        console.log(this.form.data())
        // try {
        //   await this.form.submit(() => null);
        // } catch (e) {
        //
        // }
      }
    }
  }
</script>
