<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h2 class="title is-5">Vision</h2>
        <p>{{$static.bioEn.vision}}</p>
      </div>
      <div class="column">
        <h2 class="title is-5">Mission</h2>
        <p>{{$static.bioEn.mission}}</p>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  bioEn(path: "/data-en/bio/bio") {
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