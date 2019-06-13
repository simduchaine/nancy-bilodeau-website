<template>
  <Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">Soins</h1>
        <g-image class="header-img" src="../../uploads/soins.jpg" quality="90" height="700"></g-image>
        <div>Eiusmod anim culpa aute ullamco esse dolore. Et officia sunt enim esse dolor elit proident. In veniam magna amet dolore cupidatat aute adipisicing mollit minim mollit excepteur. Ipsum do labore voluptate elit qui cillum.</div>
        <div id="soins" class="columns" style="padding-top: 2rem;">
          <div class="column" v-for="soin in $page.soins.edges" :key="soin.node.id">
            <div class="card">
              <g-link :to="soin.node.path">
                <div class="card-image">
                  <g-image :src="soin.node.thumbnail"></g-image>
                </div>
              </g-link>
              <div class="card-content title is-5 has-text-white">{{ soin.node.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Soins {
  soins: allsoins {
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
export default {
  metaInfo: {
    title: "Soins"
  }
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: none;
}
.card-content {
  margin-top: auto;
  background: #3b3049;
}

.card-image {
  padding: 1rem;
}
</style>
