<template>
    <ul class="info__skill-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>PHP</li>
        <li>Laravel</li>
        <li>git</li>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

/* ---- screen sizes ---- */
$desktop-max: 1439px;
$desktop-min: 1024px;
$tablet-max: 1023px;
$tablet-min: 768px;
$mobile-max: 767px;

.info__skill-list {
    background-color: rgb(68, 92, 227);
    border-bottom: 1px solid green;
    padding: 6px 64px;
    display: flex;
    font-style: italic;
    flex-wrap: wrap;
    @media (max-width: $mobile-max) {
        padding: 6px 16px;      
    }    
}
.info__skill-list li {
    margin-right: 16px;
    color: yellow;
}
</style>