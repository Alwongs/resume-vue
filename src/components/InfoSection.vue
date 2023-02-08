<template>
    <section class="info">
        <div class="container">
            <h2 class="info__title">Информация</h2>

            <h3 class="info__subtitle">Контакты:</h3>
            <ul class="info__contact-list">
                <li>Тел: <a href="tel:+79370000000">+7(937)-000-00-00</a></li>
                <li>email: <a href="mailto:mail@ya.ru">mail@ya.ru</a></li>
                <li><a href="whatsapp://send?phone=79370000000&amp;text=">WhatsApp</a></li>
                <li><a href="viber://chat?number=%2B79370000000">Viber</a></li>
            </ul>

            <h3 class="info__subtitle">Знание основ:</h3>
            <ul class="info__skill-list">
                <li>- HTML</li>
                <li>- CSS</li>
                <li>- JavaScript</li>
                <li>- Vue.js</li>
                <li>- PHP</li>
                <li>- Laravel</li>
                <li>- git</li>
            </ul>

            <h3 class="info__subtitle">Опыт работы:</h3>
            <ul class="info__work-list">
                <li>- АК Волга-Днепр, водитель, 2010 - н.в.</li>
            </ul>            
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

// @mixin flex($jc, $ai) {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: $jc;
//     align-items: $ai;
// }
// @mixin line {
//     content: '';
//     display: block;
//     width: 60px;
//     height: 5px;
//     background: $yellow;
//     border-radius: 50px;
//     margin: $mc;
//     margin-top: 10px;
//     margin-bottom: 35px;
// }

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

.info {
    background-color: #fff;
    padding: 16px;
    border-top: 1px solid green;
    border-bottom: 1px solid green;
}
.info__title {
    @include title;
}
.info__subtitle {
    font-weight: 500;
    margin-bottom: 16px;
}
.info__skill-list, .info__contact-list li {
    font-style: italic;
    margin-bottom: 8px;
}
.info__skill-list, .info__contact-list {
    margin-bottom: 32px;
}
.info__skill-list li {
    color: rgb(0, 101, 0);
}
</style>