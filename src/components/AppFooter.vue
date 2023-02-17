<template>
    <footer class="app-footer">
        <p>© Мартынов А. В., 2022</p>
        <contact-list />
    </footer>
</template>

<script>
import ContactList from '@/components/ContactList.vue'

export default {
    name: 'AppFooter',
    components: {
        ContactList
    }
}
</script>

<style lang="scss" scoped>

.app-footer {
    display: flex;
    justify-content: space-between;
    background-color: $zian;
    color: $beige;
    padding: 0 128px;
    font-size: 12px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 0 64px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 0 64px;
    }      
    @media (max-width: $mobile-max) {
        padding: 0 16px;      
    }     
}
</style>