<template>
  <home-layout>
    <section id="carousel">
      <VueSlickCarousel
        class="hero is-medium has-background"
        :dots="true"
        :autoplay="true"
        :autoplaySpeed="5000"
        :arrows="true"
      >
        <!-- <div v-for="slide in $page.slides.edges" :key="slide.node.id">
          <g-image class="hero-background is-transparent" :src="slide.node.backgroundImg" />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">{{ slide.node.title }}</h1>
              <h2 class="title is-size-3">{{ slide.node.subtitle }}</h2>
              <a :href="slide.node.buttonLink" class="button">
                {{
                slide.node.buttonText
                }}
              </a>
            </div>
          </div>
        </div>-->

        <div>
          <g-image
            class="hero-background is-transparent"
            src="../../uploads/nancy-devant-nuages2.jpeg"
          />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">
                Activatrice de Santé, Bonheur et Réalisation!
              </h1>
              <h2 class="title is-size-3 is-family-primary">
                Au service de votre bien-être, vos rêves et vos objectifs
              </h2>
              <a href="https://nancybilodeau.com/a-propos" class="button"
                >Pour en savoir plus sur moi</a
              >
            </div>
          </div>
        </div>
        <div>
          <g-image
            class="hero-background is-transparent"
            src="../../uploads/slide2.jpg"
          />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">
                Apprenez à prendre soin de vous pour offrir le meilleur de
                vous-même
              </h1>
              <h2 class="title is-size-3 is-family-primary">
                Découvrez les secrets de la santé holistique et transformez
                votre vie!
              </h2>
              <a
                href="https://nancybilodeau.com/boutique/programme-de-transformation"
                class="button"
                >Découvrez mon programme de transformation</a
              >
            </div>
          </div>
        </div>
        <div>
          <g-image
            class="hero-background is-transparent"
            src="../../uploads/travelers.jpg"
          />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">
                Élevez votre conscience et votre énergie
              </h1>
              <h2 class="title is-size-3 is-family-primary">
                Pour une vie comblée, pleine de sens, et de vitalité
              </h2>
              <a href="https://nancybilodeau.com/soins" class="button"
                >Découvrez mes soins et techniques</a
              >
            </div>
          </div>
        </div>
        <div>
          <g-image
            class="hero-background is-transparent"
            src="../../uploads/jason-hogan.jpg"
          />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">
                Libérez ce qui vous limite; peurs, relations, addictions
              </h1>
              <h2 class="title is-size-3 is-family-primary">
                Connectez à votre essence et réalisez votre plein potentiel
              </h2>
              <a href="https://nancybilodeau.com/soins/peace" class="button"
                >Apprenez-en plus sur l’approche PEACE</a
              >
            </div>
          </div>
        </div>
        <div>
          <g-image
            class="hero-background is-transparent"
            src="../../uploads/hero.jpg"
          />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">
                Trouvez votre équilibre et marchez vers votre destiné
              </h1>
              <h2 class="title is-size-3 is-family-primary">
                Pour une vie harmonieuse, enrichissante et cohérente
              </h2>
              <a
                href="https://www.gorendezvous.com/homepage/111690"
                class="button"
                >Réservez votre coaching avec Nancy</a
              >
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </section>

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
      <formation
        class="has-background-info lead-content"
        style="margin-top: -10px"
      ></formation>
    </section>

    <section id="consultation">
      <consultation></consultation>
    </section>

    <section id="articles" class="has-background-info lead-content">
      <div class="container">
        <h1 class="title has-text-centered">Articles à la une</h1>
        <div class="columns is-multiline">
          <articles
            v-for="article in $page.articles.edges"
            :key="article.node.id"
            :title="article.node.title"
            :content="article.node.content"
            :thumbnail="article.node.thumbnail"
            :link="article.node.link"
            class="column is-third"
          ></articles>
        </div>
        <a href="/blogue/" class="button">Plus d'articles</a>
      </div>
    </section>
  </home-layout>
</template>

<page-query>
  query {
    data: allServices(filter: { path: { nin: ["/data/home/formations/", "/data/home/lead/", "/data/home/consultation/", "/data/home/featured-articles/", "/data/home/magnet/"] }}, sortBy: "position", order: ASC) {
      edges {
        node {
          title
          thumbnail (quality: 100, height: 680, width: 940)
          id
          content
        }
      }
    },
    articles: allArticles (filter: {sticky: {eq: true}}) {
    edges {
      node {
        title
        id
        content
        path
        thumbnail (quality: 90, width: 678, height: 410)
        link
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

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

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
    VueSlickCarousel,
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
    height: 100vh;

    &.is-transparent {
      opacity: 0.7;
    }
  }

  &.is-medium {
    .hero-body {
      padding-bottom: 7.5rem;
      padding-top: 7.5rem;
    }
  }
}
.slick-arrow {
  z-index: 999;
}
.slick-prev {
  left: 20px;
}
.slick-next {
  right: 20px;
}
.slick-slide {
  position: relative;
}

.slick-dots {
  bottom: 20px;
}

#carousel,
#carouselEn {
  .button {
    margin-top: 2.5rem;
  }

  .title {
    color: #004369;
    line-height: 0.9;
  }
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
