<template>
  <home-layout>
    <section id="lead" class="has-background-info lead-content">
      <lead></lead>
    </section>

    <section id="services">
      <services
        v-for="edge in $page.data.edges"
        :key="edge.node.id"
        :title="edge.node.title"
        :content="edge.node.content"
        :thumbnail="edge.node.thumbnail"
      />
    </section>

    <section id="formations">
      <formation class="has-background-info lead-content" style="margin-top: -10px"></formation>
      <horaire></horaire>
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
import services from "~/components/home/Services.vue";
import lead from "~/components/home/Lead.vue";
import formation from "~/components/home/formations/Formation.vue";
import horaire from "~/components/home/formations/Horaire.vue";

export default {
  metaInfo: {
    title: "Nancy Bilodeau - Coaching Mieux-Etre"
  },
  components: {
    services,
    lead,
    formation,
    horaire
  }
};
</script>

<style lang="scss">
.title {
  line-height: 1.325;

  a {
    color: #d05208;
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

blockquote {
  position: relative;
  padding-left: 0.5em;
  font-style: italic;
  border-left: 0.14em solid #3b3049;
  margin-bottom: 1.5rem;
  p {
    padding: 0;
    display: inline;
  }
  &:before,
  &:after {
    content: "\201C";
    color: #3b3049;
  }
  &:after {
    content: "\201D";
  }
}

.reverse-row-order {
  flex-direction: row-reverse;
}

.is-right {
  padding: 0px 1rem 1rem;
  float: right;
}

.offset-bg-blue {
  background-image: linear-gradient(transparent 9rem, #c4e0ec 0);
  //margin-bottom: 2rem;
}

.brands {
  a {
    color: #3b3049;
    &:hover {
      color: #d05208;
    }
  }
}

#services {
  > .columns:nth-child(odd) {
    flex-direction: row-reverse;
    text-align: right;
  }

  /* .columns {
    max-height: 689px;
  } */
}

@media screen and (min-width: 768px) {
  .lead-content {
    padding: 5rem;
  }
}
</style>
