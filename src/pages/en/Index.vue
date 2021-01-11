<template>
  <Enhome>
    <section id="carousel">
      <VueSlickCarousel
        class="hero is-medium has-background"
        :dots="true"
        :autoplay="true"
        :autoplaySpeed="5000"
        :arrows="true"
      >
        <div v-for="slide in $page.slides.edges" :key="slide.node.id">
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

    <section id="training">
      <training class="has-background-info lead-content" style="margin-top: -10px"></training>
    </section>

    <section id="consultation">
      <consultation></consultation>
    </section>
  </Enhome>
</template>

<page-query>
  query {
    data: allServicesEn(filter: { path: { nin: ["/data-en/home/training/", "/data-en/home/lead/", "/data-en/home/consultation/", "/data-en/home/magnet/"] }}, sortBy: "position", order: ASC) {
      edges {
        node {
          title
          thumbnail (quality: 100, height: 680, width: 940)
          id
          content
        }
      }
    },
     slides: allCarouselEn(sortBy: "order", order: ASC) {
      edges {
        node {
          title
          subtitle
          path
          backgroundImg (quality: 100)
          buttonText
          buttonLink
          id
        }
      }
    }
  }
</page-query>

<script>
import services from "~/components/home/Services.vue";
import lead from "~/components/en/home/Lead.vue";
import training from "~/components/en/home/training/training.vue";
import consultation from "~/components/en/home/consultation.vue";
import Magnet from "~/components/en/home/Magnet.vue";
import Mission from "~/components/en/home/Mission.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  metaInfo: {
    title: "Nancy Bilodeau - Wellness Coaching",
    htmlAttrs: {
      lang: "en",
    },
  },
  components: {
    services,
    lead,
    training,
    consultation,
    Magnet,
    Mission,
    VueSlickCarousel,
  },
};
</script>

<style lang="scss">
.button {
  border-radius: 5px;
}

.title {
  line-height: 1.325;

  a {
    //color: #d05208;
    color: #004369;
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
