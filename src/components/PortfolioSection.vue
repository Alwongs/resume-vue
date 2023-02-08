<template>
    <section class="portfolio-section">
        <h2 class="portfolio-section__title">Приложения</h2>
        <ul class="container portfolio-section__list">

            <portfolio-item />
            <portfolio-item />
            <portfolio-item />

<!-- 
            <li class="portfolio__item">
                <h3 class="">"Organizer"</h3>
                <ul class="">
                    <li><a href="https://github.com/Alwongs/SPA-auth-Organizer">GitHub</a></li>
                    <li><a href="http://o937876j.beget.tech">Посмотреть web-сайт</a></li>
                    <li><p>Органайзер содержит несколько приложений для тайм-менеджмента</p></li>
                </ul>
            </li>

            <li class="portfolio__item">
                <h3>"Speak-art73"</h3>
                <ul>
                    <li><a href="https://github.com/Alwongs/speak-art73">GitHub</a></li>
                    <li><a href="https://alwongs.github.io/speak-art73/">Посмотреть web-сайт</a></li>
                    <li><p>Школа Английского и Китайского языков</p></li>
                </ul>
            </li>

            <li class="portfolio__item">
                <h3>"Like"</h3>
                <ul>
                    <li><a href="https://github.com/Alwongs/like">GitHub</a></li>
                    <li><a href="https://alwongs.github.io/like/">Посмотреть web-сайт</a></li>
                    <li><p>Клуб активного отдыха</p></li>
                </ul>
            </li>

            <li class="portfolio__item">
                <h3>"Links"</h3>
                <ul>
                    <li><a href="https://github.com/Alwongs/links">GitHub</a></li>
                    <li><a href="https://alwongs.github.io/links/">Посмотреть web-сайт</a></li>
                    <li><p>Архив полезных ссылок по категориям</p></li>
                </ul>
            </li>

            <li class="portfolio__item">
                <h3>"U-Talent"</h3>
                <ul>
                    <li><a href="https://github.com/Alwongs/u-talent">GitHub</a></li>
                    <li><a href="https://alwongs.github.io/u-talent/">Посмотреть web-сайт</a></li>
                    <li><p>Афиша конкурса читателей на английском языке</p></li>
                </ul>
            </li>

            <li class="portfolio__item">
                <h3>"Weather"</h3>
                <ul>
                    <li><a href="https://github.com/Alwongs/api-open-weather">GitHub</a></li>
                    <li><a href="https://alwongs.github.io/api-open-weather/">Посмотреть web-сайт</a></li>
                    <li><p>Получение прогноза погоды по выбранному городу</p></li>
                </ul>
            </li>

            <li class="portfolio__item">
                <h3>"Waybills"</h3>
                <ul>
                    <li><a href="https://github.com/Alwongs/ways-auth">GitHub</a></li>
                    <li><a href="http://alwong.h1n.ru/">Посмотреть web-сайт</a> (регистрация на сайте временно не работает)</li>
                    <li><p>Генерация путевого листа автомобиля и отправка на печать</p></li>
                </ul>
            </li> -->
        </ul>
    </section>
</template>

<script>
import PortfolioItem from '@/components/PortfolioItem.vue';

export default {
    name: 'PortfolioSection',
    components: { PortfolioItem }
}
</script>

<style lang="scss" scoped>
/* ---- screen sizes ---- */
$desktop-max: 1439px;
$desktop-min: 1024px;
$tablet-max: 1023px;
$tablet-min: 768px;
$mobile-max: 767px;

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
    padding: 32px;
    &__title {
        @include title;
    }
    &__list {
        display: flex;
    }
}
</style>