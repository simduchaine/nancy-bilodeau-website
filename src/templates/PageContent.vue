<template>
  <Layout>
    <div class="container">
      <h1 class="title">{{ $page.pageContent.title }}</h1>
      <div v-html="$page.pageContent.content"></div>
    </div>
  </Layout>
</template>

<page-query>
query Content ($id: String!) {
  pageContent (id: $id) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.pageContent.title
    };
  }
};
</script>