<template>
  <English-Layout>
    <intro></intro>
    <div class="section has-background-info">
      <div class="container">
        <div id="soins" class="columns" style="padding-top: 2rem;">
          <div
            class="column"
            v-for="soin in $page.soins.edges"
            :key="soin.node.id"
          >
            <div class="card">
              <g-link :to="soin.node.path">
                <div class="card-image">
                  <g-image :src="soin.node.thumbnail"></g-image>
                </div>
              </g-link>
              <div class="card-content title is-5">{{ soin.node.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </English-Layout>
</template>

<page-query>
query Soins {
  soins: allSoinsEn(filter: { path: { nin: ["/en/services/holistic-care-services/"] }})  {
    edges {
      node {
        title
        id
        path
        thumbnail (quality: 90)
        content
      }
    }
  }
}
</page-query>

<script>
import intro from "~/components/en/services/intro.vue";

export default {
  metaInfo: {
    title: "Services",
    htmlAttrs: {
      lang: "en",
    },
  },
  components: {
    intro,
  },
};
</script>

<style scoped lang="scss">
.section {
  padding-top: 0.5rem;
}
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.card-content {
  margin-top: auto;
  padding: 0 1.5rem 1rem;
}

.card-image {
  padding: 1rem;
}
</style>
