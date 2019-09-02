<template>
  <div class="container">
    <div class="columns is-marginless">
      <div class="column is-two-fifths">
        <h1 class="title" v-html="$static.servicesEn.title"></h1>
      </div>
      <div class="column"></div>
      <div class="column is-half" v-html="$static.servicesEn.content"></div>
    </div>
  </div>
</template>

<static-query>
query {
  servicesEn(path: "/data-en/home/lead") {
    title
    content
  }
}
</static-query>

<script>
export default {
  name: "Lead"
};
</script>