<template>
  <home-layout>
    <ClientOnly>
      <carousel
        :autoplay="true"
        :loop="true"
        :perPage="1"
        :speed="1000"
        :autoplayTimeout="5000"
        class="hero is-medium has-background"
      >
        <slide v-for="slide in $page.slides.edges" :key="slide.node.id">
          <g-image class="hero-background is-transparent" :src="slide.node.image.src" />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">{{slide.node.title}}</h1>
              <h2 class="title is-size-3">{{slide.node.subtitle}}</h2>
              <a :href="slide.node.buttonLink" class="button">{{slide.node.buttonText}}</a>
            </div>
          </div>
        </slide>
      </carousel>
    </ClientOnly>

    <section id="magnet" style="background: #f1f0f0">
      <Magnet></Magnet>
    </section>

    <section id="mission" class="lead-content">
      <Mission></Mission>
    </section>

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
    </section>

    <section id="consultation">
      <consultation></consultation>
    </section>

    <section id="articles">
      <articles class="has-background-info lead-content" style="margin-top: -10px"></articles>
    </section>
  </home-layout>
</template>

<page-query>
  query {
    data: allservices(filter: { path: { nin: ["/data/home/formations", "/data/home/lead", "/data/home/consultation", "/data/home/featured-articles", "/data/home/magnet"] }}, sortBy: "position", order: ASC) {
      edges {
        node {
          title
          thumbnail (quality: 100, height: 680, width: 940)
          id
          content
        }
      }
    },
    slides: allcarousel(sortBy: "order", order: ASC) {
    edges {
      node {
        title
        subtitle
        path
        image
        buttonText
        buttonLink
        id
        uid
      }
    }
  }
  }
</page-query>

<script>
import services from "~/components/home/Services.vue";
import lead from "~/components/home/Lead.vue";
import formation from "~/components/home/formations/Formation.vue";
import consultation from "~/components/home/consultation.vue";
import articles from "~/components/home/articles.vue";
import Magnet from "~/components/home/Magnet.vue";
import Mission from "~/components/home/Mission.vue";

export default {
  metaInfo: {
    title: "Nancy Bilodeau - Coaching Mieux-Etre",
  },
  components: {
    services,
    lead,
    formation,
    consultation,
    articles,
    Magnet,
    Mission,
    Carousel: () =>
      import("vue-carousel")
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then((m) => m.Slide)
        .catch(),
  },
};
</script>

<style lang="scss">
.hero {
  &.has-background {
    position: relative;
    overflow: hidden;
  }

  &-background {
    position: absolute;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;

    &.is-transparent {
      opacity: 0.7;
    }
  }

  &.is-medium {
    .hero-body {
      padding-bottom: 6.5rem;
      padding-top: 6.5rem;
    }
  }
}

.VueCarousel-pagination {
  position: absolute;
  bottom: 1%;
}

.button {
  border-radius: 5px;
}

.title {
  line-height: 1.325;

  a {
    color: #004369;
    //color: #d05208;
    text-decoration: underline;

    .navbar-item.active--exact.active {
      background-color: #fafafa;
      color: #004369;
      //color: #d05208;
    }

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

ul {
  li {
    list-style-type: circle;
    list-style-position: inside;
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

.self_center {
  margin: 0.8rem 0.5rem;
  display: inline-block;
}

.offset-bg-blue {
  background-image: linear-gradient(transparent 9rem, #c4e0ec80 0);
  //margin-bottom: 2rem;
}

.brands {
  a {
    color: #929292;
    //color: #3b3049;
    &:hover {
      color: #004369;
      //color: #d05208;
    }
  }
}

.navbar-dropdown {
  max-width: 100%;
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
