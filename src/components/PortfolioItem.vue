<template>
    <li class="portfolio-item">
        <h3 class="">"Резюме"</h3>
        <ul class="">
            <li><a href="https://github.com/Alwongs/resume">GitHub</a></li>
            <li><a href="https://alwongs.github.io/resume/">Посмотреть web-сайт</a></li>
            <li><p>Текущий сайт</p></li>
        </ul>
    </li>  
</template>

<script>
export default {
    name: 'PortfolioItem',
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

//-------------------------
.portfolio-item {
    border: 1px solid grey;
    border-radius: 10px;
    margin-right: 16px;  
    margin-bottom: 16px;
    padding: 8px;
    @media (max-width: $mobile-max) {
        flex-direction: column;
    }   
}
.portfolio-item h3 {
    min-width: 200px;
    font-weight: 500;
    margin-bottom: 8px;
}
.portfolio-item ul li {
    margin-bottom: 6px;
    p {
        font-style: italic;
        padding-left: 16px;
        color: gray;
        @media (max-width: $mobile-max) {
            font-size: 70%;;
        }          
    }
}

</style>