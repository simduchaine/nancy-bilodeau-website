<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h2 class="title is-5">Ma vision</h2>
        <p>{{$static.bio.vision}}</p>
      </div>
      <div class="column">
        <h2 class="title is-5">Ma mission</h2>
        <p>{{$static.bio.mission}}</p>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  bio(path: "/data/bio/bio") {
    mission
    vision
  }
}
</static-query>

<script>
export default {
  name: "MissionVision"
};
</script>