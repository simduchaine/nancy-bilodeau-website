<template>
  <div>
    <custom-header />

    <hero />

    <slot />

    <custom-footer />
  </div>
</template>

<script>
import customFooter from "~/components/en/Footer.vue";
import customHeader from "~/components/en/Header.vue";
import Hero from "~/components/en/home/Hero.vue";

export default {
  components: {
    customFooter,
    customHeader,
    Hero
  }
};
</script>


<style>
.input {
  border-top: 0;
  border-left: 0;
  border-right: 0;
}
</style>
