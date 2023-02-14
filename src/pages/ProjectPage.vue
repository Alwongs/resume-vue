<template>
    <div class="project-page">
        <h2 class="project-page__title">{{ project.title }}</h2>
        <main class="project-page__main">
            <div class="project-page__image-block">
                <img :src="require(`@/assets/images/preview/${getImage}.jpg`)" alt="image">
            </div>
            <div class="project-page__info-block">
                <p class="project-page__descripton">{{ project.description }}</p>
                <p class="project-page__github">
                    <a :href="project.github">github</a>
                </p>
                <p class="project-page__website">
                    <a :href="project.website">website</a>
                </p>
                <ul>
                    <li v-for="tech in project.stack" :key="tech.id">{{ tech.title }}</li>
                </ul>
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

.project-page {
    color: $zian;
    padding: 32px 128px 0;
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
.project-page__main {
    display: flex;
}
.project-page__image-block {
    width: 500px;
    margin-right: 32px;
    img {
        width: 100%;
        border: 2px solid green;
    }
}
.project-page__info-block {

}
</style>