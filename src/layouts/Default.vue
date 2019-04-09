<template>
  <div>

    <custom-header />

    <div class="container is-fluid">
      <slot/>
    </div>

    <custom-footer />
    
  </div>
</template>

<script>
import customFooter from '~/components/Footer.vue'
import customHeader from '~/components/Header.vue'

export default {
  components: {
    customFooter,
    customHeader
  }
}
</script>


<style>


</style>
