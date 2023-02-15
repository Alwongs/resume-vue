<template>
    <section class="project-list-page">
        <h2 style="color:red;" class="project-list-page__title">1. Скачать и установить иконки на контакты...</h2>
        <h2 class="project-list-page__title">Приложения</h2>
        <ul class="project-list-page__list">
            <project-item 
                v-for="project in projects" 
                :key="project.id" 
                :id="project.id" 
                :title="project.title" 
                :image="project.image" 
                :github="project.github" 
                :website="project.website" 
                :description="project.description" 
                :stack="project.stack"

                :project="project"
                class="project-list-page__item"
            />
        </ul>
    </section>
</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue';
import projects from '../data.js';

export default {
    name: 'ProjectList',
    components: { ProjectItem },
    data() {
        return {
            projects: projects
        }
    }
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
$zian: rgb(31, 61, 116);

@mixin title {
    font-weight: 500;
    margin-bottom: 32px;
    text-align: center;
    @media (max-width: $mobile-max) {
        margin-bottom: 16px;
        font-size: 120%;
    }    
}

.project-list-page {
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
    &__list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    &__item {
        margin: 0 44px 44px 0;
        @media (max-width: $mobile-max) {
            min-width: 51%;
            margin: 0 0 44px 0;
        }                 
    }
}
</style>