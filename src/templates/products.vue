<template>
  <Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">{{ $page.products.title }}</h1>
        <g-image class="header-img" :src="$page.products.thumbnail"></g-image>
        <div v-html="$page.products.content"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query singleProduct ($id: String!) {
  products (id: $id) {
    title
    content
    thumbnail (quality: 90, height: 700, width: 1344)
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.products.title
    };
  }
};
</script>

<style lang="scss">
.header-img {
  margin-bottom: 2rem;
}
</style>
