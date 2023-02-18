<template>
    <div class="project-page">
        <h2 class="project-page__title">{{ project.title }}</h2>
        <main class="project-page__main">

            <div 
                class="project-page__image-block" 
                :class="{'image-is-bigger': isImageBigger}"                
            >
                <div 
                    v-if="isImageBigger" 
                    class="cross-btn-white" 
                    @click="isImageBigger = !isImageBigger"
                >
                    &#10006;
                </div>
                <img 
                    :src="require(`@/assets/images/preview/${getImage}.jpg`)" 
                    alt="image"
                    @click="isImageBigger = !isImageBigger"
                >
            </div>

            <div class="project-page__info-block">
                <h3 class="project-page__info-title">Описание:</h3>
                <p class="project-page__descripton">{{ project.description }}</p>

                <ul class="project-page__links">
                    <li class="project-page__link-github"><a :href="project.github">Репозиторий на github</a></li>
                    <li class="project-page__link-website"><a :href="project.website">Перейти на сайт</a></li>                    
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
            isImageBigger: false,
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
    &.image-is-bigger {
        z-index: 2;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;;
        background-color: #1d282eed;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px;
        img {
            max-width: 900px;
            box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.7);            
        }
    }
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
        border: 1px solid $zian;
        cursor: pointer;
    }
    .cross-btn-white {
        color: white;     
        position: absolute;
        font-size: 32px;
        line-height: 32px;
        right: 16px;
        top: 16px;   
        cursor: pointer;     
    }
}
.project-page__info-block {
    .project-page__descripton {
        margin-bottom: 16px;
        padding-left: 16px;
        font-style: italic;
    }
}
.project-page__info-title {
    font-size: 20px;
    margin-bottom: 6px;
}
.project-page__links {
    margin-bottom: 16px;
    padding-left: 38px;    
    li {
        position: relative;
        margin-bottom: 4px;
    }
    li::before {
        content: '';        
        position: absolute;
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
        background-size: 100%;
        left: -25px;
        top: 3px;   
    }
}
.project-page__link-github::before {
    background-image: url("../assets/images/icons/github.svg"); 
}
.project-page__link-website::before {
    background-image: url("../assets/images/icons/website.svg"); 
}

.project-page__stack-list {
    padding-left: 38px;
    margin-bottom: 16px;   
    li {
        position: relative;
        margin-bottom: 4px;
    }
    li::before {
        content: '\2714';        
        position: absolute;
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
        background-size: 100%;
        left: -23px;
        top: -3px;  
        color: green;            
    } 
}
.project-page__comments {
    font-style: italic;
    color: rgb(156, 175, 188);
}
</style>