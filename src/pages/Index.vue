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
            <a href="#">A propos de Nancy ></a>
          </div>
        </div>
      </div>
    </section>
    
    <services-right />
    <services-left />

    <ul>
      <li v-for="node in $page.HomeContent.edges" :key="node.title">
        {{ node.title }}
      </li>
    </ul>
    
  </home-layout>
</template>

<page-query>
  query HomeContent {
    HomeContent: allHomeContent {
      edges {
        node {
          data {
            title
            thumbnail
            text
          }
        }
      }
    }
  }
</page-query>

<script>
import servicesLeft from '~/components/ServicesLeft.vue';
import servicesRight from '~/components/ServicesRight.vue';

export default {
  metaInfo: {
    title: 'Nancy Bilodeau - Coaching Mieux-Etre'
  },
  components: {
    servicesLeft,
    servicesRight

  }
}
</script>

<style lang="scss">

.title {
  line-height: 1.325;

  a {
    color: orange;
    text-decoration: underline;

    &:hover {
      color: inherit;
    }
  }


}

.lead-content {
  padding: 5rem;
}

</style>
