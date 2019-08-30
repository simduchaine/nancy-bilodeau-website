<template>
  <div class="container">
    <div class="columns is-marginless is-centered">
      <div class="column is-three-quarters has-text-centered" style="padding:2.5rem;">
        <h1 v-html="$static.bioEn.title" class="title"></h1>
        <div v-html="$static.bioEn.content"></div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h2 class="title is-5">Documentary</h2>
        <ul>
          <li v-for="(item, index) in $static.bioEn.documentaires" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="column">
        <h2 class="title is-5">Health</h2>
        <ul>
          <li v-for="(item, index) in $static.bioEn.sante" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="column">
        <h2 class="title is-5">Spiritual</h2>
        <ul>
          <li v-for="(item, index) in $static.bioEn.spirituelle" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="column">
        <h2 class="title is-5">Business</h2>
        <ul>
          <li v-for="(item, index) in $static.bioEn.affaires" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  bioEn(path: "/data-en/bio/inspirations") {
    title
    content
    sante
    spirituelle
    affaires
    documentaires
  }
}
</static-query>

<script>
export default {
  name: "Inspirations"
};
</script>
