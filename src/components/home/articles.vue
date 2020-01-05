<template>
  <div>
    <div class="container">
      <div class="columns is-marginless">
        <div class="column is-half">
          <h1 v-html="$static.services.title" class="title"></h1>
        </div>
        <div class="column is-half" v-html="$static.services.content"></div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  services(path: "/data/home/featured-articles") {
    title
    content
  }
}
</static-query>

<script>
export default {
  name: "Articles"
};
</script>