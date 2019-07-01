<template>
  <Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">Soins</h1>
        <g-image class="header-img" src="../../uploads/soins.jpg" quality="90" height="700"></g-image>
        <div>J’offre différents soins qui sont souvent utiles en accompagnement individuel ou encore pris par eux même simplement pour se faire du bien et recharger ses batteries.  Mon parcours m’a enseigné que même les personnes qui sont impeccables dans leur alimentation et toutes leurs habitudes de vie sont parfois assaillies par des baisses d’énergie importante et bloquer dans leur progression. Lorsque tout ce qui est dans le concret, le matériel et le visible n’est pas suffisant, la douceur du subtil, la main bienfaisante et toutes les possibilités du point zéro, du point neutre sont apaisantes, réconfortantes et surprenantes.</div>
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
