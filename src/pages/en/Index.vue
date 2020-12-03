<template>
  <Enhome>
    <section id="carouselEn">
      <VueSlickCarousel
        class="hero is-medium has-background"
        :dots="true"
        :autoplay="true"
        :autoplaySpeed="5000"
        :arrows="true"
      >
        <div>
          <g-image
            class="hero-background is-transparent"
            src="../../../uploads/nancy-devant-nuages2.jpeg"
          />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">Your Chief Health and Happiness Officer</h1>
              <h2
                class="title is-size-3 is-family-primary"
              >Serving your well-being, your dreams and your goals</h2>
              <a href="https://nancybilodeau.com/en/about" class="button">Find out more about me</a>
            </div>
          </div>
        </div>
        <div>
          <g-image class="hero-background is-transparent" src="../../../uploads/slide2.jpg" />
          <div class="hero-body">
            <div class="container">
              <h1
                class="title is-size-2"
              >Learn to take care of yourself to offer the best of yourself</h1>
              <h2
                class="title is-size-3 is-family-primary"
              >Transform your life with my holistic health approach</h2>
              <a
                href="https://nancybilodeau.com/boutique/programme-de-transformation"
                class="button"
              >Discover my Life Transformation Program</a>
            </div>
          </div>
        </div>
        <div>
          <g-image class="hero-background is-transparent" src="../../../uploads/travelers.jpg" />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">Uplift your awareness and energy</h1>
              <h2
                class="title is-size-3 is-family-primary"
              >For a fulfilled life, full of meaning and vitality</h2>
              <a href="https://nancybilodeau.com/en/services" class="button">Discover my toolkit</a>
            </div>
          </div>
        </div>
        <div>
          <g-image class="hero-background is-transparent" src="../../../uploads/jason-hogan.jpg" />
          <div class="hero-body">
            <div class="container">
              <h1
                class="title is-size-2"
              >Set yourself free from limiting fears, relationships, and addictions</h1>
              <h2
                class="title is-size-3 is-family-primary"
              >Connect to your essence and reach for your full potential</h2>
              <a
                href="https://nancybilodeau.com/en/services/peace"
                class="button"
              >Learn more about PEACE</a>
            </div>
          </div>
        </div>
        <div>
          <g-image class="hero-background is-transparent" src="../../../uploads/hero.jpg" />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">Find balance and walk towards your destiny</h1>
              <h2
                class="title is-size-3 is-family-primary"
              >For a harmonious, enriching and coherent life</h2>
              <a
                href="https://www.gorendezvous.com/homepage/111690"
                class="button"
              >Book your coaching with Nancy</a>
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
  query servicesEn {
    data: allServicesEn(filter: { path: { nin: ["/data-en/home/training/", "/data-en/home/lead/", "/data-en/home/consultation/", "/data-en/home/magnet/"] }}, sortBy: "position", order: ASC) {
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
