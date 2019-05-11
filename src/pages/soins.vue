<template>
  <Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">Soins</h1>
        <g-image class="header-img" src="../../uploads/soins.jpg" quality="90" height="690"></g-image>
        <div>Eiusmod anim culpa aute ullamco esse dolore. Et officia sunt enim esse dolor elit proident. In veniam magna amet dolore cupidatat aute adipisicing mollit minim mollit excepteur. Ipsum do labore voluptate elit qui cillum.</div>
        <div id="soins" class="columns" style="padding-top: 2rem;">
          <div class="column" v-for="soin in $page.soins.edges" :key="soin.node.id">
            <div class="card">
              <div class="card-image">
                <img src="../../uploads/placeholder.png" alt>
              </div>
              <div class="card-content">{{ soin.node.title }}</div>
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