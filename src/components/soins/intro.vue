<template>
  <div>
    <g-image class="header-img" :src="$static.soins.thumbnail"></g-image>
    <div v-html="$static.soins.content" style="padding-top: 2rem;"></div>
  </div>
</template>

<static-query>
query {
  soins(path: "/soins/soins") {
    title
    content
    thumbnail (quality: 90, height: 700)
  }
}
</static-query>

<script>
export default {
  name: "intro"
};
</script>
