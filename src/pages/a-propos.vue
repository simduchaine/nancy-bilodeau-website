<template>
  <Layout>
    <section class="offset-bg-blue section">
      <div class="container bio">
        <h1 class="title">{{ $page.bio.title }}</h1>
        <g-image class="image is-right" :src="$page.bio.thumbnail"></g-image>
        <div v-html="$page.bio.content"></div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title is-5">Sommaire des formations principales</h2>
        <ul>
          <li v-for="(item, index) in $page.bio.cv" :key="index">{{ item }}</li>
        </ul>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Bio {
  bio (id: "0afa4207cb31de83def0c390c7e69455") {
    title
    content
    cv
    thumbnail (quality: 90, height: 800, width: 700)
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "À Propos"
  }
};
</script>

