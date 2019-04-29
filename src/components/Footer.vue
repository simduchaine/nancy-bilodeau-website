<template>
    <footer class="footer">
        <div class="container is-fluid">
            <div class="columns">
                <div class="column">
                    <g-image src="~/assets/img/nancy-bilodeau-logo.svg" />
                    <address>
                        St-Romuald, Quebec
                    </address>
                </div>
            </div>
            <div class="columns">
                <div class="column is-one-quarter">
                    <input class="input" type="text" placeholder="S'inscrire à l'infolettre →">
                </div>
                <div class="column"></div>
                <div class="column is-narrow">
                   <a href="https://www.facebook.com/NancyBilodeauCoaching/">
                    <font-awesome class="icons" :icon="['fab', 'facebook-f']" size="lg"/>
                   </a>
                   <a href="https://www.youtube.com/channel/UCPdog-IyIN6GGL4sEl5gMdA">
                    <font-awesome class="icons" :icon="['fab', 'youtube']" size="lg"/>
                   </a>
                   <a href="#">
                    <font-awesome class="icons" :icon="['fab', 'linkedin-in']" size="lg"/>
                   </a>
                </div>
            </div>
            <div class="columns">
                <div class="column is-one-quarter is-size-7">
                    ©Nancy Bilodeau 2019. Tous droits réservés.
                </div>
                <div class="column"></div>
                <div class="column is-narrow is-size-7">
                    Termes & Conditions    Confidentialité   Cookies
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss">
footer .columns:not(:last-child) {
    padding-bottom: 4rem;
}

.icons {
    margin: 0 0.5rem;
}

</style>

