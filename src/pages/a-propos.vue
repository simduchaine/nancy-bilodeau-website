<template>
  <Layout>
    <section class="offset-bg-blue section">
      <div class="container bio">
        <h1 class="title">{{ $page.description.title }}</h1>
        <g-image class="image is-right" :src="$page.description.thumbnail"></g-image>
        <div v-html="$page.description.content"></div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title is-5">Sommaire des formations principales</h2>
        <div v-html="$page.cv.content"></div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Bio {
  description:bio (id: "0afa4207cb31de83def0c390c7e69455") {
    title
    content
    thumbnail (quality: 90, height: 800, width: 700)
  }
  cv:bio (id: "8030b9996ecd66964138ce538d55ebd2") {
    title
    content
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

