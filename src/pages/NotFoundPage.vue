<template>
    <div class="project-page">
        <h2 class="project-page__title">
            Страница не найдена...
        </h2>
        <img src="@/assets/images/gif/404.gif" alt="photo">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.project-page {
    color: $zian;
    padding: 24px 128px 0;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 32px 64px 0;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 32px 64px 0;
    }     
    @media (max-width: $mobile-max) {
        padding: 16px;
    }  

    &__title {
        @include title;
    }
}
</style>