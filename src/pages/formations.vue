<template>
  <Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">Formations</h1>
        <div class="columns is-multiline">
          <div
            class="column is-one-third"
            v-for="formation in $page.formations.edges"
            :key="formation.node.id"
          >
            <div class="card">
              <span class="tag is-primary">{{formation.node.type}}</span>
              <h2>{{formation.node.title}}</h2>
              <div v-html="formation.node.content"></div>
            </div>
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