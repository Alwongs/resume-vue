<template>
    <div class="project-page">
        <h2 class="project-page__title">{{ project.title }}</h2>
        <main class="project-page__main">

            <div class="project-page__image-block">
                <img :src="require(`@/assets/images/preview/${getImage}.jpg`)" alt="image">
            </div>

            <div class="project-page__info-block">
                <h3 class="project-page__info-title">Описание:</h3>
                <p class="project-page__descripton">{{ project.description }}</p>

                <ul class="project-page__links">
                    <li><a :href="project.github">репозиторий на github</a></li>
                    <li><a :href="project.website">Перейти на сайт</a></li>                    
                </ul>

                <h3 class="project-page__info-title">Использовано:</h3>
                <ul class="project-page__stack-list">
                    <li v-for="tech in project.stack" :key="tech.id">{{ tech.title }},</li>
                </ul>

                <h3 class="project-page__info-title">Комментарии:</h3>
                <p class="project-page__comments">{{ project.comments }}</p>                
            </div>
        </main>
    </div>
</template>

<script>
import projects from '../data.js';

export default {
    name: 'ProjectPage',
    computed: {
        getImage() {
            return this.project.image;
        }
    },
    data() {
        return {
            id: null,
            projects: projects,
            project: {},
        }
    },
    created() {
        this.id = Number(this.$route.params.id);

        this.project = this.projects.find(proj => {
            return proj.id == this.id;
        })
    }
}
</script>

<style lang="scss" scoped>

.project-page {
    color: $zian;
    padding: 0 128px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 0 64px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 0 64px;
    }     
    @media (max-width: $mobile-max) {
        padding: 0 16px;
    }  

    &__title {
        @include title;
    }
}
.project-page__main {
    display: flex;
    margin-bottom: 32px;
    @media (max-width: $mobile-max) {
        flex-direction: column;
    }
}
.project-page__image-block {
    width: 600px;
    margin-right: 128px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 500px;
        margin-right: 64px;        
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 500px;
        margin-right: 64px;        
    }     
    @media (max-width: $mobile-max) {
        margin-right: 0;
        margin-bottom: 16px;
        width: 100%;
    }      
    img {
        width: 100%;
        border: 2px solid green;
    }
}
.project-page__info-block {
    p {
        margin-bottom: 16px;
        padding-left: 16px;
    }
}
.project-page__info-title {
    font-size: 20px;
    margin-bottom: 6px;
}
.project-page__links {
    margin-bottom: 16px;
    padding-left: 32px;    
    li {
        margin-bottom: 4px;
    }
}
.project-page__stack-list {
    padding-left: 16px;
    margin-bottom: 16px;    
}
.project-page__comments {
    font-style: italic;
    color: rgb(156, 175, 188);
}
</style>