<template>
  <Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <div class="columns">
          <div class="column is-full">
            <h1 class="title has-text-centered">Horaire des formations</h1>
            <div
              v-for="formation in $page.formations.edges"
              :key="formation.node.id"
            >{{formation.node.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Formations {
  formations: allformations {
    edges {
      node {
        title
        id
        content
        path
        type
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Formations"
  },
  components: {}
};
</script>