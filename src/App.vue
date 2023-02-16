<template>
    <app-header />
    <info-section />
    <bread-crumbs />
    <div>
        <router-view></router-view>
    </div>
    <footer>© Мартынов А. В., 2022 </footer>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import InfoSection from '@/components/InfoSection.vue';
import BreadCrumbs from '@/components/BreadCrumbs.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        InfoSection,
        BreadCrumbs
    }
}
</script>

<style>

</style>
