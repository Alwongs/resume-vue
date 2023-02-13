<template>
    <section class="portfolio-section">
        <h2 class="portfolio-section__title">Приложения</h2>
        <ul class="portfolio-section__list">
            <portfolio-item 
                v-for="project in projects" 
                :key="project.id" 
                :title="project.title" 
                :image="project.image" 
                :github="project.github" 
                :website="project.website" 
                :description="project.description" 
                :stack="project.stack"
                class="portfolio-section__item"
            />
        </ul>
    </section>
</template>

<script>
import PortfolioItem from '@/components/PortfolioItem.vue';

export default {
    name: 'PortfolioSection',
    components: { PortfolioItem },
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'Резюме',
                    image: 'resume',
                    github: 'https://github.com/Alwongs/resume-vue',
                    website: 'https://alwongs.github.io/resume-vue/',
                    description: 'Информация о разработчике',
                    stack: [
                        {
                            id: 1,
                            title: 'Vue.js'
                        },
                    ]
                },

                {
                    id: 2,
                    title: 'Органайзер',
                    image: 'organizer',
                    github: 'https://github.com/Alwongs/SPA-auth-Organizer',
                    website: 'http://o937876j.beget.tech',
                    description: 'Органайзер содержит несколько приложений для тайм-менеджмента',
                    stack: [
                        {
                            id: 1,
                            title: 'Vue.js'
                        },                        
                        {
                            id: 2,
                            title: 'Vuetify'
                        },                        
                        {
                            id: 3,
                            title: 'Laravel'
                        },                        
                        {
                            id: 3,
                            title: 'beget.tech'
                        },                        
                    ]
                },

                {
                    id: 3,
                    title: 'Speak-Art73',
                    image: 'speak-art73',
                    github: 'https://github.com/Alwongs/speak-art73',
                    website: 'https://alwongs.github.io/speak-art73/',
                    description: 'Школа Английского и Китайского языков',
                    stack: [
                        {
                            id: 1,
                            title: 'Vue.js'
                        },                         
                    ]
                },

                {
                    id: 4,
                    title: 'Like73',
                    image: 'like73',
                    github: 'https://github.com/Alwongs/like',
                    website: 'https://alwongs.github.io/like/',
                    description: 'Клуб активного отдыха',
                    stack: [
                        {
                            id: 1,
                            title: 'Vue.js'
                        },                         
                        {
                            id: 2,
                            title: 'Firebase'
                        },                         
                    ]
                },

                {
                    id: 5,
                    title: 'Links',
                    image: 'links',
                    github: 'https://github.com/Alwongs/links',
                    website: 'https://alwongs.github.io/links/',
                    description: 'Архив полезных ссылок по категориям',
                    stack: [
                        {
                            id: 1,
                            title: 'Vue.js'
                        },                         
                        {
                            id: 2,
                            title: 'Firebase'
                        },                         
                    ]
                },

                {
                    id: 6,
                    title: 'U-Talent',
                    image: 'u-talent',
                    github: 'https://github.com/Alwongs/u-talent',
                    website: 'https://alwongs.github.io/u-talent/',
                    description: 'Конкурс читателей на английском языке',
                    stack: [
                        {
                            id: 1,
                            title: 'html'
                        },                         
                        {
                            id: 2,
                            title: 'css'
                        },                         
                        {
                            id: 3,
                            title: 'javascript'
                        },                         
                    ]
                },

                {
                    id: 7,
                    title: 'Weather',
                    image: 'no-photo',
                    github: 'https://github.com/Alwongs/api-open-weather',
                    website: 'https://alwongs.github.io/api-open-weather/',
                    description: 'Получение прогноза погоды по выбранному городу',
                    stack: [
                        {
                            id: 1,
                            title: 'html'
                        },                         
                        {
                            id: 2,
                            title: 'scss'
                        },                         
                        {
                            id: 3,
                            title: 'javascript'
                        },                         
                        {
                            id: 4,
                            title: 'gulp'
                        },                         
                    ]
                },

                {
                    id: 8,
                    title: 'Waybills',
                    image: 'waybills',
                    github: 'https://github.com/Alwongs/ways-auth',
                    website: 'http://alwong.h1n.ru/',
                    description: 'Подготовка путевых листов автомобилей',
                    stack: [
                        {
                            id: 1,
                            title: 'Vue.js'
                        },                         
                        {
                            id: 2,
                            title: 'scss'
                        },                         
                        {
                            id: 3,
                            title: 'laravel'
                        },                         
                        {
                            id: 4,
                            title: 'hostiman.ru'
                        },                         
                    ]
                },
            ]
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

.portfolio-section {
    color: $zian;
    padding: 32px;
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