<template>
  <div>
    <component :is="icon"></component>
  </div>
</template>

<script>
  import RightArrow from '../../assets/images/icons/right-arrow.svg'
  import Warning from '../../assets/images/icons/warning.svg'
  import CardVisa from '../../assets/images/icons/card-visa.svg'
  import CardMaster from '../../assets/images/icons/card-master.svg'
  import CardAmericanExpress from '../../assets/images/icons/card-american-express.svg'
  import CardDiscover from '../../assets/images/icons/card-discover.svg'

  export default {
    components: {
      CardVisa,
      RightArrow,
      Warning,
      CardMaster,
      CardAmericanExpress,
      CardDiscover
    },
    props: {
      icon: {
        required: true,
        type: String,
      }
    },
    mounted() {
      this.$el.firstChild.removeAttribute('height')
      this.$el.firstChild.removeAttribute('width')
    }
  }
</script>
