<template>
  <div>
    <div class="container">
      <div class="columns is-marginless is-multiline">
        <div class="column is-full">
          <h1 class="title">Formations</h1>
        </div>
        <div class="column is-half">
          <p>Nancy a déjà plusieurs cours de développés, vous pouvez organiser un cours ou participer au prochain à notre horaire. Pour organiser un cours, une retraire, une conférence, ou un repas vous n’avez besoin que de rassembler 10 personnes et votre inscription sera gratuite !</p>
          <g-link to="/formations">Formations ></g-link>
        </div>
        <div class="column"></div>
        <div class="column is-one-third is-italic">
          <ul>
            <li>Cours</li>
            <li>Retraite</li>
            <li>Conférences</li>
            <li>Souper formation</li>
            <li>Déjeuner formation</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Formation"
};
</script>