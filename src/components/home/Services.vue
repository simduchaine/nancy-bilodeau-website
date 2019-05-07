<template>
    <div class="columns is-marginless is-vcentered">
        <div class="column is-paddingless">
            <g-image :src="thumbnail" style="width:100%" />
        </div>
        <div class="column is-paddingless">
            <div class="column is-three-fifths is-offset-one-fifth">
                <h1 class="title">{{ title }}</h1>
                <div v-html="content"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Services',
    props: ['title', 'thumbnail', 'content']
}
</script>