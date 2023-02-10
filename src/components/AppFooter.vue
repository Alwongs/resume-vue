<template>
    <footer class="app-footer">
        <p>Footer</p>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
}
</script>

<style lang="scss" scoped>

/* ---- screen sizes ---- */
$desktop-max: 1439px;
$desktop-min: 1024px;
$tablet-max: 1023px;
$tablet-min: 768px;
$mobile-max: 767px;

$beige: #fffae4;
$zian: rgb(37, 69, 129);

.app-footer {
    background-color: $zian;
    color: $beige;
    padding: 0 64px;
    height: 64px;
    line-height: 64px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 0 32px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 0 32px;
    }      
    @media (max-width: $mobile-max) {
        padding: 0 16px;       
    }    
}
</style>