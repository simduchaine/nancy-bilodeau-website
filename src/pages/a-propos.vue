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

    <section class="section">
      <div class="container">
        <h2 class="title is-5">Sommaire des formations principales</h2>
        <ul>
          <li v-for="(item, index) in edge.node.cv" :key="index">{{ item }}</li>
        </ul>
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
        thumbnail (quality: 90, height: 800, width: 700)
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

