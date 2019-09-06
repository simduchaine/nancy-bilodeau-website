<template>
  <div>
    <h1 class="title">{{$static.soinsEn.title}}</h1>
    <g-image class="header-img" :src="$static.soinsEn.thumbnail"></g-image>
    <div v-html="$static.soinsEn.content" style="padding-top: 2rem;"></div>
  </div>
</template>

<static-query>
query {
  soinsEn(path: "/en/services/holistic-care-services") {
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
