<template>
  <div class="container" id="formations">
    <div class="columns">
      <div class="column is-full">
        <h1 class="title has-text-centered">Horaire des formations</h1>
        <single-formation v-for="(formation, index) in formations" :title="formation" :key="index"></single-formation>
      </div>
    </div>
  </div>
</template>

<script>
import singleFormation from "~/components/home/formations/single-formation.vue";

export default {
  name: "Horaire",
  components: {
    singleFormation
  },
  data() {
    return {
      formations: [
        "Santé 101",
        "Introduction aux Pousses et Germinations",
        "Introduction à l’alimentation vivante",
        "Végane Équilibrée et en Santé",
        "La santé holistique",
        "Les bienfaits de l’alimentation vivante"
      ]
    };
  }
};
</script>

<style lang="scss">
#formations {
  .title {
    padding: 2rem 0;
  }
}
</style>
