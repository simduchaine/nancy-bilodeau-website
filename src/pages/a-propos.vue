<template>
  <Layout>
    <div v-for="edge in $page.allbio.edges" :key="edge.node.id">
      <section class="offset-bg-blue section">
        <div class="container bio">
          <h1 class="title">{{ edge.node.title }}</h1>
          <g-image class="image is-right" :src="edge.node.thumbnail"></g-image>
          <div v-html="edge.node.content"></div>
        </div>
      </section>

      <section class="section" id="formations">
        <div class="container">
          <h2 class="title is-5">Sommaire des formations principales</h2>
          <ul>
            <li v-for="(item, index) in edge.node.cv" :key="index">{{ item }}</li>
          </ul>
          <a :href="edge.node.cv_link.src" class="button" download>Télécharger mon CV</a>
        </div>
      </section>

      <section class="section has-background-info">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h2 class="title is-5">Ma vision</h2>
              <p>{{edge.node.vision}}</p>
            </div>
            <div class="column">
              <h2 class="title is-5">Ma mission</h2>
              <p>{{edge.node.mission}}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="inspirations">
        <inspirations></inspirations>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query allBio {
  allBio(filter: { path: { nin: ["/data/bio/inspirations/"] }}) {
    edges {
      node {
        id
        title
        content
        cv
        vision
        mission
        thumbnail (quality: 90, width: 700)
        thumbnail2 (quality: 90, width: 700)
        thumbnail3 (quality: 90, width: 700)
        cv_link
      }
    }
  }
}
</page-query>

<script>
import inspirations from "~/components/bio/inspirations.vue";

export default {
  metaInfo: {
    title: "À Propos"
  },
  components: {
    inspirations,
    Carousel: () =>
      import("vue-carousel")
        .then(m => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then(m => m.Slide)
        .catch()
  }
};
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .carousel {
    width: 50%;
    margin: 0 auto;
  }
}

#formations,
#inspirations {
  ul {
    li {
      margin-left: 1em;
      list-style-position: outside;
    }
  }
}
</style>

