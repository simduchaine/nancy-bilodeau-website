<template>
  <English-Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">Training</h1>
        <div
          style="margin-bottom:2rem;"
        >I have several courses ready. You can organize a course or participate in the next one on our schedule. To organize a course, a retreat, a conference or a meal, you simply have to gather 10 people and your registration will be free!</div>
        <div class="columns is-multiline">
          <div
            class="column is-one-third"
            v-for="formation in $page.training.edges"
            :key="formation.node.id"
          >
            <div class="card">
              <div class="card-image">
                <g-image :src="formation.node.thumbnail"></g-image>
              </div>
              <div class="card-content">
                <h2 class="title is-6">{{formation.node.title}}</h2>
                <div v-html="formation.node.content"></div>
              </div>
              <div class="card-footer">
                <div class="card-footer-item tag">{{formation.node.type}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </English-Layout>
</template>

<page-query>
query Training {
  training: allTraining (sortBy: "type", order: ASC) {
    edges {
      node {
        title
        id
        content
        path
        type
        thumbnail (quality: 90, width: 678, height: 452)
        link
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Training",
    htmlAttrs: {
      lang: "en"
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.card-content {
  margin-bottom: auto;
}
</style>