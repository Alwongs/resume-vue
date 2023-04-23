<template>
    <div class="project-page">
        <h2 class="project-page__title">
            {{ project.title }}
        </h2>
        <main class="project-page__main">
            <div class="project-page__image-block">
                <img 
                    :src="require(`@/assets/images/preview/${project.image}.jpg`)" 
                    :alt="project.image"
                >
            </div>

            <div class="project-page__info-block">
                <h3 class="project-page__info-title">
                    Описание:
                </h3>
                <p class="project-page__descripton">
                    {{ project.description }}
                </p>

                <ul class="project-page__links">
                    <li class="project-page__link-github">
                        <a :href="project.github" target="_blank">
                            Репозиторий на github
                        </a>
                    </li>
                    <li class="project-page__link-website">
                        <a :href="project.website" target="_blank">
                            Перейти на сайт
                        </a>
                    </li>                    
                </ul>

                <h3 class="project-page__info-title">
                    Использовано:
                </h3>
                <ul class="project-page__stack-list">
                    <li 
                        v-for="tech in project.stack" 
                        :key="tech.id"
                    >
                        {{ tech.title }},
                    </li>
                </ul>

                <h3 class="project-page__info-title">
                    Комментарии:
                </h3>
                <p class="project-page__comments">
                    {{ project.comments }}
                </p>    

                <router-link :to="{name: 'home'}">
                    <p class="icon-back"></p>
                </router-link>            
            </div>
        </main>
    </div>
</template>

<script>
import projects from '../data.js';

export default {
    name: 'ProjectPage',
    data() {
        return {
            id: null,
            projects: projects,
            project: {
                title: '',
                description: '',
                github: '',
                website: '',
                stack: [],
                comments: '',
                image: 'no-image'
            },
        }
    },
    created() {
        this.id = Number(this.$route.params.id);

        let result = this.projects.find(el => {
            return el.id == this.id;
        })
        if(result)  {
            this.project = result;
        } else this.$router.push({name: '404'});
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
        border: 1px solid $zian;
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
    padding-left: 16px;
    margin-bottom: 32px;
    color: rgba($zian, 0.4);
}
.icon-back {
    background-image: url("../assets/images/icons/back.svg");   
    background-repeat: no-repeat;
    width: 48px;
    height: 48px;  
    margin: 0 auto;    
}
</style>