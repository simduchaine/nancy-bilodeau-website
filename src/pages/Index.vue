<template>
  <home-layout>

    <section class="has-background-info lead-content">
      <div class="container">
        <div class="columns is-marginless">
          <div class="column is-two-fifths">
            <h1 class="title">Coaching et consultation holistique pour individus et <a href="#">entreprises</a></h1>
          </div>
          <div class="column"></div>
          <div class="column is-half">
            <p>
              Nancy accompagne les individus à atteindre une santé optimale et se réaliser. Elle aide aussi les entreprises à atteindre leur objectifs, gérer leurs projects, améliorer leur processus, réduire les conflits et établir un mileu de travail sain basé sur des valeurs humaines durables.
            </p>
            <g-link to="/a-propos">À propos de Nancy ></g-link>
          </div>
        </div>
      </div>
    </section>

    <section id="services">
      <services v-for="edge in $page.data.edges" :key="edge.node.id" :title="edge.node.title" :content="edge.node.content" :thumbnail="edge.node.thumbnail" />
    </section>

    <section class="has-background-info lead-content" style="margin-top: -10px">
      <div class="container">
        <div class="columns is-marginless is-multiline">
          <div class="column is-full">
            <h1 class="title">Formations</h1>
          </div>
          <div class="column is-half">
            <p>Nancy a déjà plusieurs cours de développés, vous pouvez organiser un cours ou participer au prochain à notre horaire. Pour organiser un cours, une retraire, une conférence, ou un repas vous n’avez besoin que de rassembler 10 personnes et votre inscription sera gratuite !</p>
            <g-link to="/formations">Formations ></g-link>
          </div>
          <div class="column"></div>
          <div class="column is-one-third is-italic">
            <ul>
              <li>Cours</li>
              <li>Retraite</li>
              <li>Conférences</li>
              <li>Souper formation</li>
              <li>Déjeuner formation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
  </home-layout>
</template>

<page-query>
  query services {
    data: allservices (sortBy: "position", order: ASC) {
      edges {
        node {
          title
          thumbnail (quality: 100, height: 680, width: 940)
          id
          content
        }
      }
    }
  }
</page-query>

<script>
import services from '~/components/Services.vue';

export default {
  metaInfo: {
    title: 'Nancy Bilodeau - Coaching Mieux-Etre'
  },
  components: {
    services

  }
}
</script>

<style lang="scss">

.title {
  line-height: 1.325;

  a {
    color: #D05208;
    text-decoration: underline;

    &:hover {
      color: inherit;
    }

  }
}

a {
  &:not(.button):not(.navbar-item) {
    font-style: italic;
  }

}

.lead-content {
  padding: 5rem;
}

.reverse-row-order{
    flex-direction:row-reverse;
}

#services {
  > .columns:nth-child(odd) {
    flex-direction:row-reverse;
    text-align: right;
  }

  /* .columns {
    max-height: 689px;
  } */

}

</style>
