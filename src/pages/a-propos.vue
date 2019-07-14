<template>
  <Layout>
    <div v-for="edge in $page.allbio.edges" :key="edge.node.id">
      <section class="offset-bg-blue section">
        <div class="container bio">
          <h1 class="title">{{ edge.node.title }}</h1>
          <carousel
            class="is-right carousel"
            :per-page="1"
            :centerMode="true"
            :autoplay="true"
            :loop="true"
            :autoplayTimeout="5000"
          >
            <slide>
              <g-image class="image" :src="edge.node.thumbnail"></g-image>
            </slide>
            <slide>
              <g-image class="image" :src="edge.node.thumbnail2"></g-image>
            </slide>
            <slide>
              <g-image class="image" :src="edge.node.thumbnail3"></g-image>
            </slide>
          </carousel>
          <div v-html="edge.node.content"></div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="title is-5">Sommaire des formations principales</h2>
          <ul>
            <li v-for="(item, index) in edge.node.cv" :key="index">{{ item }}</li>
          </ul>
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
    </div>
  </Layout>
</template>

<page-query>
query allBio {
  allbio {
    edges {
      node {
        id
        title
        content
        cv
        vision
        mission
        thumbnail (quality: 90, height: 800, width: 700)
        thumbnail2 (quality: 90, height: 800, width: 700)
        thumbnail3 (quality: 90, height: 800, width: 700)
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "À Propos"
  }
};
</script>

<style lang="scss">
.carousel {
  max-width: 52%;
}
</style>

