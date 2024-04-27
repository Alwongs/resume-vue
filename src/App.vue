<template>
    <div  id="top"></div>
    <app-header />

    <bread-crumbs />
    <div class="page-view">
        <router-view></router-view>
    </div>
    <app-footer />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import BreadCrumbs from '@/components/BreadCrumbs.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        BreadCrumbs,
        AppFooter
    }
}
</script>

<style lang="scss">

html, body {
    background-color: $beige;
    height: 100vh;
    font-size: 20px;
    color: rgb(52, 54, 61);
}
#app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

#top {
    &.transparent {
        transition: 0.5s;
        background: transparent;
        box-shadow: none;        
    }
}

.page-view {
    flex-grow: 1;
}
</style>
