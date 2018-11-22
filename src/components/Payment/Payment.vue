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
      <form>
        <div class="p-6 pt-10">
          <div class="mb-8">
            <label for="card-input" class="mb-1 block uppercase text-xs text-grey-dark tracking-wide"> Card Number </label>
            <input
              type="text"
              name="card"
              id="card-input"
              class="border-b border-grey-light w-full p-3 outline-none"
              placeholder="xxxx    xxxx    xxxx    xxxx"
            />
          </div>
          <div class="mb-8 flex -mx-4">
            <div class="mx-4 w-1/2">
              <label for="expiry-input" class="mb-1 block uppercase text-xs text-grey-dark tracking-wide"> Expiry date </label>
              <input
                type="text"
                name="expiry"
                id="expiry-input"
                class="border-b border-grey-light w-full p-3 outline-none"
                placeholder="MM / YY"
              />
            </div>
            <div class="mx-4 w-1/2">
              <label for="cvv-input" class="mb-1 block uppercase text-xs text-grey-dark tracking-wide"> Cvv </label>
              <input
                type="text"
                name="cvv"
                id="cvv-input"
                class="border-b border-grey-light w-full p-3 outline-none"
                placeholder="xxx"
              />
            </div>
          </div>
          <div class="mb-8">
            <label for="name-input" class="mb-1 block uppercase text-xs text-grey-dark tracking-wide"> Name </label>
            <input
              type="text"
              name="name"
              id="name-input"
              class="border-b border-grey-light w-full p-3 outline-none"
              placeholder="Joe Doe"
            />
          </div>
        </div>
        <button type="submit" class="w-full block h-24 bg-gradient-blue-to-light-blue text-white bold text-2xl tracking-wide flex justify-around items-center">
          <span>
            CHECK OUT
          </span>
          <img src="../../assets/images/right-arrow.svg" class="w-8 pb-1">
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
