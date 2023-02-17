<template>
    <section class="project-list-page">
        <h2 class="project-list-page__title">Приложения</h2>
        <ul class="project-list-page__list">
            <project-item 
                v-for="project in projects" 
                :key="project.id" 
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