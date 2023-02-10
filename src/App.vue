<template>

    <app-header />

    <info-section />

    <portfolio-section />

    <app-footer />

</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import InfoSection from '@/components/InfoSection.vue';
import PortfolioSection from '@/components/PortfolioSection.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        InfoSection,
        PortfolioSection,
        AppFooter
    }
}
</script>

<style lang="scss">

@font-face {
    font-family: 'Roboto';
    src:    url('./assets/fonts/Roboto-Bold.woff2') format('woff2'),
            url('./assets/fonts/Roboto-Bold.woff') format('woff'),
            url('./assets/fonts/Roboto-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: bold;
}
@font-face {
    font-family: 'Roboto';
    src:    url('./assets/fonts/Roboto-Medium.woff2') format('woff2'),
            url('./assets/fonts/Roboto-Medium.woff') format('woff'),
            url('./assets/fonts/Roboto-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: medium;
}
@font-face {
    font-family: 'Roboto';
    src:    url('./assets/fonts/Roboto-Regular.woff2') format('woff2'),
            url('./assets/fonts/Roboto-Regular.woff') format('woff'),
            url('./assets/fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Roboto';
    src:    url('./assets/fonts/Roboto-Light.woff2') format('woff2'),
            url('./assets/fonts/Roboto-Light.woff') format('woff'),
            url('./assets/fonts/Roboto-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: light;
}

/* ---- screen sizes ---- */
$desktop-max: 1439px;
$desktop-min: 1024px;
$tablet-max: 1023px;
$tablet-min: 768px;
$mobile-max: 767px;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
}
html, body {
    background-color: #fffae4;
    height: 100vh;
    font-size: 20px;
    color: rgb(52, 54, 61)
}
ul {
    list-style: none;
}

.text-center {
    text-align: center;
}
.container {
    width: 1200px;
    margin: 0 auto;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 75vw;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 90vw;
    }      
    @media (max-width: $mobile-max) {
        width: 100%;
        padding: 0 16px;
    }     
}

</style>
