<template>
  <section class="hero is-primary is-medium has-background">
    <g-image
      class="hero-background is-transparent"
      :src="$static.HeroImg.hero_image"
    />
    <div class="hero-body">
      <div class="container"></div>
    </div>
  </section>
</template>

<static-query>
query HeroImg {
  HeroImg: settings(path: "/data/site/") {
    hero_image (width: 1920, height: 1080)
  }
}
</static-query>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped lang="scss">
.hero {
  &.has-background {
    position: relative;
    overflow: hidden;
  }

  &-background {
    position: absolute;
    object-fit: cover;
    object-position: center top;
    width: 100%;
    height: 100%;

    &.is-transparent {
      opacity: 0.5;
    }
  }

  &.is-medium {
    .hero-body {
      padding-bottom: 4rem;
      padding-top: 4rem;
    }
  }

  .title {
    font-size: 5rem;
  }
}

.typing {
  color: #3b3049;
}
</style>
