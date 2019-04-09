<template>
    <section>
        <div class="columns reverse-row-order">
            <div class="column">
                <g-image src="~/images/guillaume-bolduc-373695-unsplash.jpg" height="680px" width="940px" quality="100"></g-image>
            </div>
            <div class="column">
                <h1 class="title">Atteindre un Mieux-Être optimal pour être plus heureux</h1>
                <button class="button">Prendre rendez-vous</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Services-Right'
}
</script>

<style lang="scss">
.reverse-row-order{
    flex-direction:row-reverse;
}
</style>
