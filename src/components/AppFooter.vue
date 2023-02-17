<template>
    <footer class="app-footer">
        <p>© Мартынов А. В., 2022</p>
    </footer>
</template>

<script>

export default {
    name: 'AppFooter',
}
</script>

<style lang="scss" scoped>

.app-footer {
    display: flex;
    justify-content: space-between;
    background-color: $zian;
    color: $beige;
    padding: 8px 128px;
    font-size: 12px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 8px 64px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 8px 64px;
    }      
    @media (max-width: $mobile-max) {
        padding: 8px 16px;      
    }     
}
</style>